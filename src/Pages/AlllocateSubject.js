import React, { useEffect, useState } from 'react';
import { Button, Modal, Card, CardHeader, CardBody, Row, Col, Label, Table } from 'reactstrap';
import { FaWindowMinimize, FaWindowMaximize, FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
import { endpoints } from '../EndPoints';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './popup.scss'; // Custom styles for the popup

const AllocateSubjectPopup = ({ isOpen, togglePopup }) => {
    const [data, setData] = useState([]);
    const [selectedTeacherValue, setSelectedTeacherValue] = useState('');
    const [selectedSubjectValue, setSelectedSubjectValue] = useState('');

    useEffect(() => {
        fetchTeacherData();
        fetchSubjectData();
    }, []);

    //fetch data to teacher dropdown list
    const handleSelectTeacherChange = (e) => {
        setSelectedTeacherValue(e.target.value);
        console.log("dropvalues:" + e.target.value);
    };

    const handleSelectSubjectChange = (e) => {
        setSelectedSubjectValue(e.target.value);
    }

    const fetchTeacherData = async () => {
        try {
            const response = await axios.get(`${endpoints.API_URL}/Teacher`);
            setData(response.data);
            console.log('T:', response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

      //fetch data to subject dropdown list
    const fetchSubjectData = async () => {
        try {
            const response = await axios.get(`${endpoints.API_URL}/Subject`);
            setData(response.data);
            console.log('S:', response);
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
                            Allocate Subjects
                            <div>
                                <FaWindowMinimize className="header-icon" />
                                <FaWindowMaximize className="header-icon" />
                                <FaWindowClose className="header-icon" />
                            </div>
                        </CardHeader>

                        <CardBody>

                            <div className='card-body-content'>
                                <p>Teachers Details:</p>
                                <Row>



                                    <Col md={6}>
                                        <Label>Teacher </Label>

                                        <select id="dropdown" className='dropdown' value={selectedTeacherValue} onChange={handleSelectTeacherChange}>
                                            <option value=" "> Select a Teacher </option>
                                            {data.map((item) => (
                                               //  console.log('full',item.FirstName, item.LastName),
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
                                <p>Allocated Subjects:</p>
                                <Row>



                                    <Col md={6}>
                                        <Label>Subject </Label>

                                        <select id="dropdown" className='dropdown' value={selectedSubjectValue} onChange={handleSelectSubjectChange}>
                                            <option value=" "> Select a Subject </option>
                                            {data.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.SubjectName}
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
                                            <th>Subject</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mathemtics</td>
                                            <td><Button>Deallocate</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Mathemtics</td>
                                            <td><Button>Deallocate</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Mathemtics</td>
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


export default AllocateSubjectPopup;
