import { Form, InputGroup } from "react-bootstrap"

const StakeholdersPage5 = () => {
    return(
    <>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Stakeholder (i.e. organisation name, private individual, etc)</InputGroup.Text>
      <Form.Control/>
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Contact Name</InputGroup.Text>
      <Form.Control/>
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Email ID / Medium of contact</InputGroup.Text>
      <Form.Control/>
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Phone Number</InputGroup.Text>
      <Form.Control/>
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Date Contacted</InputGroup.Text>
      <Form.Control type='date' />
      <InputGroup.Text id="basic-addon1">Date Feedback Received</InputGroup.Text>
      <Form.Control type='date' />
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">
        {['Please note any feedback and how you will', <br />, 'incorporate this in your Woodland Creation Plan']}
        </InputGroup.Text>
      <Form.Control as='textarea' />
    </InputGroup>
    </>)
}

export default StakeholdersPage5;