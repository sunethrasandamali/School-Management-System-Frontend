import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Container, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown } from 'react-icons/fa';
import AllocateClassroomPopup from './AlllocateClassroom';


const Classroom = ({ addClassroom }) => {
    const [classroomname, setClassroomName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactno, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [isOpen, setIsOpen] = useState(false);

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
                                {/* <th>Last Name</th>
                                <th>Contact No</th>
                                <th>Email</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Grade 6A</td>
                                {/* <td>Sankalpana</td>
                                <td>0712067543</td>
                                <td>example@gmail.com</td> */}
                            </tr>
                            <tr>
                                <td>Grade 6B</td>
                                {/* <td>Madhawa</td>
                                <td>0776954356</td>
                                <td>example@gmail.com</td> */}
                                
                            </tr>
                            <tr>
                                <td>Grade 6C</td>
                                {/* <td>Sankalpana</td>
                                <td>0712067543</td>
                                <td>example@gmail.com</td> */}
                                
                            </tr>
                            <tr>
                                <td>Grade 6D</td>
                                {/* <td>Madhawa</td>
                                <td>0776954356</td>
                                <td>example@gmail.com</td> */}
                                
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>

            </Card>

        </>

    );
};

export default Classroom;
