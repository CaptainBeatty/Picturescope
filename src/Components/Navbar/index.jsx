import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/navigation.css"
//import { CButtonGroup, CDropdownToggle, CDropdown, CDropdownMenu, CDropdownItem, CDropdownDivider} from '@coreui/react';



function Navbar() {

    return (
        
        <div className="navbar">
            
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
                <NavLink exact to="/LoginPage" activeClassName="active"
                >
                    Login
                </NavLink>
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