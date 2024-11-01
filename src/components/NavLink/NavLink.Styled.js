import NavLink from "./NavLink";
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`

text-align: center;
font-size: larger;
 ul{
    display: flex;
    justify-content: space-evenly;
    gap: 40px;
    margin: 0;
    padding: 0;
 }

 li{
    list-style-type: none;
 }

 a{
   text-decoration: none;
 }
`


export default NavLinkStyled;