import React from "react";
import { Link } from "react-router-dom";
const NavLink = (props) => {
    return(
        <nav className={props.className}>
            <ul>
                <Link to='/about'>
                    About
                </Link>

                <Link to='/'>
                    Home
                </Link>

                <Link to='/products'>
                    Products
                </Link>

                <Link to='contact'>
                    Contact
                </Link>
            </ul>

        </nav>
    )
}

export default NavLink;