import {
  FETCH_STORY_REQUEST,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAILURE,
} from "../actions/storyAction.js";


const initialState = {
    loading: false,
    storys: [],
    error: "",
}


export const storyReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_STORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_STORY_SUCCESS:
            return {
                loading: false,
                storys: action.payload,
                error: ""
            }
        case FETCH_STORY_FAILURE:
            return {
                loading: false,
                storys: [],
                error: action.payload,
            }

        default:
            return state
    }
}

export default storyReducer;