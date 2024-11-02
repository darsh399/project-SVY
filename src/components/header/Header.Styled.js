import Header from "./Header";
import styled from "styled-components";

const HeaderStyled = styled(Header)`

display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: #333;
color: #fff;
height: 40px;

.logo-header{
    display: flex;
    align-items: center;
}

.heading{
    margin-left: 18px;
    cursor: pointer;
}

.nav-links {
    margin-left: auto;
}

`

export default HeaderStyled;