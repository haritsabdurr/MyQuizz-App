import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { quizUrl } from '../utils/url.js';
import axios from 'axios';
import Timer from '../components/Timer.jsx';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [shuffleAnswer, setShuffleAnswer] = useState([]);
  const [startTime, setStartTime] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  const navigate = useNavigate();
  const { state } = useLocation();
  const level = state?.level || 'easy';

  const getAllQuestion = async () => {
    try {
      const result = await axios.get(
        `${quizUrl}difficulty=${level}&type=multiple`
      );
      setQuestions(result.data.results);
    } catch (error) {
      console.warn(error.message);
    }
  };

  const handleShuffleAnswer = () => {
    if (questions.length > 0) {
      const question = questions[questionIndex];
      const answer = [...question.incorrect_answers, question.correct_answer];
      setShuffleAnswer(answer.sort(() => Math.random() - 0.5));
    }
  };

  const handleCorrectAnswer = (selected) => {
    const correct = questions[questionIndex].correct_answer;
    if (selected === correct) {
      setScore((prev) => prev + 10);
    }

    const next = questionIndex + 1;

    const endTime = Date.now();
    const quizDuration = Math.floor((endTime - startTime) / 1000);

    if (next < questions.length) {
      setQuestionIndex(next);
    } else {
      setTimeout(() => {
        navigate('/score', {
          state: {
            score,
            quizDuration,
          },
        });
      }, 800);
    }
  };

  const quizTimer = () => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 0.5);
    }, 1000);

    return () => clearInterval(timer);
  };

  const currentQuestion = questions[questionIndex]?.question;

  useEffect(() => {
    getAllQuestion();
  }, [level]);

  useEffect(() => {
    handleShuffleAnswer();
  }, [questions, questionIndex]);

  useEffect(() => {
    quizTimer();
    setStartTime(Date.now);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate('/score', {
        state: { score },
      });
    }
  }, [timeLeft]);

  return (
    <div className='max-w-[800px] mx-auto mt-12 px-6 md:px-2'>
      <Timer time={timeLeft} />
      <div className='text-center text-gray-300 '>
        <h1 className='text-2xl font-semibold'>
          Question {questionIndex + 1} of {questions.length}
        </h1>
        <p className='my-4'>{currentQuestion || 'Loading ...'}</p>
      </div>

      {shuffleAnswer?.map((answer, index) => (
        <div key={index} className='text-center mt-6'>
          <button
            className='w-3/4 py-2 px-6 text-gray-300 font-semibold bg-blue-600 hover:bg-blue-800 transition-colors duration-300 hover:cursor-pointer rounded-md'
            onClick={() => handleCorrectAnswer(answer)}
          >
            {answer}
          </button>
        </div>
      ))}
    </div>
  );
}
