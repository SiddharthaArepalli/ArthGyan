import React, { useEffect } from 'react';

const EconomicCalenderWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;

    // Set the script text to initialize the widget with the given configuration
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      isTransparent: false,
      width: '400',
      height: '550',
      locale: 'en',
      importanceFilter: '-1,0,1',
      countryFilter: 'ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu',
    });

    // Append the script to the document
    const container = document.querySelector('.tradingview-widget-container .tradingview-widget-containerwidget');
    if (container) {
      container.appendChild(script);
    }

    // Clean up by removing the script when the component unmounts
    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-containerwidget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default EconomicCalenderWidget;