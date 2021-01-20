import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1,
      phone: '040-33343433'      
    },
    { name: 'Pupu Tupuna',
      id: 2,
      phone: '09-1010101'
    }      
  ]) 
  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber ] = useState('')
  
  const [filter, setFilter] = useState('')

  const personsToShow = 
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        id: persons.length + 1,
        phone: newNumber
    }
    console.log(isDuplicate(newName))

    if (!isDuplicate(newName)) {
        setPersons(persons.concat(personObject))
    } else {
        window.alert(`${newName} is already added to phonebook`)
    }   
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = () => {
    return 
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
      <div>
          filter shown with:
          <input
          value={filter}
          onChange={handleFilterChange}
          />
          <p></p>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
            number: 
            <input 
              value={newNumber}
              onChange={handleNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {personsToShow.map(person => 
        <p key={person.id}> {person.name} {person.phone}</p>
        )}
    </div>
  )

}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )