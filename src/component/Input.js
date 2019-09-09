import React, {useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import * as actionFormcallApi from "../Action/callApiAction/callApiAction";
import { connect } from "react-redux";

function Input ({stateS, currentEditing, combine_FinishEdit_CallApiForData, inputTemp, handleInput, combineFun_Create_GetData , callApiForCreate, callApiFun})  {
    // useEffect( () => {
    //     callApiFun();
    //   }, []);
  return (
    <div>
      <input
        value={inputTemp}
        type="text"
        onChange={event => handleInput(event.target.value)}
        placeholder="Input items here"
      />

      {console.log("又係時候check check佢之今次id又係咩9呢？ "+currentEditing)}
    {
      currentEditing===""?
      <Button onClick={()=>combineFun_Create_GetData(inputTemp) } variant="primary" type="submit">
        Submit
      </Button>
    :
    
    <Button onClick={()=>combine_FinishEdit_CallApiForData(currentEditing,inputTemp) } variant="primary" type="submit">
        Update
      </Button>
    
    }
      
    </div>
  );
};


const mapStateToProps = state => ({
    inputTemp: state.callApiReducer.inputHandle,
    test: state.callApiReducer.msg,
    stateS: state.callApiReducer.theList,
    currentEditing: state.callApiReducer.currentEditing
  });


const mapsStateToAction = dispatch => ({
  handleInput: input => dispatch(actionFormcallApi.handleInput(input)),
  callApiForCreate: input => dispatch(actionFormcallApi.callApiForCreate(input)),
  callApiFun: () =>dispatch(actionFormcallApi.callApi()),
  combineFun_Create_GetData: input => dispatch(actionFormcallApi.combineFun_Create_GetData(input)),
  combine_FinishEdit_CallApiForData: (item, temp)=> dispatch(actionFormcallApi.combine_FinishEdit_CallApiForData(item, temp))
});

export default connect(mapStateToProps, mapsStateToAction)(Input);
