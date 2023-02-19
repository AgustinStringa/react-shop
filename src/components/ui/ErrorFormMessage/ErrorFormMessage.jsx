import React from 'react'
import './ErrorFormMessage.css'
const ErrorFormMessage = ({text}) => {
  return (
    <p className='error-form-message'>{text}</p>
  )
}

export default ErrorFormMessage