import React from 'react';

const Square = (props) => {

  return (
    <div className={props.cssClass}>
      {props.text}
      <span className="bingo-card__checkbox">
        {/* {props.text} */}
      </span>
  </div>
  )
}

export default Square;