import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
interface QuizAnswerProps {
  incorrect: string;
  correct: string;
}
const QuizAnswer = ({ incorrect, correct }: QuizAnswerProps) => {
  const [checkBetul, setCheckBetul] = React.useState("belum dijawab");
  const [nilai, setNilai] = React.useState(0);
  const incorrectArray = incorrect.split(",");
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();
  const answers = [];
  for (let i = 0; i < incorrectArray.length; i++) {
    answers.push(incorrectArray[i]);
  }
  answers.push(correct);
  // for (let i = answers.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [answers[i], answers[j]] = [answers[j], answers[i]];
  // }
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let data = e.currentTarget.textContent;
    console.log(data);
    if (data) {
      if (data === correct) {
        dispatch({ type: "INCREMENT_NILAI" });
        setCheckBetul("benar");
      } else {
        setCheckBetul("salah");
      }
    }
    dispatch({ type: 'INCREMENT' });
  };
  return (
    <div className="grid grid-cols-2 w-full">
      {answers.map((ans, index) => {
        let bgColor;

        // if (checkBetul === "belum dijawab") {
        //   bgColor = "bg-[#E5E8EF]";
        // } else if (checkBetul === "benar") {
        //   bgColor = "bg-green-500";
        //   if (ans !== correct) {
        //     bgColor = "bg-red-500";
        //   }
        // } else if (checkBetul === "salah") {
        //   bgColor = "bg-red-500";
        //   if (ans === correct) {
        //     bgColor = "bg-green-500";
        //   }
        // }
        return (
          <div
            key={index}
            onClick={handleClick}
            className={`p-5 bg-[#E5E8EF] me-5 mb-5`}
          >
            {ans}
          </div>
        );
      })}
    </div>
  );
};

export default QuizAnswer;
