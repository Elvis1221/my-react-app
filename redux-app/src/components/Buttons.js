import React from 'react'


export const Buttons = ({addCountDizLike, addCountLike}) => {

  return (
    <div>
      <button className="btn btn-primary btn lg" onClick={addCountLike}>+</button>
      <button className="btn btn-primary btn lg" onClick={addCountDizLike}>-</button>
    </div>
  )
};


