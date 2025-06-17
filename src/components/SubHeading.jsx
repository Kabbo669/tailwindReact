import React from 'react'

const subHeading = ({text, className}) => {
  return (
     <p className= {`text-fifth font-paprika text-sm md:text-lg font-normal ${className}`}>{text}</p>
  )
}

export default subHeading