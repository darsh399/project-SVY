import NavLink from "./NavLink";
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`

ul{
   display: flex;
   list-style: none;
   justify-content: space-evenly;
   gap: 40px;
   margin: 0;
   padding: 0;
}

a{
   color: #fff;
   text-decoration: none;
}

a::after{
   content: "";
   display: block;
   width: 100%;
   height: 2px;
   background-color: #fff;
   visibility: hidden;
   transform: scaleX(0);
   transition: all 0.3s ease-in-out;
}

a:hover::after{
   visibility: visible;
   transform: scaleX(1);
}
`


export default NavLinkStyled;