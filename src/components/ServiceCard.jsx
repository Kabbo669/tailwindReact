import React from 'react'

const ServiceCard = ({number, text, className}) => {
  return (
    <div className= {`relative after:w-[2px] after:h-[150px] after:bg-[#4f585f] after:absolute after:top-[10px] after:right-[-30px] after:content-[""] ${className}`}>
        <h2 className='text-primary text-[64px] font-open font-extrabold'>{number}</h2>
        <h5 className='text-third text-[34px] font-open font-bold pt-6'>{text}</h5>
      </div>
  )
}

export default ServiceCard