$(function(){
    $(window).on('scroll', function(){
        // console.log($(this).scrollTop(), $(document).height(), $(window).height(), $(document).height() - $(window).height() - 100);
        if($('#MSG').hasClass('all')){
            if($(this).scrollTop() > ( $(document).height() - $(window).height() - 100 )){
                $('#MSG .chat-pig').removeClass('show');
            }else{
                $('#MSG .chat-pig').addClass('show');
            }
        }else{
            if($(this).scrollTop() < 200){
                $('#MSG .chat-pig').removeClass('show');
            }else if($(this).scrollTop() > ( $(document).height() - $(window).height() - 100 )){
                $('#MSG .chat-pig').removeClass('show');
            }else{
                $('#MSG .chat-pig').addClass('show');
            }
        }
    });

    $('#CP').on('click', function(){
        $('#MSG').addClass('open');
    });

    $('#MSGX').on('click', function(){
        $('#MSG').removeClass('open');
    });
});