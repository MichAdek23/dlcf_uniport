import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

// Styled components for slideshow
const SlideshowContainer = styled.div`
  width: 100%;
  height: 50vh;
  max-width: 100vw;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 400px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;
const ContentOverlay = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent background */
  padding: 1rem;
  border-radius: 8px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  }

  button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #f39c12;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e67e22;
    }
  }
`;


const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Slideshow = () => {
  const images = [
    'https://img.freepik.com/free-photo/painted-concrete-background_53876-92961.jpg?t=st=1734145637~exp=1734149237~hmac=a0820263caf085fee56a7f49d01a260cbeaf0e22b993e645d016224991895d73&w=740',
    'https://img.freepik.com/free-photo/painted-concrete-background_53876-92961.jpg?t=st=1734145637~exp=1734149237~hmac=a0820263caf085fee56a7f49d01a260cbeaf0e22b993e645d016224991895d73&w=740',
    'https://img.freepik.com/free-photo/painted-concrete-background_53876-92961.jpg?t=st=1734145637~exp=1734149237~hmac=a0820263caf085fee56a7f49d01a260cbeaf0e22b993e645d016224991895d73&w=740',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoized nextSlide function
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);


  // Automatically change slides every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [nextSlide]); // Use memoized nextSlide in dependency array

  return (
    <SlideshowContainer>
      <SlideWrapper style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <Slide key={index} image={image} />
        ))}
      </SlideWrapper>

      <ContentOverlay>
        <h1>Welcome to DLCF | Uniport</h1>
        <p>Your spiritual growth starts here.</p>
        <button to="/about" >Learn More</button>
      </ContentOverlay>
      <DotContainer>
        {images.map((_, index) => (
          <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
        ))}
      </DotContainer>
    </SlideshowContainer>
  );
};

export default Slideshow;
