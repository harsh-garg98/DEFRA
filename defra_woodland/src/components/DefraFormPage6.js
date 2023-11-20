import { DropdownButton, Dropdown, InputGroup, Table, FormControl, Button, Tab } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonsBottomThree from './ButtonsBottomThree';
import { useState } from 'react';

const DefraFormPage6 = ( {nextPage, previousPage} ) => {

    const [rowsPlantedWoodland, setRowsPlantedWoodland] = useState(0)
    const [rowsSupplementaryPlanting, setRowsSupplementaryPlanting] = useState(0)

    const addRowPlantedWoodland = (event) => {
      event.preventDefault()
      setRowsPlantedWoodland(rowsPlantedWoodland + 1)
    }

    const removeRowPlantedWoodland = (event) => {
      event.preventDefault()
      if(rowsPlantedWoodland===0){
        window.alert('There are no rows to delete')
      }
      else
      {
      setRowsPlantedWoodland(rowsPlantedWoodland - 1)
      }
    }

    const addedRowsPlantedWoodland = []
    for (let i=0; i< rowsPlantedWoodland; i++){
      addedRowsPlantedWoodland.push(
        <tr style={{textAlign:'center'}}>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
        </tr>
      )
    }

    const addRowSupplementaryPlanting = (event) => {
      event.preventDefault()
      setRowsSupplementaryPlanting(rowsSupplementaryPlanting + 1)
    }

    const removeRowSupplementaryPlanting = (event) => {
      event.preventDefault()
      if(rowsSupplementaryPlanting===0){
        window.alert('There are no rows to delete')
      }
      else
      {
      setRowsSupplementaryPlanting(rowsSupplementaryPlanting - 1)
      }
    }

    const addedRowsSupplementaryPlanting = []
    for (let i=0; i< rowsSupplementaryPlanting; i++){
      addedRowsSupplementaryPlanting.push(
        <tr style={{textAlign:'center'}}>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
          <td className='col'><FormControl type='text' /></td>
        </tr>
      )
    }

    return <div>
    <h2>
      <p className='Header'>Species Breakdown</p>
    </h2>

    <Form className='form-capsule'>

    <div className='instructions'>
      <a href="">Click here for detailed instructions on how to fill the forms</a>
    </div>

    <div className='instructions'>
      <p style={{marginBottom:'10px'}}>
        <strong>Planted Woodland Details</strong>
      </p>
    </div>

    <Table responsive bordered>
      <thead>
        <tr>
          <th className='col-1'>A</th>
          <th className='col-1'>B</th>
          <th className='col-1'>C</th>
          <th className='col-1'>D</th>
          <th className='col-1'>E</th>
          <th className='col-1'>F</th>
          <th className='col-1'>G</th>
          <th className='col-1'>H</th>
          <th className='col-1'>I</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='col' colSpan={6} style={{textAlign:'center'}}><strong>Land Details</strong></td>
          <td className='col' colSpan={3} style={{textAlign:'center'}}><strong>Woodland Carbon Code</strong></td>
        </tr>
        <tr style={{textAlign:'center'}}>
          <td className='col'><strong>ID (auto)</strong></td>
          <td className='col'><strong>Central grid reference and compartment reference (or Parcel ID wherever applicable)</strong></td>
          <td className='col'><strong>Species (one per row) (Use species codes from the Species List Worksheet)</strong></td>
          <td className='col'><strong>Species % of net area (excluding natural colonisation)</strong></td>
          <td className='col'><strong>Stocking density of species</strong></td>
          <td className='col'><strong>No. of trees of this species in this compartment</strong></td>
          <td className='col'><strong>Spacing (metres)</strong></td>
          <td className='col'><strong>Predicted yield className</strong></td>
          <td className='col'><strong>Management regime</strong></td>
        </tr>
        {addedRowsPlantedWoodland}
      </tbody>
    </Table>

    <div className='button-container'>
    <Button className='button-groups mx-auto' variant="primary" type="submit" onClick={addRowPlantedWoodland}>
      Add Row
    </Button>

    <Button className='button-groups mx-auto' variant="primary" type="submit" onClick={removeRowPlantedWoodland}>
      Delete Row
    </Button>
    </div>

    <div className='instructions'>
      <p style={{marginBottom:'10px'}}>
        <strong>Lesser Known Species</strong>
      </p>
    </div>

    <InputGroup className="mb-3" style={{marginTop:'-10px'}}>
      <InputGroup.Text id="basic-addon1">
        {[ 
            'Any species that appear in this box may require',
            <br />, 
            'assessment for suitability. Your Woodland officer',
            <br />, 
            'may discuss this with you further during the application process.'
        ]}
        </InputGroup.Text>
      <Form.Control as='textarea' />
    </InputGroup>

    <div className='instructions'>
      <p style={{marginBottom:'10px'}}>
        <strong>Supplemenatry Planting</strong>
      </p>
    </div>

    <Table responsive bordered>
      <thead>
        <tr>
          <th className='col-1'>A</th>
          <th className='col-1'>B</th>
          <th className='col-1'>C</th>
          <th className='col-1'>D</th>
          <th className='col-1'>E</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='col' colSpan={5} style={{textAlign:'center'}}><strong>Land Details</strong></td>
        </tr>
        <tr style={{textAlign:'center'}}>
          <td className='col'><strong>ID</strong></td>
          <td className='col'><strong>Central grid reference and compartment reference (or Parcel ID wherever applicable)</strong></td>
          <td className='col'><strong>Species (one per row) (Use species codes from the Species List Worksheet)</strong></td>
          <td className='col'><strong>Number of trees of this species in this compartment</strong></td>
          <td className='col'><strong>Spacing (metres)</strong></td>
        </tr>
        {addedRowsSupplementaryPlanting}
      </tbody>
    </Table>

    <div className='button-container'>
    <Button className='button-groups mx-auto' variant="primary" type="submit" onClick={addRowSupplementaryPlanting}>
      Add Row
    </Button>

    <Button className='button-groups mx-auto' variant="primary" type="submit" onClick={removeRowSupplementaryPlanting}>
      Delete Row
    </Button>
    </div>

    <h4>Summary</h4>

    <Table responsive bordered>
      <thead>
        <tr style={{textAlign:'center'}}>
          <th>Average Stocking Density</th>
          <th>Total No. of Trees Planted</th>
          <th>Native Broadleaf Total %</th>
          <th>Non-Native Broadleaf Total %</th>
          <th>Naturalised Broadleaf Total %</th>
          <th>Native Conifer Total %</th>
          <th>Non-Native Conifer Total %</th>
          <th>Naturalised Conifer Total %</th>
          <th>Native Woody Shrubs Total %</th>
          <th>Natural Colonisation Total %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td colSpan={2}></td>
          <td colSpan={8} style={{textAlign:'center'}}>Calculated as a % of the total net area, NOT as a % of the total number of trees in the proposal</td>
        </tr>
      </tbody>

    </Table>

    <Table responsive bordered>
      <thead>
        <tr style={{textAlign:'center'}}>
          <th>Land Usage</th>
          <th>Hectares</th>
        </tr>
        </thead>
        <tbody style={{textAlign:'center'}}>
          <tr>
            <td>Total broadleaf</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total conifer</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total woody shrub</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total natural colonisation</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total open space</td>
            <td>0</td>
          </tr>
          <tr>
            <td><b>Total net area of woodland creation</b></td>
            <td><b>0</b></td>
          </tr>
          <tr>
            <td><b>Total net area of woodland creation</b></td>
            <td><b>0</b></td>
          </tr>
        </tbody>
    </Table>


    <ButtonsBottomThree nextPage={nextPage} previousPage={previousPage}/>
  </Form>
  </div>
}
export default DefraFormPage6;