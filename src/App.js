import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Quiz from './Quiz';
import Results from './Results';
import Home from './Home';
import Data from './Data'


function App() {
  let [score, setScore] = useState(0);
  let [name, setName] = useState('')
  let [quizData, setQuizData] = useState(Data)

//   useEffect(()=>{
//     const check = localStorage.getItem('quiz')
//   console.log(check);
//       if(check){

//         setQuizData(JSON.parse(check))
        
//       }else{
//         const fetchData = async ()=>{

//         const data = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&category=sql&difficulty=Easy&limit=10`)
//         const results = await data.json();
//         setQuizData(results)
//         localStorage.setItem("quiz", JSON.stringify(results))
        
//       }
//       fetchData()
      
//     }
  
// },[])

  
  return (
    <BrowserRouter>
    <div className="App">
      <div className='head'>
        <h3>Welcome to Quiz Hub, {name.toUpperCase()}</h3>
        <div className='underline'></div>
      </div>
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName}/>}/>
        <Route path='/Quiz' element={<Quiz questions={quizData} score={score} setScore={setScore}  />}/>
        <Route path='/results' element={ <Results questions={quizData}   score = {score}/> } />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
