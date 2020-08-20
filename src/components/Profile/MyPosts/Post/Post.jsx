import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://lh3.googleusercontent.com/proxy/zAfw8OCurL2Tn4tdUNvuIiQDqJ5yrPsDg4hyAfZH-QokC_pqu8OHTutAjZLorXkgYig6gWRPnIErySpEYEFlvoXsDtPhrVM"/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;