export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST"
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS"
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE"

const API_KEY = process.env.REACT_APP_API_KEY;


export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (posts) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: posts
    }
}

export const fetchPostFailure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}




export const fetchPost = () => {
    return async (dispatch) => {
        dispatch(fetchPostRequest())

        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=people&orientation=squarish`)
            const data = await response.json()

            dispatch(fetchPostSuccess(data.results))
        } catch (error) {
            dispatch(fetchPostFailure(error))
        }
    }
}