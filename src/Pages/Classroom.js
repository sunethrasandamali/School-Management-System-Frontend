import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Container, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown } from 'react-icons/fa';
import AllocateClassroomPopup from './AlllocateClassroom';
import axios from 'axios';
import { endpoints } from '../EndPoints';

const Classroom = ({ addClassroom }) => {
    const [classroomname, setClassroomName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactno, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addClassroom({ classroomname, lastname, contactno, email });
        setClassroomName('');
        setLastName('');
        setContactNo('');
        setEmail('');

    };

    useEffect(() => {
        fetchData();
    }, []);

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
                                <Button className='button' type="submit" color="success">Save</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button' type="button" color="danger">Delete</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button' type="button" color="secondary">Reset</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='allocate-button' type="button" color='' onClick={togglePopup}>Allocate classroom</Button>
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
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((classroom, index) => (
                              
                                <tr key={index}>
                                    <td>{classroom.ClassroomName}</td>
                                 
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
