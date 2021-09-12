import { BUY_ICECREAM } from "./iceCreamType";
const initalState = {
  numOfIceCream: 20,
};

const cakeReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
