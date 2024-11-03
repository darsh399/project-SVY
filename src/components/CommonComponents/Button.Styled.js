import Button from "./Button";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
 .button{
   font: inherit;
   padding: 0.5rem 1.5rem;
   border: 1px solid #ff0055;
   border-radius: 4px;
   background: #ff0055;
   color: white;
   cursor: pointer;
   margin-right: 1rem;
   text-decoration: none;
   display: inline-block;
 }

 .button:focus{
    outline: none;
 }

 .button:hover,
 .button:active{
    background: #ff4382;
    border-color: #ff4382;
 }

 .button--inverse{
    background: transparent;
    color: #ff0055;
 }

 .button--small{
    font-size: 0.8rem;
 }

 .button--big{
    font-size: 1.5rem;
 }

 .button--inverse:hover,
 .button--inverse:active{
    color: white;
    background: #ff0055;
 }

 ${(props) =>
    props.customStyled &&
    `
      .button {
        background: ${props.customBackground || '#e0e0e0'};  
        color: ${props.customColor || '#000'};
        width: ${props.width || ''};
        height: ${props.height || ''};
        fontsize: ${props.font || ''}

      .button:hover,
      .button:active {
        background: ${props.customHoverBackground || '#ccc'}; 
      }
  `}

 .button--unstyled:hover{
    background: none;
    text-decoration: underline;
 }
`

export default ButtonStyled;