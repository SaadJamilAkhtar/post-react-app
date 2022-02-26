import React, {useLayoutEffect} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../actions/postAction";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

function Post(props) {


    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items)
    const [postItems, setPostItems] = useState([]);

    // get data on load
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    useEffect(() => {
        console.log("JANIIII")
        setPostItems(posts ? posts.map(post => (
            <div
                key={post.id}
                className={'card p-2 mb-2'}>
                <div className="card-body">
                    <h4 className={'card-title'}>{post.title}</h4>
                    <p className={'card-text'}>{post.body}</p>
                </div>
            </div>
        )) : [])
    }, [posts])


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