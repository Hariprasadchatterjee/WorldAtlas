import { FaArrowRight } from "react-icons/fa6";

const Button = ({type,children}) => {

    if (type==="hero") {
        return(
          <div className="relative">
             <button className="py-4 pl-8 pr-16 text-4xl text-white bg-transparent border-[1px] rounded-2xl">{children}</button>
             <FaArrowRight className="absolute text-4xl top-[30%] right-[5%]"/>
          </div>
        )
        
    }
  
}

export default Button