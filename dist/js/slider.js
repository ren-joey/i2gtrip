$(function () {
    $("#slider-range-price").slider({
        range: "min",
        value: 2000,
        min: 500,
        max: 20000,
        slide: function (event, ui) {
            $("#amount_price").html("最多 NT$" + ui.value);
        }
    });
    $("#amount_price").html("最多 NT$" + $("#slider-range-price").slider("value"));

    $("#slider-range-area").slider({
        range: "min",
        value: 10,
        min: 5,
        max: 48,
        slide: function (event, ui) {
            $("#amount_area").html("最多" + ui.value + "坪");
        }
    });
    $("#amount_area").html("最多" + $("#slider-range-area").slider("value") + "坪");

    var t = $("#quantity_a");
    $("#add_a").click(function () {
        t.val(parseInt(t.val()) + 1);
        $("#min_a").removeAttr("disabled");                 //當按加1時，解除$("#min")不可讀狀態
    });

    $("#min_a").click(function () {
        if (parseInt(t.val()) > 0) {                     //判斷數量值大于1時才可以減少
            t.val(parseInt(t.val()) - 1)
        }
        else {
            $("#min_a").attr("disabled", "disabled")        //當$("#min")為1時，$("#min")不可讀狀態
        }
    });

    $(".quty_type").blur(function () {
        var t = $(this).val();
        $(this).val(isNaN(Number(t, 10)) ? 0 : t);
    });
});