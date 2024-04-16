import React from 'react';

const board = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='bg-white h-2/3 aspect-square grid min-h-80 grid-cols-3 gap-4 place-content-between'>
        <div className='bg-black h-full aspect-square'></div>
        <div className='bg-black h-full aspect-square'></div>
        <div className='bg-black h-full aspect-square'></div>
        <div className='bg-black h-full aspect-square'></div>
        <div className='bg-black h-full aspect-square'></div>
        <div className='bg-black h-full aspect-square'></div>
        <div className='bg-black h-full aspect-square'></div>
        <div className='bg-black h-full aspect-square'></div>
        <div className='bg-black h-full aspect-square'></div>
      </div>
    </div>

    // <div className='flex items-center justify-center h-screen w-screen'>
    //     <div className='grid grid-cols-3 place-content-between justify-items-center h-2/3 min-h-80 aspect-square bg-white gap-4'>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //       <div className='bg-red-500 h-1/3 min-h-24 aspect-square'></div>
    //     </div>
    // </div>

    // <div className='flex items-center justify-center h-screen w-screen'>
    //      <div className='grid grid-cols-3 justify-items-center h-2/3 aspect-square bg-white'>
    //        <div className='bg-red-500 h-1/2 aspect-square'></div>
    //      </div>
    //  </div>
  );
};

export default board;