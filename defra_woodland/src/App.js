import './App.css';
import DefraFormLogin from './components/DefraFormLogin';
import DefraFormRegister from './components/DefraFormRegister';
import DefraFormPage1 from './components/DefraFormPage1';
import DefraFormPage2 from './components/DefraFormPage2';
import BackgroundImage from './components/BackgroundImage';
import FormComponent from './components/FormComponent';
import { useEffect, useState } from 'react';
import StakeholdersPage5 from './components/StakeholdersPage5';

function App() {

  return (
    <div className="App">
      <BackgroundImage />
      <FormComponent />
    </div>
      
  );
}

export default App;