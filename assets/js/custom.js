 (function () {
        window.onload = function () {
          const preloader = document.querySelector('.page-loading');
          preloader.classList.remove('active');
          setTimeout(function () {
            preloader.remove();
          }, 1500);
        };
      })();

      
    
    // var $slider_ini = $(".Advance-Slider");
    // var total_slide = 0;
    // $slider_ini.on("init", function(event, slick ,  currentSlide, nextSlide){
    //     $('button.slick-arrow').append('<div class="thumb"></div>');
    //     total_slide = slick.slideCount;
    //     console.log(total_slide);
    //     next_img = $(slick.$slides[1]).find('img').attr('src'); 
    //     prev_img = $(slick.$slides[total_slide - 1]).find('img').attr('src'); 
    //     $('button.slick-next .thumb').append('<img src="'+next_img+'">');
    //     $('button.slick-prev .thumb').append('<img src="'+prev_img+'">');
        
    // });
    // $slider_ini.slick({
    //     autoplay:true,
    //     autoplaySpeed:4000,
    //     speed:1000,
    //     slidesToShow:1,
    //     slidesToScroll:1,
    //     dots:true,
    //     pauseOnHover:false,
    //     infinite:true,
    //     loop:true,
    //     customPaging: function(slider, i) {
    //         var thumb = $(slider.$slides[i]).find('.dots-img').attr('src');
    //         console.log(thumb);
    //         return '<button><div class="mextrix"><a><img src="'+thumb+'"></a></div></button>';

    //     }
    //   });


    

    // $( "button.slick-arrow , .Advance-Slider ul.slick-dots li button" ).hover(function() {
    //     $( this ).addClass( "hover-in" );
    //     $( this ).removeClass( "hover-out" );
    //   }, function() {
    //     $( this ).removeClass( "hover-in" );
    //     $( this ).addClass( "hover-out" );
    //   }
    // );


   

    // $slider_ini.on('afterChange', function (event, slick, currentSlide) {
    //     console.log('afterChange: '+ currentSlide);

    //     prev_img = $(slick.$slides[currentSlide - 1]).find('img').attr('src'); 
    //     next_img = $(slick.$slides[currentSlide + 1]).find('img').attr('src'); 

    //     if (currentSlide == total_slide) {
    //       prev_img = $(currentSlide - 1).find('img').attr('src');           
    //     }

    //     if (currentSlide == 0) {
    //       console.log('if call');
    //       prev_img = $(slick.$slides[total_slide - 1]).find('img').attr('src'); 
    //     }

    //     if (currentSlide == total_slide - 1) {
    //       next_img = $(slick.$slides[0]).find('img').attr('src');         
    //     }
        
    //     $('button.slick-arrow ').find('img').remove();

    //     $('button.slick-next .thumb').append('<img src="'+next_img+'">');
    //     $('button.slick-prev .thumb').append('<img src="'+prev_img+'">');
        
    // });






    /*revolution slider js start*/

    function setREVStartSize(e) {
			//window.requestAnimationFrame(function() {				 
			window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
			window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
			try {
				var pw = document.getElementById(e.c).parentNode.offsetWidth,
					newh;
				pw = pw === 0 || isNaN(pw) ? window.RSIW : pw;
				e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
				e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
				e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
				e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
				e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
				e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
				e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
				if (e.layout === "fullscreen" || e.l === "fullscreen")
					newh = Math.max(e.mh, window.RSIH);
				else {
					e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
					for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
					e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
					e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
					for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

					var nl = new Array(e.rl.length),
						ix = 0,
						sl;
					e.tabw = e.tabhide >= pw ? 0 : e.tabw;
					e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
					e.tabh = e.tabhide >= pw ? 0 : e.tabh;
					e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
					for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
					sl = nl[0];
					for (var i in nl) if (sl > nl[i] && nl[i] > 0) { sl = nl[i]; ix = i; }
					var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
					newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
				}
				if (window.rs_init_css === undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));
				document.getElementById(e.c).height = newh + "px";
				window.rs_init_css.innerHTML += "#" + e.c + "_wrapper { height: " + newh + "px }";
			} catch (e) {
				console.log("Failure at Presize of Slider:" + e)
			}
			//});
		};


    setREVStartSize({ c: 'rev_slider_1_1', rl: [1240, 1024, 778, 480], el: [800, 720, 690, 650], gw: [1240, 1024, 778, 480], gh: [800, 720, 690, 650], type: 'standard', justify: '', layout: 'fullwidth', mh: "0" });
					var revapi1,
						tpj;
					function revinit_revslider11() {
						jQuery(function () {
							tpj = jQuery;
							revapi1 = tpj("#rev_slider_1_1");
							if (revapi1 == undefined || revapi1.revolution == undefined) {
								revslider_showDoubleJqueryError("rev_slider_1_1");
							} else {
								revapi1.revolution({
									sliderLayout: "fullwidth",
									visibilityLevels: "1240,1024,778,480",
									gridwidth: "1240,1024,778,480",
									gridheight: "800,720,690,650",
									perspective: 600,
									perspectiveType: "global",
									editorheight: "800,720,690,650",
									responsiveLevels: "1240,1024,778,480",
									progressBar: { disableProgressBar: true },
									navigation: {
										onHoverStop: false,
										touch: {
											touchenabled: true
										},
										arrows: {
											enable: true,
											tmp: "<div class=\"tp-arr-allwrapper\">	<div class=\"tp-arr-imgholder\"></div>	<div class=\"tp-arr-titleholder\">{{title}}</div>	</div>",
											style: "hermes",
											hide_onmobile: true,
											hide_under: "480px",
											left: {
												h_offset: 30
											},
											right: {
												h_offset: 30
											}
										},
										bullets: {
											enable: true,
											tmp: "",
											style: "hermes"
										}
									},
									parallax: {
										levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
										type: "scroll",
										origo: "slidercenter",
										speed: 0
									},
									fallbacks: {
										allowHTML5AutoPlayOnAndroid: true
									},
								});
							}

						});
					} // End of RevInitScript
					if (document.readyState === "loading") window.addEventListener('DOMContentLoaded', function () { revinit_revslider11(); }); else revinit_revslider11();

          var htmlDivCss = '	#rev_slider_7_1_wrapper rs-loader.spinner4 div { background-color: #03565a !important; } ';
					var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
					if (htmlDiv) {
						htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
					} else {
						var htmlDiv = document.createElement('div');
						htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
						document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
					}
    /*revolution slider js end*/