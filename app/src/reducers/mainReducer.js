const initialState = {
    apiData: 'Dogs',
    isLoading: true,
}


export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_DATA":
        return {
            state,
        }        
        case "FETCH_API":
        return {
            state,
            isLoading: true
        }        
        case "FETCH_PUPPER_SUCCESS":
        return {
            ...state,
            isLoading: false,
            apiData: action.payload
        }        
        default: 
        return {
            state,
        }
    }
}
