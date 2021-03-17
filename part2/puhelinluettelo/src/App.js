import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numberService from './services/numbers'
import axios from 'axios' 

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    numberService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])  

  const handleRemoval = (id, name) => {
    const answer = window.confirm(`haluatko varmasti poistaa ${name}`)
    if (!answer) return
    if (answer === true) {
      numberService
      .remove(id)  
      
      setPersons(persons.filter(person => person.id !== id))
    }
    
    
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber
    }
    console.log(isDuplicate(newName))

    if (!isDuplicate(newName)) {
       numberService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
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
      <Persons persons={persons} filter={filter} removalHandler={handleRemoval}/>
    </div>
  )

}

export default App
 