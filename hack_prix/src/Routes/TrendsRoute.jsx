import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinlogixSymbolInfoWidget from '../components/TrendsComponents/FinlogixSymbolInfoWidget.jsx'
import FinlogixWidget from '../components/TrendsComponents/FinlogixWidget.jsx'
import '../styling/TrendsRoute.css'
import TradingViewWidget from '../components/TrendsComponents/TradingViewWidget.jsx'

const TrendsRoute = () => {
  return (
  
   <div className="contain">
    <FinlogixWidget></FinlogixWidget>
   <Navbar></Navbar>
   <FinlogixSymbolInfoWidget></FinlogixSymbolInfoWidget>
   <TradingViewWidget></TradingViewWidget>
   <Footer></Footer>
   </div>
  
  )
}

export default TrendsRoute
