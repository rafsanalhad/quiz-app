import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QuizAnswer from './components/QuizAnswer';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./Redux/store";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
function App() {
  const [quiz, setQuiz] = useState<Array<{ question: string, incorrect_answers:string, correct_answer:string }>>([]);
  const [notLoading, setNotLoading] = useState(false);
  const counter = useSelector((state: RootState) => state.counter);
  const [timer, setTimer] = useState(2);
  const nilai = useSelector((state: RootState) => state.nilai);
  // const dispatch: AppDispatch = useDispatch();
  const [localCounter, setLocalCounter] = useState(counter);
  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "Waktu Habis!",
      text: "Nilai Anda Adalah " + nilai,
    }).then(() => {
      window.location.href = '/';
    })
  }
  useEffect(() => {
    const interval = setInterval(() => {
 
      if(timer === 0) {
        showSwal();
        clearInterval(interval);
      }else{
        setTimer(timer => timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, localCounter]);
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


  function decodeHtmlEntities(text: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  return (
    <div className="">
      <Navbar />
      <div className="w-full">
        <div className="text-end">{timer}</div>
      {notLoading ? ( counter < quiz.length ? (
        <div className="flex flex-row justify-center w-full">
        
          <div className="flex flex-col mt-20">
          <h1 className="text-[26px] font-semibold mb-3">{decodeHtmlEntities(quiz[counter].question)}</h1>
          <p className="mb-3">Soal {counter+1 + " / " +  quiz.length}</p>
          <QuizAnswer incorrect={decodeHtmlEntities(quiz[counter].incorrect_answers)} correct={decodeHtmlEntities(quiz[counter].correct_answer)} />
          </div>
        </div>
      ): (
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-[26px] font-semibold mb-3">Quiz Selesai</h1>
          <p>Kamu menjawab {nilai/10} pertanyaan dengan benar</p>
          <p>Nilai kamu: {nilai}</p>
        </div>
      )) : (
        'Loading...'
      )}

      </div>
    </div>
  )
}

export default App;
