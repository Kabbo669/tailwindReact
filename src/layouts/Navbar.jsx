import React from 'react'
import List from '../components/List'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import Button from '../components/Button'



const Navbar = () => {
  return (

    // If need to keep navbar to be fixed on top then use property "fixed" and can't use absolute postion then. Fixed will also works like absolute
    
 <nav className='bg-secondary py-[18px] absolute top-0 left-0 w-full z-20'>

  <Container>
    <Flex className="items-center justify-between">
      
      <Image src = {Logo}/>
      
      <ul className='flex gap-x-10'>
        <List text = "Home"/>
        <List text = "About"/>
        <List text = "Service"/>
        <List text = "Portfolio"/>
        <List text = "Price"/>
        <List text = "Blog"/>
      </ul>
  
      <Button text = "Contact Us"/>
      
    </Flex>
  </Container>

 </nav>

  )
}

export default Navbar