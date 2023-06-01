import React, { forwardRef, HTMLAttributes } from 'react';
import type { UniqueIdentifier } from '@dnd-kit/core';
import { classNames } from 'harpe';
import { removeIcon } from './icons';
import styles from './Page.module.less';

export enum Position {
  Before = -1,
  After = 1,
}

export enum Layout {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Grid = 'grid',
}

export interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'id'> {
  active?: boolean;
  clone?: boolean;
  insertPosition?: Position;
  id: UniqueIdentifier;
  index?: number;
  layout: Layout;
  onRemove?(): void;
  _record_?: Record<string, any>
  _render_?(record: Record<string, any>): React.ReactNode;
}

export const Page = forwardRef<HTMLLIElement, Props>(function (
  { _record_, _render_, id, index, active, clone, insertPosition, layout, onRemove, style, ...props },
  ref
) {

  return (
    <li
      className={classNames(
        styles.Wrapper,
        active && styles.active,
        clone && styles.clone,
        insertPosition === Position.Before && styles.insertBefore,
        insertPosition === Position.After && styles.insertAfter,
        layout === Layout.Vertical && styles.vertical
      )}
      style={style}
      ref={ref}
    >
      {/* <button
        className={styles.Page}
        {...props} /> */}
      <button
        className={styles.Page}
        data-id={id.toString()}
        {...props} >
        {_render_ && _render_(_record_ || {})}
      </button>

      {!active && onRemove ? (
        <button className={styles.Remove} onClick={onRemove}>
          {removeIcon}
        </button>
      ) : null}
    </li>
  );
});
