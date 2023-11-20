import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';

const DefraFormLogin = ( {nextPage} ) => {
    return <div>
    <h2>
      <p className='Header'>Login</p>
    </h2>
    <Form className='form-capsule'>
    <p>New user? <a href="">Register here</a></p>
    <Form.Group className="mb-3 form-blocks" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <div style={{textAlign:"center"}}>
    <Button variant="primary" type="submit" onClick={nextPage}>
      Login
    </Button>
    </div>
  </Form>
  </div>
}
export default DefraFormLogin;