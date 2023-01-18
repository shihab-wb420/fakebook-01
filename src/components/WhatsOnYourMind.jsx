import "./styles/whatsOnYourMind.css"
import profileImg from "../assets/icons/avatar5.png"
import {useNavigate} from "react-router-dom"

const WhatsOnYourMind =()=>{
  const navigate = useNavigate();
  
  return(
    <div className="WOYM_container">
      <div className="profile">
        <img 
         className="profileImg" 
         src={profileImg}
         alt=""
         />
      </div>
      <input 
        onClick={()=> navigate("create_post")} 
        className="inputBox"
        placeholder="What's on your mind?"
        type="text"/>
      <div className="albumIcon">
        Photos
      </div>
    </div>
    )
}

export default WhatsOnYourMind