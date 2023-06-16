import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Container, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown } from 'react-icons/fa';


const Teacher = ({ addTeacher }) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactno, setContactNo] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        addTeacher({ firstname, lastname, contactno, email });
        setFirstName('');
        setLastName('');
        setContactNo('');
        setEmail('');

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
                                <Button className='button' type="submit" color="success">Save</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button' type="button" color="danger">Delete</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button' type="button" color="secondary">Reset</Button>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Naduni</td>
                                <td>Sankalpana</td>
                                <td>0712067543</td>
                                <td>example@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Hirusha</td>
                                <td>Madhawa</td>
                                <td>0776954356</td>
                                <td>example@gmail.com</td>
                                
                            </tr>
                            <tr>
                                <td>Naduni</td>
                                <td>Sankalpana</td>
                                <td>0712067543</td>
                                <td>example@gmail.com</td>
                                
                            </tr>
                            <tr>
                                <td>Hirusha</td>
                                <td>Madhawa</td>
                                <td>0776954356</td>
                                <td>example@gmail.com</td>
                                
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>

            </Card>

        </>

    );
};

export default Teacher;
