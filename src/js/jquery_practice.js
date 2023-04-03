$(document).ready(function(){
    // 1. Slide 
    $('#myBtn1').click(function(){
        $('#myImag').slideToggle(2000);
    })

    // 2. Animation
    $('#myBtn2').click(function(){
        $('#myBox').animate({left: '250px', width:'+=10px', height:'+=10px'}, 2000);
    })

    $('#myBtn2_2').click(function(){
        const myPic = $('#myPic');
        myPic.animate({left: '250px'}, 1500);
        myPic.animate({top: '150px'}, 1500);
        myPic.animate({left: '0px'}, 1500);
        myPic.animate({top: '0px'}, 1500);
    })

    // 3. Chain  
    $('#myBtn3').click(function(){
        $('#myPic3').slideUp(2000)
        .slideDown(2000)
        .fadeTo(2000, 0.4, )
    })

    // Demo 4 Hide/Show
    $('#myBtn4').click(function(){
        $('#myPic4').hide(2000);
    })

    $('#myBtn4_2').click(function(){
        $('#myPic4').show(2000);
    })

    // Demo 5. FadeIn/FadeOut
    $('#myBtn5').click(function(){
        $('#myPic5').fadeOut(2000);
    })
    $('#myBtn5_2').click(function(){
        $('#myPic5').fadeIn(2000);
    })
})

