import React, { Component } from 'react';
import axios from 'axios';
import './student.css';

export default class UpdateStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            gender: '',
            dob: '',
            fatherName: '',
            contactNo: '',
            result: '',
            idError: '',
            nameError: '',
            genderError: '',
            dobError: '',
            fatherNameError: '',
            contactError: ''
        };
    }

    validateId = (id) => {
        const re = /^[0-9]+/;
        if (id === '') {
            return 'ID is required';
        } else if (!re.test(id)) {
            return 'Invalid ID';
        } else {
            return null;
        }
    };

    validateName = (name) => {
        const re = /^[a-zA-Z\s]+$/;
        if (name === '') {
            return 'Name is required';
        } else if (!re.test(name)) {
            return 'Invalid name';
        } else {
            return null;
        }
    };

    validateGender = (gender) => {
        if (gender === '') {
            return 'Gender is required';
        } else {
            return null;
        }
    };

    validateDob = (dob) => {
        if (dob === '') {
            return 'Date of birth is required';
        } else {
            return null;
        }
    };

    validateFatherName = (fatherName) => {
        const re = /^[a-zA-Z\s]+$/;
        if (fatherName === '') {
            return 'Father\'s Name is required';
        } else if (!re.test(fatherName)) {
            return 'Invalid Father\'s Name';
        } else {
            return null;
        }
    };

    validateContact = (contactNo) => {
        const re = /^[0-9]{10}$/;
        if (contactNo === '') {
            return 'Contact number is required';
        } else if (!re.test(contactNo)) {
            return 'Invalid contact number';
        } else {
            return null;
        }
    };

    handleUpdate = () => {
        let idError = this.validateId(this.state.id);
        let nameError = this.validateName(this.state.name);
        let genderError = this.validateGender(this.state.gender);
        let dobError = this.validateDob(this.state.dob);
        let fatherNameError = this.validateFatherName(this.state.fatherName);
        let contactError = this.validateContact(this.state.contactNo);

        this.setState({ idError, nameError, genderError, dobError, fatherNameError, contactError });

        if (!idError && !nameError && !genderError && !dobError && !fatherNameError && !contactError) {
            const { id, name, gender, dob, fatherName, contactNo } = this.state;

            const updatedStudent = {
                name,
                gender,
                dob,
                fatherName,
                contactNo
            };

            axios.put(`http://localhost:3004/students/${id}`, updatedStudent)
                .then(() => {
                    this.setState({ result: 'Student successfully updated!' });
                })
                .catch((error) => {
                    console.error('There was an error updating the student!', error);
                });
        }
    };

    render() {
        return (
            <div className="container ">
                <form onSubmit={(e) => { e.preventDefault(); this.handleUpdate(); }}>
                    <h1 className="text-center">Student Management System</h1>

                    <div className="form-group">
                        <label>Student ID</label>
                        <input type="text" className="form-control" value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })} />
                        <small className="text-danger">{this.state.idError}</small>
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        <small className="text-danger">{this.state.nameError}</small>
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select className="form-control" value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <small className="text-danger">{this.state.genderError}</small>
                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="date" className="form-control" value={this.state.dob} onChange={(e) => this.setState({ dob: e.target.value })} />
                        <small className="text-danger">{this.state.dobError}</small>
                    </div>

                    <div className="form-group">
                        <label>Father's Name</label>
                        <input type="text" className="form-control" value={this.state.fatherName} onChange={(e) => this.setState({ fatherName: e.target.value })} />
                        <small className="text-danger">{this.state.fatherNameError}</small>
                    </div>

                    <div className="form-group">
                        <label>Contact No.</label>
                        <input type="text" className="form-control" value={this.state.contactNo} onChange={(e) => this.setState({ contactNo: e.target.value })} />
                        <small className="text-danger">{this.state.contactError}</small>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Update Student</button>
                </form>

                {this.state.result && <div className="alert alert-success mt-4">{this.state.result}</div>}
            </div>
        );
    }
}
