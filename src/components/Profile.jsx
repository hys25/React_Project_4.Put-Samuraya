import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className='content'>
    <div>
    </div>
    <img src='https://reviewers.info/design/images/worldmap.png' alt=""/>
    <div>
        <img src="https://lh3.googleusercontent.com/proxy/OCKxVlaqfWDgNqw3-8vPbYVXbMWESdUjqJAtxgkcVNylQw1qP74ZPg0ACYvnapL05ouNYQdye9tgfljLsDmGQaTIdVcQSVM"/>
    </div>
    <div>
        my post
        <div>New post</div>
        <div className={classes.posts}>
            <div className={classes.item}>
                post 1
            </div>
            <div className='item'>
                post 2
            </div>
        </div>
    </div>
    <div>

    </div>
</div>
}

export default Profile;