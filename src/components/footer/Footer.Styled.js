import Footer from "./Footer";

import styled from "styled-components";
const FooterStyled = styled(Footer)`
    padding: 20px;
    margin: 0;
    background: linear-gradient(135deg, #333, #555);
    color: white;

    .footer-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
        border-top: 1px solid #444;
    }

    .footer-column {
        text-align: center;
        width: 30%;
        p {
            margin-top: 10px;
            font-size: 14px;
            color: #ccc;
        }
    }

    .available-cities{

        li{
            list-style: none;
            text-align: center
        }
    }

    .social-media {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 40px;
            width: 40px;
            border-radius: 10%;
            margin-left: 10px;
            transition: transform 0.2s ease-in-out;
        }

        img:hover {
            transform: scale(1.1);
            filter: brightness(1.2);
        }
    }

    .quick-links {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 15px;
        border-top: 1px solid #444;
        padding-top: 15px;
    }

    .quick-links a {
        color: #ccc;
        text-decoration: none;
        font-size: 14px;
        transition: color 0.3s;
    }


    .quick-links a:hover {
        color: #fff;
    }

    hr {
        border: 1px solid #ccc;
        margin: 20px 0;
    }

    .copyright-tag {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
    }
`;

export default FooterStyled;