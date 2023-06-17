import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import UseStudent from "../../hooks/UseStudent/UseStudent";


const UserRoute = ({ children }) => {
    const { profile, loading } = UseAuth();
    const [isStudent, isStudentLoading] = UseStudent();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <progress className="progress w-56"></progress>
    }

    if (profile && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default UserRoute;