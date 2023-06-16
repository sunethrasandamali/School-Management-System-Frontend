import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Container, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown } from 'react-icons/fa';
import AllocateSubjectPopup from './AlllocateSubject';


const Subject = ({ addSubject }) => {
    const [subjectname, setSubjectName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactno, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSubject({ subjectname, lastname, contactno, email });
        setSubjectName('');
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
                                <Button className='button' type="submit" color="success">Save</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button' type="button" color="danger">Delete</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button' type="button" color="secondary">Reset</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='allocate-button' type="button" color='' onClick={togglePopup} >Allocate Subject</Button>
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
                                {/* <th>Last Name</th>
                                <th>Contact No</th>
                                <th>Email</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>English</td>
                                {/* <td>Sankalpana</td>
                                <td>0712067543</td>
                                <td>example@gmail.com</td> */}
                            </tr>
                            <tr>
                                <td>Sinhala</td>
                                {/* <td>Madhawa</td>
                                <td>0776954356</td>
                                <td>example@gmail.com</td> */}
                                
                            </tr>
                            <tr>
                                <td>Tamil</td>
                                {/* <td>Sankalpana</td>
                                <td>0712067543</td>
                                <td>example@gmail.com</td> */}
                                
                            </tr>
                            <tr>
                                <td>Mathematics</td>
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

export default Subject;
