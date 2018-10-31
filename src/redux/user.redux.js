import axios from 'axios';

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const ERROR_MSG = "ERROR_MSG";
const LOGINSUCCESS_SUCCESS = "LOGINSUCCESS_SUCCESS";
const LOAD_DATA = "LOAD_DATA";
const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initState ={
  redirectTo:'',
  user:'',
  type:'',
  msg:'',
  isAuth:false
};

export function user(state=initState,action) {
    switch (action.type){
        case AUTH_SUCCESS:
            return {...state , msg:'', ...action.data};
        case ERROR_MSG :
            return {...state , isAuth:false , msg:action.msg };
        case LOAD_DATA :
            return {...state , ...action.data};
        default:
            return state;
    }
}

function authSuccess(data){
    return {type:AUTH_SUCCESS,payload:data}
}

function errorMsg(msg) {
    return {msg,type:ERROR_MSG}
}

