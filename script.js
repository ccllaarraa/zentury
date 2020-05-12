$(document).ready(function(){
    $(window).on('load', function() {
    $( ".draggable" ).draggable();
    });
    

    $(".breath").mouseover(function(){
        $('.breathing-top').hide();
    });
    $(".breath").mouseout(function(){
        $('.breathing-top').show();
    });


//modal here

  var modalButtons = $('.tent');
  var modals = $('.modal');

  $(modalButtons).on('click', function(e) {
          toggleModals(e)  
          console.log('hi')
  })

function toggleModals(e) {
  var element = $(e.target);
  console.log(element)
	var modalClass = element.attr('data-modal');
        var modalToOpen = $('.modal-' + modalClass);
        $(modals).removeClass('open');
        $(modalToOpen).addClass('open');
}
$('.close').on('click', function(){ 
  $(modals).removeClass('open')
});

});


function PlaySound(mySound) {
    var thissound=document.getElementById(mySound);
    thissound.play();
}

function StopSound(mySound) {
    var thissound=document.getElementById(mySound);
    thissound.pause();
    thissound.currentTime = 0;
}