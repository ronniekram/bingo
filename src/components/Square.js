import React from 'react';

const Square = (props) => {
  return (
    <div className="bingo-card__item">
      {props.text}
      <span className="bingo-card__checkbox">
        {props.text}
      </span>
  </div>
  )
}

export default Square;