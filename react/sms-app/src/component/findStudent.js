import React, { Component } from 'react';
import axios from 'axios';
import './student.css';

export default class FindStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            student: null,
            idError: '',
            result: ''
        };
    }

    validateId = (id) => {
        const re = /^[0-9]+$/;
        if (id === '') {
            return 'ID is required';
        } else if (!re.test(id)) {
            return 'Invalid ID';
        } else {
            return null;
        }
    };

    handleFind = () => {
        let idError = this.validateId(this.state.id);
        this.setState({ idError });

        if (!idError) {
            const { id } = this.state;

            axios.get(`http://localhost:3004/students/${id}`)
                .then((response) => {
                    this.setState({ student: response.data, result: 'Student found!' });
                })
                .catch((error) => {
                    console.error('There was an error finding the student!', error);
                    this.setState({ result: 'Student not found. Please check the ID.' });
                });
        }
    };

    render() {
        return (
            <div className="container ">
                <form onSubmit={(e) => { e.preventDefault(); this.handleFind(); }}><br></br><br></br>
                    <h1 className="text-center">Student Management System</h1><br></br>

                    <div className="form-group">
                        <label>Student ID</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.id} 
                            onChange={(e) => this.setState({ id: e.target.value })} 
                        />
                        <small className="text-danger">{this.state.idError}</small>
                    </div>

                    <button type="submit" className="btn btn-info btn-block">Find Student</button>
                </form>

                {this.state.result && <div className="alert alert-info mt-4">{this.state.result}</div>}

                {this.state.student && (
                    <div className="alert alert-info mt-4">
                        <h3>Student Details:</h3>
                        <p><strong>ID:</strong> {this.state.student.id}</p>
                        <p><strong>Name:</strong> {this.state.student.name}</p>
                        <p><strong>Gender:</strong> {this.state.student.gender}</p>
                        <p><strong>Date of Birth:</strong> {this.state.student.dob}</p>
                        <p><strong>Father's Name:</strong> {this.state.student.fatherName}</p>
                        <p><strong>Contact No:</strong> {this.state.student.contactNo}</p>
                    </div>
                )}
            </div>
        );
    }
}
