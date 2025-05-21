import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    setTimeout(() => {
      navigate('/home');
    }, 800);
  };

  return (
    <>
      <div className='max-w-[800px] mx-auto mt-64 px-6 md:px-2'>
        <div className='rounded-lg w-full max-w-md mx-auto'>
          <h2 className='text-3xl text-gray-300 font-semibold mb-4 text-center'>
            Enter Your Name
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='mt-8 mb-4'>
              <input
                type='text'
                name='username'
                placeholder='Your Name'
                className='w-full px-4 py-2 rounded-md border text-gray-300 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                onChange={handleChange}
                value={username}
                required
              />
            </div>
            <div className='text-center text-md'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white mt-2 py-2 px-8 rounded-md transition-colors duration-300 hover:cursor-pointer'>
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
