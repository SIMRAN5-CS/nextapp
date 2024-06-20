import React from 'react';
import HoverCard from './HoverCard';
const CardSection=()=>{
    const cards = Array.from({ length: 20 });
    return(
        <div className="container mx-auto p-4">
        <div className='m-4'>
        <h1 className=" text-center text-3xl">Explore Inspiring Designs</h1>
        </div>
        <div className="flex ">
        <div className=" justify-center flex flex-wrap  gap-8">
          {cards.map((_, index) => (
            <HoverCard key={index} />
          ))}
        </div>
        </div>
      </div>
    )
}
export default CardSection