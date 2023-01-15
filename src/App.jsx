import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Quiz";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "1. What is HTML used for?",
      answers: [
        {
          text: "A) To create the structure of a web page",
          correct: true,
        },
        {
          text: "B) To create the layout of a web page",
          correct: false,
        },
        {
          text: "C) To add styling to a web page",
          correct: false,
        },
        {
          text: "D) To add functionality to a web page",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "2. What is CSS used for?",
      answers: [
        {
          text: "A) To create the structure of a web page",
          correct: false,
        },
        {
          text: "B) To create the layout of a web page",
          correct: false,
        },
        {
          text: "C) To add styling to a web page",
          correct: true,
        },
        {
          text: "D) To add functionality to a web page",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "3. What is JavaScript used for?",
      answers: [
        {
          text: "A) To create the structure of a web page",
          correct: false,
        },
        {
          text: "B) To create the layout of a web page",
          correct: false,
        },
        {
          text: "C) To add styling to a web page",
          correct: false,
        },
        {
          text: "D) To add functionality to a web page",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "4. What is the DOM?",
      answers: [
        {
          text: " A) The Document Object Model",
          correct: true,
        },
        {
          text: "B) The Design Object Model",
          correct: false,
        },
        {
          text: "C) The Document Oriented Model",
          correct: false,
        },
        {
          text: "D) The Design Oriented Model",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "5. What is the difference between `display:inline` and `display:block` in CSS?",
      answers: [
        {
          text: " A) display:inline elements take up the full width of their parent container, display:block elements do not",
          correct: false,
        },
        {
          text: "B) display:block elements take up the full width of their parent container, display:inline elements do not",
          correct: true,
        },
        {
          text: "C) display:inline elements are stacked horizontally, display:block elements are stacked vertically",
          correct: false,
        },
        {
          text: "D) display:block elements are stacked horizontally, display:inline elements are stacked vertically",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "6. What is the difference between position:static and position:absolute in CSS?",
      answers: [
        {
          text: " A) position:static elements are positioned according to the normal flow of the document, position:absolute elements are positioned relative to the nearest positioned ancestor",
          correct: true,
        },
        {
          text: "B) position:absolute elements are positioned according to the normal flow of the document, position:static elements are positioned relative to the nearest positioned ancestor",
          correct: false,
        },
        {
          text: "C) position:static elements are positioned relative to the browser window, position:absolute elements are positioned relative to the nearest positioned ancestor",
          correct: false,
        },
        {
          text: "D) position:absolute elements are positioned relative to the browser window, position:static elements are positioned relative to the nearest positioned ancestor",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "7. What is the difference between let and var in JavaScript? ",
      answers: [
        {
          text: "A) let variables are block-scoped, var variables are function-scoped",
          correct: true,
        },
        {
          text: "B) var variables are block-scoped, let variables are function-scoped",
          correct: false,
        },
        {
          text: "C) let variables are global-scoped, var variables are function-scoped",
          correct: false,
        },
        {
          text: "D) var variables are global-scoped, let variables are function-scoped",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "8. What is the difference between == and === in JavaScript?",
      answers: [
        {
          text: "A) == checks for equality after type coercion, === checks for equality without type coercion",
          correct: true,
        },
        {
          text: "B) === checks for equality after type coercion, == checks for equality without type coercion",
          correct: false,
        },
        {
          text: "C) == checks for identity, === checks for equality",
          correct: false,
        },
        {
          text: "D) === checks for identity, == checks for equality",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "9. What is the difference between a GET request and a POST request in HTTP?",
      answers: [
        {
          text: "A) GET requests are used to retrieve data from the server, POST requests are used to send data to the server",
          correct: true,
        },
        {
          text: "B) POST requests are used to retrieve data from the server, GET requests are used to send data to the server",
          correct: false,
        },
        {
          text: "C) GET requests are used for read-only operations, POST requests are used for write operations",
          correct: false,
        },
        {
          text: "D) POST requests are used for read-only operations, GET requests are used for write operations",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "10. What is a closure in JavaScript?",
      answers: [
        {
          text: "A) A function that returns another function",
          correct: false,
        },
        {
          text: "B) A function that keeps track of its outer scope",
          correct: true,
        },
        {
          text: "C) A function that is bound to a specific context",
          correct: false,
        },
        {
          text: "D) A function that can only be invoked once",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "11. What is the difference between synchronous and asynchronous code in JavaScript?",
      answers: [
        {
          text: "A) Synchronous code runs in a single thread, asynchronous code runs in multiple threads",
          correct: false,
        },
        {
          text: "B) Asynchronous code runs in a single thread, synchronous code runs in multiple threads",
          correct: false,
        },
        {
          text: "C) Synchronous code runs immediately, asynchronous code runs at a later time",
          correct: true,
        },
        {
          text: "D) Asynchronous code runs immediately, synchronous code runs at a later time",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "12. What is the difference between a callback function and a promise in JavaScript?",
      answers: [
        {
          text: "A) A callback function is invoked immediately, a promise is invoked at a later time",
          correct: false,
        },
        {
          text: "B) A promise is invoked immediately, a callback function is invoked at a later time",
          correct: false,
        },
        {
          text: "C) A callback function is used for synchronous code, a promise is used for asynchronous code",
          correct: true,
        },
        {
          text: "D) A promise is used for synchronous code, a callback function is used for asynchronous code",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "13. What is the Virtual DOM in React?",
      answers: [
        {
          text: "A) A virtual representation of the actual DOM",
          correct: true,
        },
        {
          text: "B) A way to render components on the server",
          correct: false,
        },
        {
          text: "C) A way to store component state",
          correct: false,
        },
        {
          text: "D) A way to handle events",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the difference between state and props in React?",
      answers: [
        {
          text: "A) Props are passed down from parent components, state is managed within the component",
          correct: true,
        },
        {
          text: "B) Props are managed within the component, state is passed down from parent components",
          correct: false,
        },
        {
          text: "C) Props and state are the same thing",
          correct: false,
        },
        {
          text: "D) Props are used for styling, state is used for functionality",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "What is the difference between a static website and a dynamic website?",
      answers: [
        {
          text: "A) A static website has fixed content, a dynamic website has content that can change based on user interactions or database updates",
          correct: true,
        },
        {
          text: "B) A dynamic website has fixed content, a static website has content that can change",
          correct: false,
        },
        {
          text: "C) A static website is created with HTML, CSS, and JavaScript, a dynamic website is created with a CMS",
          correct: false,
        },
        {
          text: "D) A dynamic website is more interactive and can be updated easily, a static website is less interactive and requires manual updates.",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || earned=='$ 1.000.000' ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
