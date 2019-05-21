// eid greetings

var toggle=true;
$('#close').fadeOut();
$('.eid-greetings__Doors').click(function(){
  $('.eid-greetings__Doors').focus();
  if(toggle){
 $('.Doors__left').addClass('active');
  $('.Doors__right').addClass('active');
    $('.Doors_Typography').delay(2000).addClass('growText');
    $('#close').delay(5000).fadeIn('slow');
  }
  else
    {
  $('.Doors__left').removeClass('active');
  $('.Doors__right').removeClass('active');      
    }
  toggle=!toggle;
});

$('.eid-greetings__Doors').blur(
function(){
    $('.Doors__left').removeClass('active');
  $('.Doors__right').removeClass('active');      
  toggle=true;
});

$('#close').click(function(){
  //evt.preventDefaults();
  $('#eid-greetings').css('animation','scaleDownUp 0.2s linear');
  $('#eid-greetings').delay(050).fadeOut();
 // alert('clicked');
});