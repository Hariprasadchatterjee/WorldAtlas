import styled from "styled-components"

const Wrapper=styled.section`
  .search_fil{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5rem;
  }
  #search{
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 2rem;
  }
  .asc_dsc_btn{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
  .asc{
    color: aliceblue;
    font-size: 2rem;
  }
  .dsc{
    color: aliceblue;
    font-size: 2rem;
  }
  ::placeholder{
    font-size: 2rem;
   
  }
  .select_section{
    font-size: 2rem;
    padding: 1rem 2rem;
    border: none;
    outline: none;
  }
  .asc_dsc_btn{
    background-color: #1f90f3;
    padding: 1rem 2rem;
    border-radius: 4px;
  }
  @media (max-width:720px) {
    .search_fil{
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
   #search {
    width: 55vw;
    padding: 1rem 3rem;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 3rem;
  }
  ::placeholder{
    font-size: 3rem;
   
  }

  }
`
const Search_Filter = ({search,setSearch,filter,setFilter,setAllCountry,allCountry}) => {
  const handleInputVal=(e)=>{
    
    setSearch(e.target.value)
    console.log(search);
    
  }
  const handleFilterVal=(e)=>{
    setFilter(e.target.value)
    console.log(filter);
    
  }
  const sortCountries=(val)=>{
    const sortCountry = [...allCountry].sort( (a,b)=>{
      return val=="asc" ? a.name.common.localCompare(b.name.common) : b.name.common.localCompare(a.name.common)
    });
    setAllCountry(sortCountry)
  }
  return (
    <Wrapper>  
    <div className="search_fil">
      <div>   
      <input type="search" placeholder="Search Here" name="" id="search" value={search} onChange={(e)=>handleInputVal(e)}/>
      </div>
      
      <div className="asc_dsc_btn">
        <button className="asc" onClick={()=>sortCountries("asc")}>ASC</button>
        <button className="dsc" onClick={()=>sortCountries("des")}>DESC</button>
      </div>
      
      <div>
        <select className="select_section" value={filter} onChange={(e)=>handleFilterVal(e)}>
          <option value="all">All</option>
         
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
    </Wrapper>
  )
}

export default Search_Filter