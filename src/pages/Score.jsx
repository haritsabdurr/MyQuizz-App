import { useLocation, useNavigate } from 'react-router-dom';

export default function Score() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const score = state?.score || 0;
  const timeTaken = state?.quizDuration ?? 0;

  const level = localStorage.getItem('level');
  const username = localStorage.getItem('username');
  const correctAnswer = score / 10;

  const handleExit = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('level');
    navigate('/');
  };

  return (
    <div className='max-w-[800px] mx-auto mt-48 px-6 md:px-2'>
      <div className='text-center text-gray-300'>
        <h1 className='text-4xl font-semibold'>
          Well Done <span className='underline'>{username}</span> !
        </h1>
        <p className='mt-4 text-md'>Your Final Score is :</p>
      </div>

      <div className='w-1/3 md:w-1/5 py-3 mx-auto mt-6 bg-blue-600 text-5xl text-gray-300 text-center font-bold rounded-md'>
        {score}
      </div>
      <hr className='text-gray-300 mx-auto opacity-60 mt-6' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 text-gray-300 text-center'>
        <div className='mt-4'>
          <p>Correct Answer</p>
          <p className='mt-3 text-2xl font-semibold'>{correctAnswer} of 10</p>
        </div>
        <div className='mt-4'>
          <p>Quiz Difficulty</p>
          <p className='mt-3 text-2xl font-semibold capitalize'>{level}</p>
        </div>
        <div className='mt-4'>
          <p>Time Taken</p>
          <p className='mt-3 text-2xl font-semibold'>{timeTaken}s</p>
        </div>
      </div>
      <div className='flex justify-center gap-4 mt-18 text-white text-sm'>
        <button
          className='py-2 px-4 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer transition-colors duration-300 rounded-md'
          onClick={() => navigate('/home')}
        >
          Back to Home
        </button>
        <button
          className='py-2 px-4 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer transition-colors duration-300 rounded-md'
          onClick={handleExit}
        >
          Exit Quizz App
        </button>
      </div>
    </div>
  );
}
