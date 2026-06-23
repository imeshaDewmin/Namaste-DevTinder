import { useSelector } from "react-redux";
import EditProfile from "../components/EditProfile";

const Profile = () => {

    const user = useSelector(store => store.user.userData)

    return (
        user && (
            <div>
                <EditProfile userData={user} />
            </div>
        )
    )
}
export default Profile;