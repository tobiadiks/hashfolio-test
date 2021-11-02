import { useState } from "react"
import {Button, Col, Form} from "react-bootstrap"
import { useSelector,useDispatch } from "react-redux"
import {login} from "../../features/user/userSlice"
import { Header } from "../../components/Header/header"
import {useHistory} from "react-router-dom"

export const LoginPage=()=>{
    const [username,setUsername] = useState("")
    const states = useSelector((state)=>state.userStore.user)
    const dispatch = useDispatch()
    const history = useHistory() 

    if(states.loggedIn){
        history.push('/dashboard')
    }
    return(
        <div className="container mt-4">
            <div className="mb-4">
         <Header/>
         </div>
         <div className="d-flex  justify-content-center">
            <div className="w-50 mt-10">
                <h4 className="mb-3 text-center">Login your account</h4>
            <Form as={Col} className="border p-4 rounded">
                
                <Form.Group className="mb-3">
                    <Form.Label as={"h6"}>
                        Username
                    </Form.Label>
                    <Form.Control onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="Enter username"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label as={"h6"}>
                        Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Enter correct password"/>
                </Form.Group>

                <Button onClick={username?()=>{dispatch(login({username})); history.push('/dashboard')}:""} variant="primary" type="submit" className="w-100 mt-4">Login</Button>
            <div className="text-center mt-2">or <span className="link-primary">create account</span></div>
            </Form>

            </div>
            </div>
            
        </div>
    )
}