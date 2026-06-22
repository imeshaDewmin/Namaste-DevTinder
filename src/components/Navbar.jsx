import { useDispatch, useSelector } from "react-redux";
import { USER_ICON } from "../utils/constants";
import { removeLoggedInUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loggedInUser = useSelector(store => store.user.userData);

    const handleLgOut = () => {
        dispatch(removeLoggedInUser());
        navigate("/login");
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">🧑🏻‍💻 Dev Tinder</a>
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
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLgOut}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navbar;