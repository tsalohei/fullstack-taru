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
      <Content part1={part1} excercise1={excercises1} part2={part2} excercise2={excercises2} part3={part3} excercise3={excercises3} />
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
      <Part part={props.part1} excercise={props.excercise1}/>
      <Part part={props.part2} excercise={props.excercise2}/>
      <Part part={props.part3} excercise={props.excercise3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.excercise}
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