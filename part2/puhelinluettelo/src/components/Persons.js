import React from 'react'
import PersonRecord from './PersonRecord'

const Persons = ({persons, filter}) => {
    return (
        persons.filter(person => 
            person.name.toLowerCase().
            includes(filter.toLowerCase())).
            map(person => 
                <PersonRecord key={person.id} 
                name={person.name} number={person.number}/>)
            

    
    )
}

export default Persons