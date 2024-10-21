import styled from "styled-components";

const Wrapper = styled.section`
  .country{
    --hue-1:210;
    --hue-2:238;
    transition: all 0.3s linear;
    position: relative;
    z-index: 2;
    overflow: hidden;
   
  color: ${({ theme }) => theme.colors.paraTextColor};
  width: 100%;
  height: auto;
  padding: 4rem 2rem;
  border-radius: 10%;
  /* background: linear-gradient(hsl(210,24%,8%),
              hsl(210,24%,8%)) padding-box,
              
              linear-gradient(135deg,
              hsl(var(--hue-1),85%,70%)0%,
              hsl(210,24%,8%),
              hsl(210,24%,8%),
              hsl(var(--hue-2),70%,55%)100%) border-box
              ; */
  background: linear-gradient(rgba(72,4,144,1),
              rgba(34,193,195,1) ) padding-box,
              
              linear-gradient(135deg,
              hsl(var(--hue-1),85%,70%)0%,
              hsl(210,24%,8%),
              hsl(210,24%,8%),
              hsl(var(--hue-2),70%,55%)100%) border-box
              ;

  
  border: 4px solid transparent;
      &::after{
        position: absolute;
        content: "";
        height: 100%;
        width: 40%;
        background-color: #eee4e5;
        top: -2rem;
        transform: rotate(20deg) translateX(-40vw);
        z-index: -1;
        opacity: 0.4;
        left: 0rem;
        
      }
      &:hover::after{
        transform: rotate(20deg) translateX(110vw) scale(3);
        transition: all 0.3s linear;
      }
      &:hover{
        transform: scaleY(1.1);
      }
  }
  h3{
    color: #dd1637;
    font-variant:small-caps ;
    font-size: 3rem;
  }
span{
  color: #ad7f86;
}

`

const ShowCountry = ({ curCountry }) => {
  const { name, capital, population, interesting_fact } = curCountry;

  return (
    <Wrapper>

      <div className="country" data-aos="flip-left">
        <h3>{name}</h3>
        <p><span>Capital: </span>{capital}</p>
        <p><span>Population: </span>{population}</p>
        <p><span>InterestingFact: </span>{interesting_fact}</p>
        
      </div>
    </Wrapper>

  )
}

export default ShowCountry