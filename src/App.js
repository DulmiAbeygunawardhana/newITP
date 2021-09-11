import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";



import ManageRadiologyPatient from './components/pages/manageRadiologyPatient';
import AddRadiologyPatient from './components/pages/addRadiologyPatient';
import ViewRadiologyPatient from './components/pages/viewRadiologyPatient';
import EditRadiologyPatient from './components/pages/editRadiologyPatient';
 

function App() {
  return (
    <Router>
      <Navbar/>
       <div className>
       
        <br/>
     
        <Route path='/manageRadiologyPatient' component={ManageRadiologyPatient} />
        <Route path='/addRadiologyPatient' component={AddRadiologyPatient} />
        <Route path='/viewRadiologyPatient' component={ViewRadiologyPatient} />
        <Route path='/edit/:id' component={EditRadiologyPatient} />
     </div>   
    </Router>
  );
}

export default App;

