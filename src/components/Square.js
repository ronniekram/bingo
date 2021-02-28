import React, { useState } from 'react';

const Square = (props) => {

  const [toggled, setToggled] = React.useState(false);

  const toggleClick = () => {
    console.log("i've been clicked")
    setToggled(!toggled)
  }

  return (
    <div className={props.cssClass} onClick={toggleClick}>
      {toggled && <img src="https://raw.githubusercontent.com/ronniekram/bingo/main/src/bingo-x.png" alt="Bingo X" className="bingo-x"/>}
      {props.text}
      <span className="bingo-card__checkbox">
        {/* {props.text} */}
      </span>
  </div>
  )
}

export default Square;