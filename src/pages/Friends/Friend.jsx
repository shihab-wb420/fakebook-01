


const Friend =({item})=>{
  const {name,profileImg} = item;
  return(
    <div className="friend_container">
      <img src={profileImg} alt=""/>
      <div className="nameWrapper">
        {name}
      </div>
    </div>
    )
}

export default Friend