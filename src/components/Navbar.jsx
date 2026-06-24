import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL, USER_ICON } from "../utils/constants";
import { removeLoggedInUser } from "../redux/userSlice";
import { clearFeed } from "../redux/feedSlice";
import { removeConnections } from "../redux/connectionSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { removeRequests } from "../redux/requestsSlice";

const Navbar = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loggedInUser = useSelector(store => store.user.userData);

    const handleLogOut = async () => {
        try {
            await axios.post(API_BASE_URL + "/logout", {},
                { withCredentials: true });
        } catch (error) {
            console.error(error.message);
        }
        dispatch(removeLoggedInUser());
        dispatch(clearFeed());
        dispatch(removeConnections());
        dispatch(removeRequests());
        navigate("/login");
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">🧑🏻‍💻 Dev Tinder</Link>
            </div>
            {loggedInUser?.photoUrl && (
                <div className="flex gap-2">
                    <div className="dropdown dropdown-end mx-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={loggedInUser.photoUrl} />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/profile" className="justify-between"
                                    onClick={() => document.activeElement.blur()}>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/"
                                    onClick={() => document.activeElement.blur()}>
                                    Feed
                                </Link>
                            </li>
                            <li>
                                <Link to="/connections"
                                    onClick={() => document.activeElement.blur()}>
                                    Connections
                                </Link>
                            </li>
                            <li>
                                <Link to="/requests"
                                    onClick={() => document.activeElement.blur()}>
                                    Requests
                                </Link>
                            </li>
                            <li onClick={handleLogOut}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navbar;