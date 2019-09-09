import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import ListItem from "./component/ListItem";
import { Container, Row, Col } from "react-bootstrap";
import {BrowserRouter, Route} from "react-router-dom"
import Input from "./component/Input"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Container>

        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Route path='/create' component={Input}/>

        <ListItem />

      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
