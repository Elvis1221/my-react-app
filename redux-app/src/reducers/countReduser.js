const COUNTINK = 'COUNTINK';
const COUNTDEC = 'COUNTDEC';

const initialState = {
  like: 0,
  dislike: 0
};


export const countReduser = (state = initialState, action) => {
    switch (action.type) {

      case COUNTINK:
        return {
          ...state,
          like: action.like
        };
      case
      COUNTDEC:
        return {
          ...state,
          dislike: action.dislike
        };

      default:
        return state
    }
  }
;

export const addCountInkAC = (like) => ({type: COUNTINK, like: like});
export const addCountDecAC = (disLike) => ({type: COUNTDEC, dislike: disLike});