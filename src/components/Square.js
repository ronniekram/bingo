import React, { useState } from 'react';

const Square = (props) => {

  const [toggled, setToggled] = useState(false);

  const toggleClick = () => {
    setToggled(!toggled)
  }

  return (
    <div className={props.cssClass} onClick={toggleClick}>
      {toggled && <img src="https://raw.githubusercontent.com/ronniekram/bingo/main/src/bingo-x.png" alt="Bingo X" className="bingo-x"/>}
      {!toggled && props.text}
      <span className="bingo-card__checkbox">
        {/* {!toggled && props.text} */}
      </span>
  </div>
  )
}

export default Square;