import React from 'react'
import {Route} from "react-router-dom";

import {FormPage} from "./FormPage";
import {NavBar} from "./nav-bar/NavBar";
import {CardPage} from "./CardsPage";

import "./App.css"

export const App = () => {

  return (
    <div className="app-wrapper">
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path='/Form'
               render={() => <FormPage />}/>
        <Route path='/Cards'
               render={() => <CardPage/>}/>
      </div>

    </div>
  )
};