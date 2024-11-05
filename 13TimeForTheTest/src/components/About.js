// import User from "./User";
import {Component} from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
// 

class About extends Component{  // we can also write this instead of "class About extends react.Component{"
       constructor(props) {
        super(props);

        // console.log("Parent Constructor");
       }
    
       componentDidMount() {
        // console.log("Prent Component Did Mount");  // when class component is callet first 
        // construcor is called,then render is called then componentDidMount is called
    }

    render() {
        // console.log("Parent Render"); 
    return(
        <div>
            <h1>About</h1>
            <div>
                loggedInUser     {/*we can use hooks like this in class based component  */}
                <UserContext.Consumer>
                {({loggedInUser})=> ( // we use hook as a component and we have a x
                 <h1 className="text-xl font-bold">{loggedInUser}</h1>   
            )}         
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Akshay Saini (function)"}/>     */}
            {/* this is how we put props the name is a props  */}
            <UserClass name={"First"} location={"Dehradun class"}/>
            {/* <UserClass name={"Akshay saini (class based)"} location={"Dehradun class"}/> */}
            {/* <UserClass name={"Elon Musk"} location={"US"}/> This two syntax mean we are creating two instances of class  */}
            {/* this is how we put props in class based component */}
        </div>
    );
   }
};

/*
        - Parent Constructor
        -Parent render
           - Akshay Constructor
           -Akshay Render
          

           -Elon Constructor
           -Elon Render

           <DOM UPDATED - IN SINGLE BATCH>

            -Akshay ComponentDidMoun
           -Elon ComponentDidMount

        - Parent ComponentDidMount

        thes is correct to know which console.log come first in console visit https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/{this is important}
*/
export default About;