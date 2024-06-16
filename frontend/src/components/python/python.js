import React from "react";
import { Link} from "react-router-dom";

function python(){
    return(
        <div className="text-center">
            <h1>Python</h1>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mo-G9ABRy9tP1hAcdz97qJZPD7sroI2tIQ&s" alt="java"></img>
            <p className="lead">Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.
                Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.[32][33]
                Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000. Python 3.0, released in 2008, was a major revision not completely backward-compatible with earlier versions.
                Python 2.7.18, released in 2020, was the last release of Python 
                Python consistently ranks as one of the most popular programming languages, and has gained widespread use in the machine learning community them at will.
            </p>
            <div className="mb-4">
            <h4>run Code here</h4>
            <Link to="https://www.programiz.com/python-programming/online-compiler/">python compiler</Link>
            </div>
            <hr></hr>
        </div>
    );
}

export default python;
