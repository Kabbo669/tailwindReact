import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import PlanCard from '../components/PlanCard'
import BasicImage from '../assets/basic.png'
import ProfessionalImage from '../assets/professional.png'


const ChoosePlan = () => {
  return (
    <section className='py-10 md:py-100 bg-[#F9F9FB]'>
      <Container> 

        <Flex className="gap-[30px] flex-wrap">
        <PlanCard title = 'Basic' number = '160' text = 'Responsive Design Dynamic Elements Service Pages Custom Design & Features' image={BasicImage} />

        <PlanCard title = 'Professional' number = '240' text = 'Responsive Design Dynamic Elements Service Pages Custom Design & Features' image={ProfessionalImage} />

        <PlanCard  title = 'Exclusive' number = '325' text = 'Responsive Design Dynamic Elements Service Pages Custom Design & Features' image={ProfessionalImage} className = "items-center"/>
       
        
        </Flex>

      </Container>
    </section>
  )
}

export default ChoosePlan