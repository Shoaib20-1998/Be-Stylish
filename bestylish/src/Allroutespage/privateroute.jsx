import { Modal } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Auth } from "../Contextprovider/Auth";
import InitialFocus from "../Pages/singleproductcomp/Modal";

function PrivateRoute({children}){
    const{isAuth}=useContext(Auth)

    if(!isAuth){
        return <Navigate to="/login" />
    }

    return children

}

export default PrivateRoute