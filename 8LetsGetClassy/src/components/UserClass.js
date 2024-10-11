import React from "react";
// this is how we create class based comonent
// class Based component is a class which have render function which written JSX 
class UserClass extends React.Component {   //  react.Component is a class which is there inside react
    // loading a class based component that mean we create an instense in class
    constructor(props){
        super(props);
    this.state={    // state variable is a big object which contain all the object
         count:0,
         count2:2,
    };
        // console.log(props);
    }

    render() {
         const {name,location}=this.props;
         const {count,count2}=this.state;

        return (
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <h1>Count2 : {this.state.count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
        );
    }
}

export default UserClass;