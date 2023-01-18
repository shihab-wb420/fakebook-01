import "./home.css"
import demoImg from "../../assets/hero.png"
import userImg from "../../assets/icons/man.png"
import avatar5 from "../../assets/icons/avatar5.png"
//import phoneBg from "../../assets/icons/1.png"

import Post from "../../components/Post"
import WhatsOnYourMind from "../../components/WhatsOnYourMind"


const Home = ()=>{
  
  /*###❤️ PostData Demo####*/

const postDatas=[
    {
      id:1,
      authorName:"Md Shihab",
      authorImg:avatar5,
      createdAt:"1h ago",
      description:`
    🙂 বসেই ছিলাম তাই
      সকাল থেকে একটু চেষ্টা করলাম।
      এম্বি নাই তাই আইকন ইউজ করতে পারনি আপাতত  আইকন ছাড়াই টেক্সট দিয়ে বানানোর চেষ্টা করলাম,  এম্বি তুলার পরে আইকন দিয়ে রিপ্লেস করে দিবো টেক্সট গুলা। ইনশাআল্লাহ! 
      
      ফিডব্যাক  দিলে হেল্প  হবো! 
      
 `,
      postImg:userImg,
      loveReact:["1",",2", "3"," 4", "5"," 6", "7"],
      comments:["1",",2", "3"," 4", "5",],
      share:["1",",2", "3"," 4", "5"," 6", ],
    },
    {
      id:2,
      authorName:"Mr Khan",
      authorImg:userImg,
      createdAt:"1h ago",
      description:"Canada's youth and students are getting hit with skyrocketing inflation, mass unaffordability and with the upcoming tripling of the Carbon Tax will be hit even harder. They are the future of our economy and workforce, but it seems the Liberals just don't care. That being said, this Prime Minister is the one who said he doesn't think about monetary policy. Canada's Conservatives will stand up for the youth and students and make life more affordable for all.",
      postImg:demoImg,
      loveReact:["1",",2", "3"," 4", "5",],
      comments:["1",",2", "3"," 4", "5"," 6"],
      share:["1",",2", "3"," 4", "5"," 6", "8"],
    },
  ]
  
  
  return (
        <div className="home_container"> 
          <WhatsOnYourMind/>
          {
            postDatas.map((post)=>{
              return(
                <Post post={post}/>
                )
            })
          }
          <div className="loadMore_post">
            Load More Post 
          </div>
        </div>
    
    )
}

export default Home



