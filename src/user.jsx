export default function User({user}){
    console.log(user);
    return <>
    <div className="border border-red-500">
        <h1>{user.email}</h1>
        <h1>{user.name}</h1>
        <h1>{user.phone}</h1>
    </div>
    </>
};