import { Button, DropdownButton, Dropdown, Container } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonsBottom from './ButtonsBottom';

const DefraFormPage1 = ({nextPage}) => {
    return <div>
    <h2>
      <p className='Header'>Basic Details</p>
    </h2>

    
    <Form className='form-capsule'>
    <div style={{paddingBottom:"10px"}}>
    <a href="">Click here for detailed instructions on how to fill the forms</a>
    </div>
      
        <p>Upload site context map as a .jpg, .jpeg, or .png file</p>
        <Button variant="secondary">
          Upload
        </Button>
      
    <Form.Group className="mb-3 form-blocks" controlId="applicantName">
      <Form.Label>Enter Lead Applicant Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Applicant Name" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="sbi">
      <Form.Label>Enter Single Business Identifier (SBI) Number</Form.Label> How do we find it?
      <Form.Control type="name" placeholder="Enter SBI" />
    </Form.Group>
    
    <Form.Group className="mb-3 form-blocks" controlId="nameOfProperty">
      <Form.Label>Enter Name of Property, Site or Application Name</Form.Label> Where do I get this?
      <Form.Control type="name" placeholder="Enter Required Details" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="gridReference">
      <Form.Label>Enter Central Grid Reference of your proposed Woodland</Form.Label> Where do I get this?
      <Form.Control type="name" placeholder="Enter Grid Reference" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>Do you have a forestry commission approved woodland creation planning grant?</Form.Label> Where can I get this from?
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">No</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="wcpgReference">
      <Form.Label>What is the Reference Number?</Form.Label> Where do I get this from?
      <Form.Control type="name" placeholder="Enter Reference Number" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="approvedPlan">
      <Form.Label>Is your EWCO application Based on your final approved plan?</Form.Label> How do I confirm this?
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">No</Dropdown.Item>
      </DropdownButton>
    </Form.Group>
    
    <ButtonsBottom nextPage={nextPage} />
  </Form>
  </div>
}
export default DefraFormPage1;