import React from 'react';
import squares from '../list';

const Board = () => {
  const list = () => {
    for (let sq in squares) {
      console.log(sq)
    };
  };

  return <div>{list()}</div>
}

export default Board;