import React from 'react'
import PersonRecord from './PersonRecord'

const Persons = ({persons, filter, removalHandler}) => {
    return (
        persons.filter(person => 
            person.name.toLowerCase()
            .includes(filter.toLowerCase())).
            map(person => 
                <PersonRecord key={person.id} 
                name={person.name} 
                number={person.number} 
                removalHandler={() => removalHandler(person.id, person.name)}/>)
            

    
    )
}

export default Persons