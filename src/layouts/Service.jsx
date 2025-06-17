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
      <Flex className= "justify-between relative md:block ">

      <div className='w-[240px] h-[200px] md:h-[400px] md:w-[270px]  md:-translate-y-[100px] absolute top-[20px] left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0 -z-10'> 
        <Image className='w-full h-full'  src={Image1} alt= 'alt'/>
      </div>

      <div className='w-[220px] md:w-[200px] h-[250px] md:h-[300px] absolute top-[250px] md:top-0 left-1/2 md:left-[420px] -translate-x-1/2  md:-translate-y-[100px] -z-10'>
      <Image className= 'w-full h-full' src={Image2} alt = 'alt'/>
      </div>

        <div className='w-[280px] absolute top-[530px] md:-top-[100px] h-[280px] md:h-[380px] left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-[560px] -z-10'>
        <Image className= 'w-full h-full' src={Image3} alt = 'alt'/>
        </div>

      <div className=' w-[270px] h-[250px] md:h-[450px] md:w-[270px] absolute top-[840px] md:top-0 md:-translate-y-[100px] -z-10 translate-x-1/2 md:translate-x-0 right-1/2 md:right-0'> 
      <Image className = "w-full h-full" src={Image4} alt= "alt"/>
      </div>


      </Flex>

    <Flex className="flex-col items-center justify-center md:flex-row md:justify-between pt-[1150px] md:pt-[500px] pb-[50px]">
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