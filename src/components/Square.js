import React from 'react';

const Square = (props) => {
  const handleClick = () => {

  }

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