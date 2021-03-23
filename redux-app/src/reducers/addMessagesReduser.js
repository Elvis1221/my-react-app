const MESSAGES = "MESSAGES";

const initialState = {
  post: [],
};


export const addMessagesReduser = (state = initialState, {type,payload}) => {
  switch (type) {
    case MESSAGES:
      return {
        post: [
          ...state.post,
          payload
        ]
      };

    default :
      return state
  }
};


export const addMessagesAC = (payload) => ({type: MESSAGES, payload});
