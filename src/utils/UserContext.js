import { createContext } from "react";

const UserContext = createContext({user :{
    name : "Dummy name",
    mail : "dummymail@gmail.com"
}})


export default UserContext;