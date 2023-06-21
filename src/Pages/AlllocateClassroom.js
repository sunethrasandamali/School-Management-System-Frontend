import React, {useEffect, useState } from 'react';
import { Button, Modal, Card, CardHeader, CardBody, Row, Col, Label, Table } from 'reactstrap';
import { FaWindowMinimize, FaWindowMaximize, FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
import { endpoints } from '../EndPoints';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './popup.scss'; // Custom styles for the popup

const AllocateClassroomPopup = ({ isOpen, togglePopup }) => {
    const [data, setData] = useState([]);
    const [selectedTeacherValue, setSelectedTeacherValue] = useState('');
    const [selectedClassroomValue, setSelectedClassroomValue] = useState('');

    useEffect(() => {
        fetchTeacherData();
        fetchClassroomData();
    }, []);

    //fetch data to teacher dropdown list
    const handleSelectTeacherChange = (e) => {
        setSelectedTeacherValue(e.target.value);
    };

    const handleSelectClassroomChange = (e) => {
        setSelectedClassroomValue(e.target.value);
    }

    const fetchTeacherData = async () => {
        try {
            const response = await axios.get(`${endpoints.API_URL}/Teacher`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    //fetch data to classroom dropdown list
    const fetchClassroomData = async () => {
        try {
            const response = await axios.get(`${endpoints.API_URL}/Classroom`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (

        <div className="overlay">
            <div className="popup">
                <Modal isOpen={isOpen} toggle={togglePopup} className='popup-modal' centered size='lg'>
                    <Card className='card'>
                        <CardHeader className='card-header'>
                            Allocate Classrooms
                            <div>
                                <FaWindowMinimize className="header-icon" />
                                <FaWindowMaximize className="header-icon" />
                                <FaWindowClose className="header-icon" />
                            </div>
                        </CardHeader>

                        <CardBody>
                            <div className='card-body-content'>

                                <p>Tecahers Details:</p>
                                <Row>



                                    <Col md={6}>
                                        <Label>Teacher </Label>

                                        <select id="dropdown" className='dropdown' value={selectedTeacherValue} onChange={handleSelectTeacherChange}>
                                            <option value=" "> Select a Teacher </option>
                                            {data.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.FirstName}
                                                </option>
                                            ))}
                                        </select>

                                    </Col>
                                    <Col md={6}>
                                        <Button className='save-button'>Save </Button>
                                    </Col>

                                </Row>

                            </div>

                            <div className='card-body-content'>
                                <p>Allocated Classrooms:</p>
                                <Row>



                                    <Col md={6}>
                                        <Label>Classroom </Label>

                                        <select id="dropdown" className='dropdown' value={selectedClassroomValue} onChange={handleSelectClassroomChange}>
                                            <option value=" "> Select a Classroom </option>
                                            {data.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.ClassroomName}
                                                </option>
                                            ))}
                                        </select>

                                    </Col>
                                    <Col md={6}>
                                        <Button className='save-button'>Allocate </Button>
                                    </Col>

                                </Row>

                                <Table className="popup-table">
                                    <thead>
                                        <tr>
                                            <th>Classrooms</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Grade 6A</td>
                                            <td><Button>Deallocate</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Grade 6B</td>
                                            <td><Button>Deallocate</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Grade 6C</td>
                                            <td><Button>Deallocate</Button></td>
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


export default AllocateClassroomPopup;
