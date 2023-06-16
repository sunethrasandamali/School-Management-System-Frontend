import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Container, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown } from 'react-icons/fa';
import AllocateSubjectPopup from './AlllocateSubject';
import axios from 'axios';
import { endpoints } from '../EndPoints';

const Subject = ({ addSubject }) => {
    const [subjectname, setSubjectName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactno, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [data,setData] = useState([]);

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

    useEffect(() => {
        fetchData();
    }, []);

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
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((subject, index) => (
                              
                              <tr key={index}>
                                  <td>{subject.SubjectName}</td>
                               
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
