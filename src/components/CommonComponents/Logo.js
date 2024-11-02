import React from 'react';
import svgLogo from './../images/svgLogo.png';

const Logo = (props) => {
    const style = {
        width: '110px',
        height: '110px',
        borderradius: '50%'
    }
return(
    <div >
     <img style={style} src={svgLogo} alt="svy" />
    </div>
)
}

export default Logo;