import React from 'react';

const Square = (props) => {
  return (
    <div className="bingo-card-item">
      {props.text}
      <span className="bingo-card-checkbox">
        {props.text}
      </span>
  </div>
  )
}

export default Square;