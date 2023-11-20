import { DropdownButton, Dropdown } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonsBottomThree from './ButtonsBottomThree';

const DefraFormPage3 = ({nextPage, previousPage}) => {
    const propertyName = 'Placeholder name'
    const totalArea = 1.6
    
    return <div>
    <h2>
      <p className='Header'>Outline</p>
    </h2>

    <Form className='form-capsule'>

    <div className='instructions'>
      <a href="">Click here for detailed instructions on how to fill the forms</a>
    </div>

    <div className='instructions' style={{marginBottom: '-15px'}}>
      <p>Site/Property Name: <strong>{propertyName}</strong></p>
    </div>

    <div className='instructions' style={{marginBottom: '-10px'}}>
      <p>Total (gross) area of woodland creation in this application (ha): <strong>{totalArea}</strong></p>
      <ul style={{marginTop: '-10px', fontSize: 'small'}}>
        <li >The minimum requirement is 1ha per application and 0.1ha per block</li>
        <li>This area can include up to 40% integral open space but you should consider if this will affect any Additional Contributions you are applying for</li>
      </ul>
    </div>

    <Form.Group className="mb-3 form-blocks">
      <Form.Label>
        What is the long term vision for the new woodland? <br /><pre className='multi-line-label'>(Please include how you plan to address EWCO Priority Objectives from the <a href='#scoring'>Scoring</a> worksheet)</pre>
      </Form.Label>
      <Form.Control type="name" placeholder="Enter Details" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks">
      <Form.Label>
        Further notes:<br /><pre className='multi-line-label'>(Include details of any additional planting that you will be carrying out that is not included in this Application and an explanation of any protection items you are applying for)</pre>
      </Form.Label>
      <Form.Control type="name" placeholder="Enter Details" />
    </Form.Group>

    <p>For the next 3 questions consider the following in your answers: Any EIA afforestation projects completed (i.e., planted but not established) 
    within the last five years that are adjacent to your proposal must be considered by the FC when reviewing your proposal. This may change your proposal 
    area and therefore how the FC processes your application. If in doubt please get in touch with the FC to see whether it should be considered adjacent 
    for the purpose of EIA thresholds.</p>

    <Form.Group className="mb-3 form-blocks">
      <Form.Label>
        How many hectares of afforestation have been completed (i.e.: planted, but not necessarily established) on adjacent sites within the past five years?
      </Form.Label>
      <Form.Control type="name" placeholder="Enter Number" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks">
      <Form.Label>
        Adding adjacent projects to your current afforestation proposal, what is the new total gross area of your proposal? (ha)
      </Form.Label>
      <Form.Control type="name" placeholder="Enter Number" />
    </Form.Group>

    <Form.Group className="mb-3 form-blocks">
      <Form.Label>
        Do adjacent projects sit within or affect additional sensitive areas not covered by your proposal?
      </Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">No</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <Form.Group className="mb-3 form-blocks">
      <Form.Label>
        You have the first 2 years of your agreement in which to complete capital works; please indicate in which year you will be claiming capital items or actual costs.
      </Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select Answer" variant="secondary">
        <Dropdown.Item href="#/action-1">Scheme Year 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Scheme Year 2</Dropdown.Item>
      </DropdownButton>
    </Form.Group>

    <ButtonsBottomThree nextPage={nextPage} previousPage={previousPage}/>
  </Form>
  </div>
}
export default DefraFormPage3;