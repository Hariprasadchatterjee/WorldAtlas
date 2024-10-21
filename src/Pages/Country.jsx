/* eslint-disable react/jsx-key */
import { lazy, Suspense, useEffect, useState, useTransition } from "react"

import { getCountryData } from "../Services/Postapi"
import Loader from "../Layout/Ui/Loader"
import Search_Filter from "../Components/Search_Filter"
const AllCountryDetails = lazy( ()=>import("../Layout/Ui/AllCountryDetails"))  



const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [page,setPage] = useState(1)
  const [allCountry,setAllCountry] = useState([])
  const [search,setSearch]=useState()
  const [filter,setFilter]=useState("all")

  useEffect( ()=>{
    startTransition( async ()=>{
      const res = await getCountryData()
      console.log(res);
      setAllCountry( res.data || allCountry);
    })
  },[])

  const cnSearching=(val)=>{
    if (search) {
      return val.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return val;
  }
  const cnFilter=(val)=>{
    if (filter==="all") {
     
      return val;
    }
    return val.region === filter
  }
  
  const filterCountries =  allCountry.filter( (curCoun)=>cnSearching(curCoun) && cnFilter(curCoun))

  const handleInfiniteScroll= async ()=>{
    // console.log("scroll height"+ document.documentElement.scrollHeight);
    // console.log("Inner height"+ window.innerHeight);
    // console.log("scrolling height"+ document.documentElement.scrollTop);
    
    try {
     if ( window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight) {
      setPage((prev)=>prev+1)
     }
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect( ()=>{
    window.addEventListener("scroll",handleInfiniteScroll)
    return()=> window.removeEventListener("scroll",handleInfiniteScroll)
  },[page])
  if (isPending) return <Loader/>
  return (
    <>
   
      <div className="section mt-[8rem]">
        <div className="container">
          <Search_Filter allCountry={allCountry} setAllCountry={setAllCountry} setSearch={setSearch} search={search} filter={filter} setFilter={setFilter}/>
          <div className="grid grid-cols-four">
            {
              filterCountries.map( (country,index)=> <Suspense key={index} fallback={<Loader/>}> <AllCountryDetails  key={index} country={country}/></Suspense>)
            }
          </div>
        </div>
      </div>
  
    </>
  )
}

export default Country