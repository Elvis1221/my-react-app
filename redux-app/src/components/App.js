import React, {useState} from 'react'
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {PageForm} from "./FormPage";
import {NavBar} from "./nav-bar/NavBar";
import {PageCards} from "./CardsPage";
import {pageFormReducerAC} from "../reducers/FormReducer";

import "./App.css"

export const App = () => {
  const dispatch = useDispatch();
  const {form} = useSelector(state => state.pageForm);

  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');

  const newPageForm = () => {
    const formFields = (
      {
        price: price,
        img: img,
        description: description
      });
    dispatch(pageFormReducerAC(formFields))
  };
  const newPrice = (event) => setPrice(event.target.value);
  const newImg = (event) => setImg(event.target.value);
  const newDescription = (event) => setDescription(event.target.value);

  return (
    <div className="app-wrapper">
      <NavBar/>
      <div className='app-wrapper-content'>
        <Route path='/Form'
               render={() => <PageForm addPageForm={newPageForm}
                                       price={newPrice}
                                       img={newImg}
                                       description={newDescription}/>}
        />
        <Route path='/Cards'
               render={() => form.map((items, index) => <PageCards key={index} price={items.price}
                                                                   img={items.img}
                                                                   description={items.description}/>)}
        />
      </div>
    </div>
  )
};