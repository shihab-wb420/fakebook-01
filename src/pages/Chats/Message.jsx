import {Link } from "react-router-dom"
import "./styles/message.css"

const Message= ({item})=>{
  
  const {id, profileImg, userName,lastMessage} = item;
  
  
  return(
     <Link  
      to={`#message/${id}`}
      className="message_container"
      >
        <img src={profileImg} alt=""/>
        <div className="titleWrapper">
          <h5> {userName}</h5> 
          <p> {lastMessage.slice(0,50)}...</p>
        </div>
     </Link>
   ) 
}

export default Message