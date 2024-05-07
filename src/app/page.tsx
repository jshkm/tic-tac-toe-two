import Board from './board.tsx'
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-6xl'>Tic Tac Toe 2</h1>
      {/* <h2>hello wrold</h2> */}
      <Board></Board>
    </div>
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <h1>Header 1</h1>
    //   <h2>Header 2</h2>
    // </div>
  );
}


