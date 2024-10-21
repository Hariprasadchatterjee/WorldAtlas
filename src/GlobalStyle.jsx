import { createGlobalStyle } from "styled-components";

export const Globalstyle=createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html{
    font-size: 62.5%;
    font-family: "Poppins", sans-serif;
    font-family: "Afacad Flux", sans-serif;
    font-weight: 400;
    font-style: normal;
    overflow-x: hidden;
  }
body{
  overflow-x: hidden;
}
  h1{
    font-family: "Afacad Flux", sans-serif;
    font-size: 4rem;
    letter-spacing: 0.1rem;
  }
  h2,h3,h4{
    font-size: 2rem;
  }
  p{
    font-size: 2rem;
    line-height: 1.4;
  }
  .section{
    padding-bottom: 2rem;
    background-color: ${({theme})=>theme.colors.bgColor};
  }
  .container{
    max-width: 1400px;
    margin: 0 auto;
    padding:  4rem;
  }

  input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.contact {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

  .grid{
    display: grid;
    gap: 2rem;
  }
  .grid-cols-two{
    grid-template-columns: repeat(2,1fr);
  }
  .grid-cols-three{
    grid-template-columns: repeat(3,1fr);
  }
  .grid-cols-four{
    grid-template-columns: repeat(4,1fr);
  }
::-webkit-scrollbar{
  width: 2rem;
}
::-webkit-scrollbar-track{
  width: 2.5rem;
  background-color: #a55eea;
  box-sizing: content-box;
  border-radius: 10px;
}
  ::-webkit-scrollbar-thumb{
    width: 2.5rem;
  background-color: #3d2ae9;
  box-sizing: content-box;
  border-radius: 10px;
  }
  #progressbar{
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #da1822;
   
    transition: all 0.25s ease-out;
  }
  .up_down_btn{
    position: fixed;
    right: 4rem;
    bottom: 4rem;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: #030f31;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: #a55eea;
    z-index: 999;
  }
  .up_down_icon{
    animation: up_down 1s linear infinite alternate-reverse;
  }
  @keyframes up_down {
    0%{
      transform: translateY(-1rem);
    }
    100%{
      transform: translateY(0rem);
    }
  }

  @media (max-width:1050px) {
    html{
      font-size: 55%;
    }
    .container{
    max-width: 1200px;
    margin: 0 auto;
    padding:  6rem;
  }
.grid-cols-two{
  grid-template-columns: 1fr;
}
.grid-cols-two{
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr) );
}
.grid-cols-three{
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr) );
}
.grid-cols-four{
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr) );
}
}

  @media (max-width:840px) {
    html{
      font-size: 50%;
    }
    .container{
    max-width: 1000px;
    margin: 0 auto;
    padding:  4rem;
  }
  h2{
    font-size:2rem;
    
  }


}

  @media (max-width:440px) {
    h1{
      font-size:3rem;
    }
    h2{
      font-size:2rem;
    }
    html{
      font-size: 40%;
    }
    .container{
    max-width: 800px;
    margin: 0 auto;
    padding: 6.8rem;
  }
  .hero-image{
    width:100%
  }

}


`