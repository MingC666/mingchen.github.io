$(document).ready(function(){

    // 1. DOM text/html
    $('#btn1').click(function(){
        $('#output1').val($('#myP').text())
    })
    $('#btn1_2').click(function(){
        $('#output1_2').val($('#myP').html());
    })
    $('#btn1_3').click(function(){
        $('#output1_3').val($('#output1_2').val());
    })

    // 2. Change Element attr(name, new_val) Demo
    $('#btn2').click(function(){
        $('#mylink').attr('href', 'https://www.youtube.com/')
    })

    // 3. Create new HTML element (append/prepend/)
    $('#btn3').click(function(){
        const p1 = $('<p></p>').text("Create by <p><p>.text()")
        const p2 = "<p>Create By string with tag</p>";
        const p3 = document.createElement('p');
        p3.innerHTML = "Create by documentCreate(p)";
        $('#demo3Title').animate({fontSize:"25px"});
        $('#demo3').append(p1, p2, p3)
    })

    // 3_1 change 'demo3' color
    $('#btn3_2').click(function(){
        $('#demo3').css("color","blue");
    })

    // 4. Create new HTML element (after/before)
    $('#btn4').click(function(){
        const p1 = $('<p></p>').text("Create by <p><p>.text()")
        const p2 = "<p>Create By string with tag</p>";
        const p3 = document.createElement('p');
        p3.innerHTML = "Create by documentCreate(p)";
        $('#demo4Title').animate({fontSize:"25px"});
        $('#demo4').after(p1, p2, p3)
    })

    // 4_1 change 'demo3' color
    $('#btn4_2').click(function(){
        $('#demo4').css("color","blue");
    })

    // 5_ remvoe element
    $('#btn5').click(function(){
        $('#div5').remove();
    }) 

    // 5_2 empty element
    $('#btn5_2').click(function(){
        $('#div5_2').empty();
    }) 

    // 5_3 remove with parameters
    $('#btn5_3_1').click(function(){
        $("p").remove('#p531');
    }) 
    $('#btn5_3_2').click(function(){
        $('p').remove("#p532, #p533");
    }) 

    // 6 add class to element
    $('#btn6_0').click(function(){
        $('#demo6Title').toggleClass('mycss6');
    })
    $('#btn6_1').click(function(){
        $("#p61, #p62").addClass("mycss6");
    }) 
    $('#btn6_2').click(function(){
        $("#p62, #p63").addClass("special redColor");
    }) 

    // 7 Change Css properties
    $('#btn7_1').click(function(){
        $('#p71').css("color", "pink");
    })
    $('#btn7_2').click(function(){
        $('#p72').css({color:"red", fontSize:"30px"})
    })

})