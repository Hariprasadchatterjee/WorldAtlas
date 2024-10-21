import styled from "styled-components"
import {FooterIcon} from "../../api/FooterIcon.js"
import { FaFacebookF } from "react-icons/fa";
import ShowFtr from "./ShowFtr"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Wrapper=styled.section`
  .section{
    color: white;
    background-color: ${({theme})=>theme.colors.headerColor};
  }
  .footer-content{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .footer-text{
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: column;
  }
  .icon{
    color: ${({theme})=>theme.colors.heroTextColor};
    font-size: 3rem;
  }
  .reserved{
    border-top: 2px solid gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
   align-content: end;
    color: #1c76c5;
    padding-top: 1rem;
  }
  .allSocialIcons{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    gap: 1rem;
    /* border: 2px solid #1c76c5; */
  }
  .hr:hover{
    transform: rotate(360deg);
    transition: all 0.4s linear;
    cursor: pointer;
  }
  @media (max-width:640px){
   .reserved{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:2rem
   }
  }
  
`
const Footer = () => {

  return (
   <Wrapper>
    <footer className="section">
      <div className="container">
        <div className="grid grid-cols-three">
          
          {
            FooterIcon.map( (curDetail,index)=>{
             
              return (
                <ShowFtr key={index} curDetail={curDetail}/>
              )
            })
          }
        </div>
      </div>
        <div className="reserved" >
          <p>&copy; 2024 Copyright : By HariChatterjee</p>
          <div className="allSocialIcons" >
          <FaInstagramSquare className="border-[#1c76c5] border-2 rounded-full p-2 box-content hr"/>
          <FaFacebookF className="border-[#1c76c5] border-2 rounded-full p-2 box-content hr"/>
          <FaLinkedin className="border-[#1c76c5] border-2 rounded-full p-2 box-content hr"/>
          <FaYoutube className="border-[#1c76c5] border-2 rounded-full p-2 box-content hr"/>
          </div>
        </div>
    </footer>
   </Wrapper>
  )
}

export default Footer