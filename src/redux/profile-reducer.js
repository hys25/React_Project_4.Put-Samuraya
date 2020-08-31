const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';  

let initialState = {
    posts : [
        {id: 1, message : 'It is my firt post?', likesCount: 12},
        {id: 2, message : 'Are you hungry?', likesCount: 13},
        {id: 3, message : 'I learn React', likesCount: 19},
        {id: 4, message : 'Sasha', likesCount: 0},
        {id: 5, message : 'Valera', likesCount: 1}
    ],
    newPostText: 'Type in a message...'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: { 
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: 
            return state;
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

export default profileReducer;