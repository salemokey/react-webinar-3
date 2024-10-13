const ADD_COMMENT = 'ADD_COMMENT';
const SET_COMMENTS = 'SET_COMMENTS';

export const initialState = {
  comments: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.payload.data],
      };
    }
    case SET_COMMENTS: {
      return { ...state, comments: [...action.items] };
    }
    default:
      return state;
  }
}

export default reducer;
