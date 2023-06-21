import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Container, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown, FaTrash, FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { endpoints } from '../EndPoints';

const Teacher = ({ addTeacher }) => {
    const [teacherid, setTeacherID] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactno, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);


    //insert teacher
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            FirstName: firstname,
            LastName: lastname,
            ContactNo: contactno,
            Email: email
        }

        axios.post(`${endpoints.API_URL}/Teacher`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    window.location.reload()
                }
                // Handle successful response
                //setData(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });

        setFirstName('');
        setLastName('');
        setContactNo('');
        setEmail('');

    };

    //reset the input fields
    const resetTeacherInputFields = () => {
        setFirstName('');
        setLastName('');
        setContactNo('');
        setEmail('');
    };

    useEffect(() => {
        fetchData();
    }, []);

    //delete student
    const deleteTeacher = (id) => {
        axios.delete(`${endpoints.API_URL}/Teacher/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response);

                window.location.reload()

                // Handle successful response
                //setData(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };
    
    //get teacher list
    const fetchData = () => {
        axios.get(`${endpoints.API_URL}/Teacher`)
            .then(response => {
                console.log(response);

                // Handle successful response
                setData(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    }

    //updatet_one teacher fetch
    const updateTeacherFetch = (teacher) => {
        setTeacherID(teacher.TeacherID);
        setFirstName(teacher.FirstName);
        setLastName(teacher.LastName);
        setContactNo(teacher.ContactNo);
        setEmail(teacher.Email);
    };

    //update teacher 
    const updateTeacher = (teacher) => {
        const updatedata = {
            TeacherID: teacherid,
            FirstName: firstname,
            LastName: lastname,
            ContactNo: contactno,
            Email: email
        }

        axios.put(`${endpoints.API_URL}/Teacher`, updatedata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response);

                window.location.reload()

                // Handle successful response
                //setData(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };

    return (

        <>

            <Card>
                <CardBody>
                    <CardTitle className='card-title'>
                        <FaCube className="caret-icon" />

                        Teacher Details
                        <FaSortDown className="sort-down" />
                    </CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="firstname">First Name:<FaAsterisk className="required-icon" /></Label>
                                    <Input
                                        type="text"
                                        id="firstname"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="lastname">Last Name:<FaAsterisk className="required-icon" /></Label>
                                    <Input
                                        type="text"
                                        id="lastname"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="contactno">Contact No:<FaAsterisk className="required-icon" /></Label>
                                    <Input
                                        type="tel"
                                        id="contactno"
                                        value={contactno}
                                        onChange={(e) => setContactNo(e.target.value)}
                                        required />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="email">Email Address:<FaAsterisk className="required-icon" /></Label>
                                    <Input
                                        type="text"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>


                        <Row>
                            <Col md={3}>
                                <Button className='button save' type="submit">Save</Button>
                            </Col>
                            {/* <Col md={3}>
                                <Button className='button delete' type="button" color="danger">Delete</Button>
                            </Col> */}
                            <Col md={3}>
                                <Button className="button update" type="button" onClick={updateTeacher}>Update</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button reset' type="button" onClick={resetTeacherInputFields}>Reset</Button>
                            </Col>
                        </Row>

                    </Form>
                </CardBody>


            </Card>

            <Card>
                <CardBody>
                    <CardTitle className='card-title'>
                        <FaCube className="caret-icon" />

                        Existing Teachers
                        <FaSortDown className="sort-down" />
                    </CardTitle>

                    <Table className="student-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((teacher, index) => (
                                console.log("Teacher:" + teacher),
                                <tr key={index}>
                                    <td>{teacher.FirstName}</td>
                                    <td>{teacher.LastName}</td>
                                    <td>{teacher.ContactNo}</td>
                                    <td>{teacher.Email}</td>
                                    <td>
                                        <FaTrash className='table-icon' onClick={() => deleteTeacher(teacher.TeacherID)} />
                                        <FaEdit className='table-icon' onClick={() => updateTeacherFetch(teacher)} />
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </CardBody>

            </Card>

        </>

    );
};

export default Teacher;
