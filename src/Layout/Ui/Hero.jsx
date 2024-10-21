import styled from "styled-components"
import Button from "./Button"

const Wrapper=styled.section`
main{
  margin-top: 8rem;
}
  .hero-text{
    color: ${({theme})=>theme.colors.paraTextColor};
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }
  .hero-text h1{
    color: ${({theme})=>theme.colors.heroTextColor};
    font-variant: small-caps;
    width: 80%;
    margin-bottom: 2rem;
    font-size: 5rem;
  }
  .hero-image{
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  .btn{
    margin-top: 2rem;
  }
  .hr-img{
    width: 90%;
  }
  @media (max-width:440px) {
    .hr-img{
    width: 100%;
  }
  }

`
const Hero = () => {
  return (
    <Wrapper>
   <main className="section">
    <div className="container">
      <div className="grid grid-cols-two">
        <div className="hero-text"  data-aos="fade-right">
          
        <h1>Explore the World, One
          Country at a Time.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus, aperiam labore eveniet quia eum!</p>
        <div className="btn">
          <Button type="hero">Start Explore</Button>
        </div>
        
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src="public/Image/world.png" alt="" className="hr-img"/>
        </div>
      </div>
    </div>
   </main>
   </Wrapper>
  )
}

export default Hero