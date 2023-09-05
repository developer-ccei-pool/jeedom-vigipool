// texts

$(".vigipool_ui_x3_state_label > p:nth-child(1)").html(get_text("light"));

function update_vigipool_ui_x3_state() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        var device_id = get_value_from_eq(i, "device_id", "x312");
        var x3_color = get_value_from_position(i, "x3_color");
        var x3_state = get_value_from_position(i, "x3_state");

        if (device_id !== undefined) {
            $(".vigipool_ui_x3_state_label").eq(i).show();
            $(".vigipool_ui_x3_state_state").eq(i).show();
        } else {
            $(".vigipool_ui_x3_state_label").eq(i).hide();
            $(".vigipool_ui_x3_state_state").eq(i).hide();
        }

        if (device_id !== undefined) {
            device_id = device_id.replace("x312_", "");
            $(".vigipool_ui_x3_state_label > p:nth-child(2)").eq(i).html(device_id);
        }

        if (x3_state === 0) {
            $('.vigipool_ui_x3_state_circle').eq(i).css("background-color", "#085a7d");
            $('.vigipool_ui_x3_state_circle').eq(i).css("background-image", "none");
            $(".vigipool_ui_x3_state_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/light_off.png");
        } else {
            $(".vigipool_ui_x3_state_circle").eq(i).css("background-color", x3_color);
            $('.vigipool_ui_x3_state_circle').eq(i).css("background-image", "none");
            $(".vigipool_ui_x3_state_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/light_white.png");
        }


    }
}