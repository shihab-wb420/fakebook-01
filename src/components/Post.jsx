import "./styles/post.css"
import {useState } from "react"

const Post =({post})=>{
  const [isDescription,setIsDescription] = useState(false)
  // destructuring from post
  const { 
    id,authorName,authorImg,createdAt,
    postImg,description,
    loveReact,comments,share
  } = post;


  return(
      <div key={id} className="post_container">
        <div className="post_header">
          <div className="authorDetails">
            <img className="authorImg" src={authorImg} alt=""/>
            <div className="authorName_wrapper">
              <h4 className="authorName">{authorName}</h4>
              <div className="createdAt"> {createdAt} . @ </div>
            </div>
            
          </div>
          <div className="post_header-rightSide">
            <div className="threeDotIcon">...</div>
            <div className="crossIcon"> x </div>
          </div>
        </div>
        <div 
          onClick={()=>setIsDescription(prev => !prev)} 
          className="post_description"
         >
          <p style={{display:"flex", flexDirection:"column"}}>
            {
            isDescription ? description :description.slice(0,280) 
              
            }
            { description.length >= 280 &&   (<span className="seeMore" style={{display: isDescription? "none" : "flex"}}> ... see more</span>)
            }
          </p>
        </div>
        <div className="postImg_wrapper">
          <img width="100" height="100" className="postImg" src={postImg} alt=""/>
        </div>
        <div className="post_footer">
          <div className="loveReact">
            ❤️ <span>{loveReact.length}</span>
          </div>
          <div className="comments">
            Comnt <span>{comments.length}</span>
          </div>
          <div className="share">
            Share <span>{share.length}</span>
          </div>
        </div>
      </div>
    )
  
}

export default Post