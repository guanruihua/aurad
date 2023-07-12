import React, { useState } from 'react';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  useDndContext,
  MeasuringStrategy,
  DropAnimation,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import type {
  DragStartEvent,
  DragEndEvent,
  MeasuringConfiguration,
  UniqueIdentifier,
} from '@dnd-kit/core';
import {
  arrayMove,
  useSortable,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { CSS, isKeyboardEvent } from '@dnd-kit/utilities';
import { classNames } from 'harpe';
import { Page, Layout, Position } from './Page';
import type { Props as PageProps } from './Page';
import styles from './Pages.module.less';
import pageStyles from './Page.module.less';
import { isFunction } from 'asura-eye';


type OriginDataType = {
  id: UniqueIdentifier
  [key: string]: any
}
export interface DragProps<DataType extends OriginDataType = OriginDataType> {
  layout?: Layout;
  dataSource: DataType[]
  render?(record: Record<string, any>): React.ReactNode
  callback?(dataSource: DataType[]): void
}

const measuring: MeasuringConfiguration = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

const dropAnimation: DropAnimation = {
  keyframes({ transform }) {
    return [
      { transform: CSS.Transform.toString(transform.initial) },
      {
        transform: CSS.Transform.toString({
          scaleX: 0.98,
          scaleY: 0.98,
          x: transform.final.x - 10,
          y: transform.final.y - 10,
        }),
      },
    ];
  },
  sideEffects: defaultDropAnimationSideEffects({
    className: {
      active: pageStyles.active,
    },
  }),
};

export function Drag<DataType extends OriginDataType = OriginDataType>(
  props: DragProps<DataType>
) {

  const { callback, layout = Layout.Grid, dataSource = [], render } = props

  const getDataById = (id: UniqueIdentifier): DataType => {
    for (let i = 0; i < dataSource.length; i++)
      if (dataSource[i].id === id) return dataSource[i]
    throw new Error(`id: ${id} not Corresponding data`)
  }

  const getIds = () => {
    return dataSource.map(item => item.id)
  }

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const [items, _setItems] = useState(getIds())

  const setItems = (ids:
    UniqueIdentifier[]
    | ((prevState: UniqueIdentifier[]) => UniqueIdentifier[])
  ) => {
    const newIds = isFunction(ids) ? ids(items) : ids
    callback && callback(newIds.map(id => {
      return getDataById(id)
    }))
    _setItems(newIds)
  }

  const activeIndex = activeId ? items.indexOf(activeId) : -1

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
      sensors={sensors}
      collisionDetection={closestCenter}
      measuring={measuring}
    >
      <SortableContext items={items}>
        <ul className={classNames(styles.Pages, styles[layout])}>
          {items.map((id, index) => (
            <SortablePage
              id={id}
              index={index + 1}
              key={id}
              _record_={getDataById(id)}
              _render_={render}
              layout={layout}
              activeIndex={activeIndex}
              onRemove={() =>
                setItems((items) => items.filter((itemId) => itemId !== id))
              }
            />
          ))}
        </ul>
      </SortableContext>
      <DragOverlay dropAnimation={dropAnimation}>
        {activeId ? (
          <PageOverlay
            _render_={render}
            _record_={getDataById(activeId)}
            id={activeId} layout={layout} items={items} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragStart({ active }: DragStartEvent) {
    setActiveId(active.id);
  }

  function handleDragCancel() {
    setActiveId(null);
  }

  function handleDragEnd({ over }: DragEndEvent) {
    if (over) {
      const overIndex = items.indexOf(over.id);

      if (activeIndex !== overIndex) {
        const newIndex = overIndex;

        setItems((items) => arrayMove(items, activeIndex, newIndex));
      }
    }

    setActiveId(null);
  }
}

function PageOverlay({
  id,
  items,
  ...props
}: Omit<PageProps, 'index'> & { items: UniqueIdentifier[] }) {
  const { activatorEvent, over } = useDndContext();
  const isKeyboardSorting = isKeyboardEvent(activatorEvent);
  const activeIndex = items.indexOf(id);
  const overIndex = over?.id ? items.indexOf(over?.id) : -1;

  return (
    <Page
      id={id}
      {...props}
      clone
      insertPosition={
        isKeyboardSorting && overIndex !== activeIndex
          ? overIndex > activeIndex
            ? Position.After
            : Position.Before
          : undefined
      }
    />
  );
}

function SortablePage({
  id,
  activeIndex,
  ...props
}: PageProps & { activeIndex: number }) {
  const {
    attributes,
    listeners,
    index,
    isDragging,
    isSorting,
    over,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges: () => true,
  });

  return (
    <Page
      ref={setNodeRef}
      id={id}
      active={isDragging}
      style={{
        transition,
        transform: isSorting ? undefined : CSS.Translate.toString(transform),
      }}
      insertPosition={
        over?.id === id
          ? index > activeIndex
            ? Position.After
            : Position.Before
          : undefined
      }
      {...props}
      {...attributes}
      {...listeners}
    />
  );
}
