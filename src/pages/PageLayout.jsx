import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"

const PageLayout = ({isTrue})=>{
  
  
  return (
        <div className="layout_container"> 
               <Navbar isTrue={isTrue}/>
            <div className="mainConatainer">
               <Outlet />
            </div>
        </div>
    
    )
}

export default PageLayout
