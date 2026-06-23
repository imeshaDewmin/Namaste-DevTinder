const UserCard = ({ data }) => {

    const { firstName, lastName, photoUrl, about, skills, age, gender } = data
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
                    <button className="btn btn-error">Ignore</button>
                    <button className="btn btn-primary">Interested</button>
                </div>
            </div>
        </div>
    )
}
export default UserCard;