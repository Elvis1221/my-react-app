import React from "react"

import "./cards-page.css"

export const PageCards = ({price, img, description}) => {
  return (
    <div className="wrapper-card">
      <div className="card change-card">
        <img src={img} alt="img"/>
        <div className="content-text">
          <h4>Описание:</h4>
          <span>{description}</span>
        </div>
        <div className="content-text">
          <h4>Цена:</h4>
          <span>{price}</span>
        </div>
      </div>
    </div>
  )
};







