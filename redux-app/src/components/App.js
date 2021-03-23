import React, {useState} from 'react'
import {Counter} from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {addCountDecAC, addCountInkAC} from "../reducers/countReduser";
import {Buttons} from "./Buttons";
import {addMessagesAC} from "../reducers/addMessagesReduser";


export const App = () => {
  const dispatch = useDispatch();
  const {count, addMessage} = useSelector(state => state);

  const [message, setMessage] = useState("")

  const addCountLike = () => {
    dispatch(addCountInkAC(count.like + 1))
  };
  const addCountDizLike = () => {
    dispatch(addCountDecAC(count.dislike - 1))
  };
  const addMessages = () => {
    const newMessage = {post: message};
    dispatch(addMessagesAC(newMessage))
  };
  const newMessage = (event => setMessage(event.target.value));

  return (
    <div>
      <Counter addLike={count.like} addDislike={count.dislike}/>
      <Buttons addCountDizLike={addCountDizLike} addCountLike={addCountLike}/>
      <div>
        <>
          {
            addMessage.post.map(({post}) => (
              <div>
                <div>{post}</div>
                {addMessages}
                {newMessage}



              </div>
            ))
          }
        </>
        <input type="text" onChange={newMessage}/>
        <button onClick={addMessages}>add</button>

      </div>

    </div>
  )
};