import Home from "./Home";
import styled from 'styled-components';
import overheadImage from './../images/multipill.jpg'; // Import the image
import backgroundImgae from './../images/19369.jpg';

const HomeStyled = styled(Home)`
    

    .home-page-topdata{
        background-image: url(${backgroundImgae});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    }

   .home-page-content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
   }

   .home-page-content div{
     border: 2px solid grey;
     border-radius: 7px;
     flex: 1 1 30%;
     max-width: 30%;
     box-sizing: border-box;
   }

   .home-page-messages{
    text-align: center;
   }

   .greet{
    font-size: 60px;
    text-align: center;
    margin-left: 20px;
    background-image: url(${overheadImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
    -webkit-background-clip:text;
    background-clip: text;

   }

    .greeting-message {
        
        margin-left: 20px;
        font-size: 90px;
        max-width: 60%;
        background-image: url(${overheadImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: transparent;
        -webkit-background-clip:text;
        background-clip: text;
       
    }

    
`;

export default HomeStyled;
