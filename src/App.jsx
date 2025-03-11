import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cardtext from './component/Card'
import Checker from './component/Checker'

const App = () => {
  const [count, setCount] = useState(0);
  const [back, setBack] = useState(true);
  const [answer,setAnswer] = useState("");
  const [ccc,setCcc] = useState("");

  const add = () => setCount(prevCount => (prevCount+1===10 ? 0: prevCount+1));
  const sub = () => setCount(prevCount => (prevCount-1===-1 ? 9: prevCount-1));
  const ans = () => setAnswer(prevCount)
  const cans = (event) => setAnswer(event.target.value);
  const cc = (response) => setCcc(response);
  let che = answer === ccc ? true : false

  return(
    <div className='Main'>
      <div className='mbody'>
        <h1>Bio Exam Test</h1>
        <h3>Are you ready for the bio test?</h3>
        <h5>10 Questions</h5>
        <div className='Card' onClick={() => setBack(!back)} >
          <Cardtext qnum={count} qora={back} />
        </div>
        <h3>Guess the answer</h3>
        <input type="text" value = {answer} onChange={cans}/>
        <h3>You typed: {answer}</h3>
        <button onClick={() => cc(<Cardtext qnum={count} qora="flase"/>)}>Submit Guess</button>
        <Checker check={che}/>
        <div>
        <button onClick={sub}>⬅</button>
        <button onClick={add}>➡</button>
      </div>
      </div>
      
    </div>
  )
}

export default App
