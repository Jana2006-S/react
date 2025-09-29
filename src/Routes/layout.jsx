import { NavLink } from "react-router-dom";
const Layout=()=>
{
    return(
        <>
            <center><NavLink to="/">Home | </NavLink>
            <NavLink to="/about">About | </NavLink>
            <NavLink to="/contact">Contact </NavLink>
            </center>
            
            </>
    )
}
export default Layout