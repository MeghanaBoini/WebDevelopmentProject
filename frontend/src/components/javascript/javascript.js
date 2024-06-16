import React from "react";
import { Link} from "react-router-dom";

function javascript(){
    return(
        <div className="text-center">
            <h1>Javascript</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yiAD08nePoxyyzsDzWxg6A14v5ux6r0FNQ&s" alt="javascript"></img>
            <p className="lead">JavaScript is a high-level, interpreted programming language that is one of the three core technologies of World Wide Web content production (along with HTML and CSS). It is used to make web pages interactive and provide animations, multimedia functionality, and dynamic content by manipulating the Document Object Model (DOM).
                JavaScript is a scripting language, meaning that it does not need to be compiled before it can be executed. This makes it very fast and easy to use, and it is also very versatile. JavaScript can be used to create anything from simple web pages to complex web applications.
                JavaScript is an object-oriented language, meaning that it uses objects to represent data and functionality. This makes it very easy to create reusable code and to organize complex projects.
                JavaScript is also a functional programming language, meaning that it allows you to create functions that can be passed around as data. This makes it very easy to create modular code and to write code that is easy to read and maintain.
            </p>
            
            <div className="mb-4">
            <h4>run Code here</h4>
            <Link to="https://www.programiz.com/javascript/online-compiler/">js compiler</Link>
            </div>
            <hr></hr>
        </div>
    );
}

export default javascript
