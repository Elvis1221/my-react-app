const MESSAGES = "MESSAGES";

const initialState = {
  posts: [],
};

export const addMessagesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case MESSAGES:
      return {
        posts: [
          ...state.posts,
          payload
        ]
      };

    default :
      return state
  }
};

export const addMessagesAC = (payload) => ({type: MESSAGES, payload});
