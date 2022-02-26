import React from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../actions/postAction";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import rootReducer from "../reducers";

function Post(props) {


    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])


    const postItems = posts ? posts.map(post => (
        <div
            key={post.id}
            className={'card p-2 mb-2'}>
            <div className="card-body">
                <h4 className={'card-title'}>{post.title}</h4>
                <p className={'card-text'}>{post.body}</p>
            </div>
        </div>
    )) : [];

    return (
        <div>
            <h1>Posts</h1>
            <hr/>
            {postItems}
        </div>
    );
}

const mapStateToProps_ = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps_, {fetchPosts})(Post);