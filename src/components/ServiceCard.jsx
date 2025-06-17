import React from 'react'

const ServiceCard = ({number, text, className}) => {
  return (
    <div className= {`relative after:hidden md:after:block after:w-[2px] after:h-[150px] after:bg-[#4f585f] after:absolute after:top-[10px] after:right-[-30px] after:content-[""] pt-5 md:pt-0 ${className}`}>
        <h2 className='text-primary text-[15px] md:text-[64px] font-open font-extrabold'>{number}</h2>
        <h5 className='text-third text-normal md:text-[34px] font-open font-bold pt-1 md:pt-6 w-[150px] md:w-[240px]'>{text}</h5>
      </div>
  )
}

export default ServiceCard