import React, { Component } from 'react';
import axios from 'axios';
import './student.css';

export default class DeleteStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            result: '',
            idError: ''
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

    handleDelete = () => {
        let idError = this.validateId(this.state.id);
        this.setState({ idError });

        if (!idError) {
            const { id } = this.state;

            axios.delete(`http://localhost:3004/students/${id}`)
                .then(() => {
                    this.setState({ result: 'Student successfully deleted!' });
                })
                .catch((error) => {
                    console.error('There was an error deleting the student!', error);
                    this.setState({ result: 'Error deleting student. Please try again.' });
                });
        }
    };

    render() {
        return (
            <div className="container ">
                <form onSubmit={(e) => { e.preventDefault(); this.handleDelete(); }}>
                    <h1 className="text-center">Student Management System</h1><br></br><br></br>

                    <div className="form-group">
                        <label>Student ID</label>
                        <input type="text" className="form-control" value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })} />
                        <small className="text-danger">{this.state.idError}</small>
                    </div>

                    <button type="submit" className="btn btn-danger btn-block">Delete Student</button>
                </form>

                {this.state.result && <div className="alert alert-info mt-4">{this.state.result}</div>}
            </div>
        );
    }
}
