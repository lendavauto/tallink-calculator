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
    case 'OPERATION_PRIME':
      const calculatedValuePrime =
        Number(action.payload[0]) - Number(action.payload[1]);
      var eratosthenes = function (n) {
        // Eratosthenes algorithm to find all primes under n
        var array = [],
          upperLimit = Math.sqrt(n),
          output = [];

        // Make an array from 2 to (n - 1)
        for (var i = 0; i < n; i++) {
          array.push(true);
        }

        // Remove multiples of primes starting from 2, 3, 5,...
        for (var i = 2; i <= upperLimit; i++) {
          if (array[i]) {
            for (var j = i * i; j < n; j += i) {
              array[j] = false;
            }
          }
        }

        // All array[i] set to true are primes
        for (var i = 2; i < n; i++) {
          if (array[i]) {
            output.push(i);
          }
        }

        return output;
      };
      const arrayOfPrimes = eratosthenes(calculatedValuePrime);
      if (arrayOfPrimes.length > 0) {
        const maxPrime = arrayOfPrimes.reduce((prev, current) =>
          prev.y > current.y ? prev : current
        );
        if (maxPrime) {
          return {
            ...state,
            resultsHistory: [...state.resultsHistory, maxPrime],
          };
        }
      }
      return {
        ...state,
        resultsHistory: [
          ...state.resultsHistory,
          'No prime number is available...',
        ],
      };

    default:
      return state;
  }
};

export default reducer;
