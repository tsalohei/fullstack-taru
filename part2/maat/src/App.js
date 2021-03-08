import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import ReactDOM from 'react-dom'
import axios from 'axios' 
import Countries from './components/Countries'

const App = () => { 

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  //haetaan kaikki maat
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  //filtteriin sopivien maiden näyttäminen
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    console.log(filter)
  }

  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>    
      <Countries filteredCountries={filteredCountries}/>
    </div>
  )

}
export default App;
