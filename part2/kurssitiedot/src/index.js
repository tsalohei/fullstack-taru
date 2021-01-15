import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14, 
          id: 3
        },
        {
          name: 'Javascript madness',
          exercises: 10000,
          id: 4
        }
      ]
    },
    {
      name: 'Break activities for web developers',
      id: 2,
      parts: [
        {
          name: 'drink tea', 
          exercises: 3,
          id: 1
        },
        {
          name: 'take a nap', 
          exercises: 6,
          id: 2
        }
      ]

    }
  ]  
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <Course key={course.id} course={course}/>
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


