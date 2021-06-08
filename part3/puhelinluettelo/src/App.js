import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import numberService from './services/numbers'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    numberService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])  

  const handleRemoval = (id, name) => {
    const answer = window.confirm(`are you sure you want to delete ${name}`)
    if (!answer) return
    
    numberService
      .remove(id)  
    
      setPersons(persons.filter(person => person.id !== id)) 
      setNotificationMessage(`${name} was deleted`)

      setTimeout(() => {
        setNotificationMessage(null)
      }, 3000);  
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
            
            setNotificationMessage(`Person ${newName} was added`)

            setTimeout(() => {
              setNotificationMessage(null)
            }, 3000);
          })
    } else {
        const oldPerson = persons.find(person => person.name === personObject.name)
        const id = oldPerson.id
        const changedPerson = {...oldPerson, number: personObject.number}
        const result = window.confirm(`${newName} is already added to phonebook. Do you want to replace the old number with a new one?`)
        if (!result) return
        
        numberService
          .replace(id, changedPerson) 
          .then(updatedPerson => {
            setPersons(
              persons
                .filter(person => person !== oldPerson) 
                .concat(changedPerson) 
            )
            setNotificationMessage(`${newName}'s number was updated`)

            setTimeout(() => {
              setNotificationMessage(null)
            }, 3000);
          })  
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
      <h2>DAS Phonebook</h2>
      <Notification message={notificationMessage}/>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>  

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} removalHandler={handleRemoval}/>
    </div>
  )

}

export default App
 