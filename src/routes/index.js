import {BrowserRouter, Switch,Route} from "react-router-dom"
import {Pages} from "../screens/index"
export  const AppRoutes=()=>{
    return(
    <BrowserRouter>
    <Switch>
    <Route path={"/login"} component={Pages.LoginPage}/>
    <Route path={"/"} component={Pages.HomePage} exact/>
    <Route path={"/dashboard"} component={Pages.DashboardPage}/>
    </Switch> 
    </BrowserRouter>)
}