import React from 'react'
import Flex from './Flex'

const FeatureToggle = ({className}) => {
  return (
    <Flex className= {`gap-x-[60px] my-5 px-7 rounded-lg ${className}`}>
        <div className='relative'>
          <div className='w-[25px] h-[25px] rounded-full bg-[#1BBF00] absolute top-2 left-0'></div>
          <div className='w-[25px] h-[25px] rounded-full bg-[#CBC8F0] absolute top-2 left-[13px]'></div>
        </div> 
      <p className='w-[366px] text-lg text-fourth font-paprika font-normal '>We make processes and technology work efficiently together</p>
    </Flex>
  )
}

export default FeatureToggle