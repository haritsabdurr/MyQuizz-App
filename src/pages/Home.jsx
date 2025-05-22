import { useState } from 'react';
import LevelModal from '../components/LevelModal';

export default function Home() {
  const [levelModal, setLevelModal] = useState(false);

  const name = localStorage.getItem('username');

  return (
    <div className='max-w-[800px] mx-auto mt-52 px-6 md:px-2'>
      <LevelModal open={levelModal} setOpen={setLevelModal} />
      <div className='text-center'>
        <h1 className='text-lg md:text-2xl text-gray-300'>
          Welcome <span className='underline'>{name}</span> !
        </h1>
        <h1 className='text-2xl md:text-5xl text-blue-500 font-bold mt-2'>
          Test Your Knowledge
        </h1>
        <hr className='text-gray-300 mx-auto opacity-60 mt-6' />
        <p className='text-xs md:text-lg text-gray-300 mt-6'>
          This is a general knowledge quiz consisting of ten questions, each
          with four multiple-choice options. Please select the one correct
          answer for every question. Be aware that a timer is active, and the
          quiz will conclude automatically if the time limit is reached. The
          timer will activate once you click the Start button.
        </p>
      </div>
      <div className='text-center text-md mt-12'>
        <button
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-md transition-colors duration-300 hover:cursor-pointer'
          onClick={() => setLevelModal(!false)}
        >
          Start
        </button>
      </div>
    </div>
  );
}
