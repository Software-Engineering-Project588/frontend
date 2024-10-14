import React from 'react'
import "./index.css"

const index = ({title, description}) => {
  return (
    <div className='card'>
        <h1 className='card-heading'>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default index