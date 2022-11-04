import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img, title, price, _id} = service;
    return (
        <div className="card card-compact p-3  bg-base-100 shadow-xl">
  <figure><img className='rounded-xl' src={img} alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="card-title font-semibold">{title}</h2>
    <div className="card-actions justify-end">
      <p className='text-2xl text-primary font-bold'>Price: ${price}</p>
      <Link to={`checkout/${_id}`}>
      <button className=" border-0 rounded-full text-4xl"> <FaArrowCircleRight></FaArrowCircleRight> </button>
      </Link>
    </div>
  </div>

  
</div>
    );
};

export default ServiceCard;