import React from 'react';
import squares from '../list';

const Board = () => {
  const list = () => {
    for (let squ of squares) {
      console.log(squ)
    };
  };

  return <div>{list()}</div>
}

export default Board;