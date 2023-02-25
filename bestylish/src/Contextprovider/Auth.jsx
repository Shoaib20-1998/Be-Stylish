import { createContext, useState } from "react";

export const Auth =createContext()

const Authcontext =({children})=>{

    const[isAuth,setisAuth]=useState(false)

   return <Auth.Provider value={{isAuth,setisAuth}}>{children}</Auth.Provider>
}

export default Authcontext;