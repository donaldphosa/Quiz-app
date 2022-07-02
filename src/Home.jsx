import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Home({name, setName}) {
  
    
    const navigate = useNavigate();
    let [err, setErr] = useState(false)
        
  return (
    <div className='home'>
         <h1>Welcome, To Our General Knowledge Quiz </h1>
         <h1>Start the Quiz and have fun</h1>
         <input className={err?'show-err':''}
            placeholder='Name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            
         /><br/>
         <button onClick={()=>{
             if(name){
                navigate('/Quiz')
               
             }else{
                 setErr(true)
             }
         }}>Start Quiz</button>
    </div>
  )
}

export default Home