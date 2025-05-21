import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Score from './pages/Score';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    </Router>
  );
}

export default App;
