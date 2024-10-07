$( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();

    $('.level-slider').slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1
    });
  } );