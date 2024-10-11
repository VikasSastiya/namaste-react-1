// import User from "./User";
import UserClass from "./UserClass";
// 

const About=() =>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Akshay Saini (function)"}/>     */}
            {/* this is how we put props the name is a props  */}
            <UserClass name={"Akshay saini (class based)"} location={"Dehradun class"}/>
            {/* this is how we put props in class based component */}
        </div>
    );
};

export default About;