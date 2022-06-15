// import {useContext} from "react";
// import jwtDecode from "jwt-decode";

// import AuthContext from "./context";
// import authStorage from "./Storage";

// export default useAuth = () => {
// //   const { user, setUser } = useContext(AuthContext);
// const {user,setUser} = useContext(AuthContext)
//   const logIn = (authToken) => {
//     const user = jwtDecode(authToken);
//     setUser(user);
//     authStorage.storeToken(authToken);
//   };

//   const logOut = () => {
//     setUser(null);
//     authStorage.removeToken();
//   };

//   return { user, logIn, logOut };
// };
import {useContext} from 'react';
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./Storage";

export default useAuth=()=>{
    const {user,setUser}= useContext(AuthContext)
    const logIn = (authToken) => {

        const user = jwtDecode(authToken);

        setUser(user);

        authStorage.storeToken(authToken);

};

const logOut = () => {
       setUser(null);
     authStorage.removeToken();
       };
       return { user, logIn, logOut };
};


