import "./chats.css"
import {useNavigate,useLocation } from "react-router-dom"
import searchIcon from "../../assets/icons/search-line.svg"
import {HeadingContainer,Title} from "../../styled-components/Heading"
import Messages from "./Messages"


const Chats =()=>{
  const navigate = useNavigate()
  const location = useLocation()
  
  return(
        <div className="chats_container">
          <HeadingContainer>
              <Title>
                Messages 
              </Title>
              <div class="rightSide_wrapper">
                <img 
                  src={searchIcon} alt=""
                  onClick={()=>navigate(`${location.pathname}/search`)}
                />
              </div>
            </HeadingContainer>
            <Messages/>
        </div>
    )
}

export default Chats 
