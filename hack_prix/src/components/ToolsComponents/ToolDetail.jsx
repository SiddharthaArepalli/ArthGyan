import React from 'react';
import { useParams } from 'react-router-dom';

const ToolDetail = () => {
    const { toolId } = useParams();

    if (toolId === '1') {
        return (
            <div className="tool-detail">
                <div className="tool-img" style={{ backgroundImage: `url(path/to/your/image1.jpg)` }}></div>
                <h1>Awesome Calculator 1</h1>
                <p>This is the first awesome calculator, and it can do amazing things!</p>
            </div>
        );
    } else if (toolId === '2') {
        return (
            <div className="tool-detail">
                <div className="tool-img" style={{ backgroundImage: `url(path/to/your/image2.jpg)` }}></div>
                <h1>Awesome Calculator 2</h1>
                <p>This is the second awesome calculator, and it can do even more amazing things!</p>
            </div>
        );
    } else if (toolId === '3') {
        return (
            <div className="tool-detail">
                <div className="tool-img" style={{ backgroundImage: `url(path/to/your/image3.jpg)` }}></div>
                <h1>Awesome Calculator 3</h1>
                <p>This is the third awesome calculator, and it can do incredible things!</p>
            </div>
        );
    } else if (toolId === '4') {
        return (
            <div className="tool-detail">
                <div className="tool-img" style={{ backgroundImage: `url(path/to/your/image4.jpg)` }}></div>
                <h1>Awesome Calculator 4</h1>
                <p>This is the fourth awesome calculator, and it can do fantastic things!</p>
            </div>
        );
    } else if (toolId === '5') {
        return (
            <div className="tool-detail">
                <div className="tool-img" style={{ backgroundImage: `url(path/to/your/image5.jpg)` }}></div>
                <h1>Awesome Calculator 5</h1>
                <p>This is the fifth awesome calculator, and it can do superb things!</p>
            </div>
        );
    } else if (toolId === '6') {
        return (
            <div className="tool-detail">
                <div className="tool-img" style={{ backgroundImage: `url(path/to/your/image6.jpg)` }}></div>
                <h1>Awesome Calculator 6</h1>
                <p>This is the sixth awesome calculator, and it can do extraordinary things!</p>
            </div>
        );
    } else {
        return (
            <div className="tool-detail">
                <div className="tool-img" style={{ backgroundImage: `url(path/to/default/image.jpg)` }}></div>
                <h1>Unknown Tool</h1>
                <p>The tool you are looking for does not exist.</p>
            </div>
        );
    }
};

export default ToolDetail;
