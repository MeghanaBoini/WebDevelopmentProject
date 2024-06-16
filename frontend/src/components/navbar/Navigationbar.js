import React from "react";
import {Link} from 'react-router-dom'
import './Navigationbar.css'
// import './NavigationBar.css'

function Navigationbar(){
    return(
      <div>
    <div className="nav justify-content-end text-bg-primary  ">
    <ul className="grid gap-3">
      <li className="" >
        <Link className="nav-link text-white p-3 " to="">
          Home
        </Link>
      </li>
      <li className="">
        <Link className="nav-link text-white p-3" to="about">
           About
        </Link>
      </li>
      <li className="">
        <Link className="nav-link text-white p-3" to="courses">
          Cources
        </Link>
      </li>
      <li className="">
        <Link className="nav-link text-white p-3" to="login">
          Login
        </Link>
      </li>
      
      <li className="">
        <Link className="nav-link text-white p-3" to="pages">
          Projects
        </Link>
      </li>
      <li className="">
        <Link className="nav-link text-white p-3" to="blog">
          Blog
        </Link>
      </li>
      
    </ul>
    </div>
    </div>
    );
}
export default Navigationbar;