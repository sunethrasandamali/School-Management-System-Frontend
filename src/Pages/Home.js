import React, { useState, useEffect } from 'react';
//import { CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col, Table, Container } from 'reactstrap';
//import { FaAsterisk, FaCube, FaSortDown } from 'react-icons/fa';
import HomeCard from './HomeCard';
import './home.scss';
import student from '../Images/Student.jpg';
import teacher from '../Images/Teacher.jpg';
import classroom from '../Images/Classroom.jpg';
import subject from '../Images/Subject.jpg';
import CarouselComponent from './CarouselComponent';

const Home = () => {
    const cardsData = [
        {
            title: 'Student',
            description: '',
            image: student,
        },
        {
            title: 'Teacher',
            description: '',
            image: teacher,
        },
       
        {
            title: 'Subject',
            description: '',
            image: subject,
        },
        {
            title: 'Classroom',
            description: '',
            image: classroom,
        }
    ];

    return (
        <div className="home">
              <CarouselComponent />
              < br />
            {cardsData.map((card, index) => (
                <HomeCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image} />

            ))}
        </div>
    );


};

export default Home;
