import React from "react";
import GreetMessages from "../Messages/GreetMessages";
import Email from './../../images/email.png';
import address from './../..//images/location.png';
import phone from './../../images/phone.png'
const Contact = (props) => {
    return(

        <div className={props.className}>
            <h1>CONTACT US</h1>
            <div className="contacts">
             <div className="information-from-user">
                <h1>Online Enquiry</h1>
                 <input type="text" placeholder="Enter Your Name"/>

                 <input type="text" placeholder="Enter Your Email"/>

                 <input type="text" placeholder="Enter Mobile Number"/>
             
                 <input type="button" placeholder="SUBMIT" value="SUBMIT"/>
             </div>

             <div className="contact-details">
                <h1>Contact Details</h1>
                 <h2>{GreetMessages.company_contact_details.companyName}</h2>
 
                 <img src={Email} alt="EmailIcon" className="Icon"/>
                 <h2>{GreetMessages.company_contact_details.EmailId}</h2>

                 <img src={phone} alt="mobileIcon" className="Icon"/>
                 <h2>{GreetMessages.company_contact_details.MobileNO}</h2>

                 <img src={address} alt="addressIcon" className="Icon"/>
                 <h2>{GreetMessages.company_contact_details.address}</h2>
             </div>
             </div>
        </div>
    )
}

export default Contact;