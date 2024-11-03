import React from 'react';
import AboutMessage from './../Messages/GreetMessages';
import BreadcumbStyled from '../../CommonComponents/Breadcumb/Breadcumb.Styled';
const About = (props) => {
    return (
        <div className={props.className}>
            <div className='aboutpage-top-data'>
                <BreadcumbStyled />
                <div className='about-page-heading'>
                    {AboutMessage.About_Page_heading.heading}
                </div>
            </div>
            {AboutMessage.About_page_messages.map((data, index) => (
                <div className="about-section" key={data.id}>
                    <h1 className="about-title">{data.title}</h1>
                    <div className={`about-section-data ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                        <img src={data.img} alt={data.title} className="about-image" />
                        <p className="about-message">{data.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default About;
