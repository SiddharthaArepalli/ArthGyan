import React from 'react';
import ToolsCard from '../components/ToolsComponents/ToolsCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styling/ToolsRoute.css'

export default function ToolsRoute() {
    return (
        <div className="tools-page">
            <Navbar />
            <div className="tools-container">
                <ToolsCard
                    toolTitle="Awesome Calculator 1"
                    toolDesc="This is the first awesome calculator, and it can do amazing things!"
                    toolImg="path/to/your/image1.jpg"
                    toolId="1"
                />
                <ToolsCard
                    toolTitle="Awesome Calculator 2"
                    toolDesc="This is the second awesome calculator, and it can do even more amazing things!"
                    toolImg="path/to/your/image2.jpg"
                    toolId="2"
                />
                <ToolsCard
                    toolTitle="Awesome Calculator 3"
                    toolDesc="This is the third awesome calculator, and it can do incredible things!"
                    toolImg="path/to/your/image3.jpg"
                    toolId="3"
                />
                <ToolsCard
                    toolTitle="Awesome Calculator 4"
                    toolDesc="This is the fourth awesome calculator, and it can do fantastic things!"
                    toolImg="path/to/your/image4.jpg"
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
