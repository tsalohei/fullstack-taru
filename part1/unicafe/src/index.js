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
        no feedback given!
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='total' value={total}/>
      <StatisticLine text='average' value={sum / total}/>
      <StatisticLine text='positive' value={good / total + ' %'}/>   
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
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
      <h2>Statistics</h2>
      <Stats good={good} bad={bad} neutral={neutral} total={total} sum={sum}/>
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
);