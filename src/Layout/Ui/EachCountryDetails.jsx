import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {  getEachCountryData } from "../../Services/Postapi"
import styled from "styled-components"
import Loader from "./Loader"

const Wrapper=styled.section`
.cn_text{
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 1rem;
}
h2{
  font-size: 4rem;
}
p{
  color: ${({ theme }) => theme.colors.heroTextColor};
  font-size: 2rem;
  font-weight: 600;
}
figure{
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid{
  gap: 5rem;
}
  .design{
    width: 100vw;
    height: auto;
    border-block: 5px solid white;
    padding-top: 2rem;
  }
  .design2{

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
  border-radius: 1%;
    
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
        width: 10%;
        background-color: #eee4e5;
        top: -2rem;
        transform: rotate(20deg) translateX(-20vw);
        z-index: -1;
        opacity: 0.4;
        left: 0rem;
        
      }
      &:hover::after{
        transform: rotate(20deg) translateX(100vw) scale(5);
        transition: all 0.3s linear;
      }
      &:hover{
        transform: scaleY(1.1);
      }
  }
  @media (max-width:570px) {
    .cn_img{
      width: 70%;
    }
    .cn_text p{
      font-size: 3rem;
    }
    .section{
      margin-top: 4rem;
    }
  }
`
const EachCountryDetails = () => {
 const params=useParams()

  
 const [Country,setCountry] = useState()
 const[loading,setLoading]=useState(true)
 console.log(Country);
 
 
  
 const getApiData=async()=>{
  const res = await getEachCountryData(params.id)
     console.log(res);
     if (res.status===200) {
      
       setCountry(res.data[0]);
     }
 }

 useEffect( ()=>{
  getApiData()
  setLoading(false)
 },[])

 if (loading) {
    return <Loader/>
 }
 
 return (
      <Wrapper>
        <div className="section design">
          <div className="container design2 " >
            <div className="grid grid-cols-two" >
            {
              Country && ( <> <figure>
                
              <img src={Country.flags.svg} alt={Country.flags.alt} className="cn_img"/>
            </figure>
            <div className="cn_text">
              { <h2>{Country.name.official}</h2> }
              <p>Native Name: <span className="text-white">{ Object.keys(Country.name.nativeName).map( (key)=>Country.name.nativeName[key].common).join(", ")}</span></p>
              <p>population: <span className="text-white">{Country.population.toLocaleString()}</span></p>
              <p>Region: <span className="text-white">{Country.region}</span></p>
              <p>Sub Region: <span className="text-white">{Country.subregion}</span></p>
              <p>Capital: <span className="text-white">{Country.capital}</span></p>
              <p>Top Level Domain: <span className="text-white">{Country.tld[0]}</span></p>
              {console.log( Object.keys(Country.currencies).map( (key)=>{
                return Country.currencies[key].name
              }).join(", ") )}
              <p>Curencies: <span className="text-white">{(Object.keys(Country.currencies).map( (key)=>{
                return Country.currencies[key].name
              }).join(", ") )}</span></p>
              <p>Languages: <span className="text-white">
                {
                  Object.keys(Country.languages).map( (key)=>Country.languages[key]).join(", ")
                }</span></p>
            </div>
            </>
            )
            }
              
            </div>
          </div>
          </div>
      </Wrapper>
)
 
}

export default EachCountryDetails