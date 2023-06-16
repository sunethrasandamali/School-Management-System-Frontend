import React, { useState } from 'react';
import { Button, Modal, Card, CardHeader, CardBody, Row, Col, Label, Table, Form, FormGroup, Input } from 'reactstrap';
import { FaWindowMinimize, FaWindowMaximize, FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
import { endpoints } from '../EndPoints';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './popup.scss'; // Custom styles for the popup

//fetch data to the dropdown list
// useEffect(() => {
//     fetchData();
// }, []);

// const fetchData = async () => {
//     try {
//         const response = await axios.get('api_endpoint');
//         setData(response.data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// const handleSelectChange = (e) => {
//     setSelectedValue(e.target.value);
// };

//





const StudentReport = ({ isOpen, togglePopup }) => {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [studentname, setStudentName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            // FirstName,LastName: studentname
        }
        axios.post(`${endpoints.API_URL}/Studentid`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response);
                // Handle successful response
                //setData(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
            setStudentName('');
        
    };

    return (

        <div className="overlay">
            <div className="popup">
                <Modal isOpen={isOpen} toggle={togglePopup} className='popup-modal' centered size='lg'>
                    <Card className='card'>
                        <CardHeader className='card-header'>
                            Student Details Report
                            <div>
                                <FaWindowMinimize className="header-icon" />
                                <FaWindowMaximize className="header-icon" />
                                <FaWindowClose className="header-icon" />
                            </div>
                        </CardHeader>

                        <CardBody>
                            <div className='card-body-content'>

                                <p>Student Details:</p>


                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup className='form-group'>
                                                <Label for="student">Student </Label>
                                                <br />
                                                <select id="dropdown" className='dropdown'>
                                                    {/* <select id="dropdown" value={selectedValue} onChange={handleSelectChange}> */}
                                                    <option value=" "> Select a Student </option>
                                                    {data.map((item) => (
                                                        <option key={item.id} value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup className='form-group'>
                                                <Label for="classroom">Classroom</Label>
                                                <Input
                                                    // type="text"
                                                    // id="classroom"
                                                    // value={lastname}
                                                    // onChange={(e) => setClassroom(e.target.value)}
                                                    required />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup className='form-group'>
                                                <Label for="contactperson">Contact Person</Label>
                                                <Input
                                                    // type="text"
                                                    // id="contactperson"
                                                    // value={contactperson}
                                                    // onChange={(e) => setContactPerson(e.target.value)}
                                                    required />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup className='form-group'>
                                                <Label for="email">Email Address</Label>
                                                <Input
                                                    // type="text"
                                                    // id="email"
                                                    // value={email}
                                                    // onChange={(e) => setEmail(e.target.value)}
                                                    required />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup className='form-group'>
                                                <Label for="contactno">Contact No</Label>
                                                <Input
                                                    // type="tel"
                                                    // id="contactno"
                                                    // value={contactno}
                                                    // onChange={(e) => setContactNo(e.target.value)}
                                                    required />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup className='form-group'>
                                                <Label for="dob">Date of Birth</Label>
                                                <Input
                                                    // type="text"
                                                    // id="dob"
                                                    // value={dob}
                                                    // onChange={(e) => setDOB(e.target.value)}
                                                    required />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </Form>

                            </div>

                            <div className='card-body-content'>
                                <p>Teachers & Subject Details:</p>

                                <Table className="popup-table">
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Teacher</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mathematics</td>
                                            <td>John</td>
                                        </tr>
                                        <tr>
                                            <td>Mathematics</td>
                                            <td>John</td>
                                        </tr>
                                        <tr>
                                            <td>Mathematics</td>
                                            <td>John</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </div>

                        </CardBody>



                    </Card>

                    {/* <ModalHeader toggle={togglePopup}></ModalHeader>
                    <ModalBody >
                        <p>Popup content goes here</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={togglePopup}>
                            Close
                        </Button>
                    </ModalFooter> */}
                </Modal>
            </div>
        </div>

    );
};


export default StudentReport;
