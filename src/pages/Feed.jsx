import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/feedSlice";
import { useEffect } from "react";
import UserCard from "../components/UserCard";

const Feed = () => {

    const feedData = useSelector(store => store.feed)

    const dispatch = useDispatch();

    const getFeed = async () => {
        if (feedData.length > 0) return;
        try {
            const res = await axios.get(API_BASE_URL + "/feed", {
                withCredentials: true
            }
            );
            dispatch(addFeed(res?.data?.data));

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getFeed();
    }, []);


    return (
        <div className="pb-20 mt-5 grid grid-cols-12 justify-center col-span-12 gap-3">
            {feedData.map((user) =>
                <UserCard
                    key={user._id}
                    data={user} />)}
        </div>
    )
}
export default Feed;