import React from 'react'
import Image from '../components/Image'


const PlanCard = ({classNameP,classNameh4,number, text, title, image}) => {
  return (
      <div className='group bg-white w-[370px] py-[60px] px-[59px] rounded-[20px] flex flex-col justify-center items-center text-center relative hover:bg-[#6B62C5] duration-100'>
       <h3 className='group-hover:text-[#FAFAFE] text-third font-bold font-open text-[30px] duration-100'>{title}</h3> 

       <div className='bg-[#ECEDF0] duration-100 w-[370px] h-[170px] absolute top-[130px] left-0'>
        <Image src={image} />
       </div>
       
       <h4 className= {`group-hover:text-[#FAFAFE] text-primary font-extrabold font-open text-5xl pt-[216px] pb-[12px] duration-100 ${classNameh4}`}>{number}</h4>
       
       <p className= {`group-hover:text-[#FAFAFE] duration-100 text-fourth text-lg font-normal font-paprika ${classNameP}`}>{text}</p>
      </div>
  )
}

export default PlanCard