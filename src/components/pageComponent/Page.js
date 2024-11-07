import React from 'react';
import HeaderStyled from '../header/Header.Styled';
import FooterStyled from '../footer/Footer.Styled';
import { Outlet } from 'react-router-dom';
const Page = () => {
    return(
        <div>
           <HeaderStyled/>
           <Outlet/>
           <FooterStyled/>
        </div>
    )
}

export default Page;