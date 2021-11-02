import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"
import { Header } from "../components/Header/header"
import {useSelector} from "react-redux"
//import { useEffect, useState } from "react"

export const HomePage =()=>{
    const isLoggedIn =useSelector((state)=>state.userStore.user.loggedIn)
    
return(
    <div className="mt-4 container text-center">
         <div className="mb-4">
         <Header/>
         </div>
        {isLoggedIn?<h2>You are logged in</h2>:
        <><h2>You are not logged in</h2>
        <div>
            <Link to="/login">
            <Button>
                Login &nbsp; &gt;
            </Button>
            </Link>
        </div>
        </>

        }
        
</div>
    
)
}