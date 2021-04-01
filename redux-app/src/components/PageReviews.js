import React from "react"

export const PageReviews = () => {

  return (
   <div>
     <label htmlFor="exampleFormControlTextarea1"
            className="form-label">
     </label>
     <textarea className="form-control"
               id="exampleFormControlTextarea1"
               rows="3"
               placeholder="Описание:"
     >
        </textarea>
     <button type="button" className="btn btn-secondary margin-btn" >Добавить</button>
   </div>
)};