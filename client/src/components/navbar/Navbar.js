import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import {PublicNavigation, PrivateNavigation} from "../../components/navigation/index";
import { ContextAPI } from "../../store/context";
import SearchIcon from '@mui/icons-material/Search';






function Navbar() {

  const { loggedIn, user, userId, search, setSearch } = useContext(ContextAPI);


  return (
    <nav className="navbar">
      {/*logo container*/}
     <div className="nav_container">
     <div className="logo">
     <Link to="/">
      <p>Don'tPay</p>
     </Link>
   </div>

   <div className="nav_links_container">
     <div className="nav_links">
       <ul>
         <Link to="/category">
           Categories
         </Link>
         {loggedIn ? (
           <Link to="/favorites">Favorites</Link>
         ) : (
           <Link to="/login">Favorites</Link>
         )}
         <Link to="/premium">Premium Finds</Link>
         <Link to="/aboutus">About Us</Link>
       </ul>
     
     </div>

     <div className="nav_search_container">
         <div className="search_input">
           <input
             onChange={(e) => setSearch(e.target.value)}
             type="search"
             value={search}
             placeholder="Search for anything or by city"
           />
            <span> <SearchIcon style={{color: "#9c8f1b"}}/></span>
         </div>
       </div>

   </div>

   
  

   <div className="nav_login">

     <div className="my_account">

       <ul className="login_link">
         {loggedIn ? (
           <PrivateNavigation user={user} userId={userId} />
         ) : (
           <PublicNavigation />
         )}
       </ul>
     </div>
   </div>
     </div>
    </nav>
  );
}

export default Navbar;



