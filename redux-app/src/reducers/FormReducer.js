const FORM = "FORM";

const initialState = {
    form: []
  }
;

export const pageFormReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FORM:
      return {
        form: [
          ...state.form,
          payload
        ],
      };
    default:
      return state
  }
};

export const pageFormReducerAC = (payload) => ({type: FORM, payload});