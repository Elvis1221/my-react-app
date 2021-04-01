import {combineReducers, createStore} from "redux";
import {countReduser} from "../reducers/countReduser";
import {addMessagesReduser} from "../reducers/addMessagesReduser";


const reducers = combineReducers( {
    count:countReduser,
    addMessage:addMessagesReduser
});

export const store = createStore(reducers);
