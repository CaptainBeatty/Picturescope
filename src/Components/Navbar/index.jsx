import { NavLink } from "react-router-dom";
import "../../Styles/navigation.css"
import UserEmail from "../UserEmail"
import AuthButton from "../AuthButton"

function Navbar() {

    return (
        
        <div className="navbar">
            <UserEmail />
            <div className="nav-links">
            <NavLink exact to
                    ="/newimagepage/" activeClassName="active"
                >
                    Add
                </NavLink>
                <NavLink exact to
                    ="/" activeClassName="active"
                >
                    Gallery
                </NavLink>
                <AuthButton />

            </div>
        </div>
    )
}
export default Navbar;