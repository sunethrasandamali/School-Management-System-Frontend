import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Table } from 'reactstrap';
import './interface.scss';
import { FaAsterisk, FaCube, FaSortDown, FaTrash, FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { endpoints } from '../EndPoints';
import StudentReport from './StudentReport';

//calculate the age
function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday has not occurred yet in the current year
    if (
        currentDate.getMonth() < dob.getMonth() ||
        (currentDate.getMonth() === dob.getMonth() &&
            currentDate.getDate() < dob.getDate())
    ) {
        age--;
    }

    return age;
};


const Student = ({ addstudents }) => {
    const [studentid, setStudentID] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactperson, setContactPerson] = useState('');
    const [contactno, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [age, setAge] = useState();
    const [classsroom, setClassRoom] = useState('');

    const [data, setData] = useState([]);
    const [classroomData, setClasssroomData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    //add student
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            FirstName: firstname,
            LastName: lastname,
            contactperson: contactperson,
            ContactNo: contactno,
            SEmail: email,
            DOB: dob,
            Age: age,
            ClassroomID: parseInt(selectedValue, 10)
        }
        axios.post(`${endpoints.API_URL}/Student`, data, {
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

        setFirstName('');
        setLastName('');
        setContactPerson('');
        setContactNo('');
        setEmail('');
        setDOB('');
        setAge('');
        setClassRoom('');
    };

    const handleDobChange = (e) => {
        setDOB(e.target.value);
        const calculatedAge = calculateAge(e.target.value);
        setAge(calculatedAge);
    };

    //reset the input fields
    const resetFields = () => {
        setFirstName('');
        setLastName('');
        setContactPerson('');
        setContactNo('');
        setEmail('');
        setDOB('');
        setAge('');
        setClassRoom('');
    };



    useEffect(() => {
        fetchData();
        fetchClassroomData();
    }, []);

    //get student list
    const fetchData = () => {
        axios.get(`${endpoints.API_URL}/Student`)
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

    //fetch data to the dropdown list to input field
    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
        console.log("dropvalues:" + e.target.value);

    };

    const fetchClassroomData = async () => {
        try {
            const response = await axios.get(`${endpoints.API_URL}/Classroom`);
            setClasssroomData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    //delete student
    const deleteStudent = (id) => {
        axios.delete(`${endpoints.API_URL}/Student/${id}`, {
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

    //update student fetch
    const updateStudentFetch = (student) => {
        setStudentID(student.StudentID);
        setFirstName(student.FirstName);
        setLastName(student.LastName);
        setContactPerson(student.ContactPerson);
        setContactNo(student.ContactNo);
        setEmail(student.SEmail);

        const formattedDOB = student.DOB ? new Date(student.DOB).toISOString().substr(0, 10) : '';
        setDOB(formattedDOB);

        setAge(student.Age);
        setSelectedValue(student.ClassroomID);
        console.log('clzid:', student.ClassroomID);
        console.log('clzroomdata:', classroomData);
    };

    //update student 
    const updateStudent = (student) => {
        const updatedata = {
            StudentID: studentid,
            FirstName: firstname,
            LastName: lastname,
            ContactPerson: contactperson,
            ContactNo: contactno,
            SEmail: email,
            DOB: dob,
            Age: age,
            ClassroomID: parseInt(selectedValue, 10)
        }

        axios.put(`${endpoints.API_URL}/Student`, updatedata, {
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

                        Student Details
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
                                    <Label for="contactperson">Contact Person:<FaAsterisk className="required-icon" /></Label>
                                    <Input
                                        type="text"
                                        id="contactperson"
                                        value={contactperson}
                                        onChange={(e) => setContactPerson(e.target.value)}
                                        required />
                                </FormGroup>
                            </Col>
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
                        </Row>

                        <Row>
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
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="dob">Date of Birth:<FaAsterisk className="required-icon" /></Label>
                                    <Input
                                        type="text"
                                        id="dob"
                                        value={dob}
                                        onChange={(e) => setDOB(e.target.value)}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="age">Age</Label>
                                    {/* {age > 0 && <p>{age}</p> */}
                                    <Input
                                        type="text"
                                        id="age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)} />
                                    {/* } */}

                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup className='form-group'>
                                    <Label for="classsroom">Classroom:<FaAsterisk className="required-icon" /></Label>
                                    <select id="dropdown" value={selectedValue} onChange={handleSelectChange}>
                                        <option value="default"> Select your class </option>
                                        {classroomData.map((item) => (
                                            <option value={item.ClassroomID}>
                                                {item.ClassroomName}
                                            </option>
                                        ))}
                                    </select>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={3}>
                                <Button className='button save' type="submit" >Save</Button>
                            </Col>
                            {/* <Col md={3}>
                                <Button className='button delete' type="button" color="danger">Delete</Button>
                            </Col> */}
                            <Col md={3}>
                                <Button className="button update" type="button" onClick={updateStudent}>Update</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button reset' type="button" onClick={resetFields}>Reset</Button>
                            </Col>
                            <Col md={3}>
                                <Button className='button allocate' type="button" onClick={togglePopup}>View Student Details Report</Button>
                                <StudentReport isOpen={isOpen} togglePopup={togglePopup} />
                            </Col>
                        </Row>

                    </Form>
                </CardBody>


            </Card>

            <Card>
                <CardBody>
                    <CardTitle className='card-title'>
                        <FaCube className="caret-icon" />

                        Existing Student
                        <FaSortDown className="sort-down" />
                    </CardTitle>

                    <Table className="student-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact Person</th>
                                <th>Contact No</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((student, index) => (
                                console.log("Student:" + student),
                                <tr key={index}>
                                    <td>{student.FirstName}</td>
                                    <td>{student.LastName}</td>
                                    <td>{student.ContactPerson}</td>
                                    <td>{student.ContactNo}</td>
                                    <td>
                                        <FaTrash className='table-icon' onClick={() => deleteStudent(student.StudentID)} />
                                        <FaEdit className='table-icon' onClick={() => updateStudentFetch(student)} />
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

export default Student;
