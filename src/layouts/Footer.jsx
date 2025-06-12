import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import FooterImage from '../assets/logo.png'
import List from '../components/List'

const Footer = () => {
  return (
    <footer className='bg-[#48409C] pt-[126px] pb-20'>
      <Container>
      <Flex>

      <div className='w-3/6 '>
      <Image src = {FooterImage}/>
      <p className='text-white text-lg font-open font-normal pt-11 w-[449px]'>Install Any Demo Or template With A Single Click. You Can Mix And Match All The Demos & Templates. Every Demo Can Be Turned Into One Or Multi-Page</p>
      </div>

      <div className='w-1/6'>
      <strong className='text-[#FEFEFE] text-2xl font-semibold'>Features</strong>
      <ul className='flex flex-col gap-y-8 pt-12'>
        <List text= 'Home'/>
        <List text= 'About'/>
        <List text= 'Benefit'/>
        <List text= 'Pricing'/>
        <List text= 'Blog'/>
      </ul>
      </div>

      <div className='w-1/6 '>
      <strong className='text-[#FEFEFE] text-2xl font-semibold'>Products</strong>
      <ul className='flex flex-col gap-y-8 pt-12'>
        <List text= 'Task Management'/>
        <List text= 'Company Growth'/>
        <List text= 'Time Tracking'/>
        
      </ul>
      </div>

      <div className='w-1/6 '>
      <strong className='text-[#FEFEFE] text-2xl font-semibold'>Support</strong>
      <ul className='flex flex-col gap-y-8 pt-12'>
        <List text= 'Customer Service'/>
        <List text= 'Accessibility'/>
        <List text= 'Contact Us'/>
       
      </ul>
      </div>

      
      </Flex>

      <Flex className='justify-between pt-20 text-white'>
        <p className='text-[#FEFEFE] font-open text-lg'>@20201 Innovate. All rights reserved</p>
        <Flex className='gap-x-[60px]'>
          <p className='text-[#FEFEFE] font-paprika font-normal text-lg'>Privacy Policy</p>
          <p className='text-[#FEFEFE] font-paprika font-normal text-lg'>Terms & Condition</p>
        </Flex>
      </Flex>
      </Container>
    </footer>
  )
}

export default Footer