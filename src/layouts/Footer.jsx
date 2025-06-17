import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import FooterImage from '../assets/logo.png'
import List from '../components/List'

const Footer = () => {
  return (
    <footer className='bg-[#48409C] pt-[50px] md:pt-[126px] pb-20 px-6 md:px-0'>
      <Container>
      <Flex className='flex-col md:flex-row'>

      <div className='w-3/6 '>
      <Image src = {FooterImage}/>
      <p className='text-white text-lg font-open font-normal
       pt-11 w-[350px] md:w-[449px] pb-9 md:pb-0'>Install Any Demo Or template With A Single Click. You Can Mix And Match All The Demos & Templates. Every Demo Can Be Turned Into One Or Multi-Page</p>
      </div>

      <div className='w-full md:w-1/6 pb-11 md:pb-0'>
      <strong className='text-[#FEFEFE] text-2xl font-semibold'>Features</strong>
      <ul className='flex flex-col gap-y-2 md:gap-y-8 pt-3 md:pt-12'>
        <List text= 'Home'/>
        <List text= 'About'/>
        <List text= 'Benefit'/>
        <List text= 'Pricing'/>
        <List text= 'Blog'/>
      </ul>
      </div>

      <div className='w-1/6 pb-11 md:pb-0'>
      <strong className='text-[#FEFEFE] text-2xl font-semibold'>Products</strong>
      <ul className='flex flex-col gap-y-2 md:gap-y-8 pt-3 md:pt-12  '>
        <List className='w-max' text= 'Task Management'/>
        <List className='w-max' text= 'Company Growth'/>
        <List className="w-max" text= 'Time Tracking'/>
        
      </ul>
      </div>

      <div className='w-1/6'>
      <strong className='text-[#FEFEFE] text-2xl font-semibold'>Support</strong>
      <ul className='flex flex-col gap-y-2 md:gap-y-9 pt-3 md:pt-12'>
        <List className='w-max' text= 'Customer Service'/>
        <List text= 'Accessibility'/>
        <List className='w-max' text= 'Contact Us'/>
       
      </ul>
      </div>

      
      </Flex>

      <Flex className='md:justify-between pt-12 md:pt-20 text-white flex-col md:flex-row gap-y-2 md:gap-y-0'>
        <p className='text-[#FEFEFE] font-open text-lg'>@20201 Innovate. All rights reserved</p>
        <Flex className='gap-x-[60px] flex-col md:flex-row gap-y-2 md:gap-y-0'>
          <p className='text-[#FEFEFE] font-paprika font-normal text-lg'>Privacy Policy</p>
          <p className='text-[#FEFEFE] font-paprika font-normal text-lg'>Terms & Condition</p>
        </Flex>
      </Flex>
      </Container>
    </footer>
  )
}

export default Footer