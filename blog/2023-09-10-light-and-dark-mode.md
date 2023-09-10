---
slug: light-and-dark-mode
title: 'Light and Dark Mode'
tags_disabled:
  [
    developer,
    security,
    cybersecurity,
    devsecops,
    open-source,
    developerfirst,
    case-study,
  ]
image: /img/blog/light-dark.png
author: Nathan Tarbert
author_title: Community Success Engineer @BoxyHQ
author_url: https://github.com/NathanTarbert
author_image_url: https://boxyhq.com/img/team/nathan.jpg
---

Hello!

<div class="image-container">
  <img id="light-mode-image" src="/img/blog/boxyhq-banner-white-bg.png" alt="Light Mode Image"></img>
  <img id="dark-mode-image" src="/img/blog/boxyhq-banner-black-bg.png" alt="Dark Mode Image"></img>
</div>

<script>
  // Function to check and toggle between light and dark mode images
  function toggleImages() {
    const lightModeImage = document.getElementById('light-mode-image');
    const darkModeImage = document.getElementById('dark-mode-image');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
      lightModeImage.style.display = 'none';
      darkModeImage.style.display = 'block';
    } else {
      lightModeImage.style.display = 'block';
      darkModeImage.style.display = 'none';
    }
  }

  // Call the function to set initial image based on user preference
  toggleImages();

  // Listen for changes in color scheme preference and update the images accordingly
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleImages);
</script>

Blog words...
