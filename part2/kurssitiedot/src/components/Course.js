import React from 'react'

const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
    </div>
  )
}

const Content = ({ course }) => {
  let items = course.parts
  return (
    <div>
      {items.map(item => 
      <p key={item.id}>
        {item.name} {item.exercises}
      </p>)}
      <p>
        <strong>total of {items.reduce((sum, part) => 
        sum + part.exercises, 0)} exercises</strong>
      </p>
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
} 

export default Course