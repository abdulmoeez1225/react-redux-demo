import { BUY_FEATURE } from "./featureTypes";
const initialValues = {
  numOfFeature: 20,
};

const featureReducer = (state = initialValues, action) => {
  switch (action.type) {
    case BUY_FEATURE: {
      return {
        ...state,
        numOfFeature: state.numOfFeature - 1,
      };
    }
    default:
      return state;
  }
};
export default featureReducer;
