/* eslint-disable*/
import React, { useState, useEffect, useRef } from "react"
import { flushSync } from 'react-dom';
import VariableSizeList from './VariableSizeList'


// https://cloud.tencent.com/developer/article/2075637
// 列表项组件
function Item({ index, data, setHeight }: any) {
  const itemRef: any = useRef();
  // useEffect(() => {
  //   setHeight(index, itemRef.current.getBoundingClientRect().height);
  // }, [setHeight, index]);

  return (
    <div
      ref={itemRef}
      style={{
        height: '100%',
        backgroundColor: index % 2 === 0 ? 'burlywood' : 'cadetblue'
      }}
    >
      {data[index]}
    </div>
  );
}

export function VirtualList(props: any) {

  const { } = props
  const list = new Array(1000).fill(0).map((item: any, index: number) => 'aaa ' + index)

  const listRef: any = useRef();

  const heightsRef = useRef(new Array(100));
  // 预估高度
  const estimatedItemHeight = 40;
  const getHeight = (index: number) => {
    return heightsRef.current[index] ?? estimatedItemHeight;
    // return estimatedItemHeight * (index % 2 ? 1 : 2);
  };

  const setHeight = (index: number, height: number) => {
    if (heightsRef.current[index] !== height) {
      heightsRef.current[index] = height;
      // 让 VariableSizeList 组件更新高度
      listRef.current.resetHeight();
    }
  };

  return (
    <VariableSizeList
      ref={listRef}
      containerHeight={400}
      itemCount={list.length}
      getItemHeight={getHeight}
      itemData={list}
    >
      {({ index, style, data }: any) => {
        return (
          <div style={style}>
            <Item
              {...{ index, data }}
              setHeight={setHeight}
            />
          </div>
        );
      }}
    </VariableSizeList>
  );

}
