import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { API_BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addLoginUser } from "../redux/userSlice";
import { useEffect } from "react";

const Body = () => {

    const location = useLocation();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const userData = useSelector(store => store.user.userData);

    const authPages = ["/login", "/signup"];

    const fetchUser = async () => {
        if (userData) return;
        try {
            const user = await axios.get(API_BASE_URL + "/profile/view", {
                withCredentials: true
            })
            dispatch(addLoginUser(user.data));
        } catch (error) {
            if (error?.status === 401) {
                navigate("/login");
            }
            console.error(error.message);
        }
    }

    useEffect(() => {
        if (authPages.includes(location.pathname)) return;
        fetchUser();
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>

    )
}
export default Body;