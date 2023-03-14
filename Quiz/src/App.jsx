import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/header';
// import questionAnswer from './qa.json';


// const App = () => {

//   const[index, setIndex] = useState(0);
  
//   const updateQuestionNum = () => {
//       setIndex(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
//   }

//   const [queans, setQueAns] = useState(questionAnswer.qa[index].q);

//   const changeQuestionAnswer = () => {
//     if(queans == questionAnswer.qa[index].q){
//       setQueAns(questionAnswer.qa[index].a)
//     }
//     else{
//       setQueAns(questionAnswer.qa[index].q)
//     }
//   }


  
//   return(
//     <div className='wholebody'>
//       <Header/>
      
//       <div className= {questionAnswer.qa[index].level} onClick={changeQuestionAnswer}>
//           <h1>{queans}</h1>
//           {/* <div>{questionAnswer.qa[index].image}</div> */}
//       </div>
//       <button className = 'button' onClick={updateQuestionNum}>➡️</button>
//     </div>
//   )
// }

// export default App;


import stringSimilarity from 'string-similarity';
const height = 200;
const width = 200;

const questions = [
  {
    text: "Who is the father of Computer?",
    answer: "Charles Babbage",
    image: '/public/images/cBabbage.jpeg',
    difficulty: 'easy'
  },
  {
    text: "Who is the first computer programmer?",
    answer: "Lady Augusta Ada Lovelace",
    image: '/images/laal.jpeg',
    difficulty: 'medium'

  },
  {
    text: "What is called the brain of Computer?",
    answer: "CPU",
    image: '../public/images/cpu.jpeg',
    difficulty: 'hard'

  },
  {
    text: "Is Pendrive a storage device?",
    answer: "Yes",
    image: '../public/images/pendrive.jpeg',
    difficulty: 'easy'
  },
  {
    text: "How many bits make 1 byte?",
    answer: "8",
    image: '../public/images/onebyte.jpeg',
    difficulty: 'medium'

  },
  {
    text: "What is the full form of RAM?",
    answer: "Random Access Memory",
    image: '../public/images/ram.jpeg',
    difficulty: 'hard'

  },
  {
    text: "Is Printer an example of output device?",
    answer: "Yes",
    image: '../public/images/printer.jpeg',
    difficulty: 'easy'

  },
  {
    text: "Which electronic component was used in first generation of computer?",
    answer: "Vacuum Tubes",
    image: '../public/images/vacuumTube.jpeg',
    difficulty: 'hard'

  },
  {
    text: "What is the full form of ROM?",
    answer: "Read Only Memory",
    image: '../public/images/rom.jpeg',
    difficulty: 'medium'

  },
  {
    text: "When was IBM Computer invented?",
    answer: "1981",
    image: '../public/images/ibm.jpeg',
    difficulty: 'hard'
  }
]

const App = () => {
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userGuess, setUserGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  useEffect(() => {
    // Reset current streak and longest streak when index changes
    setLongestStreak(Math.max(currentStreak, longestStreak))
  }, [index])

  // const toggleQuestionAnswer = () => {
  //   setShowAnswer(!showAnswer)
  // }

  const toggleQuestionAnswer = () => {
    const questionBox = document.querySelector('.question-box');
    questionBox.classList.toggle('show-answer');
    setShowAnswer(!showAnswer);
  };
  
  

  const updateQuestionNum = () => {
    setIndex(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    setShowAnswer(false)
    setFeedback('')
  }

  const handleUserGuess = (e) => {
    setUserGuess(e.target.value)
  }

  // const shuffleCards = () => {
  //   random_number = Math.floor(Math.random() * (questions.length + 1));
  //   setIndex(random_number)
  // }
  const shuffleCards = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setIndex(randomIndex);
    setShowAnswer(false);
    setFeedback('');
    setUserGuess('');
    setCurrentStreak(0);
  };
  // const handleUserSubmit = () => {
  //   if (userGuess.toLowerCase().trim() === questions[index].answer.toLowerCase().trim() ) {
  //     setFeedback(<p className="correct-feedback">Correct!</p>)
  //     setCurrentStreak(currentStreak + 1)
  //     setLongestStreak(Math.max(currentStreak + 1, longestStreak))
  //     setUserGuess('')
  //     if (index === questions.length - 1) {
  //       setIndex(0)
  //     } else {
  //       setIndex(index + 1)
  //     }

  //   } else {
  //     setFeedback(<p className="incorrect-feedback">Incorrect, try again.</p>)
  //     setCurrentStreak(0)
  //     setUserGuess('')
  //   }
  // }


const handleUserSubmit = () => {
  const answer = questions[index].answer.toLowerCase().trim();
  const guess = userGuess.toLowerCase().trim();
  const similarity = stringSimilarity.compareTwoStrings(answer, guess);
  if (similarity >= 0.8) { // set a threshold for similarity
    setFeedback(<p className="correct-feedback">Correct!</p>);
    setCurrentStreak(currentStreak + 1);
    setLongestStreak(Math.max(currentStreak + 1, longestStreak));
    setUserGuess('');
    if (index === questions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  } else {
    setFeedback(<p className="incorrect-feedback">Incorrect, try again.</p>);
    setCurrentStreak(0);
    setUserGuess('');
  }
};

  const colorDict = {
    easy: 'rgba(5, 249, 131, 0.7)',
    medium: 'rgba(246, 246, 6, 0.7)',
    hard: 'rgba(250, 15, 3, 0.7)'
  }

  const currentQuestion = questions[index]


  return (
    <div className='wholebody'>
      <Header />
      {feedback && 
        <h2 className='feedback-text'>{feedback}</h2>
      }
      <div className='question-container'>
      <button className='shuffle-button' onClick={shuffleCards}>Shuffle</button>
        <div className='question-box' style={{backgroundColor: colorDict[currentQuestion.difficulty]}} onClick={toggleQuestionAnswer}>
          <img className='question-image' src={currentQuestion.image} alt='Question' height = {height} width = {width}/>
          {!showAnswer && 
            <h1 className='question-text'>{currentQuestion.text}</h1>}
          {showAnswer && 
            <h1 className='answer-text'>{currentQuestion.answer}</h1>
          }
        </div>
        <div className='guess-container'>
          <input type='text' value={userGuess} onChange={handleUserGuess} placeholder='Enter your guess...' className='guess-input' />
          <button className='button guess-button' onClick={handleUserSubmit}>Submit</button>
        </div>
      </div>
      <div className='button-container'>
        {index > 0 &&
          <button className='button' onClick={() => setIndex(index - 1)}>⬅️</button>
        }
        <button className='button' onClick={updateQuestionNum}>➡️</button>
      </div>

      <div className='streak-counter-container'>
        <h3 className='streak'>Current streak: {currentStreak}</h3>
        <h3 className='streak'>Longest streak: {longestStreak}</h3>
      </div> 
    </div>
  )}
  
  export default App
