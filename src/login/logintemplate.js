import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {Link } from 'react-router-dom'
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Fill = {
  minheight: '100%',
    height: '100%'}

const LoginTemplate = () => {  
return(
	
	<Container className={Fill}>
	<Row >
    <Col lg={{  offset: 4 }}>
<MDBContainer >
      <MDBRow>
        <MDBCol sm="6">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="orange-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Col>
  </Row>
    </Container>
    
		   );
		}

export default LoginTemplate;