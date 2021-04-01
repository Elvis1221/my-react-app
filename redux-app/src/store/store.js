import {combineReducers, createStore} from "redux";
import {countReduser} from "../reducers/countReduser";
import {addMessagesReducer} from "../reducers/addMessagesReduser";
import {pageFormReducer} from "../reducers/FormReducer";


const reducers = combineReducers( {
    count:countReduser,
    addMessage:addMessagesReducer,
    pageForm:pageFormReducer,
});

export const store = createStore(reducers);
