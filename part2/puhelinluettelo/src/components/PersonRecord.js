import React from 'react'

const PersonRecord = ({name, number, removalHandler}) => {
    return (
        <p>{name} {number} <button onClick={removalHandler}>delete</button></p>
    )
}

export default PersonRecord