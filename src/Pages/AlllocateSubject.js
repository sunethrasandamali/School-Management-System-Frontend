import React, { useState } from 'react';
import { Button, Modal, Card, CardHeader, CardBody, Row, Col, Label, Table } from 'reactstrap';
import { FaWindowMinimize, FaWindowMaximize, FaWindowClose } from 'react-icons/fa';

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





const AllocateSubjectPopup = ({ isOpen, togglePopup }) => {


    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

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
                                        <select id="dropdown" className='dropdown'>
                                            {/* <select id="dropdown" value={selectedValue} onChange={handleSelectChange}> */}
                                            <option value=" "> Select a Teacher </option>
                                            {data.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
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
                                        <select id="dropdown" className='dropdown'>
                                            {/* <select id="dropdown" value={selectedValue} onChange={handleSelectChange}> */}
                                            <option value=" "> Select a Subject </option>
                                            {data.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
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
