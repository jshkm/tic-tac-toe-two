import Board from './board.tsx'
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-7xl'>Tic Tac Toe 2</h1>
      <Board></Board>
    </div>
  );
}


