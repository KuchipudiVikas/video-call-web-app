import { signInWithGoogle } from '../../utils/Firebase'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'





const Home = () => {
    const [verified, setVerified] = useState("null");
    useEffect(() => {
        if (localStorage.getItem('user') == 'null') {
            setVerified('null')
        } else {
            setVerified('dkf')
        }
    })

    return (
        <div className="">

            {
                (verified === "null") ? (<button >Sign in with Google</button>) : (<h1>Logged In </h1>)
            }
            <h1>{localStorage.getItem("name")}</h1>)
            <img src={localStorage.getItem("profilepic")} alt="this is test" />
            <Link to={'/startcall'} state={{ method: "start" }}>StartCall</Link>
            <Link to={'/joincall'} state={{ method: "join" }}>Join Call</Link>
        </div >
    )
}

export default Home