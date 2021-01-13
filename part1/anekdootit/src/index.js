import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {  
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const nextClick = () => {
    let randomIndex = Math.floor(Math.random() * Math.floor(6))
    setSelected(randomIndex)
  }

  const voteClick = () => {
    const copy = {...points}
    copy[selected] += 1

    setPoints(copy)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={voteClick} text='vote'/>
      <Button onClick={nextClick} text='next anecdote'/>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
