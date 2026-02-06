import { use } from "react"
import User from "./user";
export default function Users( {fetchUser} ){
    const users=use(fetchUser);
    console.log(users);
    return(
        <div className="player">
            <h2>Users: </h2>
    {
            users.map(user => {
            return <User key={user.id} user={user} />
    })
}

        </div>
    )
}