import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={classes.item}>
            <img src="https://lh3.googleusercontent.com/proxy/zAfw8OCurL2Tn4tdUNvuIiQDqJ5yrPsDg4hyAfZH-QokC_pqu8OHTutAjZLorXkgYig6gWRPnIErySpEYEFlvoXsDtPhrVM"/>
            {props.message}
            <div>
                <span>like:</span>{props.like}
            </div>
        </div>
    )
}
//communication chain: connect()() ==> ProfileContainer ==> Profile ==> MyPostsContainer ==> connect(mapStateToProps, mapDispatchToProps)(MyPosts) ==>  MyPosts ==> Post
export default Post;