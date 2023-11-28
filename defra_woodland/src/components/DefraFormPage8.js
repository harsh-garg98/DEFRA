import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ButtonsBottomThree from "./ButtonsBottomThree";
import { useState } from "react";
import axios from "axios";

const DefraFormPage8 = ({ 
  nextPage, 
  previousPage }) => {
  const [postcode, setPostcode] = useState("");
  const [gridReference, setGridReference] = useState("");
  const [easting, setEasting] = useState(null);
  const [northing, setNorthing] = useState(null);
  const [pointLocation, setPointLocation] = useState(['Information needed', 'Information needed', 'Information needed']);

  const handleChangePostcode = (event) => {
    setPostcode(event.target.value);
  };

  const handleChangeGridReference = (event) => {
    setGridReference(event.target.value);
  };

  const handleSubmitPostcode = (event) => {
    event.preventDefault();
    console.log(postcode);
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
        console.log(`The easting and northing coordinates: (${easting}, ${northing})`);
        console.log("POST Response:", postResponse.data);
        setPointLocation(postResponse.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  function gridRefToEastingNorthing(gridRef) {
    // Check if the input is valid
    if (typeof gridRef !== "string" || gridRef.length < 4 || gridRef.length % 2 !== 0) {
      window.alert("Invalid grid reference number");
    }

    // Split the grid reference into two parts: letters and numbers
    var letters = gridRef.slice(0, 2).toUpperCase();
    var numbers = gridRef.slice(2);

    // Check if the letters are valid
    if (!/^[A-HJ-Z]{2}$/.test(letters)) {
      window.alert("Invalid grid reference letters");
    }

    // Convert the letters to a 100km square index
    var letter1 = letters.charCodeAt(0) - 65;
    var letter2 = letters.charCodeAt(1) - 65;

    // Adjust for skipped I
    if (letter1 > 7) letter1--;
    if (letter2 > 7) letter2--;

    // Calculate the 100km square easting and northing
    var easting100km = ((letter1 % 5) * 5 + (letter2 % 5)) * 100000;
    var northing100km = (19 - Math.floor(letter1 / 5) * 5 - Math.floor(letter2 / 5)) * 100000;

    // Split the numbers into two parts: eastings and northings
    var halfLength = numbers.length / 2;
    var eastings = numbers.slice(0, halfLength);
    var northings = numbers.slice(halfLength);

    // Pad the numbers with zeros to 5 digits
    eastings = eastings.padEnd(5, "0");
    northings = northings.padEnd(5, "0");

    // Convert the numbers to integers
    eastings = parseInt(eastings, 10);
    northings = parseInt(northings, 10);

    // Add the numbers to the 100km square easting and northing
    var eastingValue = easting100km + eastings;
    var northingValue = northing100km + northings;

    setEasting(eastingValue);
    setNorthing(northingValue);

    // Return the result as an object
    return { easting: eastingValue, northing: northingValue };
  }

  const handleSubmitGridReference = (event) => {
    event.preventDefault();
    const coordinates = gridRefToEastingNorthing(gridReference)
    axios.post("http://127.0.0.1:5000/api/data", coordinates)
      .then((postResponse) => {
        // Handle the response from the POST request if needed
        console.log(`The easting and northing coordinates: (${easting}, ${northing})`);
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

        <div style={{'marginBottom':'10px'}}>
          <Form.Group className="mb-3 form-blocks" controlId="postcode">
            <Form.Label>Enter your land's post code</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter post code"
              onChange={handleChangePostcode}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleSubmitPostcode}>
            Submit
          </Button>
        </div>

        <h4>OR</h4>

        <div style={{'marginBottom':'10px'}}>
          <Form.Group className="mb-3 form-blocks" controlId="grid_reference">
            <Form.Label>Enter your land's Grid reference number</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Grid reference number"
              onChange={handleChangeGridReference}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleSubmitGridReference}>
            Submit
          </Button>
        </div>

        <div>
          <p><b>This piece of land is inside a National Park:</b> {pointLocation[0]}</p>
          
          <p><b>This piece of land is inside a Ramsar site:</b> {pointLocation[1]}</p>
          
          <p><b>This piece of land is inside a Site of Special Scientific Interest:</b> {pointLocation[2]}</p>
          
        </div>

        <ButtonsBottomThree nextPage={nextPage} previousPage={previousPage} />
      </Form>
    </div>
  );
};
export default DefraFormPage8;
