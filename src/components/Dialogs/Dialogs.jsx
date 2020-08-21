import React  from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    
    let dialogs = [
        {id: 1, name :'Dmytro'},
        {id: 2, name :'Andrey'},
        {id: 3, name :'Sveta'},
        {id: 4, name :'Sasha'},
        {id: 5, name :'Valera'}
    ]
    let messages = [
        {id: 1, message : 'What did you learn?'},
        {id: 2, message : 'How are you?'},
        {id: 3, message : 'I learn React'},
        {id: 4, message : 'Someone'},
        {id: 5, message : 'Bla bla'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name = {d.name} id = {d.id} />);
    
    let messagesElements = messages.map ( m => <Message message = {m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;