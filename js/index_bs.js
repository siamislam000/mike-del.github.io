
//set timer to 5 seconds, after that, load the magic animation
// setTimeout(function(){
//   $($lanDiv).addClass('magictime rotateDown');
// }, 5000);


// Show with animation the Products directional title and arrow at the bottom of the first div
// $('.web_products_title').hide().show().slideUp( 100 ).delay( 1000 ).fadeIn( 2000 );
// $('.down_arrow').hide().show().slideUp( 100 ).delay( 1000 ).fadeIn( 2000 );

// I do not believe that this is being used right now
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 750, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});