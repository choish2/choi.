$('.pop').click(function(){
    $('.mySwiper').show();
    $('.mySwiper2').hide();
    return false;
})

$('.banner').click(function(){
    $('.mySwiper2').show();
    $('.mySwiper').hide();
    return false;
})

$('.exit').click(function(){
    $('.popup').fadeOut('fast');

})

$(document).ready(function() {
    $('.title p').click(function() {
      $('.title').fadeOut()
     
      $('.game-area').show()
    })
    });
    