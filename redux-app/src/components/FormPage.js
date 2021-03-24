import React from "react"

import "./form-page.css"


export const PageForm = ({price, img, description, addPageForm}) => {
  return (
    <div className="mb-3 wrapper-form">
      <h3>Форма добавления товара:</h3>
      <label htmlFor="exampleFormControlInput1"
             className="form-label">

      </label>
      <input type="email"
             className="form-control"
             id="exampleFormControlInput1"
             placeholder="Фото товара:"
             onChange={img}
      />
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1"
               className="form-label">

        </label>
        <textarea className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Описание:"
                  onChange={description}>

        </textarea>
      </div>
      <label htmlFor="exampleFormControlInput2"
             className="form-label">
      </label>
      <input type="email"
             className="form-control"
             id="exampleFormControlInput2"
             placeholder="Цена:"
             onChange={price}
      />
      <button type="button" className="btn btn-secondary margin-btn" onClick={addPageForm}>Отправить</button>
    </div>
  )
};
