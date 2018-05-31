$(function(){
    $('#HI').on('click', function(){
        $('#MBM').toggleClass('open');
    });
    $('#MW').on('click', function(e){
        e.stopPropagation();
        $('#MBM').removeClass('open');
    });
});