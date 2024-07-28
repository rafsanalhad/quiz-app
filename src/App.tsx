import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QuizAnswer from './components/QuizAnswer';

function App() {
  const [quiz, setQuiz] = useState<Array<{ question: string, incorrect_answers:string, correct_answer:string }>>([]);
  const [notLoading, setNotLoading] = useState(false);

  const getApi = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple');
      const data = await response.json();
      if(data.response_code === 0) {
        setQuiz(data.results);
        setNotLoading(true);
        console.log(quiz);
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      setNotLoading(true);
    }
  }

  useEffect(() => {
    getApi();
  }, [quiz]);
  const [count, setCount] = useState(0);

  function decodeHtmlEntities(text: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  return (
    <div className="">
      <Navbar />
      <div className="w-full">
      {notLoading ? (
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col mt-20">
          <h1 className="text-[26px] font-semibold mb-3">{decodeHtmlEntities(quiz[count].question)}</h1>
          <QuizAnswer incorrect={decodeHtmlEntities(quiz[count].incorrect_answers)} correct={decodeHtmlEntities(quiz[count].correct_answer)} />
          </div>
        </div>
      ) : (
        'Loading...'
      )}

      </div>
    </div>
  )
}

export default App;
