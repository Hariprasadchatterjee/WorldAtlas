/* eslint-disable no-constant-condition */
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";



const Wrapper=styled.section`
  .header{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
   
    align-items: center;
    
  
    padding: 2rem 0rem;
    background-color: ${({theme})=>theme.colors.headerColor};
    color: ${({theme})=>theme.colors.paraTextColor};
  }
 .container2{
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
 }
  .logo p{
    font-size: 3rem;
    display: inline-block;
  }
  .logo p::first-letter{
    color: goldenrod;
    font-size: 4rem;
    font-weight: 700;
    text-decoration: line-through;
  }
  .active{
    color: red;
  }
  li{
    font-size: 2.5rem;
    position: relative;
    &::after{
      position: absolute;
      content: "";
      width: 0%;
      bottom: 0;
      border-bottom: 2px solid red;
      left: 0;
    }
    &:hover::after{
      width: 100%;
      transition: all 0.3s linear;
    }
  }
  .nav ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
    .menu_close{
      font-size: 4rem;
      border-radius: 40%;
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      display: none;
    }
    @media (max-width:900px) {
      .menu_close{
        display: inline-block;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        [name="menu_c"]{
        display: none;
      }
      }
      .nav{
        position: absolute;
        height: 100vh;
        width: 100%;
        background-color: #030f31;
        z-index: 999;
        color: ${({theme})=>theme.colors.heroTextColor};
        top: 0;
        transform: translateX(100%);
        transition: all 0.3s linear;
      }
      .nav ul{
        height: 100%;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4rem;
      }
      .nav ul li{
        font-size: 5rem;
      }
      .header.hit .nav{
        transform: translateX(0%);
        transition: all 0.3s linear;
      
      }
      .hit .menu_close .close{
          display: block;
          color: ${({theme})=>theme.colors.heroTextColor};
          position: absolute;
          z-index: 999;
          top: 2rem;
          right: 4rem;
          transition: all 0.3s linear;
          font-size: 8rem;
      }
      .hit .menu_close .menu{
          display: none;
          color: black;
          position: absolute;
          z-index: 999;
          top: 2rem;
          right: 4rem;
          transition: all 0.3s linear;
      
      }
      
    }
  
  
`
const Header = () => {
  const [isShowMenu,setIsShowMenu]=useState(false)
  console.log(isShowMenu);
  

  const handleMenubar=()=>{
    setIsShowMenu( !isShowMenu)
  }
  return (
   <Wrapper>
    <header className={isShowMenu ? "header hit" : "header"} >
      <div className="container2">
    <div className="logo">
      <p>WORLD <p>ATLAS</p></p>
    </div>
    <nav className="nav">
      <ul>
        <li><NavLink onClick={handleMenubar} to="/">Home</NavLink></li>
        <li><NavLink onClick={handleMenubar} to="/About">About</NavLink></li>
        <li><NavLink onClick={handleMenubar} to="/Country">Country</NavLink></li>
        <li><NavLink onClick={handleMenubar} to="/Contact">Contact</NavLink></li>
      </ul>
    </nav>
    <div className="menu_close" onClick={handleMenubar}>
    <GiHamburgerMenu name="menu_m"  className="menu"/>
    <IoCloseSharp name="menu_c" className="close"/>
    </div>

    
    </div>
    </header>
   </Wrapper>
  )
}

export default Header