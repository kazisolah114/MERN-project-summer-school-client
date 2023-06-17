import { useQuery } from "@tanstack/react-query";
import UseAuth from "../UseAuth/UseAuth";
import useAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";


const useInstructor = () => {
    const {profile} = UseAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', profile?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${profile?.email}`);
            return res.data.instructor;
        }
    })
    return [(!isInstructor), isInstructorLoading]
}
export default useInstructor;