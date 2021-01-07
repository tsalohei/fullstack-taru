import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    excercises: 7 
  }
  const part3 = {
    name: 'State of a component',
    excercises: 14
  }

  return (
    <div>
      <h1><Header course={course}></Header></h1>
      <Content part1={part1} part2={part2} part3={part3} />
      <p>Number of excercises <Total total={part1.excercises + part2.excercises + part3.excercises}/></p>
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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part.name} {props.part.excercises}
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