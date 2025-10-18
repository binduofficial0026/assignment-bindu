
   $(document).ready(function () {
      $('.testimonial-slider').slick({
         autoplay: true,    
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
          autoplaySpeed: 3000,     
       speed: 1000,  
        appendDots: $('.slider-controls .dots'),
        prevArrow: $('.slider-controls .prev'),
        nextArrow: $('.slider-controls .next'),
        responsive: [
          {
            breakpoint: 600, // tablets
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    });

      window.addEventListener("load", () => {
      setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.transition = "opacity 0.8s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
          document.getElementById("main-content").style.display = "block";
        }, 800);
      }, 7000);
    });