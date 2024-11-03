import Contact from './Contact';

import styled from 'styled-components';

const ContactStyled = styled(Contact)`
text-align: center;
background: linear-gradient(to bottom right, #f4f4f8, #e2e2eb);

.contacts{
display: flex;
flex-direction: row;
}

.information-from-user{
    text-align: center;
    display: flex;
    flex-direction: column;
}

input:focus { 
    outline: none;
}


.information-from-user input{
    width: 100vh;
border-style: none;
height: 30px;
border-bottom: 2px solid black;

font-size: large;
text-align: center;
margin: 20px;
margin-right: 20px;
}

.Icon{
    width: 25px;
    height: 25px;
    mix-blend-mode: color-burn;
}

.contact-details{
    text-align: center;
}

`

export default ContactStyled;