import React from 'react'
import CountryRecord from './CountryRecord'

const Countries = ({filteredCountries}) => {    

    if (filteredCountries.length > 1 && filteredCountries.length <= 10)
        return (
            filteredCountries
                .map(country =>
                <li key={country.numericCode}>
                    {country.name}
                </li>)            
    )

    else if (filteredCountries.length == 1) {
        return (
            <CountryRecord name={filteredCountries[0].name} 
                capital={filteredCountries[0].capital} 
                population={filteredCountries[0].population} 
                languages={filteredCountries[0].languages} 
                flag={filteredCountries[0].flag}/>        
        )
    }        
    
    return (
        <p>too many matches, specify another filter</p>
    )
}





export default Countries