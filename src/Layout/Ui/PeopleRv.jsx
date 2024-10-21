import styled from "styled-components"
import { FaLock } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { useState } from "react";

const Wrapper=styled.section`
.items{
  position: relative;
}
.items::after{
  position: absolute;
  content:"";
  top: 11rem;
  left: 0;
  width: 0%;
  background-color: #e4b20e;
  height: 5px;

  
}
@media (max-width:640px) {
  .items::after{
  position: absolute;
  content:"";
  top: 14rem;
  left: 0;
  width: 0%;
  background-color: #e4b20e;
  height: 5px;

  
}
}
.items.unlock::after{
  transition: all 0.3s linear;
  width: 100%;
}




  .question{
    background-color: ${({theme})=>theme.colors.heroTextColor};
    color: ${({theme})=>theme.colors.paraTextColor};
    padding: 4rem 0rem 2rem 2rem;
    font-variant: small-caps;
    font-size: 2.4rem;
    position: relative;
  }
  .lock_un{
    position: absolute;
    right: 2rem;
    top: 1rem;
    color: #e4b20e;
    
  }
  .answer{
    background-color: ${({theme})=>theme.colors.headerColor};
    color: ${({theme})=>theme.colors.paraTextColor};
    padding: 1rem 2rem 1rem 2rem;
    text-align: justify;
    /* font-variant: small-caps; */
    &::first-letter{
    text-transform: uppercase;
    font-size: 4rem;
    color: #e4b20e;
    
   }
  }

  
`
const PeopleRv = ({curData,isHidden,getLsitId}) => {
  
  const {id,question,answer}=curData
  return (
    <Wrapper data-aos="zoom-in">
       <li   className={`items ${!isHidden ? "lock":"unlock"}`} >
      <h3 className="question">
        {question}
        <div onClick={()=>getLsitId(id)}  className="lock_un">
      <FaLock className={` ${!isHidden ? "block lock":"hidden"}`}/>
      <FaUnlockAlt className={`  ${!isHidden ? "hidden":"block unlock"}`}/>
      </div>
        </h3>
      <p className={`answer ${!isHidden ? "hidden":"block"}`}>{answer}</p>
      </li>
    </Wrapper>

  )
}

export default PeopleRv