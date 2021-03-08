import React from 'react' 
import Languages from './Languages'

const CountryRecord = ({name, capital, population, languages, flag}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p></p>
            <p>capital: {capital}</p>
            <p>population: {population}</p>
            <p></p>
            <h2>languages</h2>
            <Languages languages={languages}/>
            <p></p>            
            <img src={flag} alt="flag" width="500" height="300"></img>
            
        </div>
    )
}

export default CountryRecord