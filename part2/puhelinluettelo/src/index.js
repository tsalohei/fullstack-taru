import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1}      
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        id: persons.length + 1
    }
    console.log(isDuplicate(newName))

    if (!isDuplicate(newName)) {
        setPersons(persons.concat(personObject))
    } else {
        window.alert(`${newName} is already added to phonebook`)
    }   
    setNewName('')
  }

  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
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
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => 
        <p key={person.id}>{person.name}</p>)}
    </div>
  )

}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )