import React from "react";
import NavLinkStyled from "../NavLink/NavLink.Styled";
import Logo from "../CommonComponents/Logo";
const Header = (props) => {
    return(
        <div className={props.className}>
            <div className="logo-header">
            <Logo/>
        
                <h2 className="heading">Svy Biotech</h2>
            </div>

            <div className="nav-links">
               <NavLinkStyled/>
            </div>
            
        </div>
    )
}

export default Header;