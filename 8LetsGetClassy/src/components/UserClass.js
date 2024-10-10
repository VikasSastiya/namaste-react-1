import React from "react";
// this is how we create class based comonent
// class Based component is a class which have render function which written JSX 
class UserClass extends React.Component {   //  react.Component is a class which is there inside react

    constructor(props){
        super(props);

        console.log(props);
    }

    render() {
         const {name,location}=this.props;

        return (
            <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
        );
    }
}

export default UserClass;