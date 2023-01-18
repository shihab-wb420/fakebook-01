import "./styles/backnav.css"
import {useNavigate} from "react-router-dom"

const  BackNav= ()=>{
  const navigate = useNavigate()
  
  return(
      <div className="backNav_container">
        <div className="leftSide">
          <h3 onClick={()=> navigate(-1)}> ⬅️ </h3>
          <h3>Create Post</h3>
        </div>
        <h4> POST </h4>
      </div>
    )
}

export default BackNav