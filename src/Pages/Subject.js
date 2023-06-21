import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Container, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown, FaTrash, FaEdit } from 'react-icons/fa';
import AllocateSubjectPopup from './AlllocateSubject';
import axios from 'axios';
import { endpoints } from '../EndPoints';

const Subject = () => {
    const [subjectid, setSubjectID] = useState('');
    const [subjectname, setSubjectName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            SubjectName: subjectname
        }

        axios.post(`${endpoints.API_URL}/Subject`, data, {
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

        setSubjectName('');


    };

    //reset the input fields
    const resetSubjectInputFields = () => {
        setSubjectName('');
    };

    useEffect(() => {
        fetchData();
    }, []);

    //delete student
    const deleteSubject = (id) => {
        axios.delete(`${endpoints.API_URL}/Subject/${id}`, {
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

    //get subject list
    const fetchData = () => {
        axios.get(`${endpoints.API_URL}/Subject`)
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

    //updatet_one subject fetch
    const updateSubjectFetch = (subject) => {
        setSubjectID(subject.SubjectID);
        setSubjectName(subject.SubjectName);
    };

    //update teacher 
    const updateSubject = (subject) => {
        const updatedata = {
            SubjectID: subjectid,
            SubjectName: subjectname
        }

        axios.put(`${endpoints.API_URL}/Subject`, updatedata, {
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

                        Subject Details
                        <FaSortDown className="sort-down" />
                    </CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="subjectname">Subject Name:<FaAsterisk className="required-icon" /></Label>
                                    <Input
                                        type="text"
                                        id="subjectname"
                                        value={subjectname}
                                        onChange={(e) => setSubjectName(e.target.value)}
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
                                <Button className="button update" type="button" onClick={updateSubject}>Update</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button reset' type="button" onClick={resetSubjectInputFields}>Reset</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button allocate' type="button" onClick={togglePopup} >Allocate Subject</Button>
                                <AllocateSubjectPopup isOpen={isOpen} togglePopup={togglePopup} />
                            </Col>
                        </Row>

                    </Form>
                </CardBody>


            </Card>

            <Card>
                <CardBody>
                    <CardTitle className='card-title'>
                        <FaCube className="caret-icon" />

                        Existing Subjects
                        <FaSortDown className="sort-down" />
                    </CardTitle>

                    <Table className="student-table">
                        <thead>
                            <tr>
                                <th>Subject Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((subject, index) => (

                                <tr key={index}>
                                    <td>{subject.SubjectName}</td>
                                    <td>
                                        <FaTrash className='table-icon' onClick={() => deleteSubject(subject.SubjectID)} />
                                        <FaEdit className='table-icon' onClick={() => updateSubjectFetch(subject)} />
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

export default Subject;
