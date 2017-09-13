$(document).ready(function() {
    setTimeout(function() {
        $("#promo").fadeOut(1500);
    },1000);
    setTimeout(function() {
        $("#cover").fadeIn(1500);
    },2000);
    
    $('#verify').click(verifyCode);
    $('#codeV').hide();
    $( "input[type=checkbox]" ).on( "click", activeNext );
});


function verifyCode () {
    const a = 100;
    const b = 999;
    let code = Math.round(Math.random()*(b-a)+parseInt(a));
    if($('#phone').val() != ''){
        $('#code').text('LAB - ' + code);
        $('#btn-phone').attr('disabled', false);
        $('#message').text('');
        $('#codeV').show();
    }else{
        $('#message').text('Ingrese un valor de a cuerdo al especificado');
        $('#codeV').hide();
    }
}
/*
function activeNext () {
    if($("input[type=checkbox]").is(':checked')) {  
        $('#register').attr('disabled', false); 
    } else {  
        $('#register').attr('disabled', true);
    }
    
}*/

