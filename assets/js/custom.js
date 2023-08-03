 (function () {
        window.onload = function () {
          const preloader = document.querySelector('.page-loading');
          preloader.classList.remove('active');
          setTimeout(function () {
            preloader.remove();
          }, 1500);
        };
      })();

	    if ( $(window).width() <= 1279 ) { 
        $(function() { // Dropdown toggle
          $('.dropdown i').click(function() { $(this).next('.dropdown-menu').slideToggle();
          });
          
          $(document).click(function(e) 
          { 
          var target = e.target; 
          if (!$(target).is('.dropdown i') && !$(target).parents().is('.dropdown i')) 
          //{ $('.dropdown').hide(); }
            { $('.dropdown-menu').slideUp(); }
          });
          });
        }

   $(".dropdown i").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children(".dropdown-menu").stop().slideToggle(300);
    } else {
      $(this).children(".dropdown-menu").stop().slideToggle(300);
    }
  });

