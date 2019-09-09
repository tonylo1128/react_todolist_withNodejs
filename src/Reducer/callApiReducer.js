import * as TypeOfApiCall from "../Action/callApiAction/type";

const initstate = {
  theList: {
      toDo:"test",
      finish: false,
      id: "test",
  },
  msg: "",
  inputHandle:"",
  currentEditing: ""
};

export default function(state = initstate, {type, payload}){

    switch(type){
        case TypeOfApiCall.CALL_API_GET_DATA:
                // const [a,b,c,d,e,f]=payload.data
                console.log("WE ARE IN THE GETDATA API NOW")
            return{
                ...state,
                theList: payload.data
                
            }
        case TypeOfApiCall.CALL_API_UPDATE_STATE:
            return{
                ...state,
                msg: payload.msg
            }
        
        case TypeOfApiCall.HANDLE_INPUT:
            return{
                ...state,
                inputHandle: payload
            }
        case TypeOfApiCall.CALL_API_CREATE:
            return{
                ...state,
                msg: payload
            }

        case TypeOfApiCall.CALL_API_FOR_DELETE:
            return{
                ...state,
                msg: payload
            }
        case TypeOfApiCall.HANDLE_EDITING:
            console.log("又係時候check check之個payload係咩呢？ "+ payload.item.id);
            console.log("After EDITING"+ state.currentEditing)
            return{
                
                ...state,
                currentEditing: state.currentEditing ==="" ? payload.item.id : ""
            }
        
            case TypeOfApiCall.CALL_API_FINISH_EDITING:
                console.log("WE ARE IN THE EDIT API NOW !!!!!!!!!!")
                return{
                    ...state,
                    currentEditing: ""
                }
            
        
            default:
                return state;
            
    }

}