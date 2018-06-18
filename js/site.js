$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {

  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  console.log("hi");

//---------pull out menu for navigation---------------------------

    $('#visit').on('click', function(e) {
    // Don't follow the #tools-jump link:
    e.preventDefault();
    // prevent event bubbling; without this
    // line, inner click event, on #content,
    // will fire immediately:
    e.stopPropagation();
    $('html').toggleClass('visit');
    });

    $('#expectations').on('click', function(e) {
    // Don't follow the #tools-jump link:
    e.preventDefault();
    // prevent event bubbling; without this
    // line, inner click event, on #content,
    // will fire immediately:
    e.stopPropagation();

    window.location.replace('../expectations');
    });

    $('#beliefs').on('click', function(e) {
    // Don't follow the #tools-jump link:
    e.preventDefault();
    // prevent event bubbling; without this
    // line, inner click event, on #content,
    // will fire immediately:
    e.stopPropagation();

    window.location.replace('../beliefs');
    });

    $('#staff').on('click', function(e) {
    // Don't follow the #tools-jump link:
    e.preventDefault();
    // prevent event bubbling; without this
    // line, inner click event, on #content,
    // will fire immediately:
    e.stopPropagation();

    window.location.replace('../staff');
    });

    $("#menuToggle").click(function(){
        $("#navigation").slideToggle("slow");

     $('html').toggleClass('has-toolbar');


     $('#page').on('click', function(e) {
      $('html').removeClass('has-toolbar');
    });

    });





 //------end of navigation menu-------------------------------------


 $('#information').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    console.log('pshed');
    $('#contact').append('Thank you '+name+'. A confirmation email will be sent to you shortly');

 });



  function initMap() {
        var uluru = {lat: 42.2907709304236, lng: -83.9017171517972};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

     }


});
