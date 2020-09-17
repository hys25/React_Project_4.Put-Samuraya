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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    };
};

export default dialogsReducer;