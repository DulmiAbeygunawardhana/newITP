import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';
import './radiology.css';


const Cost = props => (
    <tr>
        
        <td>{props.cost.patientname}</td>
        <td>{props.cost.date}</td>
        <td>{props.cost.testingname}</td>
        <td>{props.cost.scanCost}</td>
        <td>{props.cost.noOfScans}</td>
        <td>{props.cost.totalCost}</td>

        <td>
            <a href="#" onClick={() => { props.deleteCost(props.cost._id) }}>delete</a>
        </td>
    </tr>
)

export default class ViewCost extends Component {
    constructor(props) {
        super(props);

        this.deleteCost = this.deleteCost.bind(this);

        this.state = { cost: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cost/')
            .then(response => {
                this.setState({ cost: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCost(id) {
        axios.delete('http://localhost:5000/cost/' + id)
            .then(res => console.log(res.data));

        this.setState({
            cost: this.state.cost.filter(sdl => sdl._id !== id)
        })
    }

    costDetailsList() {
        return this.state.cost.map(currentcost => {
            return <Cost cost={currentcost} deleteCost={this.deleteCost} key={currentcost._id} />;
        })
    }


    render() {
        return (
            <div className='viewcost'>
                <div className='container'>
                    <h3>Patient Scan Charge Details</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                
                                <th>PatientName</th>
                                <th>Date</th>
                                <th>Testing Name</th>
                                <th>Scan Cost</th>
                                <th>No Of Scans</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.salaryDetailsList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
