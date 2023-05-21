import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const handleButtonClick = () => {
    window.open('https://youtu.be/0-4PT4THy7k', '_blank');
  };

  return (
    <div className='hero-container'>
      <video src='/videos/4k_white_liquid.mov' autoPlay loop muted />
      <h1>DAIRY MILK</h1>
      <p>Taste the Flavor To Your Hearts Content</p>
      <br></br>
      <br></br>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn1--outline'
          buttonSize='btn1--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn1--primary'
          buttonSize='btn1--large'
          onClick={handleButtonClick} // Update the onClick event handler
        >
          WATCH HOW WE MANUFACTURE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;