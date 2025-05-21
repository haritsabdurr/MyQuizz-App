import { useNavigate } from 'react-router-dom';

export default function LevelModal({ open, setOpen }) {
  const navigate = useNavigate();

  const handleOption = (level) => {
    navigate('/quiz', { state: { level } });
    localStorage.setItem('level', level);
  };

  return (
    <div
      className={`${
        open ? 'grid' : 'hidden'
      } place-content-center fixed inset-0 z-50 bg-gray-800/50 p-4`}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modalTitle'
    >
      <div className='w-full max-w-md rounded-lg p-6 -mt-12 shadow-lg text-center bg-[#181717]'>
        <div
          className='flex justify-end hover:cursor-pointer'
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='20'
            height='20'
            viewBox='0 0 30 30'
          >
            <path
              fill='#d1d5db'
              d='M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z'
            ></path>
          </svg>
        </div>
        <div className='p-6 md:p-8'>
          <h2 id='modalTitle' className='text-xl sm:text-2xl text-gray-300'>
            Select Difficulty
          </h2>

          <div className='mt-8 flex flex-row gap-4 text-white text-sm'>
            <button
              className='px-5 py-2 bg-blue-600 hover:bg-blue-800 hover:cursor-pointer rounded-md'
              onClick={() => handleOption('easy')}
            >
              Easy
            </button>
            <button
              className='px-5 py-2 bg-blue-600 hover:bg-blue-800 hover:cursor-pointer rounded-md'
              onClick={() => handleOption('medium')}
            >
              Medium
            </button>
            <button
              className='px-5 py-2 bg-blue-600 hover:bg-blue-800 hover:cursor-pointer rounded-md'
              onClick={() => handleOption('hard')}
            >
              Hard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
