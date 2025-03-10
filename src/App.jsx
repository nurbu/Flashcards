import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cardtext from './component/Card'

const App = () => {
  const [count, setCount] = useState(0);
  const [back, setBack] = useState(true)

  const add = () => setCount(prevCount => (prevCount+1===10 ? 0: prevCount+1));
  const sub = () => setCount(prevCount => (prevCount-1===-1 ? 9: prevCount-1));

  return(
    <div className='Main'>
      <div className='mbody'>
        <h1>Bio Exam Test</h1>
        <h3>Are you ready for the bio test?</h3>
        <h5>10 Questions</h5>
        <div className='Card' onClick={() => setBack(!back)} >
          <Cardtext qnum={count} qora={back} />
        </div>
        <div>
        <button onClick={sub}>⬅</button>
        <button onClick={add}>➡</button>
      </div>
      </div>
      
    </div>
  )
}

export default App
