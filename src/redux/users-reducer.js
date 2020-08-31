const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users : [
        {id: 1, followed: true, fullName : 'Roman', status: 'I am begginer front-end developer', location: {city: 'Kiyv', country: 'Ukraine'} },
        {id: 2, followed: false, fullName : 'Kate', status: 'What are you studying?', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 3, followed: false, fullName : 'Karyna', status: 'Where do you live?', location: {city: 'New York', country: 'USA'} },
        {id: 4, followed: true, fullName : 'Vitalii', status: 'I am full-stack web developer', location: {city: 'San-Francisco', country: 'USA'} }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, action.users] }
        }
        default: 
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;