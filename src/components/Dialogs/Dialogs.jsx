import React  from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name = {d.name} id = {d.id} />);
    
    let messagesElements = props.state.messages.map ( m => <Message message = {m.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className={classes.dialogs}>
            
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.newDialogsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                    
                </div>
                <div>New post</div>
            </div>
        </div>
    )
}

export default Dialogs;