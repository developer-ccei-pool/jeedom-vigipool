
function update_vigipool_ui_value_ph() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        var value_ph = get_value_from_position(i, "value_ph");
        var consigne_ph = get_value_from_position(i, "consigne_ph");
        // console.log("value_ph = " + value_ph);
        // console.log("consigne_ph = " + consigne_ph);

        // Show Hide

        if (value_ph === undefined || value_ph === 0) {
            $(".vigipool_ui_value_ph_ui").eq(i).hide();
        } else {
            $(".vigipool_ui_value_ph_ui").eq(i).show();
        }

   

        // value_ph

        var value_ph_position = ph_to_position(value_ph);
        $(".vigipool_ui_value_ph").eq(i).css("margin-left", value_ph_position);

        var ph_limit_1 = 6.3;
        var ph_limit_2 = 6.6;
        var ph_limit_3 = 6.9;
        var ph_limit_4 = 7.2;
        var ph_limit_5 = 7.5;
        var ph_limit_6 = 7.8;
        var ph_limit_7 = 8.1;

        if (value_ph <= ph_limit_2 || ph_limit_6 <= value_ph)
        {
            $(".vigipool_ui_value_ph").eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/ph_orp_red.png\")");
            $(".vigipool_ui_value_ph").eq(i).html("<i class=\"fas fa-times-circle\" ></i> " + value_ph);
        }
        if (ph_limit_2 <= value_ph && value_ph <= ph_limit_3 || ph_limit_5 <= value_ph && value_ph <= ph_limit_6)
        {
            $(".vigipool_ui_value_ph").eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/ph_orp_orange.png\")");
            $(".vigipool_ui_value_ph").eq(i).html("<i class=\"fas fa-exclamation-circle\" ></i> " + value_ph);
        }
        if (ph_limit_3 <= value_ph && value_ph <= ph_limit_5)
        {
            $(".vigipool_ui_value_ph").eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/ph_orp_green.png\")");
            $(".vigipool_ui_value_ph").eq(i).html("<i class=\"fas fa-check-circle\" ></i> " + value_ph);
        }

        // consigne_ph

        if (consigne_ph === undefined || consigne_ph === 0) {
            $(".vigipool_ui_value_ph_setpoint").eq(i).hide();
        } else {
            $(".vigipool_ui_value_ph_setpoint").eq(i).show();
        }

        var vigipool_ph_setpoint_position = ph_to_position(consigne_ph);
        $(".vigipool_ui_value_ph_setpoint").eq(i).css("margin-left", vigipool_ph_setpoint_position);

        var ph_limit_1 = 6.3;
        var ph_limit_2 = 6.6;
        var ph_limit_3 = 6.9;
        var ph_limit_4 = 7.2;
        var ph_limit_5 = 7.5;
        var ph_limit_6 = 7.8;
        var ph_limit_7 = 8.1;

        $(".vigipool_ui_value_ph_setpoint").eq(i).html(get_text("setpoint") + " " + consigne_ph);

    }
}

function ph_to_position(ph) {
    if (ph <= 6.3)
        return "-99%";
    if (ph === 6.4)
        return "-88%";
    if (ph === 6.5)
        return "-77%";
    if (ph === 6.6)
        return "-66%";
    if (ph === 6.7)
        return "-55%";
    if (ph === 6.8)
        return "-44%";
    if (ph === 6.9)
        return "-33%";
    if (ph === 7.0)
        return "-22%";
    if (ph === 7.1)
        return "-11%";
    if (ph === 7.2)
        return "0%";
    if (ph === 7.3)
        return "11%";
    if (ph === 7.4)
        return "22%";
    if (ph === 7.5)
        return "33%";
    if (ph === 7.6)
        return "44%";
    if (ph === 7.7)
        return "55%";
    if (ph === 7.8)
        return "66%";
    if (ph === 7.9)
        return "77%";
    if (ph === 8.0)
        return "88%";
    if (ph >= 8.1)
        return "99%";
}