import React from 'react'
import './index.css'

const QuestionCard = ({question, answer}) => {
    
  return (
    <div className='question-card'>
       <div className='question-container'>
        <h1 className='question'>{question}</h1>
       
       </div>
        <div className='answer'>
          <p>{answer}</p>
        </div>
    </div>
  )
}

export default QuestionCard