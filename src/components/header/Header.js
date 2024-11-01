import React from "react";
import NavLinkStyled from "../NavLink/NavLink.Styled";

const Header = (props) => {
    return(
        <div className={props.className}>
          
            <div>
                <h1>Svy Biotech</h1>
            </div>

            <div className="nav-links">
               <NavLinkStyled/>
            </div>
            
        </div>
    )
}

export default Header;