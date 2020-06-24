import axios from 'axios'

export const fetchAPI = () => {
    return dispatch => {
        dispatch({type: "FETCH_API" })
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            dispatch({type: "FETCH_PUPPER_SUCCESS", payload: response.data.message})
        })
        // .then(response => console.log("SOMETHING TO READ", response))
        .catch(err => console.log("ERROR", err))
    }
}