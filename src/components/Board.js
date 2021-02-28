import React from 'react';
import squares from '../list';

const Board = () => {
  const list = () => {
    for (let squ of squares) {
      console.log(squ)
    };
  };

  return (
    <div className="main-content">
      <div className="title">
        <span>AAQ BINGO</span>
      </div>

      <div className="bingo-card">
        
      </div>
    </div>
  )
}

export default Board;