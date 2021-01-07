import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }
  ]

  return (
    <div>
      <h1><Header course={course}></Header></h1>
      <Content parts={ parts}/>
      <Total parts={parts}/>
      {/*<p>Number of excercises <Total total={part1.excercises + part2.excercises + part3.excercises}/></p> */}
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
  let total = props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises
  
  return (
    <div>
      <p>Number of excercises: {total} </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))