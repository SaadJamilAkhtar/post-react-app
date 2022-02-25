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
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        name={"title"}
                        placeholder={"Title"}
                        value={formData.title}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <textarea
                        name={"body"}
                        placeholder={"Body"}
                        value={formData.body}
                        onChange={onChange}
                    />
                </div>

                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
}

export default PostForm;