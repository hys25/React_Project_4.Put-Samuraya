import React from 'react';
import classes from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers (
            [
                {
                    id: 1, 
                    photoUrl: 'https://vokrug.tv/pic/news/4/6/c/f/46cf3fa91c478fb14807597b6b59a0a6.jpg', followed: true, 
                    fullName : 'Roman', 
                    status: 'I am begginer front-end developer', 
                    location: {city: 'Kiyv', country: 'Ukraine'} 
                },
                {
                    id: 2, 
                    photoUrl: 'https://vokrug.tv/pic/news/4/6/c/f/46cf3fa91c478fb14807597b6b59a0a6.jpg', 
                    followed: false, 
                    fullName : 'Kate', 
                    status: 'What are you studying?', 
                    location: {city: 'Minsk', country: 'Belarus'} 
                },
                {
                    id: 3, 
                    photoUrl: 'https://vokrug.tv/pic/news/4/6/c/f/46cf3fa91c478fb14807597b6b59a0a6.jpg', 
                    followed: false, 
                    fullName : 'Karyna', 
                    status: 'Where do you live?', 
                    location: {city: 'New York', country: 'USA'} 
                },
                {
                    id: 4, 
                    photoUrl: 'https://vokrug.tv/pic/news/4/6/c/f/46cf3fa91c478fb14807597b6b59a0a6.jpg', 
                    followed: true, 
                    fullName : 'Vitalii', 
                    status: 'I am full-stack web developer', 
                    location: {city: 'San-Francisco', country: 'USA'} 
                }
            ]
        )
    }

    return (
        <div> {
            props.users.map ( u => 
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={classes.userPhoto} />
                    </div>
                    <div>
                        { u.followed 
                            ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                            : <button onClick={ () => { props.follow(u.id) } }>Follow</button>
                        }
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
}


export default Users;