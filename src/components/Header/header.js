import { Button, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {logout} from "../../features/user/userSlice"

export const Header =()=>{
    const dispatch = useDispatch()
    const user = useSelector(state=>state.userStore.user)
return(
    <div className="mt-4 container d-flex justify-content-between">
<div className="d-flex"><b>Welcome {user.loggedIn?user.username:""}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/"><div className="text-secondary">Home</div></Link></div>
<div className="grid">
    {user.loggedIn?
    <>
    <Link to={"/dashboard"}>  
    <Button variant="primary" as={Col}>Dashboard</Button></Link>{' '}
    <Button onClick={()=>dispatch(logout())} variant="danger" as={Col}>Sign Out</Button>
</>
:
    <Link to={"/login"}>  
    <Button variant="primary" as={Col}>Log in</Button></Link>
    }

    </div>
    </div>
)
}