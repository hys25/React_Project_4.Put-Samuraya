import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={classes.header}>
        <img src="https://w7.pngwing.com/pngs/241/371/png-transparent-drawing-computer-icons-lightning-angle-photography-triangle.png" alt=""/>

        <div className={classes.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;