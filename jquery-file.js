//smooth scroll//

$(document).ready(function(){
 
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
     
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
      
        window.location.hash = hash;
      });
    } 

});

//pop-up thank you when clicking rsvp on form //

$('#rsvp-form').on('submit', function() {
   alert('We look forward to seeing you at our wedding!');
});

//animation for rsvp form //

$('#yes').on('change', function() {
   if ( $(this).is(':checked') ) {
      $('label[for="hide-unless-yes"]').show('slow');
      $('#hide-unless-yes').show('slow');
   } else {
      $('label[for="hide-unless-yes"]').hide('slow');
      $('#hide-unless-yes').hide('slow');
   }
});

  });

