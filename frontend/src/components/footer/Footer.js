import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div className="bg-primary p-4 text-center">
     
            <ul className="justify-content-center pt-4"  >
            <li className="nav-item">
            <Link className="content" to="#">
                Terms and Conditions
            </Link>
            </li>
           </ul>

           <div className="content1 text-center"> 
           <p className="contact-info mt-4">
                Contact us if need help with any thing
            </p>
           {/*nav-link p-4 text-center text-white mt-5 */}
            Contact Us : 9087964433
           </div>
           <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14 text-white">2024 © VNR, All Rights Reserved</p>
      </div>
        </div>
    )
}

export default Footer