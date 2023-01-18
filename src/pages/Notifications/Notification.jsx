import {Link} from "react-router-dom"

const Notification = ({item})=>{
  const {id,title,imgUrl,date} = item;
  return(
      <Link to={`#notification/${id}`} className="notification_container">
        <img src={imgUrl} alt=""/>
        <div className="title">
          {title}
          <p className="createdAt">{date}</p>
        </div>
      </Link>
    )
}

export default Notification