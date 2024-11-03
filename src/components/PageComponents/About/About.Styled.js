import styled from 'styled-components';
import About from './About';
import research from './../../images/Research.png';

const AboutStyled = styled(About)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;

    img {
        height: 200px;
        width: 200px;
        border-radius: 20px;
    }

    .about-page-heading {
        margin-top: 20px;
        text-align: center;
        font-weight: bold;
        font-size: 60px;
        color: rgba(255, 255, 255, 0.5);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }

    .aboutpage-top-data {
        background-image: url(${research});
        background-size: cover;
        background-position: center;
        height: 400px;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .about-section-data {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center; 
    }

    .about-section {
        background-color: #fff;
        border: 2px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 10px;
        margin: 10px 0;
        width: 100%;
        max-width: 96%;
        text-align: center;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.02);
        }
    }

    .about-title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    .about-message {
        font-size: 16px;
        color: #555;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .about-page-heading {
            font-size: 40px;
        }

        .about-section {
            width: 90%;
            padding: 20px; 
            font-size: 14px;
        }

        img {
            height: 150px; 
            width: 150px;
        }
    }

    @media (max-width: 480px) {
        .about-page-heading {
            font-size: 30px; 
        }

        .about-title {
            font-size: 20px; 
        }

        .about-message {
            font-size: 14px; 
        }

        img {
            height: 120px; 
            width: 120px;
        }
    }
`;

export default AboutStyled;
