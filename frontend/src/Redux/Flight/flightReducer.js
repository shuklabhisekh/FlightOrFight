import { GET_FLIGHT } from "./flightAction";

const initState = {
  flight: [],
};

export const flightReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_FLIGHT:
      return { ...store, flight: payload };
    default:
      return store;
  }
};
