export default function Profile(props){

    const {name,username,email,about} = props
    return (
        <>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <h2>About</h2>
            <p>{about}</p>
        </>
    )
}