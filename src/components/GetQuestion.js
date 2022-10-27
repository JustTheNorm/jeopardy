import { useState, useEffect } from "react";
import react from "react";

const GetQuestion = (props) => {
  const url = "http://jservice.io/api/random";

  //state to hold the coin data
  const [question, setQuestion] = useState(null);

  const [score, setScore] = useState(0);

  const getQuestion = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data) {
        setQuestion(data);
        
      }

      // showQuestion()
      console.log();
    } catch (e) {
      console.error(e);
    }
  };

  const handleIncrease = () => {
    setScore(score + question[0].value);
  };

  const handleDecrease = () => {
    setScore(score - question[0].value);
  };

  const handleReset = () => {
    setScore(0);
  };

  const [isTextHidden, setTextHidden] = useState(true);

  const onClick = () => setTextHidden(!isTextHidden);

  const Text = () => <div>Answer: {question[0].answer}</div>;

  return (
    <div>
      <h1>Score: {score}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button> 
      <br/><br/><br/>
      <button onClick={getQuestion}>Get Question</button>
      <h2 className="question">{question == null ? "" : question[0].question}</h2>
      
      <h2 className="">Category: {question == null ? "" : question[0].category.title}</h2>
      <h3>Point Value: {question == null ? "" : question[0].value}</h3>
      <h2 className="answer">{!isTextHidden ? <Text /> : null}</h2>
      <h2 className="">Answer: </h2>
      <button onClick={onClick}>
        {isTextHidden ? "Show Answer" : "Hide Answer"}
      </button>
      
    </div>
  );
};

export default GetQuestion;
