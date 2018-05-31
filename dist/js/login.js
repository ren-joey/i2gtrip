function switchTo(val){
    if(val == 1){
        $('#LW').addClass('tab1').removeClass('tab2');
    }else if(val == 2){
        $('#LW').addClass('tab2').removeClass('tab1');
    }
}