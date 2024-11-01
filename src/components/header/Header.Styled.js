import Header from "./Header";
import styled from "styled-components";

const HeaderStyled = styled(Header)`
display: flex;
background-color: aqua;

height: 70px;

.nav-links{
    float: right;
}
`

export default HeaderStyled;