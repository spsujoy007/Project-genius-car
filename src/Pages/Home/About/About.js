import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero py-14 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative w-1/2'>
        <img src={person} className="md:w-4/5 h-full rounded-lg shadow-2xl" alt='' />
        <img src={parts} className="border-8 absolute w-3/5 right-5 top-1/2 rounded-lg shadow-2xl" alt='' />
    </div>

    <div className='w-1/2'>
      <p className='text-2xl text-red-600 mb-3'>About us</p>
      <h1 className="text-5xl font-bold">
        We are qualified <br /> 
        & of experience <br /> 
        in this field
      </h1>
      <p className="py-6">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>

      <p >
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p> <br />
      <button className="btn border-0 btn-primary">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;