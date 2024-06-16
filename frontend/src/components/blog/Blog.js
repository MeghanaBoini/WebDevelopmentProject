import React from "react";
import { Link} from "react-router-dom";
import student from "../../assets/student.png";
import student2 from "../../assets/student2.png";
import student3 from "../../assets/student3.png";


function blog(){
    return(
        <div className="text-center">
            <h1>Blogs</h1>
            
            <img src={student} alt="pic1" className="student"/>
            <p>Similar to attending a physical campus and learning in person, there are advantages and disadvantages of attending a virtual classroom and learning online. Among the many benefits of online learning, you’ll find that virtual education allows you to enjoy a more flexible schedule, can reduce the cost of your degree, and can allow you to more easily develop your career alongside furthering your education.
While there are many pros to online learning, there are cons to consider. Staying on task and being self-motivated can be challenging in its own way; which is part of the reason why online learning isn’t right for everyone. By understanding more about the advantages and disadvantages of online learning, you can get a better idea of whether it might be suitable for you and your educational and career goals.</p>
            <img src={student2} alt="pic1" className="student2"/>
            <p>Among the many benefits of an online learning, you’ll find virtual classrooms are great for people who are advancing their education while working. In a traditional classroom, lectures will be scheduled at a specific time of day and your schedule will be formed around the availability of classes. If you’re currently employed and courses aren’t available after your working hours, it can be difficult to juggle a course load in addition to your work duties.
When attending a virtual campus, online learning allows for far more autonomy in deciding your own schedule. That means you can study whenever it’s convenient for you. Live with some noisy roommates? Having more control over your schedule also means you can avoid distractions easier.</p>
        <img src={student3} alt="pic2" className="student3"/>
            <div className="mb-4">
            <Link to="">For any queries</Link>
            </div>
        </div>
    );
}

export default blog;
