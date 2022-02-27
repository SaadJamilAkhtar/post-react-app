import React, {useEffect} from 'react';
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {createPost} from "../actions/postAction";

function PostForm(props) {

    const dispatch = useDispatch();
    const newPost = useSelector(state => state.posts.item)
    const posts = useSelector(state => state.posts.items)

    useEffect(() => {
        newPost && posts.unshift(newPost);
    }, [newPost])

    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const post = {
            title: formData.title,
            body: formData.body
        }

        dispatch(createPost(post))

        setFormData({
            title: '',
            body: ''
        })
    }

    return (
        <div className={'border p-4 w-75 m-auto round-2'}>
            <h1 className={'text-center'}>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div className={'form-group'}>
                    <input
                        type="text"
                        name={"title"}
                        placeholder={"Title"}
                        value={formData.title}
                        onChange={onChange}
                        className={'form-control round-1'}
                    />
                </div>
                <div className={'form-group'}>
                    <textarea
                        name={"body"}
                        placeholder={"Body"}
                        value={formData.body}
                        onChange={onChange}
                        className={'form-control round-1'}
                    />
                </div>
                <div className="text-center">
                    <button
                        type={"submit"}
                        className={'btn btn-primary w-25 round-2 no-border'}
                    >Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PostForm;