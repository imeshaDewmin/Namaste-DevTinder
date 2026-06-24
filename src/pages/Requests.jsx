import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../redux/requestsSlice";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import ConnectionCard from "../components/ConnectionCard";

const Requests = () => {
    const requests = useSelector(store => store.requests);

    const dispatch = useDispatch();

    const getRequests = async () => {
        try {
            const res = await axios.get(API_BASE_URL + "/user/requests/received",
                {
                    withCredentials: true
                }
            );

            dispatch(addRequests(res.data.data));
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getRequests();
    }, [])

    if (!requests) return;

    if (requests.length === 0) return <h1 className="font-bold text-4xl  text-center mt-4">No Requests yet...</h1>
    return (
        <div className="pb-20 mt-5 flex flex-col items-center justify-center">

            <h1 className="font-bold text-2xl mb-5 text-center">
                Requests
            </h1>

            <div>
                {requests.map((c) => {
                    const user = c.fromUserId;
                    return (
                        <ConnectionCard
                            key={c._id}
                            data={user}
                        />
                    )
                })}
            </div>

        </div>
    )
}
export default Requests;