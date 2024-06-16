import React from "react";
import './home.css'

function  Home() {
    return(
        <div>
            <div className="home">
            {/* <img src="https://cdn.vectorstock.com/i/500p/36/63/online-courses-e-learning-listening-lesson-vector-21763663.avif" alt="image"></img> */}
                <h1 className="heading1">Student Developer Platform </h1>
                <div className="image">
                    <img src="https://cdn.vectorstock.com/i/500p/36/63/online-courses-e-learning-listening-lesson-vector-21763663.avif" className="rounded w-50" alt="programming"/>
                    <div className="content">
                        <div className="sub text-black">
                        <h2>Skills You Need To Succeed</h2>
                        </div>
                        {/* <nav className="navbar bg-body navi"> */}
                            <div className="container-fluid navi">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search Course" aria-label="Search"/>
                                    <button className="btn btn-outline-primary" type="submit">Search</button>
                                </form>
                            </div>
                        {/* </nav> */}
                        <p className="lead text-black">Our platform is dedicated to empowering student
                        developers. We provide a collaborative environment where students can sharpen their coding skills, collaborate on projects, 
                        and access resources to enhance their learning journey.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;