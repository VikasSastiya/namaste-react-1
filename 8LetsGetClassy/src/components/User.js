const  User = (props)=> {   // we can write this like "const  User = ({name})=> {"
    return <div className="user-card">
        <h2>Name: {props.name}</h2>
        {/*we can write above code like "<h2>Name: {props.name}</h2>" */}
        <h3>Location: Dehradun</h3>
        <h4>Contact: @akshaymarch7</h4>
    </div>
}      // this is functional component

export default User;