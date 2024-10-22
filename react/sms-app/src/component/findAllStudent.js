import React, { Component } from 'react';
import axios from 'axios';
import './student.css';

export default class FindAllStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            result: ''
        };
    }

    componentDidMount() {
        this.handleFindAll();
    }

    handleFindAll = () => {
        axios.get('http://localhost:3004/students')
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState({ students: response.data, result: 'Students found!' });
                } else {
                    this.setState({ result: 'No students found.' });
                }
            })
            .catch((error) => {
                console.error('There was an error retrieving the students!', error);
                this.setState({ result: 'Failed to retrieve students. Please try again later.' });
            });
    };

    render() {
        return (
            <div className="container "><br></br><br></br>
                <h1 className="text-center">Student Management Student</h1><br></br>

                {this.state.result && <div className="alert alert-info mt-4">{this.state.result}</div>}

                {this.state.students.length > 0 && (
                    <table className="table table-striped mt-4">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Father's Name</th>
                                <th>Contact No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.fatherName}</td>
                                    <td>{student.contactNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}
