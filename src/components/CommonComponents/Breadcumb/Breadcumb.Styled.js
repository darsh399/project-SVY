import styled from "styled-components";
import Breadcrumb from "./Breadcumb";

const BreadcumbStyled = styled(Breadcrumb)`
display: flex;
 a{
    text-decoration: none;
    font-size: 50px;
    font-weight: bold;
    color: white;
 }
 .active-page{
   text-decoration: underline;
  text-decoration-color: red; 
 }
`

export default BreadcumbStyled;