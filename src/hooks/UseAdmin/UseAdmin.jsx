import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import UseAuth from "../UseAuth/UseAuth";

const useAdmin = () => {
    const {profile} = UseAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', profile?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${profile?.email}`);
            return res.data.admin;
        }
    })
    return [(!isAdmin), isAdminLoading]
}
export default useAdmin;