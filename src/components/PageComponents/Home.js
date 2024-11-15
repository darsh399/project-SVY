import React, { useState } from "react"
import GreetMessages from "./Messages/GreetMessages";
import WhyChooseUsMessage from "./Messages/WhyChooseUs";
import FrequentlyAsked from "./Messages/FrequentlyQuestions";
import image1 from './../images/partners/capsoft.jpeg';
import image2 from './../images/partners/Livwell.jpeg';
import image3 from './../images/partners/NID.jpeg';
import image4 from './../images/partners/NULITE.jpeg';
import image5 from './../images/partners/Royal_Nutricare.jpeg';

const images = [image1, image2, image3, image4, image5];
const Home = (props) => {
    const [isExpansedMessageId, setExpandedMessageId] = useState(null);
    const trunCateMessages = (text, limit, isExpansedMessageId) => {
        const words = text.split(" ");
        return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
    }

    const seeFullMessage = (id) => {
        setExpandedMessageId((prevId) => (prevId === id ? 'null' : id))
    }

    return (
        <div className={props.className}>
            <div className="home-page-topdata">
                <div>
                    <h1 className="greeting-message">{GreetMessages.home_page_greets.headLine}</h1>
                </div>
            </div>

            <div className="home-page-content">
                {
                    GreetMessages.About_company_message.map((data) => {
                        const isExpanded = isExpansedMessageId === data.id;
                        return (
                            <div key={data.id} className="home-page-messages">
                                <h1>{data.title}</h1>
                                <h2>{isExpanded ? data.text : trunCateMessages(data.text, 25)}</h2>
                                <button onClick={() => seeFullMessage(data.id)}>{isExpanded ? "Read Less" : "Read More"}</button>
                            </div>
                        )
                    })
                }
            </div>

            <div className="why-choose-us-container">
                <h1>Why Choose Us</h1>
                {
                    WhyChooseUsMessage.map((data) => {
                        return (

                            <ul>
                                <li><b>{data}</b></li>
                            </ul>
                        )
                    })
                }

            </div>

            <div className="frequently-question-container">
                <h1>Frequenty Asked Questions</h1>
                {
                    FrequentlyAsked.map((data) => {
                        return (
                            <div key={data.id}>
                                <h2>{data.question}</h2>
                                <p>{data.answer}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="homepage-partners">
                <h1>OUR PARTNERS</h1>
                {
                    images.map((image, index) => {
                        return (
                            <img className="partner-logo" key={index}
                                src={image} alt={`image-${index}`}></img>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home;