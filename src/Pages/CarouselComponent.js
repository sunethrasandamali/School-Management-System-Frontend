import React from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'reactstrap';

import student from '../Images/Student.jpg';
import teacher from '../Images/Teacher.jpg';
import classroom from '../Images/Classroom.jpg';
import subject from '../Images/Subject.jpg';

const carouselItems = [
  {
    src: student,
    altText: 'Image 1',
    caption: 'Caption 1'
  },
  {
    src: teacher,
    altText: 'Image 2',
    caption: 'Caption 2'
  },
  // Add more objects as needed
];



const CarouselComponent = () => {
  return (
    <div>
      <Carousel>
        {carouselItems.map(item => (
          <CarouselItem key={item.src}>
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>

  );
};

export default CarouselComponent;
