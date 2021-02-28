import React from 'react';
import squares from '../list';

const Square = () => {
  return (
    <div className="bingo-card-item">
      I am a bingo square.
      <span className="bingo-card-checkbox"> I am a bingo checkbox.</span>
  </div>
  )
}

export default Square;