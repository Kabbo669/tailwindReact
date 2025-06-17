
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import FeatureToggle from '../components/FeatureToggle'

const Feature = () => {
  return (
   <section className='bg-[#FDFDFD] py-[25px] md:py-24'>
  <Container>
  <Flex className="flex-col md:flex-row">
   <div className='w-auto md:w-1/2 pb-5 md:pb-0'>
   <FeatureToggle className='py-[15px] md:py-[25px]'/>
   <FeatureToggle className= 'py-[10px] md:py-[25px]'/>
   <FeatureToggle className= 'py-[10px] md:py-[25px]'/>
   <FeatureToggle className= 'py-[10px] md:py-[25px]'/>
   <FeatureToggle className= 'py-[10px] md:py-[25px]'/>
   </div>

   <div className='text-center md:text-left md:w-1/2 px-3 md:pl-[150px] py-10'>
   <CommonHeading  text = "Why Choose Us"/>
   <SubHeading className="w-auto md:w-[393px] pt-3 pb-10" text = "We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs."/>
   <Button className = " hover:text-black" text = "Contact Us"/>
   </div>
  </Flex>
  </Container> 
   </section>
  )
}

export default Feature