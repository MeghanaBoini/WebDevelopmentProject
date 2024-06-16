import React from "react";
import { Link} from "react-router-dom";

function Java(){
    return(
        <div className="text-center">
            <h1>Java</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bss2BXsrH3qjQIwyya2__S72c0cr93XrbA&usqp=CAU" alt="java"></img>
            <p className="lead">Java was developed and released in 1995, much later after C and C++. As such it tends to solve some of the shortcomings cited in C and C++.For instance, it uses Javadoc, a documenting system that develops a systematic and organized method for documenting codes (Pawlan 1999).
            It also uses Byte code verifier which enhances correctness and security of the compiled code hence reducing the number of runtime checks. This implies that with the knowledge of Java, one can comfortably take up programming tasks in C and C++ or any other language.
            Java is also purely object oriented, easy to interpret and has high execution performance. This makes it simple and easier to work with. For this reason, Java is sometimes referred to as “a powerful yet easy to learn and work with language” (Pawlan 1999).
            Java is the most widely used programming language by web developers for both simple complex programming tasks. 
            Due to its much simplified user platform, most people tend to have a general notion that Java cannot be used to create much complicated web applications due to its simple platform.
            This is not true since most programmers use Java to write complex programs in a simple way easy that is to follow and interpret. 
            Java was developed to write more complex programs in a simpler language. Even the most complex and sophisticated programs look so simple in Java making it hard to realize their complexity (Lindholm & Yellin 1999).
            it is possible to rapidly develop applications and easily change them at will.
            </p>
            <div className="mb-4">
            <h4>Test Code here</h4>
            <Link to="https://www.programiz.com/java-programming/online-compiler/">java compiler</Link>
            </div>
            <hr></hr>
        </div>
    );
}

export default Java
