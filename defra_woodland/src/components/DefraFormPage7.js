import { Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonsBottom from './ButtonsBottom';
import ButtonsBottomThree from './ButtonsBottomThree';

const DefraFormPage7 = ({nextPage, previousPage}) => {
    return <div>
    <h2>
      <p className='Header'>To do with maps</p>
    </h2>

    <Form className='form-capsule'>

    <div className='instructions'>
      <a href="">Click here for detailed instructions on how to fill the forms</a>
    </div>

    <div className='instructions'>
      <a href="https://www.forestergis.com/Apps/MapBrowser/" target='_blank'>Click here to access the Forestry Commission map</a>
      <p style={{marginTop:'10px', marginBottom:'0px'}}><strong>Instructions:</strong></p>
      <ol>
        <li>Enter the grid reference number or postcode of your compartment in the top left search box</li>
        <li>Select the LIS button on the taskbar (might be called something else) on the top right</li>
        <li>Select the relevant drawing option (draw, polygon, rectangle) to select the outline of your compartment</li>
        <li>Enter a report name in the Report Name text box</li>
        <li>Click on the Click Report button and wait for a few seconds</li>
        <li>Click on the printer icon above 'Constraints'</li>
        <li>Wait for the report to be generated, then click on the 'Print' button</li>
        <li>Select your Printer to be 'Save as PDF' and save the generated report</li>
        <li>Upload the document by cicking on the button below and wait a few seconds for the program to extract the relevant information from the document</li>
      </ol>
    </div>

    <div className='instructions'>
      <a href="https://magic.defra.gov.uk/MagicMap.aspx" target='_blank'>Click here to access the DEFRA Magic map</a>
      <p style={{marginTop:'10px', marginBottom:'0px'}}><strong>Instructions:</strong></p>
      <ol>
        <li>Enter the grid reference number or postcode of your compartment in the top left search box</li>
        <li>Select the Site Check button on the taskbar on the top</li>
        <li>Select the relevant drawing option (draw, polygon, rectangle) to select the outline of your compartment</li>
        <li>Enter a report name in the Report Name text box</li>
        <li>Click on the Click Report button and wait for a few seconds</li>
        <li>Click on the printer icon above 'Constraints'</li>
        <li>Wait for the report to be generated, then click on the 'Print' button</li>
        <li>Select your Printer to be 'Save as PDF' and save the generated report</li>
        <li>Upload the document by cicking on the button below and wait a few seconds for the program to extract the relevant information from the document</li>
      </ol>
    </div>


    {/* <Form.Group className="mb-3 form-blocks">
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
    </Form.Group> */}

    <ButtonsBottomThree nextPage={nextPage} previousPage={previousPage}/>
  </Form>
  </div>
}
export default DefraFormPage7;