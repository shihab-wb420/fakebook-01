import "./styles/messages.css"
import Message from "./Message"
import profImg from "../../assets/icons/avatar5.png"
import manImg from "../../assets/icons/man.png"

const Messages = ()=>{
  
  return(
     <div className="messages_container">
     {
       chatsDatas.map((item)=>{
         return(
           <Message key={item.id} item={item}/>
         )
       })
     }
     </div>
   ) 
}

export default Messages 


//chats datas
const chatsDatas = [
  {
    id:1,
    userName:"Md Shihab Uddin",
    profileImg:manImg,
    lastMessage:"Insha-allah,  vai valo thakben"
  },
  {
    id:2,
    userName:"Md Khan",
    profileImg:profImg,
    lastMessage:`জানানোর জন্য ধন্যবাদ ভাই, 
কিন্তু আমি নভেম্বরে   এক্সাম।`  },
  {
    id:1,
    userName:"Md Shihab Uddin",
    profileImg:manImg,
    lastMessage:"Insha-allah,  vai valo thakben"
  },
  {
    id:2,
    userName:"Md Khan",
    profileImg:profImg,
    lastMessage:`জানানোর জন্য ধন্যবাদ ভাই, 
কিন্তু আমি নভেম্বরে   এক্সাম।`  },
  {
    id:1,
    userName:"Md Shihab Uddin",
    profileImg:manImg,
    lastMessage:"Insha-allah,  vai valo thakben"
  },
  {
    id:2,
    userName:"Md Khan",
    profileImg:profImg,
    lastMessage:`জানানোর জন্য ধন্যবাদ ভাই, 
কিন্তু আমি নভেম্বরে   এক্সাম।`  },
  {
    id:1,
    userName:"Md Shihab Uddin",
    profileImg:manImg,
    lastMessage:"Insha-allah,  vai valo thakben"
  },
  {
    id:2,
    userName:"Md Khan",
    profileImg:profImg,
    lastMessage:`জানানোর জন্য ধন্যবাদ ভাই, 
কিন্তু আমি নভেম্বরে   এক্সাম।`  },

  {
    id:1,
    userName:"Md Shihab Uddin",
    profileImg:manImg,
    lastMessage:"Insha-allah,  vai valo thakben"
  },
  {
    id:2,
    userName:"Md Khan",
    profileImg:profImg,
    lastMessage:`জানানোর জন্য ধন্যবাদ ভাই, 
কিন্তু আমি নভেম্বরে   এক্সাম।`  },

  {
    id:1,
    userName:"Md Shihab Uddin",
    profileImg:manImg,
    lastMessage:"Insha-allah,  vai valo thakben"
  },
  {
    id:2,
    userName:"Md Khan",
    profileImg:profImg,
    lastMessage:`জানানোর জন্য ধন্যবাদ ভাই, 
কিন্তু আমি নভেম্বরে   এক্সাম।`  },

  {
    id:1,
    userName:"Md Shihab Uddin",
    profileImg:manImg,
    lastMessage:"Insha-allah,  vai valo thakben"
  },
  {
    id:2,
    userName:"Md Khan",
    profileImg:profImg,
    lastMessage:`জানানোর জন্য ধন্যবাদ ভাই, 
কিন্তু আমি নভেম্বরে   এক্সাম।`  },

  ]