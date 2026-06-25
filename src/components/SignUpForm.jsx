import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import Feed from "../pages/Feed";
import { useDispatch } from "react-redux";
import { addLoginUser } from "../redux/userSlice";

const SignUpForm = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignUp = async () => {
        try {
            const res = await axios.post(API_BASE_URL + "/signup", {
                firstName,
                lastName,
                emailId: email,
                password
            },
                {
                    withCredentials: true
                }
            );
            dispatch(addLoginUser(res.data.data))
            navigate("/profile");
        } catch (error) {
            setError(error?.response?.data);
        }
    }

    return (
        <div className="flex justify-center items-center h-full py-10">
            <div className="card card-border border-black bg-base-100 w-96">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold">Sign Up</h2>
                    <div>
                        <div className="mt-4">
                            <legend className="fieldset-legend">First Name</legend>
                            <label className="input validator ">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}

                                />
                            </label>
                        </div>
                        <div className="mt-4">
                            <legend className="fieldset-legend">Last Name</legend>
                            <label className="input validator ">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="mt-4">
                            <legend className="fieldset-legend"> Email Address</legend>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required
                                    value={email}
                                    onChange={handleEmailChange} />
                            </label>
                        </div>

                        <div className="mt-4">
                            <legend className="fieldset-legend">Password</legend>
                            <label className="input validator ">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                        ></path>
                                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="password"
                                    required
                                    placeholder="Password"
                                    minLength="8"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </label>
                        </div>

                    </div>
                    <p className="text-red-500 mt-2 p-2">{error}</p>
                    <div className="card-actions justify-center mt-2">
                        <button className="btn btn-primary"
                            onClick={handleSignUp}>SignUp</button>
                    </div>
                    <p className="text-center mt-2 p-2 m-2">
                        Already have an account? 
                        <Link to="/login" className="font-bold text-blue-800">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SignUpForm;