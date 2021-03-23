import {combineReducers, createStore} from "redux";
import {countReduser} from "../reducers/countReduser";
import {addMessagesReducer} from "../reducers/addMessagesReduser";


const reducers = combineReducers( {
    count:countReduser,
    addMessage:addMessagesReducer
});

export const store = createStore(reducers);
