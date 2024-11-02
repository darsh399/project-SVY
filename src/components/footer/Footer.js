import React from "react";
import GreetMessages from "../PageComponents/Messages/GreetMessages";
import instLogo from './../images/instagram.png';
import facebookLogo from './../images/facebook.png';
import Logo from "../CommonComponents/Logo";
import linkedln from './../images/linkedin.png';
import ButtonStyled from "../CommonComponents/Button.Styled";
import FooterMessages from "../PageComponents/Messages/FooterMessages";

const Footer = (props) => {
    return (
        <div className={props.className}>
            <div className="footer-data">

                <div className="footer-column">
                    <Logo/>
                    <h1>{GreetMessages.company_contact_details.companyName}</h1>
                    <img src="" alt="" />
                    <p>{FooterMessages.SvyMsg}</p>
                </div>

                <hr />


                <div className="footer-column">
                    <h2>{FooterMessages.connect_on}</h2>
                    <div className="social-media">
                        <ButtonStyled as="a" href="https://www.facebook.com" target="_blank" >
                            <img src={facebookLogo} alt="facebook" />
                        </ButtonStyled>
                        <ButtonStyled as="a" href="https://www.instagram.com" target="_blank" >
                            <img src={instLogo} alt="instagram" />
                        </ButtonStyled>
                        <ButtonStyled as="a" href="https://www.linkedin.com" target="_blank" >
                            <img src={linkedln} alt="linkedin" />
                        </ButtonStyled>
                    </div>
                </div>
                <hr />

                <div className="available-cities footer-column">
                    <h2>{FooterMessages.citiesMsg}</h2>
                    {
                        FooterMessages.cities.map((city) => {
                            return (
                                <li>{city}</li>
                            )
                        })
                    }
                </div>
            </div>



            <div className="quick-links">
                <ButtonStyled customStyled href="/privacy-policy">Privacy Policy</ButtonStyled>
                <ButtonStyled customStyled href="/terms-of-service">Terms of Service</ButtonStyled>
                <ButtonStyled customStyled href="/sitemap">Sitemap</ButtonStyled>
                <ButtonStyled customStyled to='/contact'>Contact</ButtonStyled>
            </div>



            <hr />


            <div className="copyright-tag">
                <p>&#169; 2024 {GreetMessages.company_contact_details.companyName}</p>
            </div>
        </div>
    );
};


export default Footer;