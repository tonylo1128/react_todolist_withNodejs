import * as TypeOfApiCall from "./type"
import axios from "axios"

export function callApi(){
    console.log("We are in the callApi function la")
    return(dispatch)=>{
        return axios.get("http://localhost:8000/api/getData").then((response)=>{
            dispatch(callBackForGetData(response.data))
            console.log(response.data);
        })
    }
}



export function callBackForGetData(tempData){
    return{
        type: TypeOfApiCall.CALL_API_GET_DATA,
        payload: tempData
    }
    
}



export function callApiForFState(item, index){
    
    return(dispatch)=>{
        return axios.get("http://localhost:8000/api/updateState/finish/"+item.id).then( (respone)=>{
            dispatch(callBackForFinishStateUpdate(respone.data))
        })
    }
}

export function callBackForFinishStateUpdate(msg){
    return{
        type: TypeOfApiCall.CALL_API_UPDATE_STATE,
        payload:msg
    }
}


export function combine_UpdateState_UIUpdate(item, index){
    return dispatch =>{
        dispatch(callApiForFState(item)).then( ()=> dispatch(callApi()))
    }
}



export function handleInput(inputMsg){
    return{
        type: TypeOfApiCall.HANDLE_INPUT,
        payload: inputMsg
    }
}


export function callApiForCreate(temp){
    console.log("let's check if it works      "+temp)
    return (dispatch)=>{
        //inputToDoList is the same name with the var in NODEJS
        return axios.post("http://localhost:8000/api/create", {inputToDoList: temp}).then( (respone)=>{
            dispatch(callBackForCreateApi(respone.data))
        })
    }
}


export function callBackForCreateApi (temp){
    return{
        type: TypeOfApiCall.HANDLE_INPUT,
        payload: temp
    }
}


export function combineFun_Create_GetData(temp){
    return dispatch => {
        dispatch(callApiForCreate(temp)).then(()=> dispatch(callApi()))
        
    }
}

export function callApiForDelete(item, index){
    return (dispatch) =>{
        return axios.get("http://localhost:8000/api/delete/"+item.id).then( (respone)=>{
            dispatch(callBackForApiDelete(respone.data))
        })
    }
}

export function callBackForApiDelete(data){
    return{
        type: TypeOfApiCall.CALL_API_FOR_DELETE,
        payload: data
    }
}

export function combine_DELETE_UIUPDARE(item, index){
    return dispatch=>{
        dispatch(callApiForDelete(item, index)).then( dispatch(callApi()))
    }
}

export function handle_editing( item, index ){
    return {
        type: TypeOfApiCall.HANDLE_EDITING,
        payload: {item, index}
    }
}


export function callApiForEdit(item, temp){
    return dispatch=>{
        console.log("THIS IS REACT API EDIT AND THE ITEM ID = "+item+" 依個就係 "+temp)
        return axios.post("http://localhost:8000/api/todolist/edit/"+item, {inputToDoList: temp} ).then((respone)=>{
            dispatch(callBackForApiEdit(respone.data))
        })
    }
}

export function callBackForApiEdit(data){
    return {
        type:TypeOfApiCall.CALL_API_FINISH_EDITING,
        payload: data
    }
}

export function combine_FinishEdit_CallApiForData(item, temp){
    return dispatch=>{
        dispatch(callApiForEdit(item, temp)).then( dispatch(callApi() ) )
    }
}

