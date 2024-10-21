/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { FaArrowRight } from "react-icons/fa";
const Wrapper=styled.section`
  .card__article{
    --hue-1:210;
    --hue-2:238;
    transition: all 0.3s linear;
    position: relative;
    z-index: 2;
    overflow: hidden;
   
  color: ${({ theme }) => theme.colors.heroTextColor};
  width: 100%;
  height: auto;
  padding: 4rem 2rem;
  border-radius: 10%;
    
    list-style: none;
    text-transform: capitalize;
   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    border: 4px solid transparent;
    background: linear-gradient(hsl(210,24%,8%),
              hsl(210,24%,8%)) padding-box,
              
              linear-gradient(135deg,
              hsl(var(--hue-1),85%,70%)0%,
              hsl(210,24%,8%),
              hsl(210,24%,8%),
              hsl(var(--hue-2),70%,55%)100%) border-box
              ;
              z-index: 1;
              gap: 2rem;
  }
  .card__article:hover .card__img {
  transform: translateY(-1.5rem);
}
.card__article:hover .country-info {
  transform: translateY(-4.5rem);
  opacity: 0;
}
  figure{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flagImg{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 8px 24px hsla(170, 12%, 8%, .1));
    transition: transform .4s;
   
  }
  .country-info{
    width: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .4s, opacity .4s;
    gap: 4rem;
  }
  .card__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(0);
  z-index: -1;
  transition: transform .4s;
}
.card__article:hover .card__bg {
  transform: scale(1);
  opacity: 0.5;
}
.card__button {
  background-color: white;
  padding: 0.8rem 2rem;
  color: ${({ theme }) => theme.colors.heroTextColor};
  display: flex;
  align-items: center;
  column-gap: .5rem;
  justify-self: center;
  box-shadow: 0 8px 24px hsla(170, 12%, 8%, .1);
  position: absolute;
  bottom: -2em;
  opacity: 0;
  pointer-events: none;
  transition: transform .4s, opacity .4s;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 5px;
  
}
.card__article:hover .card__button {
  transform: translateY(-3.75rem);
  opacity: 1;
  pointer-events: initial;
}
.card__button .i {
  font-size: 1.25rem;
  transition: transform .4s;
}
.card__button:hover .i {
  transform: translateX(1rem);
}
`
const AllCountryDetails = ({country}) => {
  const {flags,name,population} = country
  return (
  <Wrapper>
    <li className="card__article" data-aos="zoom-in-up" >
      <figure>
      <img src={flags.svg} alt={flags.alt} className="flagImg card__img"/>
      </figure>

      <div className="country-info">
        <p className="text-md card-title">{name.common.length>10?name.common.slice(0,10)+"...":name.common}</p>
        <p className="card-population">Population: <span>{population}</span></p>
      </div>
      <img src={flags.png} alt="image" className="card__bg"/>
               
               <NavLink to={`/country/${name.common}`} className="card__button">
                  View More <FaArrowRight className="i"/>
               </NavLink>
    </li>
  </Wrapper>
  )
}

export default AllCountryDetails