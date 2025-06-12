import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Image1 from '../assets/card1.png'
import Image2 from '../assets/card2.png'
import Image3 from '../assets/card3.png'
import Image4 from '../assets/card4.png'
import ServiceCard from '../components/ServiceCard'

const Service = () => { 
  return (
    <section className='bg-[#F9F9FB] relative -z-20'>
    <Container>
      <Flex className= "justify-between relative ">

      <div className='w-[270px] absolute -top-[100px] left-0 -z-10'> 
        <Image className='w-full' src={Image1} alt= 'alt'/>
      </div>

      <div className='w-[200px] absolute -translate-y-[100px] left-[300px] -z-10'>
        <Image className= 'w-full' src={Image2} alt = 'alt'/>
         </div>

      <div className='w-[340px] absolute -top-[100px] left-[530px] -z-10'>
        <Image className= 'w-full' src={Image3} alt = 'alt'/>
         </div>

      <div className='w-[270px] absolute -translate-y-[100px] -z-10 right-0'> 
        <Image className = "w-full" src={Image4} alt= "alt"/>
      </div>
      </Flex>

    <Flex className="justify-between pt-[500px] pb-[100px]">
        <ServiceCard text="Happy client" number = "53k"/>
        <ServiceCard text="Projects Done" number = "10k"/>
        <ServiceCard text="Gets Award" number = "120"/>
        <ServiceCard text="Operated Years" number = "16" className = "after:bg-transparent"/>
      </Flex>

      
    </Container>
  </section>

 
  
  )
}

export default Service