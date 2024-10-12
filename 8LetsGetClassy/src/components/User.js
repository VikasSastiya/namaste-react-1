  import {useState} from "react";

const  User = (props)=> {   // we can write this like "const  User = ({name})=> {"
       const [count,setCount]=useState(0);
       const [count2]=useState(1);

       useEffect(()=>{   // componentDidMount( and useEffect are two different things dont say they are equal
           // Api Calls
                                      
        setInterval(()=> {     // what if i create setInterval there   
                 console.log("NAMASTE REACT OP ");
                },1000);
                                      // so when useEffect will be called,after every render
       },[]);   // empty dependency array will be called one at initial render  if we write here like   "},[count])" this mean useEfffect will run at every count change

       

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