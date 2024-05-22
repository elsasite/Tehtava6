//AppReducer.js
const AppReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "GET_URHEILIJATIEDOT":
      return {
        ...state,
        urheilijatiedot: payload,
      };

    case "GET_URHEILIJA":
      return {
        ...state,
        urheilijatiedot: payload,
      };

    case "DELETE_URHEILIJA":
      return {
        ...state,
        urheilijatiedot: state.urheilijatiedot.filter(
          (urheilija) => urheilija.id !== payload
        ),
      };

    case "ADD_URHEILIJA":
      return {
        ...state,
        urheilijatiedot: [payload, ...state.urheilijatiedot],
      };

    case "EDIT_URHEILIJA":
      return {
        ...state,
        urheilijatiedot: state.urheilijatiedot.map((urheilija) =>
          urheilija.id === action.payload.id ? payload : urheilija
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
