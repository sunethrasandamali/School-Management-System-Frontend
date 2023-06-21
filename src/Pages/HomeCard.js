// Card.js
import React from 'react';
import { Card } from 'reactstrap';
import './home.scss';

const HomeCard = ({ title, description, image }) => {
    return (
        
            <Card className="card-home">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </Card>
       
    );
};

export default HomeCard;
