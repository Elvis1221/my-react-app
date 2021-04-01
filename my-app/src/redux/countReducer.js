const ADDCOUNTINK = "ADDCOUNTINK";
const ADDCOUNTDEC = "ADDCOUNTDEC";

const initialState = {
  like: 0,
  dislike: 0
};

export const addCountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDCOUNTINK:
      return {
        ...state,
        like: payload
      };
    case ADDCOUNTDEC:
      return {
        ...state,
        dislike: payload
      };
    default:
      return state
  }
};

export const addCountInkAC = (payload) => ({type:ADDCOUNTINK, payload});
export const addCountDecAC = (payload) => ({type:ADDCOUNTDEC, payload});