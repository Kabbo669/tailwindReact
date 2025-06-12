
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import FeatureToggle from '../components/FeatureToggle'

const Feature = () => {
  return (
   <section className='bg-[#FDFDFD] py-24'>
  <Container>
  <Flex>
   <div className='w-1/2'>
   <FeatureToggle className=" py-[32px]"/>
   <FeatureToggle className="py-[32px]"/>
   <FeatureToggle/>
   <FeatureToggle/>
   <FeatureToggle/>
   </div>

   <div className='w-1/2 pl-[150px]'>
   <CommonHeading  text = "Why Choose Us"/>
   <SubHeading className=" w-[393px] pt-3 pb-10" text = "We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs."/>
   <Button className = "hover:text-black" text = "Contact Us"/>
   </div>
  </Flex>
  </Container> 
   </section>
  )
}

export default Feature