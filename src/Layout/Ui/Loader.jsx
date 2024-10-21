import styled from "styled-components"

const Wrapper=styled.section`
.loader-section{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
  /* //Loader  */
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
.loader {
  width: 100px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
`
const Loader = () => {
  return (
    <Wrapper>
    <div className="container loader-section">
    <div className="loader"></div>;
  </div>
  </Wrapper>
  )
}

export default Loader