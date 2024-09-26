$('.pop').click(function(){
    $('.mySwiper').show();
    $('.mySwiper2').hide();
  
    return false;
})
$('.pop2').click(function(){
    $('.pop2').css('background-color','#e1e1e1')
    $('.banner2').css('background-color','#fff')
    return false;
})
$('.banner2').click(function(){
    $('.pop2').css('background-color','#fff')
    $('.banner2').css('background-color','#e1e1e1')
    return false;
})


$('.banner').click(function(){
    $('.mySwiper2').show();
    $('.mySwiper').hide();
 
    return false;
})

$('.popup3 .exit').click(function(){
    $('.popup3').fadeOut('fast');
    
})

$('.popup .exit').click(function(){
    $('.popup').fadeOut('fast');

})



$(document).ready(function() {
    $('.title2 p').click(function() {
      $('.title2').fadeOut()
     
      $('.game-area').show()
      $('.baro_box').fadeIn('fast')
      
    })

    $('.webb').click(function() {
        $('.popup').fadeIn('fast');
        $('.mySwiper').show()
    })

    $('.banner').click(function() {
        $('.popup3').fadeIn('fast');
        $('.mySwiper3').show()
        $('.mySwiper2').hide()
        $('.title3 a').css('display' , 'flex') 
    })
    
    $('.s-kit').click(function() {
        if ($('.speed').is(':visible')) {
            $('.speed').fadeOut('fast');
        } else {
            $('.speed').fadeIn('fast');
        }
    });
    
    $('.banner2').click(function(){
        $('.mySwiper2').show();
        $('.mySwiper3').hide();
        return false;
    })
    $('.pop2').click(function(){
        $('.mySwiper3').show();
        $('.mySwiper2').hide();
        return false;
    })


});
    

