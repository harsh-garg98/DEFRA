import { Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonsBottom from './ButtonsBottom';
import ButtonsBottomThree from './ButtonsBottomThree';

const DefraFormPage4 = ({nextPage, previousPage}) => {
    return <div>
    <h2>
      <p className='Header'>Objectives & Threats</p>
    </h2>

    <Form className='form-capsule'>

    <div className='instructions'>
      <a href="">Click here for detailed instructions on how to fill the forms</a>
    </div>
      
    <Form.Group className="mb-3 form-blocks">
      <Form.Label>What is your Woodland Creation Objective? (Please answer keeping in mind a 10 year timescale)</Form.Label>
      <Form.Control type="name" placeholder="Enter details" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks">
      <Form.Label>What are the threats (if any) to meeting the above objectives?</Form.Label>
      <Form.Control type="name" placeholder="Enter details" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks">
      <Form.Label>What measures will be undertaken to mitigate the above threats?</Form.Label>
      <Form.Control type="name" placeholder="Enter details" />
    </Form.Group>

    <ButtonsBottomThree nextPage={nextPage} previousPage={previousPage}/>
  </Form>
  </div>
}
export default DefraFormPage4;