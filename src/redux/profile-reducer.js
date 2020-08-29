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
    newPostText: 'bla bla'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]; 
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: { 
            let stateCopy = {...state}
                stateCopy.newPostText = action.newText;
            return stateCopy;
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