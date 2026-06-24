import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { addLoginUser } from "../redux/userSlice";

const EditProfile = ({ userData }) => {

    const dispatch = useDispatch();

    const email = userData.emailId;
    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [photoUrl, setPhotoUrl] = useState(userData.photoUrl);
    const [age, setAge] = useState(userData.age || "");
    const [gender, setGender] = useState(userData.gender || "");
    const [about, setAbout] = useState(userData.about);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


    const handleEdit = async () => {
        try {
            const res = await axios.post(API_BASE_URL + "/profile/edit", {
                firstName, lastName, photoUrl, age, gender, about
            }, {
                withCredentials: true
            })

            dispatch(addLoginUser(res.data.data));
            setSuccess("Profile updated successfully")
            setError(null);

            setTimeout(() => {
                setSuccess(null);
            }, 3000);

        } catch (error) {
            setError(error?.response?.data);
        }
    }


    return (
        <>
            <div className="flex justify-center mx-20 mt-10 mb-5 overflow-y-auto">
                <div className="card card-border border-black bg-base-100 w-96">
                    <div className="card-body">
                        <h2 className="card-title justify-center text-2xl font-bold">Edit Profile</h2>
                        <div>
                            <div className="mt-4">
                                <legend className="fieldset-legend">First Name</legend>
                                <label className="input validator ">
                                    <input
                                        type="text"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}

                                    />
                                </label>
                            </div>
                            <div className="mt-4">
                                <legend className="fieldset-legend">Last Name</legend>
                                <label className="input validator ">
                                    <input
                                        type="text"
                                        required
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className="mt-4">
                                <legend className="fieldset-legend">Age</legend>
                                <label className="input validator ">
                                    <input
                                        type="number"
                                        required
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className="mt-4">
                                <legend className="fieldset-legend">Gender</legend>
                                <details className="dropdown">
                                    <summary className="btn m-1">
                                        {gender || "Select Gender"}
                                    </summary>

                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                                        <li><a onClick={() => setGender("male")}>Male</a></li>
                                        <li><a onClick={() => setGender("female")}>Female</a></li>
                                        <li><a onClick={() => setGender("other")}>Other</a></li>
                                    </ul>
                                </details>
                            </div>

                            <div className="mt-4">
                                <legend className="fieldset-legend">About</legend>
                                <label className=" ">
                                    <textarea
                                        className="textarea"
                                        required
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className="mt-4">
                                <legend className="fieldset-legend">Photo Url</legend>
                                <label className="input validator ">
                                    <input
                                        type="text"
                                        required
                                        value={photoUrl}
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div>
                                <legend className="fieldset-legend"> Email Address</legend>
                                <label className="input validator">

                                    <input type="email" readOnly value={email}
                                    />
                                </label>
                            </div>

                        </div>
                        <p className="text-red-500 mt-2 p-2">{error}</p>
                        <div className="card-actions justify-center mt-2">
                            <button className="btn btn-primary"
                                onClick={handleEdit}>Save Profile</button>
                        </div>
                    </div>
                </div>
                <div>
                    <UserCard data={{ firstName, lastName, age, gender, about, photoUrl }} />
                </div>
            </div>
            {success &&
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>{success}</span>

                    </div>
                </div>
            }
        </>
    )
}
export default EditProfile;