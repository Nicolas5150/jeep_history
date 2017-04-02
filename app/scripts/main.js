$(document).ready(function() {
   $('#fullpage').fullpage();

   $('#fullpage').fullpage({
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke']
});
});



$('.box-wrapper').each(function(index, element) {

    setTimeout(function(){
        element.classList.remove('loading');
    }, index * 500);

});
