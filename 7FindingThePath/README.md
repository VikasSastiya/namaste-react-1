#  install a library "react router DOM" 
- to install write in console "npm i react-router-dom" 
- then "npx parcel index.html"
- for more information please visit https://reactrouter.com/en/main/start/overview
- please go ahead with website and please read about routers

- at app.js write routing configuration


- what is page its a group of component

- if we write a rndom route supppose anything like http://localhost:1234/bcbcvbcvbc then it shows some error message but if you want to write your own error messages then the code shows in Error.js
![alt text](image.png)

- import { useRouteError } from "react-router-dom";  // it will give some more information about error
![alt text](image-1.png)


- if we be in any route out header is not shown to tackel this as body can change 
- but our headershould be at their place so we see this in part4
- to solve thisproblem i have to create children route


# now we see how to create children route inside our app



- now we have to link the about,component,home,contactUs to our routes

# There are 2 types of routing in your react web apps
- 1.Client side routing- single page just the components get interchanged
- 2.Server side routing