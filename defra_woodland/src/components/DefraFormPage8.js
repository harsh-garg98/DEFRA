import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ButtonsBottom from "./ButtonsBottom";
import ButtonsBottomThree from "./ButtonsBottomThree";
import { useState } from "react";
import axios from "axios";

const DefraFormPage8 = ({ nextPage, previousPage }) => {
  const [postcode, setPostcode] = useState("");
  const [easting, setEasting] = useState(null);
  const [northing, setNorthing] = useState(null);
  const [pointLocation, setPointLocation] = useState(null);

  const handleChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://api.getthedata.com/postcode/${postcode}`)
      .then((response) => {
        const eastingValue = response.data.data.easting;
        const northingValue = response.data.data.northing;

        setEasting(eastingValue);
        setNorthing(northingValue);

        // Make the POST request using the retrieved values
        return axios.post("http://127.0.0.1:5000/api/data", {
          easting: eastingValue,
          northing: northingValue,
        });
      })
      .then((postResponse) => {
        // Handle the response from the POST request if needed
        console.log("POST Response:", postResponse.data);
        setPointLocation(postResponse.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <h2>
        <p className="Header">Environment Check</p>
      </h2>

      <Form className="form-capsule">
        <div className="instructions">
          <a href="#">
            Click here for detailed instructions on how to fill the forms
          </a>
        </div>

        <div>
          <Form.Group className="mb-3 form-blocks" controlId="postcode">
            <Form.Label>Enter your land's post code</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter post code"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleSubmit}>
            Submit
          </Button>

          <p>The easting is: {easting}</p>
          <p>The northing is: {northing}</p>
          <p>This piece of land is inside a protected habitat</p>
          <p>{pointLocation}</p>
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

        <ButtonsBottomThree nextPage={nextPage} previousPage={previousPage} />
      </Form>
    </div>
  );
};
export default DefraFormPage8;
