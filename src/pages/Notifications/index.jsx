import "./notifications.css"
import {useNavigate,useLocation } from "react-router-dom"
import searchIcon from "../../assets/icons/search-line.svg"
import man from "../../assets/icons/man.png"
import avatar from "../../assets/icons/avatar5.png"
import {HeadingContainer,Title} from "../../styled-components/Heading"
import Notification from "./Notification"


const Notifications =()=>{
  const navigate = useNavigate()
  const location = useLocation()
  
  return(
        <div className="notofications_container">
           <HeadingContainer>
              <Title>
                Notifications
              </Title>
              <div class="rightSide_wrapper">
                <img src={searchIcon} alt=""/>
                <img 
                  onClick={()=>navigate(`${location.pathname}/search`)}
                  src={searchIcon} alt=""
                />
              </div>
            </HeadingContainer>
            {
              datas?.map((item)=>{
                return(
                  <Notification key={item.id} item={item}/>
                )
              })
            }
        </div>
    )
}

export default Notifications


//notificationDatas
const datas =[
  {
    id:1,
    title:"Nuruzzaman pollob Mention you in a comment ",
    imgUrl:man,
    date:"17 minutes  ago"
    
  },
    {
    id:2,
    title:"Md Sohan Mention you in a comment ",
    imgUrl:avatar,
    date:"23 minutes  ago"
  },
    {
    id:1,
    title:"Nuruzzaman pollob Mention you in a comment ",
    imgUrl:man,
    date:"17 minutes  ago"
    
  },
    {
    id:2,
    title:"Md Sohan Mention you in a comment ",
    imgUrl:avatar,
    date:"23 minutes  ago"
  },
    {
    id:1,
    title:"Nuruzzaman pollob Mention you in a comment ",
    imgUrl:man,
    date:"17 minutes  ago"
    
  },
    {
    id:2,
    title:"Md Sohan Mention you in a comment ",
    imgUrl:avatar,
    date:"23 minutes  ago"
  },
    {
    id:1,
    title:"Nuruzzaman pollob Mention you in a comment ",
    imgUrl:man,
    date:"17 minutes  ago"
    
  },
    {
    id:2,
    title:"Md Sohan Mention you in a comment ",
    imgUrl:avatar,
    date:"23 minutes  ago"
  },
    {
    id:1,
    title:"Nuruzzaman pollob Mention you in a comment ",
    imgUrl:man,
    date:"17 minutes  ago"
    
  },
    {
    id:2,
    title:"Md Sohan Mention you in a comment ",
    imgUrl:avatar,
    date:"23 minutes  ago"
  },
    {
    id:1,
    title:"Nuruzzaman pollob Mention you in a comment ",
    imgUrl:man,
    date:"17 minutes  ago"
    
  },
    {
    id:2,
    title:"Md Sohan Mention you in a comment ",
    imgUrl:avatar,
    date:"23 minutes  ago"
  },
  
  
  ]