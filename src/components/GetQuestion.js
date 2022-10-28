import { useState, useEffect } from "react";
import react from "react";

const GetQuestion = (props) => {
  const url = "http://jservice.io/api/random";

  //state to hold the coin data
  const [question, setQuestion] = useState(null);
  const [questions, setQuestions] = useState(null);

  const [score, setScore] = useState(0);

  const getQuestion = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data) {
        setQuestion(data);
        
      }
      setTextHidden(!isTextHidden)
      // showQuestion()
      console.log();
    } catch (e) {
      console.error(e);
    }
  };

  // const get10Questions = async () => {
  //   try {
  //     const response = await fetch('http://jservice.io/api/random?count=10');
  //     const data = await response.json();
  //     console.log(data);

  //     if (data) {
  //       setQuestions(data);
  //     }

  //     // showQuestion()
  //     console.log();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const handleIncrease = () => {
    setScore(score + question[0].value);
  };

  const handleDecrease = () => {
    setScore(score - question[0].value);
  };

  const handleReset = () => {
    setScore(0);
  };

  const dailyDouble = (event) => [
    question[0].value = +event.target.value,
    console.log(event.target.valueAsNumber)
  ]

  const [isTextHidden, setTextHidden] = useState(true);

  const onClick = () => setTextHidden(!isTextHidden);
  const onClicks= () => setTextHidden(!isTextHidden);

  const Text = () => <div>Answer: {question[0].answer}</div>;


  

  // const Text10 = () => <div>Answer: {questions[idx].answer}</div>
  return (
    <div>
      <h1>Score: {score}</h1>
      <button className="increase" onClick={handleIncrease}>Increase</button>
      <button className="decrease" onClick={handleDecrease}>Decrease</button>
      <button className="reset" onClick={handleReset}>Reset</button> 
      <br/><br/><br/>
      <button onClick={getQuestion} className="getquestion">Get Question</button>
      <br/><br/>
      {/* <button onClick={get10Questions}>Get 10 Questions</button> */}
      <h2 className="question">{question == null ? "" : question[0].question}</h2>

      {/* {questions == null ? "" : questions.map((q, idx) => {
        const { question, answer, value, category, title } = q;
        return (
          <>
          <h2>{question == null ? "" : question}</h2>
          <h2 className="category">Category: <span className="categoryTitle">{question == null ? "" : category.title}</span></h2>
          <h3 className="point">Point Value: {question == null ? "" : value}</h3>
          <h2 className="answer">{!isTextHidden ? answer : null}</h2>
          <h2 className="answerTitle">Answer: </h2>
          <button className="showAnswer" onClick={onClicks}>
          {isTextHidden ? "Show Answer" : "Hide Answer"}
          </button>

          </>
        );
      })} */}


      <h2 className="category">Category: <span className="categoryTitle">{question == null ? "" : question[0].category.title}</span></h2>
      <h3 className="point">Point Value: {question == null ? "" : question[0].value == null ? 
      <h1 className="double">
        "Daily Double!!"
        <br/>
        <input type="number" onClick={dailyDouble}/>
        </h1>: question[0].value}</h3>
      <h2 className="answer">{!isTextHidden ? <Text /> : null}</h2>
      <h2 className="answerTitle">Answer: </h2>
      <button className="showAnswer" onClick={onClick}>
        {isTextHidden ? "Show Answer" : "Hide Answer"}
      </button>
      
    </div>
  );
};

export default GetQuestion;
