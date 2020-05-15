import {SET_PROFILE_DATA} from '../Actions/types';

const initialState = {
    profileData: []
}

const profileDataReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PROFILE_DATA:
            return {...state,
            profileData: action.data
        };
        default:
            return state;
    }
}

export default profileDataReducer;