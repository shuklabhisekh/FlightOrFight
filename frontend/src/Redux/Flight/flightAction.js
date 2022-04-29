export const GET_FLIGHT = "GET_FLIGHT";


export const getFlight = (payload) => ({
  type: GET_FLIGHT,
  payload,
});


// Calling this function in home.jsx and dispatching the value of start and end from there
export const searchFlight = (start, end) => async (dispatch) => {
  fetch(`https://fightrflight.herokuapp.com/flight?start=${start}&end=${end}`)
    .then((res) => res.json())
    // dispatching the data in above function
    .then((data) => dispatch(getFlight(data)))
    .catch((error) => console.log(error));
};
