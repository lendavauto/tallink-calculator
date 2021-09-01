const getLocalStorage = () => {
  let cart = localStorage.getItem('history');
  if (cart) {
    return JSON.parse(localStorage.getItem('history'));
  } else {
    return [];
  }
};

export const initialState = {
  resultsHistory: getLocalStorage(),
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'OPERATION_+':
      const calculatedValueAdd =
        Number(action.payload[0]) + Number(action.payload[1]);
      return {
        ...state,
        resultsHistory: [...state.resultsHistory, calculatedValueAdd],
      };
    case 'OPERATION_/':
      const calculatedValueDivide =
        Number(action.payload[0]) / Number(action.payload[1]);
      return {
        ...state,
        resultsHistory: [...state.resultsHistory, calculatedValueDivide],
      };
    case 'OPERATION_%':
      const calculatedValueRemainder =
        Number(action.payload[0]) % Number(action.payload[1]);
      return {
        ...state,
        resultsHistory: [...state.resultsHistory, calculatedValueRemainder],
      };
    default:
      return state;
  }
};

export default reducer;
