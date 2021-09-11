import React, { Component } from 'react';
import axios from 'axios';
import './radiology.css';

export default class EditRadiologyPatient extends Component {
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

  componentDidMount() {
    axios.get('http://localhost:5000/radiology/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                patientname: response.data.patientname,
                nic: response.data.nic,
                email: response.data.email,
                address: response.data.address,
                mobilenumber: response.data.mobilenumber,
                age: response.data.age,
                gender: response.data.gender,
                testingname: response.data.testingname,
               
            })
        })
        .catch(function (error) {
            console.log(error);
        })

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

    axios.post('http://localhost:5000/radiology/update/'+ this.props.match.params.id, radiology)
    .then(res => console.log(res.data));


    window.location = '/'; 
}

                     
  render() {

    return (
      <div className='editRadiologyPatient'>
      <div className='container'>
          <h3>Edit Radiology Patient Details</h3>
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
                  <label>Gender: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.gender}
                      onChange={this.onChangeGender}
                  />
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
                  <input type="submit" value="Edit Radiology Patient Details" className="btn btn-primary" />
              </div>
          </form>
      </div>
  </div>
)
    }
  }
