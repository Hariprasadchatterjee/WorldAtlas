import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Wrapper=styled.section`
  .parallax{
    height: 40vh;
    width: 100%;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0.411),rgba(0, 0, 0, 0.514)),url(public/Image/nicole-geri-eUyNYtwN0tA-unsplash.jpg);
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${({theme})=>theme.colors.paraTextColor};
   flex-direction: column;
  }
  .cn_text{
    font-size: 3rem;
    width: 40%;
    animation: color-change 6s linear infinite alternate-reverse;
    font-variant: small-caps;
    font-weight: 600;
  }
  @keyframes color-change {
  0% { color: #51ff00; }
  50% { color: #dcdceb; }
  100% { color: red; }
}
  .cn_btn{
    background-color: ${({theme})=>theme.colors.heroTextColor};
    padding: 0.5rem 2rem;
    border-radius: 5px;
    font-size: 1.5rem;
    margin-top: 2rem;
    transition: all 0.3s linear;
  }
  .cn_btn:hover{
    box-shadow: ${({theme})=>theme.colors.boxshadowSP};
    cursor: pointer;
  }
  @media (max-width:390px) {
    .parallax .cn_text {
    font-size: 3rem;
    width: 69%;
    }
    .parallax .cn_btn{
      padding: 1.5rem 4rem;
    
    font-size: 2.2rem;
    }
  }
`
export const Parralax = () => {
  return (
    <Wrapper>
      <div className="parallax">
        <h2 className="cn_text">If You Are Interesting To Visit Any where In this World Please Join Us.
        </h2>
          <div  className="cn_btn"> <NavLink to={"mailto:harichatterjee957@gmail.com"}>Contact Us</NavLink> </div>
       
      </div>
    </Wrapper>
  )
}
