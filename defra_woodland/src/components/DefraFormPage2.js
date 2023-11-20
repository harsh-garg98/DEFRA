import { DropdownButton, Dropdown, } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonsBottomThree from './ButtonsBottomThree';

const DefraFormPage2 = ({nextPage , previousPage}) => {
    return <div>
    <h2>
      <p className='Header'>Summary</p>
    </h2>

    <Form className='form-capsule'>

    <div className='instructions'>
      <a href="">Click here for detailed instructions on how to fill the forms</a>
    </div>
      
    <Form.Group className="mb-3 form-blocks" controlId="applicantName">
      <Form.Label>Enter Central Grid References separated by commas if more than 1 (e.g. ABCD1234,EFGH5678)</Form.Label>
      <Form.Control type="name" placeholder="Enter Central Grid References" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>Select Grid Reference and fill details for each</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">ABCD1234</Dropdown.Item>
        <Dropdown.Item href="#/action-2">EFGH5678</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <h4 className='small-header'>Land Summary</h4>
    <Form.Group className="mb-3 form-blocks" controlId="sbi">
      <Form.Label>Gross Area of Compartment (in gross hectares, including open space)</Form.Label> How do we find it?
      <Form.Control type="name" placeholder="Enter a number" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>Current Compartment Land use</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Scrub</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Arable</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cropped</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Improved Grassland</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Semi-improved Grassland</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Unimproved Land</Dropdown.Item>
      </DropdownButton>
    </Form.Group>
    
    <Form.Group className="mb-3 form-blocks" controlId="nameOfProperty">
      <Form.Label>Proposed % integral open space</Form.Label>
      <Form.Control type="name" placeholder="Enter a number (should not exceed 100)" />
    </Form.Group>
    <p className='form-blocks'>Proposed net area of woodland creation - excluding open spaces (ha) = Will be auto-calculated </p>

    <h4 className='small-header'>Natural Colonization</h4>
    
    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>Will natural colonisation be used as a proposed establishment method in this compartment?</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">No</Dropdown.Item>
      </DropdownButton>
    </Form.Group>
    
    <Form.Group className="mb-3 form-blocks" controlId="nameOfProperty">
      <Form.Label>If yes, what amount of the net area will this cover? (in ha)</Form.Label>
      <Form.Control type="name" placeholder="Enter a number" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>    If yes, what is the predominant expected colonisation species?</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Native Broadleaf</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Non Native Broadleaf</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Naturalised Broadleaf</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Native Conifer</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Non Native Conifer</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Naturalised Conifer</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <h4 className='small-header'>Soil Type and Cultivation</h4>

    <Form.Group className="mb-3 form-blocks" controlId="nameOfProperty">
      <Form.Label>Proposed % integral open space</Form.Label>
      <Form.Control type="name" placeholder="Enter a number (should not exceed 100)" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>Soil Type</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Brown Earth</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Gleys</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Podzols</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Ironpans</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Rankers/Rendzinas</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Littoral</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Man-made Soils</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="woodlandGrant">
      <Form.Label>Proposed Cultivation Technique</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Hand turfing, inverted, hinge & trench mounding, patch scarification</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hand Screefing Only</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Shallow/rotary (&lt;30cm) plough, Disc/line scarification</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Deep (&gt;30cm) plough, with or without line, ripping</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Agricultural Ploughing</Dropdown.Item>
        <Dropdown.Item href="#/action-6">No Ground Preparation</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <h4 className='small-header'>Others</h4>

    <Form.Group className="mb-3 form-blocks" controlId="nameOfProperty">
      <Form.Label>Is there one or more current grant agreements on this compartment? 
        If yes, confirm the type of grants in the box below (e.g. HLS, ELS, CS Mid Tier, etc) 
        (if YES, your application MAY NOT be accepted)</Form.Label>
      <Form.Control type="name" placeholder="Enter Required Details" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="nameOfProperty">
      <Form.Label>If yes, what is the reference for the current grant agreement(s)? (If more than one, separate with a comma ‘,’)</Form.Label>
      <Form.Control type="name" placeholder="Enter Required Details" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks" controlId="nameOfProperty">
      <Form.Label>If yes, what is the expiry date for the current grant agreement(s)? (If more than one, separate with a comma ‘,’)</Form.Label>
      <Form.Control type="date" />
    </Form.Group>

    <ButtonsBottomThree nextPage={nextPage} previousPage={previousPage}/>
  </Form>
  </div>
}
export default DefraFormPage2;