import React from "react";
// this is how we create class based comonent
// class Based component is a class which have render function which written JSX 
class UserClass extends React.Component {   //  react.Component is a class which is there inside react
    // loading a class based component that mean we create an instense in class
    constructor(props){    // first constructor is called then render()
        super(props);
    this.state={    // state variable is a big object which contain all the object
        //  count:0,
        //  count2:2,
        userInfo:{
            name:"Dummy",
            location:"Default",
          
        }
    };
    //    console.log("constructor");
        // console.log(props);
        // console.log(this.props.name+"Child Constructor");
    }

   async componentDidMount() {
        // console.log(this.props.name+"Child Component Did Mount");  // when class component is callet first 
        // construcor is called,then render is called then componentDidMount is called
    
            // Api calls

        const data=await fetch(" https://api.github.com/users/akshaymarch7")    // to get github api,just type github api ,then in link open Users,there open get a user ,on left side you can see  https://api.github.com/users/USERNAME,type your
          // if i create portfolio website i can create apis using github
        const json=await data.json();

        this.setState({
            userInfo:json,
        })

        console.log(json);

    }

    componentDidUpdate(){
        console.log("Component Doid Update");
    }

    componentWillUnmount(){
                console.log("component will unmount");                          // when component will disappear this unmount will be called 
    }

    render() {
        //  const {name,location}=this.props;
        //  const {count}=this.state;

        //  console.log(this.props.name+"Child Render");

        //  console.log("render");

        const {name,location,avatar_url}=this.state.userInfo;

        return (
            <div className="user-card">
                {/* <h1>Count : {count}</h1> */}
                {/* <h1>Count2 : {this.state.count2}</h1> */}
                {/* <button onClick={()=>{
                    // this.state.count=this.state.count+1;   // this is a mistake this is not how we update count, Never update state variable directly
                  this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+1,
                  });
             }}>Count Increase</button> */}
                       {/* Now we create a button on Click it increase count variable */}
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
        );
    }
}

export default UserClass;


/***https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * 
 *   ---- Mounting lifecycle
 * Constructor 
 * Render(dummy)
 * <HTML DUMMY/>
 * Component Did Mount
 *     <API call>
 *     <this.setState>
 * 
 *    ------ UPDATE
 * 
 *   RENDER(API data)
 *     <HTML (NEW api data)>
 *   componentDid Update
 * 
 * 
 */