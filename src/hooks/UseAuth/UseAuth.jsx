import { useContext } from "react";
import { AuthContenxt } from "../../Provider/AuthProvider";


const UseAuth = () => {
    const auth = useContext(AuthContenxt)
    return auth;
}
export default UseAuth;