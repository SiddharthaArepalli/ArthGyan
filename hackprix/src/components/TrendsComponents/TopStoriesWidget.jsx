import React, { useEffect } from 'react';

const TopStoriesWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;

    // Set the script text to initialize the widget with the given configuration
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: false,
      displayMode: 'regular',
      width: 400,
      height: 550,
      colorTheme: 'dark',
      locale: 'en',
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

export default TopStoriesWidget;