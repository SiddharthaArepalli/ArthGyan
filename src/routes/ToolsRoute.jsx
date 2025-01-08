import React from 'react';
import ToolsCard from '../components/ToolsComponents/ToolsCard.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styling/ToolsRoute.css'
import  compare_mf from '../assets/toolImages/compare-mf.svg'
import  fd from "../assets/toolImages/fd.svg"
import mf_cal from "../assets/toolImages/mf-calculator.svg"
import sip_cal from "../assets/toolImages/sip-calculator.svg"

export default function ToolsRoute() {
    return (
        <div className="tools-page">
            <Navbar />
            <div className="tools-container">
                <ToolsCard
                    toolTitle="SIP calculator"
                    toolDesc="A SIP calculator estimates future investment value using monthly contributions."
                    toolImg={sip_cal}
                    toolId="1"
                />
                <ToolsCard
                    toolTitle="FD Calculator"
                    toolDesc="An FD calculator computes future value of fixed deposit investments easily."
                    toolImg={fd}
                    toolId="2"
                />
                <ToolsCard
                    toolTitle="Mutual Funds Calculator"
                    toolDesc="It aids in financial planning by providing insights into the growth of mutual fund investments over time."
                    toolImg={mf_cal}
                    toolId="3"
                />
                <ToolsCard
                    toolTitle="Compare Mutual Funds"
                    toolDesc="This tool aids in making investment decisions between growth and returns between the two plans."
                    toolImg={compare_mf}
                    toolId="4"
                />
                {/* <ToolsCard
                    toolTitle="Awesome Calculator 5"
                    toolDesc="This is the fifth awesome calculator, and it can do superb things!"
                    toolImg="path/to/your/image5.jpg"
                    toolId="5"
                />
                <ToolsCard
                    toolTitle="Awesome Calculator 6"
                    toolDesc="This is the sixth awesome calculator, and it can do extraordinary things!"
                    toolImg="path/to/your/image6.jpg"
                    toolId="6"
                /> */}
            </div>
            <Footer />
        </div>
    );
}
