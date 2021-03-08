import React from 'react' 

const Languages = ({languages}) => {
    return (
      languages.map(language => {
       return (
        <li key={language.iso639_1}>
              {language.name}              
        </li>)
      })    
    )
}

export default Languages
    