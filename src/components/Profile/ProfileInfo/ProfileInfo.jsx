import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <div>
        <div>
            <img src='https://reviewers.info/design/images/worldmap.png' alt=""/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>
    </div>)
}

export default ProfileInfo;