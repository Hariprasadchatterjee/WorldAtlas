import styled from "styled-components"
import Country from "../api/Country.json"
import Review from "../api/Review.json"
import ShowCountry from "../Layout/Ui/ShowCountry"
import PeopleRv from "../Layout/Ui/PeopleRv"
import { useState } from "react"
const Wrapper=styled.section`
  h2{
    color: ${({ theme }) => theme.colors.heroTextColor};
    font-size: 4rem;
  }
  @media (max-width:640px) {
    .about-text h2{
      font-size: 3rem;

    }
  }

`
const About = () => {
  // const [isHidden,setIsHidden]=useState(true)
  const [matchId,setMatchId]=useState(false)

  const getLsitId=(id)=>{
    console.log(id);
    
    setMatchId( (Prev)=>Prev===id? false:id)
  
  }
  console.log(getLsitId);
  return (
    <Wrapper>
   <main className="section pt-[4rem]">
    <div className="container">
      <div className="about-text w-[45%] mx-auto mb-12">
      <h2 className="text-center text-white " data-aos="zoom-in-up">Here Are The Interesting Facts
         We are proud of</h2>
       </div>
      <div className="grid grid-cols-three">
       {
        Country.map( (curCountry)=> <ShowCountry key={curCountry.name} curCountry={curCountry}/> )
        
       }
      </div>
      <div className="mt-12 PeopleReview">
        {
          Review.map( (curData)=><PeopleRv key={curData.id} curData={curData} getLsitId={getLsitId} isHidden={matchId==curData.id?true:false}/>)
        }
      </div>
    </div>
   </main>
   </Wrapper>
  )
}

export default About