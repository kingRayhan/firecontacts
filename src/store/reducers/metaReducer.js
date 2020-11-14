export const LOADING_STATE = "LOADING_STATE";

const reducer = (state = { loading: false }, { type, payload }) => {
  switch (type) {
    case LOADING_STATE: {
      return {
        ...state,
        loading: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

export const loadingState = (payload) => ({
  type: LOADING_STATE,
  payload,
});
