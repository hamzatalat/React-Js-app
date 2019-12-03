import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Menu from 'react-animenu';

class Sidebar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    
    return (
    	<Container>
  <Row>
  <Col md={{ span: 11, offset: 11 }}>
      <Menu 
  buttonColorOpen="orange"
  buttonColorClosed="blue"
  menuBackgroundColor="orange"
  iconTextWhenOpen="Close"

  iconTextWhenClose="="
>
  <a href="/"><h1>Home</h1></a>
  <a href="/P1"><h1>P1</h1></a>
  <a href="/P2"><h2>P2</h2></a>
  <a href="/P3"><h3>P3</h3></a>
  
</Menu>


</Col>
</Row>
</Container>
    );
  }
}
export default Sidebar