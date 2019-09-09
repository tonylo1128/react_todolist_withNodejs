import React , {useEffect} from "react";
import {Container, Card, Button, Col, Row} from "react-bootstrap"
import *  as actionFormcallApi from "../Action/callApiAction/callApiAction"
import { connect } from "react-redux";
import Input from "./Input"






function ListItem({ handle_editing,currentEditing, getStateFormGetApiData, callApiFun, combine_DELETE_UIUPDARE, combine_UpdateState_UIUpdate}) {

  useEffect( () => {
    callApiFun();
  }, []);



  return (
    <div>
      <Button onClick={()=>callApiFun()}>Get Data Now</Button>
      
      {getStateFormGetApiData.toDo!=="test"?console.log("test: " +getStateFormGetApiData.toDo):console.log("ttt")}
      
      <Row>
      {getStateFormGetApiData.toDo!=="test"?
      getStateFormGetApiData.map((item, index)=> 
      
        
      <Col>
          <Card border={item.finish? "primary":"danger"}  style={{ width: "18rem" }}>
          { currentEditing=== item.id? 
          <Card.Header> <Input/> </Card.Header>:
          <Card.Header>Item: {item.toDo}</Card.Header>}


          
          <Card.Body>
          
            <Card.Text>
              Finish State: {item.finish? "Finish":"Not Yet Finish"} 
              
            </Card.Text>
            <Card.Text>
              ID: {item.id}
            </Card.Text>
            <Row>
              <Col>
                <Button onClick={()=>handle_editing(item, index)} variant="primary">Edit</Button>
              </Col>
              <Col>
              
                <Button onClick={()=> combine_UpdateState_UIUpdate(item, index)} variant="success">Finish</Button>
              </Col>
              <Col>
                <Button onClick={()=>combine_DELETE_UIUPDARE(item, index)} variant="danger">Dele</Button>
              </Col>
              
            </Row>
            
          </Card.Body>
        </Card>
        </Col>
    
    
):



<div> <h1> There is no item here</h1></div>

  }
  </Row>

    </div>
  );
}




const mapStateToPros = (state) =>({
  getStateFormGetApiData: state.callApiReducer.theList,
  currentEditing : state.callApiReducer.currentEditing
});

const mapStateToAction = (dispatch) =>({
  callApiFun: () =>dispatch(actionFormcallApi.callApi()),
  updateFinihStateFun: (item, index)=>dispatch(actionFormcallApi.callApiForFState(item, index)),
  combine_UpdateState_UIUpdate: (item, index) =>dispatch(actionFormcallApi.combine_UpdateState_UIUpdate(item, index)),
  combine_DELETE_UIUPDARE: (item,index)=> dispatch(actionFormcallApi.combine_DELETE_UIUPDARE(item, index)),
  handle_editing: (item, index)=> dispatch(actionFormcallApi.handle_editing(item, index))
})





export default connect(mapStateToPros, mapStateToAction)(ListItem)











