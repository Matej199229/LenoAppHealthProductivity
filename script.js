document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    
    // Add toggle functionality on hamburger menu
    toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    })

    // Video Modal
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.model__close-button');
    const videoPlayer = document.getElementById('videoPlayer');

    // Add click functionality on play button
    videoButton.addEventListener('click', function () {
      // Show modal
      modal.style.display = 'block';

      // Replace src attribute with video URL
      videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

      // Close modal on close button click
      closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        videoPlayer.src = '';
      })

      // Close modal on outer click
      window.addEventListener('click', function (event) {
        if (event.target == modal) { 
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
      })

    });

  });


  // Change bg color on navbar when scrolling down the page
  const navbar = document.querySelector('.navbar');
  function togglenavbarTransparency() {
    if (window.scrollY > 0) {
      navbar.classList.add('navbar--scroll');
    } else {
      navbar.classList.remove('navbar--scroll');
    }
  }

  window.addEventListener('scroll', togglenavbarTransparency);

  // Can also write the same code the following way

  // window.addEventListener('scroll', function () {
  //   const navbar = document.querySelector('.navbar');
  
  //   if (window.scrollY > 0) {
  //     navbar.classList.add('navbar-scroll');
  //   } else {
  //     navbar.classList.remove('navbar-scroll');
  //   }
  // });