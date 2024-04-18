import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Slider = ({ content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval); // Clean up the interval on unmount
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < content.length - 1 ? prevSlide + 1 : 0
    );
  };

  return (
    <SliderContainer>
      {content.map((slide, index) => (
        <Slide
          key={index}
          current={index === currentSlide}
          style={{ transitionDelay: `${index * 0.5}s` }}
        >
          {slide}
        </Slide>
      ))}
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
`;

const Slide = styled.div`
  text-align: center;
  font-size: 24px;
  color: #333;
  opacity: ${(props) => (props.current ? 1 : 0)};
  transform: translateY(${(props) => (props.current ? 0 : "100px")});
  transition: opacity 1s, transform 0.5s;
  transition-delay: ${(props) => props.style.transitionDelay};
`;

export default Slider;
