import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../utils/constants";
import { removeRequest } from "../redux/requestsSlice";

const ConnectionCard = ({ data, requestId, isActive = true }) => {
    const { firstName, lastName, photoUrl, about, age, gender } = data;

    const dispatch = useDispatch();

    const reviewRequests = async (reviewStatus) => {
        try {
            const res = await axios.post(API_BASE_URL + `/request/review/${reviewStatus}/${requestId}`, {}, {
                withCredentials: true
            })
            dispatch(removeRequest(requestId));

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="flex items-center gap-4 bg-neutral text-neutral-content rounded-2xl shadow-md p-4 ml-3 w-100 mx-auto my-3">
            <div className="avatar">
                <div className="w-16 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src={photoUrl} alt={firstName} />
                </div>
            </div>

            <div className="flex-1 text-center -ml-8">
                <h2 className="font-semibold text-lg">
                    {firstName} {lastName}
                </h2>
                <p className="text-sm text-gray-400">{about}</p>
                {age && gender && (
                    <p className="text-sm text-gray-400">{age} {gender}</p>
                )}
                {isActive && (
                    <div className="card-actions justify-center gap-2 mt-2">
                        <button className="btn btn-error" onClick={() => reviewRequests("rejected")} >Reject</button>
                        <button className="btn btn-primary" onClick={() => reviewRequests("accepted")}>Accept</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConnectionCard;