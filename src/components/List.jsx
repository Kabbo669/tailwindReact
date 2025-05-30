import React from 'react'

const List = ({text, className}) => {

  return (

    <div>
     <li className={`text-[#EFF4FA] ext-lg font-open font-semibold hover:text-[#1BBF00] duration-300 cursor-pointer list-none ${className}`}>{text}</li>
    </div>
  )
}

export default List