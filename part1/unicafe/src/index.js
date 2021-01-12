import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Stats = ({good, bad, neutral, total, sum}) => {
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        no feedback given!
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <Basics good={good} bad={bad} neutral={neutral}/>
      <Total total={total}/>
      <Average sum={sum} total={total}/>
      <Positive good={good} total={total}/>
    </div>
  )
}

const Basics = ({good, bad, neutral}) => {
  return (
    <div>
      <p>good {good}</p>
      <p>bad {bad}</p>
      <p>neutral {neutral}</p>
    </div>
  )
}

const Total = ({total}) => {
  return (
    <p>all {total}</p>
  )
}

const Positive = ({good, total}) => {
  let result = good
  if (good > 0) {
    result = good / total
  }
  
  return (
    <div>
      <p>positive {result} % </p>
    </div>
  )
}

const Average = ({sum, total}) => {
  let average = total
  if (average > 0) {
    average = sum / total
  }
  return (
    <div>
      <p>average {average}</p>
    </div>
  )
}

const App = () => { 
  const [good, increaseGood] = useState(0)
  const [bad, increaseBad] = useState(0)
  const [neutral, increaseNeutral] = useState(0)
  const [total, increaseTotal] = useState(0)
  const [sum, setSum] = useState(0)

  const handleNeutralClick = () => {
    increaseNeutral(neutral+1)
    increaseTotal(total+1)
  }  

  const handleBadClick = () => {
    increaseBad(bad +1) 
    increaseTotal(total+1) 
    setSum(sum-1)
  }

  const handleGoodClick = () => {
    increaseGood(good + 1)
    increaseTotal(total+1)
    setSum(sum+1)
  }  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleBadClick} text='bad' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Stats good={good} bad={bad} neutral={neutral} total={total} sum={sum}/>
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
);