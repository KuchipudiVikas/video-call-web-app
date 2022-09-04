import { signInWithGoogle } from '../../utils/Firebase'
import Call from "../../components/call.component"
import { Link } from 'react-router-dom'

const Home = () => {


    return (
        <div className="">


            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <h1>{localStorage.getItem("name")}</h1>
            <img src={localStorage.getItem("profilepic")} />
            <Link to={'/startcall'} state={{ method: "start" }}>Start A Call</Link>
            <Link to={'/joincall'} state={{ method: "join" }}>Join Call</Link>
        </div>
    )
}

export default Home