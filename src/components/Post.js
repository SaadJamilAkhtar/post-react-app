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
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
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