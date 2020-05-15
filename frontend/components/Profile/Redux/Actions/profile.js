import {SET_PROFILE_DATA} from './types';

export const setProfileData = (data) => (
    {
        type: SET_PROFILE_DATA,
        data: data
    }
)