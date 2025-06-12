import Button from '../components/Button'
import Container from '../components/Container' 
import React from 'react'
import Flex from '../components/Flex'


const Banner = () => {

  return (

    <section className=' bg-bannerBackground w-full bg-no-repeat bg-cover bg-center relative h-[860px]'>

    <div className='bg-[#6b62c5e6] inset-0 absolute flex justify-center items-center'>
      
      <Container>
        <div className='text-center '>
          <h1 className='text-[84px] text-[#FAFAFE]  font-bold mx-auto font-open'>YOU'RE UNIQUE.YOUR WEBSITE SHOULD BE TOO</h1>
          <p className='font-paprika text-2xl text-[#E6E5F3] font-normal w-[715px] mx-auto leading-10 pb-6'>A beautiful website passionately crafted for your small business.Our Digital Agency development has changed the way brands and businesses use technology for growing business</p>
         <Flex className = "justify-center gap-x-4">
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