import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message : 'It is my firt post?', likesCount: 12},
        {id: 2, message : 'Are you hungry?', likesCount: 13},
        {id: 3, message : 'I learn React', likesCount: 19},
        {id: 4, message : 'Sasha', likesCount: 0},
        {id: 5, message : 'Valera', likesCount: 1}
    ]

    let postsElements = posts.map ( p => <Post message={p.message} like={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                
            </div>
            <div>New post</div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;