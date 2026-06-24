import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../redux/connectionSlice";
import ConnectionCard from "../components/ConnectionCard";

const Connections = () => {

    const connections = useSelector(store => store.connections);

    const dispatch = useDispatch();

    const getConnections = async () => {
        try {
            const res = await axios.get(API_BASE_URL + "/user/connections",
                {
                    withCredentials: true
                }
            );
            dispatch(addConnections(res.data.data));
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getConnections();
    }, [])

    if (!connections) return;

    if (connections.length === 0) return <h1 className="font-bold text-4xl mt-4 text-center">No connections yet...</h1>
    return (
        <div className="pb-20 mt-5 flex flex-col items-center justify-center">

            <h1 className="font-bold text-2xl mb-5 text-center">
                Connections
            </h1>

            <div>
                {connections.map((c) => (
                    <ConnectionCard
                        key={c._id}
                        data={c}
                        isActive={false}
                    />
                ))}
            </div>

        </div>
    )
}
export default Connections;