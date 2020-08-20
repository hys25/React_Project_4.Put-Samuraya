import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className='content'>
    <div>
    <img src='https://reviewers.info/design/images/worldmap.png' alt=""/>
    </div>
    <div>
        ava + description
    </div>
    <MyPosts/>
</div>
}

export default Profile;