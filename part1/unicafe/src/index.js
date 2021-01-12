import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Stats = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good {props.good}</p>
      <p>bad {props.bad}</p>
      <p>neutral {props.neutral}</p>
    </div>
  )
}

const App = () => { 
  const [good, increaseGood] = useState(0)
  const [bad, increaseBad] = useState(0)
  const [neutral, increaseNeutral] = useState(0)
  
  const handleNeutralClick = () => increaseNeutral(neutral+1)
  
  const handleBadClick = () => increaseBad(bad +1)
  
  const handleGoodClick = () => increaseGood(good + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleBadClick} text='bad' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Stats good={good} bad={bad} neutral={neutral}/>
    </div>
  )

}

ReactDOM.render(
  <App />, document.getElementById('root')
);