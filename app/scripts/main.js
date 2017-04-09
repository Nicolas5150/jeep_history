$(document).ready(function() {

  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');

  // toggle menu
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });

  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: ['#374140', '#B8AE9C'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      if (index == 2) {
          $('#fp-nav').hide();
      }

      // Hide navbar on the first section.
      if(index == 1) {
        document.getElementById('full-nav').style.display = 'none';
      }
      else {
        document.getElementById('full-nav').style.display = 'block';
      }
    },

    onLeave: function(index, nextIndex, direction) {
      if(index == 2) {
        $('#fp-nav').show();
      }
    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      // if(anchorLink == 'secondSection' && slideIndex == 1) {
      //   $.fn.fullpage.setAllowScrolling(false, 'up');
      //   $header_top.css('background', 'transparent');
      //   $nav.css('background', 'transparent');
      //   $(this).css('background', '#374140');
      //   $(this).find('h2').css('color', 'white');
      //   $(this).find('h3').css('color', 'white');
      //   $(this).find('p').css(
      //     {
      //       'color': '#DC3522',
      //       'opacity': 1,
      //       'transform': 'translateY(0)'
      //     }
      //   );
      // }
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if(anchorLink == 'secondSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      }
    }
  });

});
