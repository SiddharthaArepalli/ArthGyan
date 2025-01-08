import React, { useEffect } from 'react';

const FinlogixSymbolInfoWidget = () => {
  useEffect(() => {
    // Create a script element to load the Finlogix widget script
    const script = document.createElement('script');
    script.src = 'https://widget.finlogix.com/Widget.js';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Initialize the widget once the script has loaded
    script.onload = () => {
      if (window.Widget) {
        window.Widget.init({
          widgetId: '11e574ba-bfd4-46ec-b331-3d666b0f7633',
          type: 'SymbolInfo',
          language: 'en',
          symbolId: 10007,
          symbolName: 'Apple'
        });
      }
    };

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="finlogix-container"></div>;
};

export default FinlogixSymbolInfoWidget;
