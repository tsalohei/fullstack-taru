import React from 'react'
import PersonRecord from './PersonRecord'

const Persons = ({persons, filter}) => {
    return (
        persons.filter(person => 
            person.name.toLowerCase().
            includes(filter.toLowerCase())).
            map(person => 
                <PersonRecord key={person.id} 
                name={person.name} phone={person.phone}/>)
            

    
    )
}

export default Persons






//{personsToShow.map(person => 
//    <p key={person.id}> {person.name} {person.phone}</p>
//    )}