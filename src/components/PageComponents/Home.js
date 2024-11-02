import React,{useState} from "react"
import GreetMessages from "./Messages/GreetMessages";
import WhyChooseUsMessage from "./Messages/WhyChooseUs";
import FrequentlyAsked from "./Messages/FrequentlyQuestions";
import question from './../images/questionmark.jpg'

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
                    <h2 className="greet">{GreetMessages.home_page_greets.greet}</h2>
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
                   WhyChooseUsMessage.map((data) =>{
                        return(
                            
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
                        return(
                            <div key={data.id}>
                                 <h2>{data.question}</h2>
                                 <p>{data.answer}</p>
                            </div>
                        )
                    })
                   }
            </div>

        </div>
    )
}

export default Home;