import React from "react";
import { useParams } from "react-router-dom";
import SipCalculator from "../calculators/SipCalculator";
import FdCalculator from "../calculators/FdCalculator";
import MutualFundsCalculator from "../calculators/MutualFundsCalculator";
import CompareMutualFunds from "../calculators/CompareMutualFunds";
// import SipCalculator from '../calculators/SipCalculator';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const ToolDetail = () => {
  const { toolId } = useParams();

  if (toolId === "1") {
    return (
      <div className="tool-detail">
        <Navbar></Navbar>
        <SipCalculator></SipCalculator>
        <Footer></Footer>
      </div>
    );
  } else if (toolId === "2") {
    return (
      <div className="tool-detail">
        <Navbar></Navbar>
        <FdCalculator></FdCalculator>
        <Footer></Footer>
      </div>
    );
  } else if (toolId === "3") {
    return (
        <div className="tool-detail">
        <Navbar></Navbar>
        <MutualFundsCalculator></MutualFundsCalculator>
        <Footer></Footer>
      </div>
    );
  } else if (toolId === "4") {
    return (
        <div className="tool-detail">
        <Navbar></Navbar>
        {/* <MutualFundsCalculator></MutualFundsCalculator> */}
        <CompareMutualFunds></CompareMutualFunds>
        <Footer></Footer>
      </div>
    );
  } else if (toolId === "5") {
    return (
      <div className="tool-detail">
        <div
          className="tool-img"
          style={{ backgroundImage: `url(path/to/your/image5.jpg)` }}
        ></div>
        <h1>Awesome Calculator 5</h1>
      </div>
    );
  } else if (toolId === "6") {
    return (
      <div className="tool-detail">
        <div
          className="tool-img"
          style={{ backgroundImage: `url(path/to/your/image6.jpg)` }}
        ></div>
        <h1>Awesome Calculator 6</h1>
        <p>
          This is the sixth awesome calculator, and it can do extraordinary
          things!
        </p>
      </div>
    );
  } else {
    return (
      <div className="tool-detail">
        <div
          className="tool-img"
          style={{ backgroundImage: `url(path/to/default/image.jpg)` }}
        ></div>
        <h1>Unknown Tool</h1>
        <p>The tool you are looking for does not exist.</p>
      </div>
    );
  }
};

export default ToolDetail;
