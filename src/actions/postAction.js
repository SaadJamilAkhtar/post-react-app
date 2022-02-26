import {FETCH_POSTS} from "./types";
import {NEW_POSTS} from "./types";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json)
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))

}