import Contact from './Contact';
import contactbackground from './../../images/contactbackground.jpg';
import styled from 'styled-components';

const ContactStyled = styled(Contact)`
  text-align: center;
  background: linear-gradient(to bottom right, #f4f4f8, #e2e2eb);
  
  .contact-us-top {
    background-image: url(${contactbackground});
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      height: 200px;
    }
  }

  .contact-top-heading {
    margin-top: 20px;
    font-weight: bold;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  .contacts {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .information-from-user {
    text-align: center;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    padding: 10px;
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  .information-from-user input,
  .information-from-user textarea {
    width: 100%;
    max-width: 600px;
    border: none;
    border-bottom: 2px solid black;
    font-size: large;
    text-align: center;
    margin: 10px auto;
    outline: none;
    padding: 5px; 
    font-size: 16px; 
    line-height: 1.5;
    @media (max-width: 768px) {
      max-width: 90%;
      font-size: medium;
    }
  }

 
  .information-from-user textarea {
    height: 100px; 
  }


  .contact-details {
    text-align: center;
    padding: 10px;
    max-width: 600px;
    width: 100%;
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  .Icon {
    width: 25px;
    height: 25px;
    margin: 5px;
    mix-blend-mode: color-burn;
  }
`;

export default ContactStyled;
