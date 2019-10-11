import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";


export const fetchFox = () => dispatch => {
    dispatch({ type: START_FETCHING });
        axios
            .get("https://cors-anywhere.herokuapp.com/http://randomfox.ca/floof/")
            .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.image }))
            // .then(res => console.log(res.data.image))

            .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
    };

// export default fetchFox;
// const thunk = next => action => store => {
//     if (typeof action === "object") {
//         next(action);
//     } else if (typeof action === "function") {
//         action(store.dispatch)
//     }
// }