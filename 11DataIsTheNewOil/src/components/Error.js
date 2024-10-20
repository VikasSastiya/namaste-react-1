// react-router-dom also gives some hook as useRouterError
import { useRouteError } from "react-router-dom";  // it will give some more information about error


const Error=()=>{
    const err=useRouteError();
      console.log(err);
    return (<div>
        <h1>OOops!!!</h1>
        <h2>Something went wrong!!</h2>
        <h3>{err.status}:{err.statusText}</h3>
        </div>
    );
};

export default Error;