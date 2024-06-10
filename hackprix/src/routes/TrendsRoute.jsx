import React from 'react'
import "../styling/TrendsRoute.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinlogixSymbolInfoWidget from '../components/TrendsComponents/FinlogixSymbolInfoWidget.jsx'
import FinlogixWidget from '../components/TrendsComponents/FinlogixWidget.jsx'
import '../styling/TrendsRoute.css'
import TradingViewChart from '../components/TrendsComponents/TradingViewChart.jsx'
import TopStoriesWidget from '../components/TrendsComponents/TopStoriesWidget.jsx'
// import EconomicCalenderWidget from '../components/TrendsComponents/EconomicCalenderWidget.jsx'
import TradingViewWidget from '../components/TrendsComponents/TradingViewWidget.jsx'

const TrendsRoute = () => {
  return (<>
    <Navbar></Navbar>
    <div className="contain">
      <FinlogixSymbolInfoWidget className='FinlogixSymbolInfoWidget'></FinlogixSymbolInfoWidget>
      <FinlogixWidget  ></FinlogixWidget>
      <div className="inner-contain">
        <div className="inner-container-1">
          <div className="inner-container-1-content">
          <h1>Learn real time <span className='special-color'>Cypto Currency</span> value</h1>
          <p>Introducing CryptoWatch, a sleek widget that displays real-time cryptocurrency values, helping you stay updated with the latest market trends at a glance.</p>
          </div>
          <TradingViewWidget ></TradingViewWidget>
        </div>
        <div className="inner-container-2">
          <div className="inner-container-2-content">
          <h1>Learn <span className='special-color'>Top News</span> informatics</h1>
          <p>Introducing FinNewsWidget, your dynamic portal to the financial world, delivering the latest news updates straight to your screen, keeping you informed and ahead in the fast-paced realm of finance.</p>
          </div>
          <TopStoriesWidget></TopStoriesWidget>
        </div>
        <div className="inner-container-3">
          <div className="inner-container-3-content">
          <h1>Learn <span className='special-color'>Latest News</span> </h1>
          <p>Introducing CryptoWatch, a sleek widget that displays real-time cryptocurrency values, helping you stay updated with the latest market trends at a glance.</p>
          </div>
            <TradingViewChart></TradingViewChart>
        </div>


      
        
      </div>
    </div>
    <Footer></Footer>
  </>


  )
}

export default TrendsRoute
