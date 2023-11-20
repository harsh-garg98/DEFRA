import { DropdownButton, Dropdown, InputGroup } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonsBottomThree from './ButtonsBottomThree';
import StakeholdersManager from './StakeholdersManager';

const DefraFormPage5 = ({nextPage, previousPage}) => {

    return <div>
    <h2>
      <p className='Header'>Contacts</p>
    </h2>

    <Form className='form-capsule'>

    <div className='instructions'>
      <a href="">Click here for detailed instructions on how to fill the forms</a>
    </div>

    <div className='instructions'>
      <p style={{marginBottom:'10px'}}>
        <strong>Mandatory Contacts</strong>
      </p>
      <p>
        You must contact your Local Environment Records Centre (LERC) and your local Historic Environment Records (HER) / archaeology service to 
        check for any habitats or features that may be affected by your proposal. Evidence of this must be submitted as part of the WCP 5 - Environmental Checks.
        If evidence is not submitted it may cause a delay in your application.
      </p>
    </div>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Local Environment Records Centre (LERC)</InputGroup.Text>
      <Form.Control placeholder="Centre/Contact Name" />
    </InputGroup>
    <p style={{marginTop:'-10px'}}>
      <a href=''>https://www.alerc.org.uk/lerc-finder.html</a>
    </p>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Date Contacted</InputGroup.Text>
      <Form.Control type='date' />
      <InputGroup.Text id="basic-addon1">Date Feedback Received</InputGroup.Text>
      <Form.Control type='date' />
    </InputGroup>

    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>Evidence</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">I have submitted evidence of the completed checks</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Placeholder option 2</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Historic Environment Records (HER)</InputGroup.Text>
      <Form.Control placeholder="Centre/Contact Name" />
    </InputGroup>
    <p style={{marginTop:'-10px'}}>
      <a href=''>https://www.algao.org.uk/membership</a>
    </p>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Date Contacted</InputGroup.Text>
      <Form.Control type='date' />
      <InputGroup.Text id="basic-addon1">Date Feedback Received</InputGroup.Text>
      <Form.Control type='date' />
    </InputGroup>

    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>Evidence</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">I have submitted evidence of the completed checks</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Placeholder option 2</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <div className='instructions'>
      <p style={{marginBottom:'10px'}}>
        <strong>Stakeholder Contacts</strong>
      </p>
      <p>
        If no contacts are listed below, you are declaring that, to the best of your knowledge, there are no stakeholder interests in your project.
      </p>
    </div>

    <StakeholdersManager />

    <ButtonsBottomThree nextPage={nextPage} previousPage={previousPage}/>
  </Form>
  </div>
}
export default DefraFormPage5;