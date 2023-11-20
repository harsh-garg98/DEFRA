import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';

const DefraFormRegister = ( {nextPage} ) => {
    return <div>
    <h2>
      <p className='Header'>Register</p>
    </h2>
    <Form className='form-capsule'>
    <Form.Group className="mb-3 form-blocks" controlId="formBasicFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="formBasicLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Last Name" />
    </Form.Group>
    
    <Form.Group className="mb-3 form-blocks" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Create a Password" />
      <Form.Text className="text-muted">
        <ul>
          <li>Password must be a minimum of 8 characters long</li>
          <li>Password must contain a capital letter A-Z</li>
          <li>Password must not contain any spaces</li>
          <li>Password must contain a number 0-9</li>
          <li>Password must contain a special character ~`!@#$%^&*-_+=|\;:",./?</li>
        </ul>
      
      </Form.Text>
    </Form.Group>
    <div style={{textAlign:"center"}}>
    <Button variant="primary" type="submit" className='ml-auto' onClick={nextPage}>
      Submit
    </Button>
    </div>
  </Form>
  </div>
}
export default DefraFormRegister;