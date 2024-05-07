import Board from './board'
export default function Home() {

  

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='myFont text-7xl'>Tic Tac Toe 2</h1>
      { true ? (
        <Board></Board>
      ) : (
        <div></div>
      )}
      <p>made by josh</p>
    </div>
  );
}


