import { NavLink, useNavigate, useRouteError } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.section`
  .messagePic{
    background-image: url(/Image/6373669.jpg);
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    height: 100vh;
    
  }
  .btns{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    button{
      background-color: #257cc9;
      padding: 0.4rem 2rem;
      font-size: 2rem;
      border-radius: 5px;
      color: white;
    }
  }
`
const Error = () => {
    const prev=useNavigate()
    const error=useRouteError()
    console.log(prev);
    
  const handlePrevious=()=>{
    prev(-1)
  }
  if(error.status===404){
    return (
      <Wrapper>
         <div className="messagePic">
           <div className="btns">
             <button> <NavLink to="/"> Go to Home</NavLink></button>
             <button> <NavLink onClick={handlePrevious}> Go to Previous</NavLink></button>
           </div>
         </div>
      </Wrapper>
     )
  }
  return <h2>Your Page Is Missing</h2>
  
}

export default Error