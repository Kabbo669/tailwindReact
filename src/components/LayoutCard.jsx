import React from 'react'
import Image from "../components/Image"



const LayoutCard = ({title, text, image, classNameP}) => {
  return (
   <div className="group bg-white w-[370px] h-[385px] rounded-[20px] flex flex-col justify-center items-center text-center px-7 hover:bg-[#6B62C5] duration-300">

    <Image src = {image}/>

    <h3 className='group-hover:text-[#FAFAFE] font-bold text-[30px] font-open text-third pt-8 duration-100'>{title}</h3>

    <p className={`group-hover:text-[#FAFAFE]  font-paprika text-fourth text-lg font-normal w-[278px] duration-100 ${classNameP}`}>{text}</p>

    <a href="" className='font-bold text-third font-open text-2xl relative after:absolute after:top-[12px] after:right-[-15px] after:w-[30px] after:h-[50px] after:content-[""] after:rounded-r-full after:bg-[#1bbf0066] z-10 after:-z-10 pt-5 hover:after:w-[160px] after:duration-300 after:hover:rounded-l-full group-hover:text-[#FAFAFE] group-hover:after:bg-[#fafafe80] duration-100'>Read More</a>

   </div>
  )
}

export default LayoutCard