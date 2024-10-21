/* eslint-disable react/prop-types */


import { IoCallSharp } from "react-icons/io5"
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb"
import styled from "styled-components";

const Wrapper=styled.section`
  @media (max-width:840px) {
    .footer-content{
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }
  }
  @media (max-width:390px) {
     .footer-content {
      display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    text-align: left;
}
     .footer-content .footer-text{
     text-align: left;
}
  }
  
`

const ShowFtr = ({curDetail}) => {
  const {contactName,contactDetails,icon}=curDetail;
  const footerIcons=
   { 
    MdPlace:<MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus:<TbMailPlus/>,
  }
    
  
  return (
    <Wrapper>
      
    <div className="footer-content" data-aos="zoom-in-up">
    <div className="icon">
      {   footerIcons[icon]  }
      </div>
    <div className="footer-text">
      <p>{contactName}</p>
      <p>{contactDetails}</p>
    </div>
  </div>
    </Wrapper>
  )
}

export default ShowFtr