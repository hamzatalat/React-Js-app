import React from 'react';
import { Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import SideBar from '../sidebar'

const LoginTemplate = () => {  
return(
<div>

	 <div className=" h-100">
    <div className="row align-items-center h-100">
        <div className="col-6 mx-auto" >
<SideBar/>
  <br/>
  <br/>
  
  <h1>Login</h1>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I am not a robot" />
  </Form.Group>
  <Button variant="primary" type="submit" href='/P1'>
    Submit
  </Button>
</Form>


</div>
</div>
</div>	
</div>	   );
		}

export default LoginTemplate;