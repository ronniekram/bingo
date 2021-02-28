import React from 'react';
import _ from "lodash";
import Square from './Square';
import squares from '../list';

const Board = () => {
  let gameSquares = _.sampleSize(squares, 24)
  gameSquares.splice(13, 0, "FREE")
  return (
    <div className="main-content">
      <div className="title">
        <span> // AAQ BINGO // </span>
      </div>
      <div className="bingo-card">
        {console.log(gameSquares)}
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Board;