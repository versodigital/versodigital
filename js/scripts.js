!function(e){"use strict";function t(){var t=e(window).height();e(".fullscreen").children(".container").each(function(i){var a=e(this).innerHeight()+270;a>=t?e(this).parent(".fullscreen").addClass("not-overflow"):e(this).parent(".fullscreen").removeClass("not-overflow")})}e(document).ready(function(){s(e(this)),n(),i(e),r(),l(e(this)),d(e(this)),h(e(this)),u(e(this)),p(e(this)),m(e(this)),o(e(this)),f(e(this)),c(e(this))}),jQuery(window).load(function(){v(e(this)),s(e(this)),n(),w(e(this)),C(e(this)),p(e(this)),e(".section").each(function(){a(e(this))})}),jQuery(window).resize(function(){w(e(this))});var i=function(t){e(".hero-slider").flexslider({animation:"fade",direction:"horizontal",animationSpeed:1e3,animationLoop:!0,smoothHeight:!1,directionNav:!1,controlsContainer:".hero-controls",controlNav:!0,slideshow:!0,useCSS:!0,after:function(t){e("li.flex-active-slide").hasClass("dark-slider")?e(".header").addClass("white-header"):e(".header").removeClass("white-header"),e("li.flex-active-slide").hasClass("white-slider")?e(".header").addClass("black-header"):e(".header").removeClass("black-header")},start:function(t){e("li.flex-active-slide").hasClass("dark-slider")?e(".header").addClass("inverse-header"):e(".header").removeClass("inverse-header"),e("li.flex-active-slide").hasClass("white-slider")?e(".header").addClass("black-header"):e(".header").removeClass("black-header")}}),e(".flex-prev, .flex-next").on("click",function(){var t=e(this).attr("href");return e(".hero-slider").flexslider(t),!1}),e(".flexslider").flexslider({animation:"fade",controlNav:!0,useCSS:!0,directionNav:!1})},a=function(e){e.find(".animate").each(function(e){var t=jQuery(this),i=t.data("animate");t.waypoint(function(a){t.css({"-webkit-animation-delay":.1*e+"s","-moz-animation-delay":.1*e+"s","-ms-animation-delay":.1*e+"s","-o-animation-delay":.1*e+"s","animation-delay":.1*e+"s"}),t.removeClass("animate").addClass("animated "+i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){jQuery(this).removeClass(i+" animated")})},{offset:"80%",triggerOnce:!0})})},n=function(t){e.stellar({horizontalScrolling:!1,responsive:!0})},o=function(t){e(".video-background").each(function(){e(this).YTPlayer({videoURL:e(this).data("video-id"),containment:"self",showControls:!1,autoPlay:!0,loop:!0,mute:!0,startAt:0,opacity:1,addRaster:!0,quality:"default"})})},s=function(i){i.find(".fullscreen").each(function(){var i=e(this),a=function(){i.height(e(window).height()),t()};a(),e(window).resize(function(){a()})})},r=function(t){var i=function(){e(".auto-height").each(e(window).width()>991?function(){var t=e(this),i=(t.height(),t.parent().parent().height());t.css("height",i)}:function(){var t=e(this);t.css("height","auto")})};i(),e(window).resize(function(){i()})},l=function(t){t.find(".progress-bar").each(function(){var t=e(this);t.waypoint(function(e){t.css("width",t.attr("aria-valuenow")+"%")},{offset:"80%",triggerOnce:!0})})},d=function(t){e(".menu-toggle").on("click",function(){e(this).closest("header").toggleClass("menu-open"),e(this).closest("header").hasClass("menu-3")&&e(this).toggleClass("active")});var i=function(){e(window).width()<991?e(".menu").addClass("mobile-menu"):e(".menu").removeClass("mobile-menu")};i(),e(window).resize(function(){i()})},c=function(t){var i=e(".mobile-menu");i.find("li.dropdown").hover(function(){var t=e(this);t.find(">.dropdown-menu").slideDown()},function(){e(this).find(">.dropdown-menu").slideUp()})},h=function(t){e(".owl-carousel").each(function(){var t=e(this);t.owlCarousel({loop:!0,margin:0,responsiveClass:!0,responsive:{0:{items:1,nav:!0},768:{items:t.data("col-sm"),nav:!1},992:{items:t.data("col-md"),nav:!0,loop:!1},1200:{items:t.data("col-lg"),nav:!0,loop:!1}}})})},u=function(e){jQuery(function(){var e=jQuery(".section"),t=jQuery(".menu a");e.waypoint({handler:function(e){var i;i=jQuery(this),"up"===e&&(i=i.prev());var a=jQuery('.menu a[href="#'+i.attr("id")+'"]');t.removeClass("active"),a.addClass("active"),i.addClass("active-section")},offset:"35%"})}),jQuery(".menu").localScroll({offset:-60,duration:500})},f=function(t){e('a[href*=#]:not([href=#]):not([data-toggle="tab"])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);if(t=t.length?t:e("[name="+this.hash.slice(1)+"]"),t.length)return e("html,body").animate({scrollTop:t.offset().top-60},500),!1}})},v=function(t){e(".loader").css("opacity",0),setTimeout(function(){e(".loader").hide(),e("body").addClass("loaded")},600)},m=function(t){e('[data-toggle="tooltip"]').tooltip();var i;e(".nav-tabs > li > a").on("click",function(){e(this).parent("li").hasClass("active")||(i=e(".tab-content > .tab-pane").filter(e(this).attr("href")).height(),e(".tab-content").animate({height:i},function(){e(".tab-content").css("height","auto")}))});var a=e(".accordion > dd").hide();a.first().slideDown("easeOutExpo"),e(".accordion > dt > a").first().addClass("active"),e(".accordion > dt > a").on("click",function(){var t=e(this).parent().next("dd");return e(".accordion > dt > a").removeClass("active"),e(this).addClass("active"),a.not(t).slideUp("easeInExpo"),e(this).parent().next().slideDown("easeOutExpo"),!1});e(".toggle > dd").hide();e(".toggle > dt > a").on("click",function(){if(e(this).hasClass("active"))e(this).parent().next().slideUp("easeOutExpo"),e(this).removeClass("active");else{{e(this).parent().next("dd")}e(this).addClass("active"),e(this).parent().next().slideDown("easeOutExpo")}return!1})},p=function(t){e("<div class='blank-space'></div>").insertAfter("#header"),e(window).scroll(function(){window.scrollY>0&&!e(".mobile-toggle").is(":visible")?e("#header").addClass("sticky"):e("#header").removeClass("sticky")})},w=function(t){var i=e(".isotope-container");i.isotope({itemSelector:".isotope-item",layoutMode:"masonry",filter:"*",animationOptions:{duration:750,easing:"linear",queue:!1}}),e("ul.portfolio-filter a").on("click",function(){var t=e(this).attr("data-filter");return i.isotope({filter:t,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1});var a=e("ul.portfolio-filter"),n=a.find("a");n.on("click",function(){var t=e(this);if(t.hasClass("selected"))return!1;var i=t.parents("ul.portfolio-filter");i.find(".selected").removeClass("selected"),t.addClass("selected")})},C=function(t){var i=e(".isotope-fit-rows");i.isotope({layoutMode:"fitRows",itemSelector:".isotope-item"})}}(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiJCIsImZ1bGxzY3JlZW5GaXgiLCJoIiwid2luZG93IiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJlYWNoIiwiaSIsImhjIiwidGhpcyIsImlubmVySGVpZ2h0IiwicGFyZW50IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRvY3VtZW50IiwicmVhZHkiLCJmdWxsc2NyZWVuX3NlY3Rpb24iLCJwYXJhbGxheF9pbWFnZSIsImZsZXhfc2xpZGVyIiwiZml4X2hlaWdodCIsInByb2dyZXNzX2JhciIsIm1vYmlsZV9uYXYiLCJvd2xfY2Fyb3VzZWwiLCJvbmVfcGFnZV9zY3JvbGwiLCJzdGlja3lfaGVhZGVyIiwiYnNfdG9vbHRpcCIsInlvdXR1YmVfYmciLCJzY3JvbGxfZG93biIsIm1vYmlsZV90b3VjaCIsImpRdWVyeSIsImxvYWQiLCJzaXRlX2xvYWRlciIsImlzb3RvcGVfZ28iLCJpc290b3BlX2ZpdF9yb3dzIiwiYW5pbWF0ZV9zdGFydCIsInJlc2l6ZSIsIiR0aGlzIiwiZmxleHNsaWRlciIsImFuaW1hdGlvbiIsImRpcmVjdGlvbiIsImFuaW1hdGlvblNwZWVkIiwiYW5pbWF0aW9uTG9vcCIsInNtb290aEhlaWdodCIsImRpcmVjdGlvbk5hdiIsImNvbnRyb2xzQ29udGFpbmVyIiwiY29udHJvbE5hdiIsInNsaWRlc2hvdyIsInVzZUNTUyIsImFmdGVyIiwic2xpZGVyIiwiaGFzQ2xhc3MiLCJzdGFydCIsIm9uIiwiaHJlZiIsImF0dHIiLCJmaW5kIiwiJGl0ZW0iLCJkYXRhIiwid2F5cG9pbnQiLCJjc3MiLCItd2Via2l0LWFuaW1hdGlvbi1kZWxheSIsIi1tb3otYW5pbWF0aW9uLWRlbGF5IiwiLW1zLWFuaW1hdGlvbi1kZWxheSIsIi1vLWFuaW1hdGlvbi1kZWxheSIsImFuaW1hdGlvbi1kZWxheSIsIm9uZSIsIm9mZnNldCIsInRyaWdnZXJPbmNlIiwic3RlbGxhciIsImhvcml6b250YWxTY3JvbGxpbmciLCJyZXNwb25zaXZlIiwiWVRQbGF5ZXIiLCJ2aWRlb1VSTCIsImNvbnRhaW5tZW50Iiwic2hvd0NvbnRyb2xzIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZSIsInN0YXJ0QXQiLCJvcGFjaXR5IiwiYWRkUmFzdGVyIiwicXVhbGl0eSIsInJlc2l6ZV9oZWlnaHQiLCJhdXRvX2hlaWdodCIsIndpZHRoIiwiZWxlbWVudCIsInBhcmVudF9oZWlnaHQiLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJhZGRfbW1fY2xhc3MiLCIkbWVudSIsImhvdmVyIiwic2xpZGVEb3duIiwic2xpZGVVcCIsIm93bENhcm91c2VsIiwibWFyZ2luIiwicmVzcG9uc2l2ZUNsYXNzIiwiaXRlbXMiLCJuYXYiLDc2OCw5OTIsMTIwMCwic2VjdGlvbnMiLCJuYXZpZ2F0aW9uX2xpbmtzIiwiaGFuZGxlciIsImFjdGl2ZV9zZWN0aW9uIiwicHJldiIsImFjdGl2ZV9saW5rIiwibG9jYWxTY3JvbGwiLCJkdXJhdGlvbiIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJ0YXJnZXQiLCJoYXNoIiwibGVuZ3RoIiwic2xpY2UiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidG9wIiwic2V0VGltZW91dCIsImhpZGUiLCJ0b29sdGlwIiwidGFiX2hlaWdodCIsImZpbHRlciIsImFsbFBhbmVscyIsImZpcnN0IiwiY3VycmVudCIsIm5leHQiLCJub3QiLCJpbnNlcnRBZnRlciIsInNjcm9sbCIsInNjcm9sbFkiLCJpcyIsIiRjb250YWluZXIiLCJpc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsImFuaW1hdGlvbk9wdGlvbnMiLCJlYXNpbmciLCJxdWV1ZSIsInNlbGVjdG9yIiwiJG9wdGlvblNldHMiLCIkb3B0aW9uTGlua3MiLCIkb3B0aW9uU2V0IiwicGFyZW50cyJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBQUEsR0FDQSxZQXFLQSxTQUFBQyxLQUNBLEdBQUFDLEdBQUFGLEVBQUFHLFFBQUFD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QixTQUFBLGVBR0FxQixFQUFBLFNBQUFHLEdBQ0EsR0FBQW1HLEdBQUF2SSxFQUFBLG9CQUNBdUksR0FBQUMsU0FDQUUsV0FBQSxVQUNBRCxhQUFBLG9CQUlBNUciLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICAgICBmdWxsc2NyZWVuX3NlY3Rpb24oJCh0aGlzKSk7XG4gICAgICAgIHBhcmFsbGF4X2ltYWdlKCk7XG4gICAgICAgIGZsZXhfc2xpZGVyKCQpO1xuICAgICAgICBmaXhfaGVpZ2h0KCk7XG4gICAgICAgIHByb2dyZXNzX2JhcigkKHRoaXMpKTtcbiAgICAgICAgbW9iaWxlX25hdigkKHRoaXMpKTtcbiAgICAgICAgb3dsX2Nhcm91c2VsKCQodGhpcykpO1xuICAgICAgICBvbmVfcGFnZV9zY3JvbGwoJCh0aGlzKSk7XG4gICAgICAgIHN0aWNreV9oZWFkZXIoJCh0aGlzKSk7XG4gICAgICAgIGJzX3Rvb2x0aXAoJCh0aGlzKSk7XG4gICAgICAgIHlvdXR1YmVfYmcoJCh0aGlzKSk7XG4gICAgICAgIHNjcm9sbF9kb3duKCQodGhpcykpO1xuICAgICAgICBtb2JpbGVfdG91Y2goJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICAvKiBXaW5kb3cgTG9hZC9BbGwgTWVkaWEgTG9hZGVkICovXG4gICAgalF1ZXJ5KHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblxuICAgICAgICBzaXRlX2xvYWRlcigkKHRoaXMpKTtcbiAgICAgICAgZnVsbHNjcmVlbl9zZWN0aW9uKCQodGhpcykpO1xuICAgICAgICBwYXJhbGxheF9pbWFnZSgpO1xuICAgICAgICBpc290b3BlX2dvKCQodGhpcykpO1xuICAgICAgICBpc290b3BlX2ZpdF9yb3dzKCQodGhpcykpO1xuICAgICAgICBzdGlja3lfaGVhZGVyKCQodGhpcykpO1xuXG4gICAgICAgICQoJy5zZWN0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFuaW1hdGVfc3RhcnQoJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzb3RvcGVfZ28oJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICAvL1xuICAgIC8vICBGVU5DVElPTlNcbiAgICAvL1xuXG4gICAgLy8gRmxleCBzbGlkZXJcbiAgICB2YXIgZmxleF9zbGlkZXIgPSBmdW5jdGlvbigkdGhpcyl7XG4gICAgICAgICQoJy5oZXJvLXNsaWRlcicpLmZsZXhzbGlkZXIoe1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICBhbmltYXRpb25TcGVlZDogMTAwMCxcbiAgICAgICAgICAgIGFuaW1hdGlvbkxvb3A6IHRydWUsXG4gICAgICAgICAgICBzbW9vdGhIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgZGlyZWN0aW9uTmF2OiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRyb2xzQ29udGFpbmVyOiBcIi5oZXJvLWNvbnRyb2xzXCIsXG4gICAgICAgICAgICBjb250cm9sTmF2OiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzaG93OiB0cnVlLFxuICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuXG4gICAgICAgICAgICAvLyBmb3IgVHJhbnNwYXJlbnQgSGVhZGVyXG4gICAgICAgICAgICBhZnRlcjogZnVuY3Rpb24oc2xpZGVyKXtcbiAgICAgICAgICAgICAgICBpZigkKCdsaS5mbGV4LWFjdGl2ZS1zbGlkZScpLmhhc0NsYXNzKFwiZGFyay1zbGlkZXJcIikpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ3doaXRlLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCd3aGl0ZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoJCgnbGkuZmxleC1hY3RpdmUtc2xpZGUnKS5oYXNDbGFzcyhcIndoaXRlLXNsaWRlclwiKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oZWFkZXInKS5hZGRDbGFzcygnYmxhY2staGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2JsYWNrLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oc2xpZGVyKXtcbiAgICAgICAgICAgICAgICBpZigkKCdsaS5mbGV4LWFjdGl2ZS1zbGlkZScpLmhhc0NsYXNzKFwiZGFyay1zbGlkZXJcIikpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2ludmVyc2UtaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ludmVyc2UtaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCQoJ2xpLmZsZXgtYWN0aXZlLXNsaWRlJykuaGFzQ2xhc3MoXCJ3aGl0ZS1zbGlkZXJcIikpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2JsYWNrLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdibGFjay1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5mbGV4LXByZXYsIC5mbGV4LW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgICQoJy5oZXJvLXNsaWRlcicpLmZsZXhzbGlkZXIoaHJlZilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcuZmxleHNsaWRlcicpLmZsZXhzbGlkZXIoe1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcbiAgICAgICAgICAgIGNvbnRyb2xOYXY6IHRydWUsXG4gICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICBkaXJlY3Rpb25OYXY6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFuaW1hdGlvbiB3aXRoIFdheXBvaW50cy5qc1xuICAgIHZhciBhbmltYXRlX3N0YXJ0ID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICAgICAgJHRoaXMuZmluZCgnLmFuaW1hdGUnKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgIHZhciAkaXRlbSA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSAkaXRlbS5kYXRhKFwiYW5pbWF0ZVwiKTtcblxuICAgICAgICAgICAgJGl0ZW0ud2F5cG9pbnQoZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgJGl0ZW0uY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5JzogKGkgKiAwLjEpICsgXCJzXCIsXG4gICAgICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbi1kZWxheSc6IChpICogMC4xKSArIFwic1wiLFxuICAgICAgICAgICAgICAgICAgICAnLW1zLWFuaW1hdGlvbi1kZWxheSc6IChpICogMC4xKSArIFwic1wiLFxuICAgICAgICAgICAgICAgICAgICAnLW8tYW5pbWF0aW9uLWRlbGF5JzogKGkgKiAwLjEpICsgXCJzXCIsXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiAoaSAqIDAuMSkgKyBcInNcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICRpdGVtLnJlbW92ZUNsYXNzKCdhbmltYXRlJykuYWRkQ2xhc3MoJ2FuaW1hdGVkICcgKyBhbmltYXRpb24pLm9uZSgnd2Via2l0QW5pbWF0aW9uRW5kIG1vekFuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kIGFuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoYW5pbWF0aW9uICsgJyBhbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG9mZnNldDogJzgwJScsXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uY2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gIFBhcmFsbGF4IEJhY2tncm91bmQgKFN0ZWxsYXIuanMpXG4gICAgdmFyIHBhcmFsbGF4X2ltYWdlID0gZnVuY3Rpb24oJHRoaXMpe1xuICAgICAgICAkLnN0ZWxsYXIoe1xuICAgICAgICAgICAgaG9yaXpvbnRhbFNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBZb3V0dWJlIFZpZGVvIEJhY2tncm91bmRcbiAgICB2YXIgeW91dHViZV9iZyA9IGZ1bmN0aW9uKCR0aGlzKXtcbiAgICAgICAgJCgnLnZpZGVvLWJhY2tncm91bmQnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLllUUGxheWVyKHtcbiAgICAgICAgICAgICAgICB2aWRlb1VSTDogJCh0aGlzKS5kYXRhKCd2aWRlby1pZCcpLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OidzZWxmJyxcbiAgICAgICAgICAgICAgICBzaG93Q29udHJvbHM6ZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXk6dHJ1ZSxcbiAgICAgICAgICAgICAgICBsb29wOnRydWUsXG4gICAgICAgICAgICAgICAgbXV0ZTp0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXJ0QXQ6MCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgICAgYWRkUmFzdGVyOnRydWUsXG4gICAgICAgICAgICAgICAgcXVhbGl0eTonZGVmYXVsdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGdWxsc2NyZWVuIFNlY3Rpb25cbiAgICB2YXIgZnVsbHNjcmVlbl9zZWN0aW9uID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICAgICAgJHRoaXMuZmluZCgnLmZ1bGxzY3JlZW4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciByZXNpemVfaGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmhlaWdodCgkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuRml4KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNpemVfaGVpZ2h0KCk7XG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZV9oZWlnaHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZnVsbHNjcmVlbkZpeCgpe1xuICAgICAgICB2YXIgaCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgLy8gc2V0IC5mdWxsc2NyZWVuIGhlaWdodFxuICAgICAgICAkKFwiLmZ1bGxzY3JlZW5cIikuY2hpbGRyZW4oXCIuY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICAgICAgICB2YXIgaGMgPSAkKHRoaXMpLmlubmVySGVpZ2h0KCkgKyAyNzA7XG4gICAgICAgICAgICBpZihoYyA+PSBoKXtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudChcIi5mdWxsc2NyZWVuXCIpLmFkZENsYXNzKFwibm90LW92ZXJmbG93XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudChcIi5mdWxsc2NyZWVuXCIpLnJlbW92ZUNsYXNzKFwibm90LW92ZXJmbG93XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGaXggSGVpZ2h0XG4gICAgdmFyIGZpeF9oZWlnaHQgPSBmdW5jdGlvbigkdGhpcykge1xuICAgICAgICB2YXIgYXV0b19oZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MSkge1xuICAgICAgICAgICAgICAgICQoJy5hdXRvLWhlaWdodCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfaGVpZ2h0ID0gZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2hlaWdodCcsIHBhcmVudF9oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcuYXV0by1oZWlnaHQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF1dG9faGVpZ2h0KCk7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhdXRvX2hlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQcm9ncmVzcyBCYXJcbiAgICB2YXIgcHJvZ3Jlc3NfYmFyID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICAgICAgJHRoaXMuZmluZCgnLnByb2dyZXNzLWJhcicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAkdGhpcy53YXlwb2ludChmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5jc3MoJ3dpZHRoJywgJHRoaXMuYXR0cignYXJpYS12YWx1ZW5vdycpICsgJyUnKTtcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6ICc4MCUnLFxuICAgICAgICAgICAgICAgIHRyaWdnZXJPbmNlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTW9iaWxlIE1lbnVcbiAgICB2YXIgbW9iaWxlX25hdiA9ZnVuY3Rpb24oJHRoaXMpIHtcbiAgICAgICAgJCgnLm1lbnUtdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2hlYWRlcicpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoJ2hlYWRlcicpLmhhc0NsYXNzKCdtZW51LTMnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGFkZF9tbV9jbGFzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgOTkxKSB7XG4gICAgICAgICAgICAgICAgJCgnLm1lbnUnKS5hZGRDbGFzcygnbW9iaWxlLW1lbnUnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcubWVudScpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbWVudScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkX21tX2NsYXNzKCk7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhZGRfbW1fY2xhc3MoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE1vYmlsZSB0b3VjaFxuICAgIHZhciBtb2JpbGVfdG91Y2ggPSBmdW5jdGlvbigkdGhpcyl7XG5cbiAgICAgICAgdmFyICRtZW51ID0gJChcIi5tb2JpbGUtbWVudVwiKTtcbiAgICAgICAgJG1lbnUuZmluZCgnbGkuZHJvcGRvd24nKS5ob3ZlcihcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnPi5kcm9wZG93bi1tZW51Jykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCc+LmRyb3Bkb3duLW1lbnUnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICAvLyBPV0wgQ2Fyb3VzZWxcbiAgICB2YXIgb3dsX2Nhcm91c2VsID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICAgICAgJCgnLm93bC1jYXJvdXNlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJHRoaXMub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6ICR0aGlzLmRhdGEoJ2NvbC1zbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAkdGhpcy5kYXRhKCdjb2wtbWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAkdGhpcy5kYXRhKCdjb2wtbGcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT25lIFBhZ2UgU2Nyb2xsaW5nIE1lbnVcbiAgICB2YXIgb25lX3BhZ2Vfc2Nyb2xsID0gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgICAgIGpRdWVyeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IGpRdWVyeSgnLnNlY3Rpb24nKTtcbiAgICAgICAgICAgIHZhciBuYXZpZ2F0aW9uX2xpbmtzID0galF1ZXJ5KCcubWVudSBhJyk7XG4gICAgICAgICAgICBzZWN0aW9ucy53YXlwb2ludCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlX3NlY3Rpb247XG4gICAgICAgICAgICAgICAgYWN0aXZlX3NlY3Rpb24gPSBqUXVlcnkodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSBhY3RpdmVfc2VjdGlvbiA9IGFjdGl2ZV9zZWN0aW9uLnByZXYoKTtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlX2xpbmsgPSBqUXVlcnkoJy5tZW51IGFbaHJlZj1cIiMnICsgYWN0aXZlX3NlY3Rpb24uYXR0cihcImlkXCIpICsgJ1wiXScpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25fbGlua3MucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgYWN0aXZlX2xpbmsuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgYWN0aXZlX3NlY3Rpb24uYWRkQ2xhc3MoXCJhY3RpdmUtc2VjdGlvblwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmZzZXQ6ICczNSUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU0NST0xMIERPV05cbiAgICAgICAgalF1ZXJ5KCcubWVudScpLmxvY2FsU2Nyb2xsKHtcbiAgICAgICAgICAgIG9mZnNldDogLTYwLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTY3JvbGwgRG93biBNbmV1XG4gICAgdmFyIHNjcm9sbF9kb3duID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICAgICAgJCgnYVtocmVmKj0jXTpub3QoW2hyZWY9I10pOm5vdChbZGF0YS10b2dnbGU9XCJ0YWJcIl0pJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSA2MFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIFBhZ2UgTG9hZGVyIFNjcmVlbiBGdW5jdGlvblxuICAgIHZhciBzaXRlX2xvYWRlciA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgICAgICQoJy5sb2FkZXInKS5jc3MoJ29wYWNpdHknLCAwKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5sb2FkZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvYWRlZCcpXG4gICAgICAgIH0sIDYwMCk7XG4gICAgfVxuICAgIC8vIEJvb3RzdHJhcCBUb29sdGlwXG4gICAgdmFyIGJzX3Rvb2x0aXAgPSBmdW5jdGlvbigkdGhpcykge1xuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXG5cbiAgICAgICAgdmFyIHRhYl9oZWlnaHQ7XG4gICAgICAgICQoXCIubmF2LXRhYnMgPiBsaSA+IGFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgaWYgKCEoJCh0aGlzKS5wYXJlbnQoXCJsaVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkpIHtcbiAgICAgICAgICAgICAgICB0YWJfaGVpZ2h0ID0gJChcIi50YWItY29udGVudCA+IC50YWItcGFuZVwiKS5maWx0ZXIoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSkuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgJChcIi50YWItY29udGVudFwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0YWJfaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJChcIi50YWItY29udGVudFwiKS5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWNjb3JkaW9uXG4gICAgICAgIHZhciBhbGxQYW5lbHMgPSAkKFwiLmFjY29yZGlvbiA+IGRkXCIpLmhpZGUoKTtcbiAgICAgICAgYWxsUGFuZWxzLmZpcnN0KCkuc2xpZGVEb3duKFwiZWFzZU91dEV4cG9cIik7XG4gICAgICAgICQoXCIuYWNjb3JkaW9uID4gZHQgPiBhXCIpLmZpcnN0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgJChcIi5hY2NvcmRpb24gPiBkdCA+IGFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoXCJkZFwiKTtcbiAgICAgICAgICAgICQoXCIuYWNjb3JkaW9uID4gZHQgPiBhXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGFsbFBhbmVscy5ub3QoY3VycmVudCkuc2xpZGVVcChcImVhc2VJbkV4cG9cIik7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5zbGlkZURvd24oXCJlYXNlT3V0RXhwb1wiKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRvZ2dsZVxuICAgICAgICB2YXIgYWxsVG9nZ2xlcyA9ICQoXCIudG9nZ2xlID4gZGRcIikuaGlkZSgpO1xuXG4gICAgICAgICQoXCIudG9nZ2xlID4gZHQgPiBhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5zbGlkZVVwKFwiZWFzZU91dEV4cG9cIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoXCJkZFwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLnNsaWRlRG93bihcImVhc2VPdXRFeHBvXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFN0aWNreSBIZWFkZXJcbiAgICB2YXIgc3RpY2t5X2hlYWRlciA9IGZ1bmN0aW9uICgkdGhpcykge1xuICAgICAgICAkKFwiPGRpdiBjbGFzcz0nYmxhbmstc3BhY2UnPjwvZGl2PlwiKS5pbnNlcnRBZnRlcihcIiNoZWFkZXJcIik7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAwICYmICEkKCcubW9iaWxlLXRvZ2dsZScpLmlzKFwiOnZpc2libGVcIikpIHtcbiAgICAgICAgICAgICAgICAkKCcjaGVhZGVyJykuYWRkQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJU09UT1BFIEdvXG4gICAgdmFyIGlzb3RvcGVfZ28gPSBmdW5jdGlvbigkdGhpcykge1xuICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJy5pc290b3BlLWNvbnRhaW5lcicpO1xuICAgICAgICAkY29udGFpbmVyLmlzb3RvcGUoe1xuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmlzb3RvcGUtaXRlbScsXG4gICAgICAgICAgICBsYXlvdXRNb2RlOiAnbWFzb25yeScsXG4gICAgICAgICAgICBmaWx0ZXI6ICcqJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNzUwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKCd1bC5wb3J0Zm9saW8tZmlsdGVyIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICAgICAgJGNvbnRhaW5lci5pc290b3BlKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDc1MCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyICRvcHRpb25TZXRzID0gJCgndWwucG9ydGZvbGlvLWZpbHRlcicpLFxuICAgICAgICAgICAkb3B0aW9uTGlua3MgPSAkb3B0aW9uU2V0cy5maW5kKCdhJyk7XG5cbiAgICAgICAgICAgJG9wdGlvbkxpbmtzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgLy8gZG9uJ3QgcHJvY2VlZCBpZiBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgICAgaWYgKCAkdGhpcy5oYXNDbGFzcygnc2VsZWN0ZWQnKSApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgdmFyICRvcHRpb25TZXQgPSAkdGhpcy5wYXJlbnRzKCd1bC5wb3J0Zm9saW8tZmlsdGVyJyk7XG4gICAgICAgICAgICRvcHRpb25TZXQuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGlzb3RvcGVfZml0X3Jvd3MgPSBmdW5jdGlvbigkdGhpcykge1xuICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJy5pc290b3BlLWZpdC1yb3dzJyk7XG4gICAgICAgICRjb250YWluZXIuaXNvdG9wZSh7XG4gICAgICAgICAgICBsYXlvdXRNb2RlOiAnZml0Um93cycsXG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuaXNvdG9wZS1pdGVtJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pKGpRdWVyeSk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==