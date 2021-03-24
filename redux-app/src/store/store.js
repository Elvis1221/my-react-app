import {combineReducers, createStore} from "redux";
import {countReduser} from "../reducers/countReduser";
import {addMessagesReducer} from "../reducers/addMessagesReduser";
import {pageFormReducer} from "../reducers/FormReducer";
// import {pageCardsReducer} from "../reducers/CardsReducer";


const reducers = combineReducers( {
    count:countReduser,
    addMessage:addMessagesReducer,
    pageForm:pageFormReducer,
    // pageCards:pageCardsReducer
});

export const store = createStore(reducers);
