import "./styles/createPost.css"
//import {useLocation} from "react-router-dom"
import BackNav from "./BackNav"
import avatar from "../assets/icons/avatar5.png"
import {Button} from "../styled-components/Button"


const CreatePost = ()=>{
  
  
  return(
    <>
      <BackNav/>
      <div className="createPost_container">
        <div className="createPost_header">
          <img 
            className="profileImg" 
            src={avatar}
            alt=""
           /> 
           <div className="profileName">
              Md Shihab Uddin 
             <div className="selectMode"> 
               <span className="option"> Public </span>
             </div>
           </div>
        </div>
        <div className="CreatePost_inputBox">
          <textarea
            placeholder="What's on your mind?"
            className="textarea" 
           />
        </div>
        <div className="createPost_extraOption">
          <div className="extraItem">
            <img  src={avatar} alt=""/>
            <div className="title">
              Photos
            </div>
          </div>
          <div className="extraItem">
            <img  src={avatar} alt=""/>
            <div className="title">
              Tag Friends
            </div>
          </div>
          <div className="extraItem">
            <img  src={avatar} alt=""/>
            <div className="title">
              Add Location
            </div>
          </div>
          <div className="extraItem">
            <img  src={avatar} alt=""/>
            <div className="title">
              Feeling/Activity
            </div>
          </div>
          <div className="extraItem">
            <img  src={avatar} alt=""/>
            <div className="title">
              Host a Q&A
            </div>
          </div>
        </div>
        <Button>
          <p> POST</p>
        </Button>
      </div>
    </>
    )
}

export default CreatePost 