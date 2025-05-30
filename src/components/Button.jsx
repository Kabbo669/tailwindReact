import React from 'react'

const Button = ({text, className}) => {
  return (
   <button className = {`py-[14px] px-7 bg-primary rounded-[100px] text-lg text-white font-semibold hover:bg-transparent hover:text-white border border-transparent hover:border-primary duration-200 ${className}`}>{text}</button> 
  )
}

export default Button