import coverP from "../../assets/icons/man.png"
import userP from "../../assets/icons/avatar5.png"
import { Button } from "../../styled-components/Button"


const ProfileHeader = ()=>{
  
  return(
     <div className="profileHeader_container">
       <div className="profile_photoWrapper">
         <div className="coverImg">
           <img src={coverP} alt=""/>
         </div>
         <div className="userImg">
           <img src={userP} alt=""/>
         </div>
         <h3 className="userName"> 
          Md Shihab Uddin <span className="nickName"> (Crazy Learner)</span>
         </h3>
       {/* <div className="gap"></div>*/}
         <div className="userBio">
           I'm a self-thought developer.
           I'm a self-thought developer.
         </div>
       </div> 
       <div className="profile_actionBtns">
         <Button 
           w="10em" pd="8px 0px"
          >
            Add Friend 
          </Button> 
          <Button 
           w="10em" bg="var(--fb-light-gray)" 
           pd="8px 0px"
          >
            Message
          </Button>
          <Button 
           w="2em" bg="var(--fb-light-gray)"
           pd="8px 0px"
          >
            ...
          </Button>
        </div>
     </div>
    )
}

export default ProfileHeader