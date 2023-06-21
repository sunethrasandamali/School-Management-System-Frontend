import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Container, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown, FaTrash, FaEdit } from 'react-icons/fa';
import AllocateClassroomPopup from './AlllocateClassroom';
import axios from 'axios';
import { endpoints } from '../EndPoints';

const Classroom = () => {
    const [classroomid, setClassroomID] = useState('');
    const [classroomname, setClassroomName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            ClassroomName: classroomname
        }

        axios.post(`${endpoints.API_URL}/Classroom`, data, {
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

        setClassroomName('');


    };

    //reset the input fields
    const resetClassroomInputFields = () => {
        setClassroomName('');
    };

    useEffect(() => {
        fetchData();

    }, []);

    //delete student
    const deleteClassroom = (id) => {
        axios.delete(`${endpoints.API_URL}/Classroom/${id}`, {
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

    //get all classroom list
    const fetchData = () => {
        axios.get(`${endpoints.API_URL}/Classroom`)
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

    //update_one classroom fetch
    const updateClassroomFetch = (classroom) => {
        setClassroomID(classroom.ClassroomID);
        setClassroomName(classroom.ClassroomName);
    };

    //update classroom 
    const updateClassroom = (classroom) => {
        const updatedata = {
            ClassroomID: classroomid,
            ClassroomName: classroomname,
        }

        axios.put(`${endpoints.API_URL}/Classroom`, updatedata, {
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

                        Classroom Details
                        <FaSortDown className="sort-down" />
                    </CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="classroomname">Classsroom Name:<FaAsterisk className="required-icon" /></Label>
                                    <Input
                                        type="text"
                                        id="classroomname"
                                        value={classroomname}
                                        onChange={(e) => setClassroomName(e.target.value)}
                                        required />
                                </FormGroup>
                            </Col>

                        </Row>

                        <Row>
                            <Col md={3}>
                                <Button className='button save' type="submit" >Save</Button>
                            </Col>
                            {/* <Col md={3}>
                                <Button className='button' type="button" color="danger">Delete</Button>
                            </Col> */}
                            <Col md={3}>
                                <Button className="button update" type="button"  onClick={updateClassroom}>Update</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button' type="button" onClick={resetClassroomInputFields}>Reset</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button allocate' type="button" onClick={togglePopup}>Allocate classroom</Button>
                                <AllocateClassroomPopup isOpen={isOpen} togglePopup={togglePopup} />
                            </Col>
                        </Row>

                    </Form>
                </CardBody>


            </Card>

            <Card>
                <CardBody>
                    <CardTitle className='card-title'>
                        <FaCube className="caret-icon" />

                        Existing Classroom
                        <FaSortDown className="sort-down" />
                    </CardTitle>

                    <Table className="student-table">
                        <thead>
                            <tr>
                                <th>Classroom Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((classroom, index) => (

                                <tr key={index}>
                                    <td>{classroom.ClassroomName}</td>
                                    <td>
                                        <FaTrash className='table-icon' onClick={() => deleteClassroom(classroom.ClassroomID)} />
                                        <FaEdit className='table-icon' onClick={() => updateClassroomFetch(classroom)} />
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

export default Classroom;
