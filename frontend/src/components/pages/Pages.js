import React from "react";
import { Link} from "react-router-dom";
import Image from "../../assets/projectImg.png";

function Pages(){
    return(
        <div className="text-center">
            <h1>Projects</h1>
            <img src={Image} alt="prject" className="Image"></img>
            <p className="lead">Include your projects here</p>
            <Link to="#">click here to know more</Link>
            <h2>Add Your Projects here</h2>
            <button className="mt-5 text-white text-bg-primary">Add</button>
        </div>
    );
}
export default Pages;
