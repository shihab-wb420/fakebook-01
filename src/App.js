import { Routes, Route,} from "react-router-dom"
import PageLayout from "./pages/PageLayout"
import Home from "./pages/Home"
import Friends from "./pages/Friends"
import Chats from "./pages/Chats"
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Notifications from "./pages/Notifications"
import CreatePost from "./components/CreatePost"



function App() {
  
  return (
  <>
    <Routes>
      <Route exact path="/" element={<PageLayout />}> 
        <Route index element={<Home />}/>
        <Route path="friends" element={<Friends />}/>
        <Route path="chats" element={<Chats />}/>
        <Route path="notification" element={<Notifications />}/>
        <Route path="search" element={<Search />}/>
        <Route path=":path/search" element={<Search />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path=":id/profile" element={<Profile />}/>
        <Route 
          path="create_post"
          element={<CreatePost />}
          />
      </Route>
    </Routes>
 </>
  );
}

export default App;
