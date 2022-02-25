import React from 'react';
import {useState} from "react";

function PostForm(props) {

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

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))
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