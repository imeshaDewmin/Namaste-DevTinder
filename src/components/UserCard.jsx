import axios from "axios";
import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../utils/constants";
import { removeConnectionFromFeed } from "../redux/feedSlice";

const UserCard = ({ data }) => {

    const { _id, firstName, lastName, photoUrl, about, skills, age, gender } = data;

    const dispatch = useDispatch();

    const addConnection = async (status) => {
        try {
            const res = await axios.post(API_BASE_URL + `/request/send/${status}/${_id}`, {}, {
                withCredentials: true
            })
            dispatch(removeConnectionFromFeed(_id));

        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm mt-3 m-2 p-2 col-span-4 ">
            <figure>
                <img
                    src={photoUrl}
                    alt="Dp" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{about}</p>
                <p>{skills}</p>
                {age && gender && (
                    <p>{age + "," + gender}</p>
                )}
                <div className="card-actions justify-center gap-2">
                    <button className="btn btn-error" onClick={() => addConnection("ignored")}>Ignore</button>
                    <button className="btn btn-primary" onClick={() => addConnection("interested")}>Interested</button>
                </div>
            </div>
        </div>
    )
}
export default UserCard;