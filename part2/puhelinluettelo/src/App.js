import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios' 

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])  

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        id: persons.length + 1,
        number: newNumber
    }
    console.log(isDuplicate(newName))

    if (!isDuplicate(newName)) {
        //setPersons(persons.concat(personObject))
        axios
          .post('http://localhost:3001/persons', personObject)
          .then(response => {
            setPersons(persons.concat(response.data))
          })
    } else {
        window.alert(`${newName} is already added to phonebook`)
    }   
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  } 

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
}

  const isDuplicate = (newName) => {
      for (let i = 0; i < persons.length; i++) {
          if (persons[i].name === newName) {
              return true
          }
      }
      return false
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>  

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )

}

export default App
 