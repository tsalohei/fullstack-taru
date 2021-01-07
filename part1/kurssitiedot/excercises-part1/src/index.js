import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1><Header course={course.name}></Header></h1>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
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
  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  
  return (
    <div>
      <p>Number of exercises: {total} </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))