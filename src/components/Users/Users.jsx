import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
    return <div>
            {
                props.users.map( u => <div key={u.id}/>)
                    <span>
                        <div>
                            <img />
                        </div>
                    </span>
                    <span>
                        <div>
                            <button>Follow</button>
                        </div>
                    </span>
                </div>
            }
        </div>
    
}

export default Users;