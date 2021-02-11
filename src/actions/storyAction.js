// import { axios } from "axios";
// export const FETCH_STORY_REQUEST = "FETCH_STORY_REQUEST";
// export const FETCH_STORY_SUCCESS = "FETCH_STORY_SUCCESS";
// export const FETCH_STORY_FAILURE = "FETCH_STORY_FAILURE";



// export const fetchStoryRequest = () => {
//     return {
//       type: FETCH_STORY_REQUEST,
//     };
// }
// export const fetchStorySuccess = (storys) => {
//     return {
//       type: FETCH_STORY_SUCCESS,
//       payload: storys
//     };
// }
// export const fetchStoryFailure = (error) => {
//     return {
//       type: FETCH_STORY_FAILURE,
//       payload: error
//     };
// }


// export const fetchStory = () => {
//     return async (dispatch) => {

//         dispatch(fetchStoryRequest())
//         try {
//             const response = await fetch("https://randomuser.me/api/?results=8")
//             const data = await response.json()

//             dispatch(fetchStorySuccess(data.results))
//         } catch(error) {
//             dispatch(fetchStoryFailure(error))
//         }
//         // axios.get("https://randomuser.me/api/?results=8")
//         //     .then(response => {
//         //         const data = response.data
//         //         dispatch(fetchStorySuccess(data))
//         //     })
//         //     .catch(error => {
//         //         dispatch(fetchStoryFailure(error.message))
//         //     })
//     }
// }

