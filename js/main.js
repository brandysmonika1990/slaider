$(document).ready(function() { 
    
     //Pierwszy slajd, strzałka w dół = przejście do carousel
         $('#arrow-down').click(function() {
                 $('html, body').animate({
        scrollTop: $('#myCarousel').offset().top
    }, 400, 'linear');          
   });
        
    //Carousel, strzałka w dół = slajd drugi
      $('#arrow-down2').click(function() {
              $('html, body').animate({
        scrollTop: $('#slide2').offset().top
    }, 400, 'linear');          
   });
    
    //Slajd drugi, strzałka w dół = slajd trzeci
      $('#arrow-down3').click(function() {
              $('html, body').animate({
        scrollTop: $('#slide3').offset().top
    }, 400, 'linear');          
   });
    
    //Trzeci slajd, strzałka w górę = slajd drugi
      $('#arrow-top3').click(function() {
              $('html, body').animate({
        scrollTop: $('#slide2').offset().top
    }, 400, 'linear');          
   });
    
    //Drugi slajd, strzałka w górę = carousel
      $('#arrow-top2').click(function() {
              $('html, body').animate({
        scrollTop: $('#myCarousel').offset().top
    }, 400, 'linear');          
   });
        
     //Carousel, strzałka w górę = slajd pierwszy
      $('#arrow-top').click(function() {
              $('html, body').animate({
        scrollTop: $('#slide1').offset().top
    }, 400, 'linear');          
   });
    
 	//Menu nawigacyjne
    
     //Click w user slajd 1 
    $('.fa-user').click(function() {
                 $('html, body').animate({
        scrollTop: $('#slide1').offset().top
    }, 400, 'linear');          
   });
    
    //Click w box zejście w dół do Carousel 
    $('.fa-th').click(function() {
                 $('html, body').animate({
        scrollTop: $('#myCarousel').offset().top
    }, 400, 'linear');          
   });
       
    //Click w diamond zejście w dół do slide2 
     $('.fa-diamond').click(function() {
                 $('html, body').animate({
        scrollTop: $('#slide2').offset().top
    }, 400, 'linear');          
   });
    
    //Click w koperte zejście w dół do slide3 
     $('.fa-envelope-o').click(function() {
                 $('html, body').animate({
        scrollTop: $('#slide3').offset().top
    }, 400, 'linear');          
   });
    
     //Click w button zejście w dół do Carousel 
      $('.btn').click(function() {
                 $('html, body').animate({
        scrollTop: $('#myCarousel').offset().top
    }, 400, 'linear');          
   });
    
    //Działanie burgera na mniejszych urządzeniach
  $('.navbar-toggler').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.navbar-minimal').toggleClass('open');
	});
    
    
   //Funkcja która ukrywa hamburgera < 768 px i pokazuje > 768px 
  function mediaSize() { 
		if (window.matchMedia('(min-width: 768px)').matches) {
			$('.navbar-media').hide();
         } else {
			$('.navbar-media').show();
         }
	};
	
  mediaSize();
 	window.addEventListener('resize', mediaSize, false);  
    
});
     
      






