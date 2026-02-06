export default function User({user}){
    console.log(user);
    const{name,email}=user;
    return (
        <div className="player">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}