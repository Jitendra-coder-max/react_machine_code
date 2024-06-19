import { createContext, useState } from "react";


export const UserContext = createContext(null);



 export const UserProvider = (props) => {

    const [user, setUserr] = useState({name: 'jit'})
return(
    <UserContext.Provider value={user}>
        {props.children}
    </UserContext.Provider>
)

}