import axios from 'axios';
const initialState = {
    user: {},
    art: [],
    loading: false
}

const GET_USER = 'GET_USER';
const GET_ART = 'GET_ART';

export function getUser(user){
    return {
        type:GET_USER,
        payload: user
    }
}
export function getArt(path){
    const art = axios.get(path);
    return {
        type:GET_ART,
        payload: art
    }
}

export default function cookieReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {...state, user:payload};
        case GET_ART + '_PENDING':
            return {...state, loading:true}
        case GET_ART + '_FULFILLED':
            return {...state, loading:false, art:payload}
        case GET_ART + '_REJECTED':
            return initialState
        default:
            return state;
    }
}