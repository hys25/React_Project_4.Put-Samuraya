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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost(postMessage) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost); 
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;