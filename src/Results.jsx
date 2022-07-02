import React from 'react'
import { useNavigate } from 'react-router-dom';



const Results = ({score , questions}) => {
    const navigate = useNavigate()
   

   function reloadQuiz(){
        navigate('/')
        window.location.reload()
    }

  return (
    <div className='score-board'>
        <h1>Your Total Score is:</h1>
        <h2>{`${score}/${questions.length * 10}`} </h2>
        <button onClick={()=>{
            
            reloadQuiz()
        }}>Reload Quiz</button>
    </div>
  )
}

export default Results