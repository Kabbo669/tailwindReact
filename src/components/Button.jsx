import React from 'react'

const Button = ({text, className}) => {
  return (
   <button className = {`py-[12px] md:py-[14px] px-4 md:px-7 bg-primary rounded-[100px] text-base md:text-lg text-white font-semibold hover:bg-transparent border border-transparent hover:border-primary duration-200 ${className}`}>{text}</button> 
  )
}

export default Button