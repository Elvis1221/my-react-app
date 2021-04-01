import React from "react"
import {combineReducers, createStore} from "redux";
import {addCountReducer} from "./countReducer";
import {addMessageReducer} from "./addMessageReducer";


const reducers = combineReducers({
  addCount: addCountReducer
  addMessage: addMessageReducer
});

export const store = createStore(reducers);

