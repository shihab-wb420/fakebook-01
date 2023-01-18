import "./search.css"
import searchIcon from "../../assets/icons/search-line.svg"
import {useNavigate} from "react-router-dom"

const Search =()=>{
 const navigate = useNavigate();
 
  return(
      <div 
       className="search_container"
       > 
        <div className="search_inputBox">
          <div
            onClick={()=>navigate(-1)} 
           className="closeSearch"
          >
             ⬅️
          </div>
          <input 
            type="search" 
            placeholder="Search"
          />
          <div className="searchIcon">
            <img src={searchIcon} alt=""/>
          </div>
        </div>
        <div className="searchItems_wrapper">
         
        </div>
      </div>
    )
}

export default Search