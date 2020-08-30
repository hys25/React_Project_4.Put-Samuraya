let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;