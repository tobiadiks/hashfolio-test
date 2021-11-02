import { PortfolioTable } from "../components/Table/PortfolioTable"
import { Alert, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { dataResponse } from "../data/response";
import { Header } from "../components/Header/header";
import {useHistory} from "react-router-dom"
import { useSelector } from "react-redux";


export const DashboardPage=()=>{
    const [response,setResponse]= useState([])
    const [loaded,setLoaded]=useState(false)
    const history = useHistory()
    const states = useSelector((state)=>state.userStore.user)

    useEffect(()=>{
        async function getData(){
            await dataResponse.then((res)=>setResponse(res))
            await setLoaded(true)
        }
        getData();
         
     },[response,loaded])

    
     if(!states.loggedIn){
         history.push('/login')
     }
    if(loaded){
        return(
            <div className="mt-4 container">
                <div className="mb-4">
                <Header/>
                </div>
                

<div>
    <span className='px-2 text-primary'><u>Portfolio</u></span>
    <span className="px-2">Watchlist</span>
</div>
                <Table striped hover>
                    <tbody> 
                        
                    {response.results.map((data)=>
                    
                    <PortfolioTable
                    name={data.name}
                    img={data.basket_items[0].coin_logo_url}
                    manager={data.manager_name}
                    assets={data.basket_items}
                    />)}
            
            </tbody>
                </Table>

<div>
                <div className="text-center">
                    <Button variant="outline-secondary" className="px-10">
                        Next &nbsp; &gt;
                    </Button>
                </div>

                <div className="text-right">
                    <div className="d-flex justify-content-end">
                    <Button variant="primary" className="px-10">
                        See All Baskets
                    </Button>
                    </div>
                </div>
                </div>

            </div>
        )
    }
    else{
        return(
            <div className="mt-4 container">
               <div className="mb-4">
                <Header/>
                </div>

                <Alert>
                    <Alert.Heading>Your basket is loading...</Alert.Heading>
                </Alert>
            </div>
        )
    }
}