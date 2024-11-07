import Home from "./Home";
import styled from 'styled-components';
import overheadImage from './../images/multipill.jpg'; // Import the image
import backgroundImgae from './../images/dna.png';

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
     box-shadow: 4px 4px;
   }



   .home-page-messages{
    text-align: center;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;

    button{
        height: 30px;
        width: 120px;
        border-radius: 7px;
        font-size: 20px;
        cursor: pointer;

        :hover{
            color: white;
            background-color: black;
        }
    }
   }


    .greeting-message {
        
        margin-left: 20px;
        font-size: 90px;
        max-width: 80%;
        background-image: url(${overheadImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: transparent;
        -webkit-background-clip:text;
        background-clip: text;
       
    }

    .why-choose-us-container{
        margin: 20px;
        border: 2px solid black;
        border-radius: 5px;

        h1{
            text-align: center;
        }
        ul{
            list-style: none;
            font-size: 20px;
            font-style: italic;
        }

        
    }

    .frequently-question-container{
        text-align: center;
        margin: 20px;
        border: 2px solid black;
        border-radius: 5px;

        h2{
            color: red;
        }
    }

    .homepage-partners{
        text-align: center;
        border: 2px solid black;
        border-radius: 5px;
        margin: 20px;
        img{
            height: 200px;
            width: 200px;
            border-radius: 10px;
            margin: 10px;
            justify-content: space-around;

            &:hover{
              transform: scale(1.06);
          }
        }
        
    }


    
`;

export default HomeStyled;
