const getLocalStorage = () => {
  let cart = localStorage.getItem('history');
  if (cart) {
    return JSON.parse(localStorage.getItem('history'));
  } else {
    return [];
  }
};

export const initialState = {
  resultsHistory: [],
  value1: null,
  value2: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'TEST_ACTION':
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
