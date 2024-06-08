import "../styling/Homepage.css"
import Navbar from "../components/Navbar"
import icon from "../assets/box.png"
import Footer from "../components/Footer"
export default function HomeRoute() {
    return (
        <div className="Home">
            <Navbar />
            <div className="p1-content">
                <h1 >
                    Empower Your <span className="special-color">Financial Journey</span> with ArthGyan
                </h1>
                <p>
                    Discover the world of finance and enhance your financial literacy with our AI-powered chatbot, insightful finance blogs, latest market trends, SIP calculator, and engaging finance quiz.
                </p>
                <div className="btn-cont">
                    <button className="btn-cont-1">Get Started</button>
                    <button className="btn-cont-2">Learn More</button>
                </div>
            </div>
            <div className="p2-content">
                <h1>Unlock Your Financial Potential</h1>
                <h1 className="change-h1">with <span className="special-color">ArthGyan</span></h1>
                <p>
                    FinVeda provides personalised financial advice, up-to-date market trends, and interactive tools to help you learn finance with finesse. Whether you're a beginner or an expert, our AI Chatbot, Finance Blogs, Market Trends, SIP Calculator, and Finance Quiz have got you covered.
                </p>
                <div className="cards">
                    <div className="upto-card card" >
                        <img src={icon} alt="" />
                        <h3>Up-to-Date Market </h3>
                        <h3 className="change-h3">Trends</h3>
                    </div>
                    <div className="person-card card">
                    <img src={icon} alt="" />
                        <h3>Personalised Financial</h3>
                        <h3 className="change-h3">Advice</h3>
                    </div>
                    <div className="interactive-card card">
                        <img src={icon} alt="" />
                        <h3>Interactive Financial </h3>
                        <h3 className="change-h3">Tools</h3>
                        
                    </div>
                </div>
                <div className="btn-cont">
                    <button className="btn-cont-1">Get Started</button>
                    <button className="btn-cont-2">Learn More</button>
                </div>


            </div>
            <Footer/>
        </div>
    )
}