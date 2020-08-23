let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts : [
                {id: 1, message : 'It is my firt post?', likesCount: 12},
                {id: 2, message : 'Are you hungry?', likesCount: 13},
                {id: 3, message : 'I learn React', likesCount: 19},
                {id: 4, message : 'Sasha', likesCount: 0},
                {id: 5, message : 'Valera', likesCount: 1}
            ],
            newPostText: 'bla bla'
        },
        dialogsPage: {
            messages : [
                {id: 1, message : 'What did you learn?'},
                {id: 2, message : 'How are you?'},
                {id: 3, message : 'I learn React'},
                {id: 4, message : 'Someone'},
                {id: 5, message : 'Bla bla'}
            ],
            dialogs : [
                {id: 1, name :'Dmytro'},
                {id: 2, name :'Andrey'},
                {id: 3, name :'Sveta'},
                {id: 4, name :'Sasha'},
                {id: 5, name :'Valera'}
            ],
            newMessageBody : ''
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost); 
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;