import "./friends.css"
import {useNavigate,useLocation } from "react-router-dom"
import {HeadingContainer,Title} from "../../styled-components/Heading"
import searchIcon from "../../assets/icons/search-line.svg"
import profImg from "../../assets/icons/man.png"
import profImg2 from "../../assets/icons/avatar5.png"
import Friend from "./Friend"

const Friends =()=>{
  const navigate = useNavigate()
  const location = useLocation()
  
  return(
        <div className="friends_container">
            <HeadingContainer>
              <Title>
                Friends 
              </Title>
              <div class="rightSide_wrapper">
                <img 
                  onClick={()=>navigate(`${location.pathname}/search`)}
                  src={searchIcon} alt=""
                />
              </div>
            </HeadingContainer>
            
            {
              datas.map((item)=>{
                return(
                 <Friend key={item.id} item={item}/>
                )
              })
            }
        </div>
    )
}

export default Friends 



//datas
const datas = [
  
  {
    id:1,
    name:"Md Shihab",
    profileImg:profImg,
  },
   {
    id:2,
    name:"Md Shihab",
    profileImg:profImg2,
  },
   {
    id:3,
    name:"Md Shihab",
    profileImg:profImg,
  },
   {
    id:4,
    name:"Md Shihab",
    profileImg:profImg2,
  },
   {
    id:5,
    name:"Md Shihab",
    profileImg:profImg,
  },
   {
    id:6,
    name:"Md Shihab",
    profileImg:profImg2,
  },
   {
    id:7,
    name:"Md Shihab",
    profileImg:profImg,
  },
  {
    id:8,
    name:"Md Shihab",
    profileImg:profImg2,
  },
  ]