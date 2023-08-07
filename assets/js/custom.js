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


   
  var $slider_ini = $(".Advance-Slider");
  var total_slide = 0;
  $slider_ini.on("init", function(event, slick ,  currentSlide, nextSlide){
      $('button.slick-arrow').append('<div class="thumb"></div>');
      total_slide = slick.slideCount;
      // console.log(total_slide);
      next_img = $(slick.$slides[1]).find('img').attr('src'); 
      prev_img = $(slick.$slides[total_slide - 1]).find('img').attr('src'); 
      $('button.slick-next .thumb').append('<img src="'+next_img+'">');
      $('button.slick-prev .thumb').append('<img src="'+prev_img+'">');
      
  });
  $slider_ini.slick({
      autoplay:true,
      autoplaySpeed:5000,
      speed:1000,
      loop:true,
      fade: true,
      slidesToShow:1,
      slidesToScroll:1,
      dots:true,
      pauseOnHover:false,
      infinite:true,
      customPaging: function(slider, i) {
          var thumb = $(slider.$slides[i]).find('.dots-img').attr('src');
          console.log(thumb);
          return '<button><div class="mextrix"><a><img src="'+thumb+'"></a></div></button>';

      }
    });


  

  $( "button.slick-arrow , .Advance-Slider ul.slick-dots li button" ).hover(function() {
      $( this ).addClass( "hover-in" );
      $( this ).removeClass( "hover-out" );
    }, function() {
      $( this ).removeClass( "hover-in" );
      $( this ).addClass( "hover-out" );
    }
  );


 

  $slider_ini.on('afterChange', function (event, slick, currentSlide) {
      console.log('afterChange: '+ currentSlide);

      prev_img = $(slick.$slides[currentSlide - 1]).find('img').attr('src'); 
      next_img = $(slick.$slides[currentSlide + 1]).find('img').attr('src'); 

      if (currentSlide == total_slide) {
        prev_img = $(currentSlide - 1).find('img').attr('src');           
      }

      if (currentSlide == 0) {
        console.log('if call');
        prev_img = $(slick.$slides[total_slide - 1]).find('img').attr('src'); 
      }

      if (currentSlide == total_slide - 1) {
        next_img = $(slick.$slides[0]).find('img').attr('src');         
      }
      
      $('button.slick-arrow ').find('img').remove();

      $('button.slick-next .thumb').append('<img src="'+next_img+'">');
      $('button.slick-prev .thumb').append('<img src="'+prev_img+'">');
      
  });

