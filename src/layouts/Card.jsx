import Container from "../components/Container"
import Flex from "../components/Flex"
import LayoutCard from "../components/LayoutCard"
import CommonHeading from "../components/CommonHeading"
import SubHeading from "../components/SubHeading"
import Button from "../components/Button"
import Image1 from '../assets/web design logo.png'
import Image2 from "../assets/software logo.png"
import Image5 from '../assets/training logo.png'


const Card = () => {
  return (
    <section className="py-[30px] md:py-100 bg-sixth">
      <Container>
        <Flex className="gap-[25px] flex-wrap">
          <div className="px-5 md:px-0 w-auto md:w-[370px] h-[250px] md:h-[385px]">
            <CommonHeading text = "What We Do"/>
            <SubHeading className='pt-5 pb-5 md:pb-14 leading-8' text = "We are now a team of strategists, engineers, designers and marketers who both use and develop technology"/>
            <Button text = "Contact Us" className="hover:text-black"/>
          </div>
          <LayoutCard image = {Image1} title = 'Web Design & Dev' text = 'Social Media has changed the way we interact & do business while creating'/>
          <LayoutCard image={Image2} title= "Software Dev" text = 'Content Marketing is the other fold of online advertisement. If you are looking to build'/>
          <LayoutCard image={Image2} title='Content Writing' text='Social Media has changed the way we interact & do business while creating a new avenue'/>
          <LayoutCard image={Image1} title='Digital Marketing' text='Social Media has changed the way we interact & do business while creating a new avenue'/>
          <LayoutCard classNameP = 'w-[180px] ' image={Image5} title= 'Support & Training' text='Content Marketing is the other fold of online advertisement. If you are looking to build '/>
         
          
        </Flex> 
      </Container>
    </section>
  )
}

export default Card