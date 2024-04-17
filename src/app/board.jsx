import React from 'react';

const board = () => {
  return (
    // <div className='flex items-center justify-center h-screen w-screen'>
    //   <div className='bg-white h-2/3 aspect-square grid min-h-80 grid-cols-3 gap-4 place-content-between'>
    //     <div className='bg-black h-full aspect-square'></div>
    //     <div className='bg-black h-full aspect-square'></div>
    //     <div className='bg-black h-full aspect-square'></div>
    //     <div className='bg-black h-full aspect-square'></div>
    //     <div className='bg-black h-full aspect-square'></div>
    //     <div className='bg-black h-full aspect-square'></div>
    //     <div className='bg-black h-full aspect-square'></div>
    //     <div className='bg-black h-full aspect-square'></div>
    //     <div className='bg-black h-full aspect-square'></div>
    //   </div>
    // </div>
    <>
      <Tiles piece={'x'}></Tiles>
    </>
  );
};

const Tiles = ({ piece }) => (
  <p className='text-white text-center'>
    {piece}
  </p>
);

export default board;