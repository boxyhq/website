import React, { useEffect, useState } from 'react';

function ToggleImages() {
  
// Define a state variable to track the user's login status
const [currentTheme, setcurrentTheme] = useState(localStorage.getItem('theme'));

// Add an event listener for the 'storage' event inside a useEffect
useEffect(() => {
  const handleStorageChange = (event) => {
    console.log('Storage event detected:', event);

    // Check the changed key and update the state accordingly
    console.log("event", event.key)
    if (event.key === 'theme') {
      setcurrentTheme(event.newValue);
    }
  };

  window.addEventListener('storage', handleStorageChange);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, []); // The empty dependency array ensures that this effect runs once when the component mounts



  return (
    <div className="image-container">
      {currentTheme == 'light'? (
        <img
        id="light-mode-image"
        src="/img/blog/boxyhq-banner-light-bg.png"
        alt="Light Mode Image"
        ></img>
      ):(
        <img
        id="dark-mode-image"
        src="/img/blog/boxyhq-banner-dark-bg.png"
        alt="Dark Mode Image"
        ></img>
      )}
    </div>
  );
}

export default ToggleImages;