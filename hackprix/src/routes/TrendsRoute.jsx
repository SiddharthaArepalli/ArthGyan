import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinlogixSymbolInfoWidget from '../components/TrendsComponents/FinlogixSymbolInfoWidget.jsx'
import FinlogixWidget from '../components/TrendsComponents/FinlogixWidget.jsx'
import '../styling/TrendsRoute.css'
import TradingViewWidget from '../components/TrendsComponents/TradingViewWidget.jsx'
import TopStoriesWidget from '../components/TrendsComponents/TopStoriesWidget.jsx'
import EconomicCalenderWidget from '../components/TrendsComponents/EconomicCalenderWidget.jsx'

const TrendsRoute = () => {
  return (
  
   <div className="contain">
   <Navbar></Navbar>
   <FinlogixSymbolInfoWidget></FinlogixSymbolInfoWidget>
    <FinlogixWidget></FinlogixWidget>
   <TradingViewWidget></TradingViewWidget>
   <TopStoriesWidget></TopStoriesWidget>
   <EconomicCalenderWidget></EconomicCalenderWidget>
   <Footer></Footer>
   </div>
  )
}

export default TrendsRoute
