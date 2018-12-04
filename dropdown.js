var active = false;
$('button').click(function(){
    if(active == false) {
        $('#mobilenav').css('visibility', 'visible');
        $('#mobilenav').animate({height: '150'});
        active = true;
    }
    else if(active == true) {
        $('#mobilenav').animate({height: '0'}, function() {
            $('#mobilenav').css('visibility', 'hidden');
        });
        active = false;
    }
});
$('main').click(function(){
    $('#mobilenav').animate({height: '0'}, function() {
        $('#mobilenav').css('visibility', 'hidden');
    });
    active = false;
});
$('#img').click(function(){
    $('#mobilenav').animate({height: '0'}, function() {
        $('#mobilenav').css('visibility', 'hidden');
    });
    active = false;
});
