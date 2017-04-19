// https://webdesign.tutsplus.com/articles/vertical-and-horizontal-scrolling-with-fullpagejs--cms-24215
$(document).ready(function() {
  $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');

  // toggle menu
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });

  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: ['#938b7c', '#B8AE9C'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection'],
    menu: '#menu',
    easingcss3: 'ease',
    scrollingSpeed: 700,

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

    onLeave: function(anchorLink, index, nextIndex, direction) {
      if(index == 2) {
        $('#fp-nav').show();
      }
    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {

    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if(anchorLink == 'secondSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      }


      if(anchorLink == 'secondSection') {

        // Animate the information onto the screen.
        // Need to check when it leaves the horizontal
        // Animate the information onto the screen.
        $('.jeep_header').animateCss('slideInLeft');
        $('.jeep_text').animateCss('slideInUp');
        $('.jeep_img').animateCss('slideInDown');

      }
    }
  });

});
