import { Outlet } from "react-router-dom"
import Header from "./Ui/Header"
import Footer from "./Ui/Footer"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";


const AppLayout = () => {


  const [scrollPosition,setScrollPosition] = useState(0)
  const [isHiddeb,setIsHidden]=useState(false)
  const scrollProgress=()=>{
    const winScroll=window.scrollY;
    console.log(winScroll);
    
    const scrollHeight= document.body.scrollHeight-window.innerHeight;
    // console.log(scrollHeight);
    
    
    if (scrollHeight) {
      const scrolled = Number((winScroll/scrollHeight).toFixed(2))*100
      // console.log(scrolled);
      
      setScrollPosition(scrolled)

    }
  }
  useEffect( ()=>{
    window.addEventListener("scroll",scrollProgress)
    return()=> window.removeEventListener("scroll",scrollProgress)

  },[])
    
  const handleTop=()=>{
   
    window.scrollTo({top:0,left:0,behavior:"smooth"})
  }

  const listenToScroll=()=>{
    const hiddenHeight=250;
    const scrollPosition=window.scrollY;
    // console.log(scrollPosition);
    
    if (scrollPosition>hiddenHeight) {
      setIsHidden(true)
    }
    else{
      setIsHidden(false)
    }
  }

  useEffect( ()=>{
   
   
    window.addEventListener("scroll",listenToScroll)
    return ()=> window.removeEventListener("scroll",listenToScroll)
  },[])
  return (
    <>
    <div  style={{transform:`translateX(${scrollPosition-100}%)`}}  id="progressbar"></div>
      <Header/>
      <Outlet />
      {
        isHiddeb && (
          <div onClick={handleTop} className="up_down_btn">
      <FaArrowUp className="up_down_icon"/>
      </div>
        )
      }
      
      <Footer/>
    </>

  )
}

export default AppLayout