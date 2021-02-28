import React from 'react';
import _ from "lodash";
import Square from './Square';
import squares from '../list';

const Board = () => {

  let gameSquares = _.sampleSize(squares, 24)
  gameSquares.splice(12, 0, "FREE")
  const squareList = () => {
    return gameSquares.map(sq => {
      if (sq === "FREE") {
        return <Square cssClass="free-square" text={sq} key={sq} />
      }
        return <Square cssClass="bingo-card__item" text={sq} key={sq} />
    })
  }
  return (
    <div className="main-content">
      <div className="title">
        <span> // AAQ BINGO // </span>
      </div>
      <div className="bingo-card">
        {squareList()}
      </div>
    </div>
  )
}

export default Board;