import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonStyled from '../Button.Styled';
function Breadcrumb(props) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className={props.className} style={{ margin: '10px 0', fontSize: '16px' }}>
            <ButtonStyled customStyled to="/">Home</ButtonStyled>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                
                return (
                    <ButtonStyled customStyled key={to}>
                        {" > "}
                        {isLast ? (
                            <span className='active-page'>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                        ) : (
                            <ButtonStyled customStyled to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</ButtonStyled>
                        )}
                    </ButtonStyled>
                );
            })}
        </div>
    );
}

export default Breadcrumb;
