import { createContext, useState } from "react";

export const Auth =createContext()

const Authcontext =({children})=>{

    const[isAuth,setisAuth]=useState(false)
    const[name,setname]=useState('')
   return <Auth.Provider value={{name,setname,isAuth,setisAuth}}>{children}</Auth.Provider>
}

export default Authcontext;