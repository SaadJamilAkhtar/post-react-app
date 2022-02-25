import React from 'react';
import {useEffect, useState} from "react";

function Post(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json()
            return data
        }
        loadData().then(data => setPosts(data));
    }, [])


    const postItems = posts.map(post => (
        <div
            key={post.id}
            className={'card p-2 mb-2'}>
            <div className="card-body">
                <h4 className={'card-title'}>{post.title}</h4>
                <p className={'card-text'}>{post.body}</p>
            </div>
        </div>
    ))

    return (
        <div>
            <h1>Posts</h1>
            <hr/>
            {postItems}
        </div>
    );
}

export default Post;