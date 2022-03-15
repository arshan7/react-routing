import { Link ,Outlet} from "react-router-dom"

export const NavBar = () => {
    return(
    <div>
        <div><Link to="/home">Home Page</Link></div>
        
        <div><Link to="/about">About Page</Link></div>
        <div><Link to="/dashboard">DashBoard Page</Link></div>
        <Outlet />
    </div>
    )
}