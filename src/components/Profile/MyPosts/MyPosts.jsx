import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map ( p => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <AddNewPostsFormRedux onSubmit={onAddPost}/>
            <div>New post</div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

let AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> 
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            
        </form>
    )
};

let AddNewPostsFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostsForm)

export default MyPosts;