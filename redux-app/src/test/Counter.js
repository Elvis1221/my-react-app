import React from 'react'


export const Counter = ({addLike,addDislike}) => {

  return(
    <div>
      <div>{addLike}</div>
      <div>{addDislike}</div>
    </div>
  )
}