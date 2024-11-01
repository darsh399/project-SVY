import React from 'react';
import HeaderStyled from '../header/Header.Styled';
import Body from '../body/Body';
import FooterStyled from '../footer/Footer.Styled';

const Page = () => {
    return(
        <div>
           <HeaderStyled/>
           <Body/>
           <FooterStyled/>
        </div>
    )
}

export default Page;