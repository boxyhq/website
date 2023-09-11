import React, { useEffect, useState } from 'react';

function ToggleImages() {
    
    const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    function darkLight() {
      const lightModeImage = document.getElementById('light-mode-image');
      const darkModeImage = document.getElementById('dark-mode-image');
      
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log("dark", prefersDarkMode)

      if (prefersDarkMode) {
        lightModeImage.style.display = 'none';
        darkModeImage.style.display = 'block';
      } else {
        lightModeImage.style.display = 'block';
        darkModeImage.style.display = 'none';
      }
    

    // Call the function to set initial image based on user preference
    setIsDark(prefersDarkMode)
    }
    darkLight();

    // Listen for changes in color scheme preference and update the images accordingly
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkLight);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', darkLight);
    };
  }, [isDark]); // Empty dependency array ensures that this effect runs only once

  return (
    <div className="image-container">
        <img
        id="light-mode-image"
        src="/img/blog/boxyhq-banner-white-bg.png"
        alt="Light Mode Image"
        ></img>
        <img
        id="dark-mode-image"
        src="/img/blog/boxyhq-banner-black-bg.png"
        alt="Dark Mode Image"
        ></img>
    </div>
  );
}

export default ToggleImages;
