import React, { useState, useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'

function Quiz({questions, score, setScore}) {

let [index, setIndex] = useState(0)
let [data, setData] = useState(questions)
let [answer, setAnswer] = useState(Object.values(questions[index].answers))
let [choice, setChoice] = useState('')
let [correct, setCorrect] = useState('')
let navigate = useNavigate();
let [corre, setCorre] = useState('');


useEffect(()=>{
  setAnswer(Object.values(questions[index].answers).sort(() => 0.5 - Math.random()));
  setCorre(questions[index].correct_answer);
  setCorrect(questions[index].answers[corre])
},[index])

const handleChange=(ans)=>{
  setChoice(ans)
}

function totalScore(){
  if(choice === correct){
    setScore(score + 10)
  }
}

  
  return (
    <div className='card'>
        <div className='quiz'>
        <h2>{data[index].question}</h2>
        {
          answer.map((ans, index)=>{
            return ans !== null && (<div key={index} className='answer'><input
                
                id={ans}
                type='radio'
                value={ans} 
                checked={choice === ans}
                onChange={()=>handleChange(ans)}
                name='answers'
               />
               <label htmlFor={ans}>{ans}</label>
               </div>)
          })
        }

        <button onClick={()=>{
          if(choice){
            setIndex(index + 1)
            setChoice('')
          }else{
            alert("question not answered")
          }
          if(index === questions.length - 1){
              navigate('/results')
          }
          totalScore()
        }}>submit</button>
        </div>
    </div>
  )
}

export default Quiz