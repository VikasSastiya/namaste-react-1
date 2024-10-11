  import {useState} from "react";

const  User = (props)=> {   // we can write this like "const  User = ({name})=> {"
       const [count]=useState(0);
       const [count2]=useState(1);

    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h2>Name: {props.name}</h2>
        {/*we can write above code like "<h2>Name: {props.name}</h2>" */}
        <h3>Location: Dehradun</h3>
        <h4>Contact: @akshaymarch7</h4>
    </div>
}      // this is functional component

export default User;