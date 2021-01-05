import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <div>
      <h1><Header course={course}></Header></h1>
      <Content part={part1} excercise={excercises1} />
      <Content part={part2} excercise={excercises2} />
      <Content part={part3} excercise={excercises3} />
      <p>Number of excercises <Total total={excercises1 + excercises2 + excercises3}/></p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.excercise}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      {props.total}
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))