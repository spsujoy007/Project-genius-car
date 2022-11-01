import React from 'react';

const BannerItem = ({slide}) => {
    const {image, prev, next, id} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className="bannerImg rounded-xl">
        <img src={image} className="w-full " alt='banner-img'/>
    </div>
    
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
      <h1 className='text-5xl font-bold text-white'>
        Affordable<br />
        Pricing for car <br />
        Servicing
      </h1>
    </div>
    <div className="w-2/4 absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2">
      <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    </div>

    <div className="w-2/4 absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-3/4">
        <button className="btn bg-red-600 border-0 mr-5">Discover More</button>
        <button className="btn glass ">Latest Project</button>
    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle bg-red-600 border-0">❯</a>
    </div>
  </div> 
    );
};

export default BannerItem;