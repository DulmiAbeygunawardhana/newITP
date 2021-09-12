import React, { Component } from 'react';
import axios from 'axios';
import './radiology.css';



export default class AddRadiologyPatient extends Component {
  constructor(props) {
    super(props);

    this.onChangePatientName = this.onChangePatientName.bind(this);
    this.onChangeNIC = this.onChangeNIC.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeTestingName = this.onChangeTestingName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      patientname: '',
      nic: '',
      email: '',
      address: '',
      mobilenumber: '',
      age: '',
      gender: '',
      testingname: '',
  }
}
onChangePatientName(e) {
    this.setState({
        patientname: e.target.value
    });
  }
  
  onChangeNIC(e) {
    this.setState({
        nic: e.target.value
    });
  }

onChangeEmail(e) {
  this.setState({
      email: e.target.value
  });
}

onChangeAddress(e) {
  this.setState({
      address: e.target.value
  });
}

onChangeMobileNumber(e) {
  this.setState({
      mobilenumber: e.target.value
  });
}

onChangeAge(e) {
  this.setState({
     age: e.target.value
  });
}

onChangeGender(e) {
this.setState({
   gender: e.target.value
});
}


onChangeTestingName(e) {
  this.setState({
      testingname: e.target.value
  });
}

onSubmit(e) {
  e.preventDefault();

  let g = document.getElementById("Gender").value;

  console.log(g);

  this.setState({
    gender: g
 });

  const radiology = {
    patientname: this.state.patientname,
    nic: this.state.nic,
    email: this.state.email,
    address: this.state.address,
    mobilenumber: this.state.mobilenumber,
    age: this.state.age,
    gender: this.state.gender,
    testingname: this.state.testingname
}

console.log(radiology);

 axios.post('http://localhost:5000/radiology/add', radiology)
             .then((res)=> {console.log(res.data)
                alert("Patient Added");

                
 window.location = '/viewRadiologyPatient'; 
            
            });
             

}
  render() {
    return (
      <div className='addRadiologyPatientPage'>
      <br />
     
      <div className='container' id="addRadiologyPatientForm">
          <h3 className="addRadiologyPatientTitle">ADD RADIOLOGY PATIENT </h3>
          <br />
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>PatientName: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.patientname}
                      onChange={this.onChangePatientName}
                  />
              </div>
              <div className="form-group">
                  <label>NIC: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.nic}
                      onChange={this.onChangeNIC}
                  />
              </div>
             
              <div className="form-group">
                  <label>Email: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                  />
              </div>
              <div className="form-group">
                  <label>Address: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onChangeAddress}
                  />
              </div>
              <div className="form-group">
                  <label>MobileNumber: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.mobilenumber}
                      onChange={this.onChangeMobileNumber}
                  />
              </div>
              <div className="form-group">
                  <label>Age: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.age}
                      onChange={this.onChangeAge}
                  />
              </div>
              <div className="form-group">
              <label>Gender:
                   <select id ="Gender" value={this.state.gender}
                       onChange={this.onChangeGender}>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                    </select>
              </label>
             </div>
              <div className="form-group">
                  <label>TestingName: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.testingname}
                      onChange={this.onChangeTestingName}
                  />
              </div>
              <br />
              <div className="form-group">
                  <input type="submit" value="ADD RADIOLOGY PATIENT" className="btn btn-primary" />
                  <br />
              </div>
          </form>
      </div>
  </div>
)
    }
  }