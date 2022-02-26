import {FETCH_POSTS} from "./types";
import {NEW_POSTS} from "./types";

export const fetchPosts = () => dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))

}

export const createPost = (post) => dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POSTS,
            payload: data
        }))
}