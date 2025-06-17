import Button from '../components/Button'
import Container from '../components/Container' 
import React from 'react'
import Flex from '../components/Flex'


const Banner = () => {

  return (

    <section className=' bg-bannerBackground w-full bg-no-repeat bg-cover bg-center relative pt-[550px] md:pt-[600px] md:pb-[294px]'>

    <div className='bg-[#6b62c5e6] inset-0 absolute flex justify-center items-center'>
      
      <Container>
        <div className='text-center px-3 md:px-0 pt-[50px] md:pt-0'>
          <h1 className='text-[28px] md:text-[84px] text-[#FAFAFE]  font-bold font-open mx-auto pt-[150px] md:pt-0'>YOU'RE UNIQUE.YOUR WEBSITE SHOULD BE TOO</h1>
          <p className='font-paprika text-lg md:text-2xl text-[#E6E5F3] font-normal md:w-[715px] mx-auto leading-7 md:leading-10 pb-6 pt-4 md:pt-0'>A beautiful website passionately crafted for your small business.Our Digital Agency development has changed the way brands and businesses use technology for growing business</p>
         <Flex className = "justify-center gap-x-4 pb-[100px] md:pb-0">
          <Button text = "Get Free Quoto"/>
          <Button text = "Learn More"/>
         </Flex>
          
        

        </div>
        
      </Container>
    </div>
      
    </section>

  )
}

export default Banner