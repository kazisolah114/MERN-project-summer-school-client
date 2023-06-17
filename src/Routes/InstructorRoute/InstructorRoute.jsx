import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/UseAdmin/UseAdmin";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import useInstructor from "../../hooks/UseInstructor/UseInstructor";

const InstructorRoute = ({ children }) => {
    const { profile, loading } = UseAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (profile && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;