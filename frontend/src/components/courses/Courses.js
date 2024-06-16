import React from "react";
import './Courses.css'
import { Link,Outlet} from "react-router-dom";

function Cources(){
    return(
        <div >
          <p className="fw-bold ">Want to learn more about java,python and javascript?</p>
          <div className="nav justify-content-center mb-4 bg-secondary ">
          <ul className="grid gap-7">
            <li>
               <Link  to="java" className="nav-link text-white p-2">Java</Link>
            </li>
            <li>
                <Link  to="python" className="nav-link text-white p-2">Python</Link>
            </li>
            <li>
                <Link to="javascript" className="nav-link text-white p-2">Javascript</Link>
            </li>
          </ul>
          </div>
          <Outlet/>
            <div >
            <p className=" fw-bold justify-content-center">Top Featured</p>
              <h4 className="justify-content-center">BEST SOLUTIONS FOR LIFE</h4>
            </div>

          <div className="d-flex flex-row p-4 mb-3">
            <div >
                <Link to="https://www.w3schools.com/html/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv3pmnMOmds7yoR50hb5oJSdSmEOHJee5Iw&s" alt="image1"></img></Link>
                <p className="fw-bold">How to Learn Basic WebDesign HTML</p>
              </div>
              <div>
                <Link to="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-mplZcLnX9KyKPWwNF1futXRV-IT82VUzg&s" alt="image1"></img></Link>
                <p className="fw-bold">How to code in java</p>
              </div>
              <div>
                <Link to="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPSuqb4mgFvZWvgpfRxoJwccln7AIPDA-wA&s" alt="image1"></img></Link>
                <p className="fw-bold">How to use react to build responsive applications</p>
              </div>
          </div>
          <div className="d-flex flex-row p-4">
            <div >
                <Link to="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJ4f4V6QFvR888atDsI53nxfo49YyWG46wQ&s" alt="image1"></img></Link>
                <p className="fw-bold" >Master in javascript</p>
              </div>
              <div>
                <Link to="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_c4b7iZWrsyAHmW0msvbGQ2yr-U0z0VFy4w&s" alt="image1"></img></Link>
                <p className="fw-bold">full stack development</p>
              </div>
              <div>
                <Link to="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjMaBh0x-o7nKRrq4HfkcowsJZxeiFFrLOg&s" alt="image1"></img></Link>
                <p className="fw-bold">Learn Artificial Intilligence</p>
              </div>
          </div>

            
        </div>
      )
}

export default Cources;
