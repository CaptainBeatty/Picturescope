import React from "react";
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
            {/*<div>
            <CButtonGroup role="group" aria-label="Button group with nested dropdown">
                <CDropdown variant="btn-group">
                    <CDropdownToggle color="primary">
                        Dropdown
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">
                            Action
                        </CDropdownItem>
                        <CDropdownItem href="#">
                            Another action
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </CButtonGroup>
    </div>*/}
        </div>
    )
}

export default Navbar;