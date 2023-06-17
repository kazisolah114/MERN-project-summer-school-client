import { useQuery } from "@tanstack/react-query";
import UseAuth from "../UseAuth/UseAuth";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";


const UseStudent = () => {
    const {profile} = UseAuth()
    const [axiosSecure] = UseAxiosSecure()

    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', profile?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${profile?.email}`);
            return res.data.student;
        }
    })
    return [(!isStudent), isStudentLoading]
}
export default UseStudent;