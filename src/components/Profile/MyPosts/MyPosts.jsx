import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className='content'>
        <div>
        my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>New post</div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
    </div>
}

export default MyPosts;