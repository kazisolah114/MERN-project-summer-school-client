import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import useAdmin from "../../hooks/UseAdmin/UseAdmin";


const AdminRoute = ({ children }) => {
    const { profile, loading } = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (profile && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;