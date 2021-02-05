import { combineReducers } from "redux";
import storyReducer from "./rootReducer"
import postReducer from "./postReducer"
const rootReducer = combineReducers({
    storys: storyReducer,
    posts: postReducer
})

export default rootReducer