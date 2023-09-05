function update_vigipool_ui_aux1_state() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        var aux1_sched = get_value_from_position(i, "aux1_sched");
        var aux1_type = get_value_from_position(i, "aux1_type");
        var aux1_temp_hyst = get_value_from_position(i, "aux1_temp_hyst");
        var aux1_state = get_value_from_position(i, "aux1_state");
        var aux1_conf = get_value_from_position(i, "aux1_conf");
        var aux1_min_temp = get_value_from_position(i, "aux1_min_temp");
        var consigne_temp = get_value_from_position(i, "consigne_temp");
        var consigne_temp_unit = get_value_from_position(i, "consigne_temp_unit");

        var en_marche = get_bit(aux1_conf, 0);
        var asservi_filt = get_bit(aux1_conf, 1);
        var prio_aux = get_bit(aux1_conf, 2);
        var consigne_temp = get_bit(aux1_conf, 3);
        var aux1_min_temp = get_bit(aux1_conf, 4);
        var consigne_orp = get_bit(aux1_conf, 5);

        // console.log("aux1_sched = " + aux1_sched);
        // console.log("aux1_type = " + aux1_type);
        // console.log("aux1_temp_hyst = " + aux1_temp_hyst);
        // console.log("aux1_state = " + aux1_state);
        // console.log("aux1_conf = " + aux1_conf);
        // console.log("aux1_min_temp = " + aux1_min_temp);
        // console.log("consigne_temp = " + consigne_temp);
        // console.log("consigne_temp_unit = " + consigne_temp_unit);
        // console.log("en_marche = " + en_marche);
        // console.log("asservi_filt = " + asservi_filt);
        // console.log("prio_aux = " + prio_aux);
        // console.log("consigne_temp = " + consigne_temp);
        // console.log("aux1_min_temp = " + aux1_min_temp);
        // console.log("consigne_orp = " + consigne_orp);
        if (!is_variable_available(i, "aux1_state")) {
            $(".vigipool_ui_aux1_label").eq(i).hide();
            $(".vigipool_ui_aux1_state").eq(i).hide();
        } else {
            $(".vigipool_ui_aux1_label").eq(i).show();
            $(".vigipool_ui_aux1_state").eq(i).show();
        }


        // console.log("aux1_sched = " + aux1_sched);
        // 
        // 
        // console.log("aux1_type = " + aux1_type);
        // console.log("aux1_temp_hyst = " + aux1_temp_hyst);
        // console.log("aux1_state = " + aux1_state);
        // console.log("aux1_conf = " + aux1_conf);
        // console.log("aux1_min_temp = " + aux1_min_temp);
        //
        // console.log("consigne_temp = " + consigne_temp);
        // console.log("consigne_temp_unit = " + consigne_temp_unit);
        //
        // console.log("en_marche = " + en_marche);
        // console.log("asservi_filt = " + asservi_filt);
        // console.log("prio_aux = " + prio_aux);
        // console.log("consigne_temp = " + consigne_temp);
        // console.log("aux1_min_temp = " + aux1_min_temp);
        // console.log("consigne_orp = " + consigne_orp);

        switch (aux1_type) {
            case 0:
                $(".vigipool_ui_aux1_label > p").eq(i).html(get_text("treatment"));
                break;
            case 1:
                $(".vigipool_ui_aux1_label > p").eq(i).html(get_text("auxiliary"));
                break;
            case 2:
                $(".vigipool_ui_aux1_label > p").eq(i).html(get_text("heater"));
                break;
            case 3:
                $(".vigipool_ui_aux1_label > p").eq(i).html(get_text("booster"));
                break;
            case 4:
                $(".vigipool_ui_aux1_label > p").eq(i).html(get_text("treatment_orp"));
                break;
        }

        $(".vigipool_ui_aux1_layer_2 > p").eq(i).html(consigne_temp + consigne_temp_unit);

        switch (aux1_type)
        {
            case 0:
                switch (aux1_state)
                {
                    case 0:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/auxiliary_off.svg");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/auxiliary_on.svg");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#758f8d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                }
                break;
            case 1:
                switch (aux1_state)
                {
                    case 0:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/treatment_off.png");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/treatment_on.png");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#758f8d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                }
                break;
            case 2:
                switch (aux1_state)
                {
                    case 0:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/heater_off.png");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/heater_on.png");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "linear-gradient(#711a16, #d98233)");
                        $(".vigipool_ui_aux1_layer_2").eq(i).show();
                        break;
                }
                break;
            case 3:
                switch (aux1_state)
                {
                    case 0:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/booster_off.png");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/booster_on.png");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#758f8d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                }
                break;
            case 4:
                switch (aux1_state)
                {
                    case 0:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/treatment_off.png");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux1_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/treatment_on.png");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux1_circle").eq(i).css("background-color", "#758f8d");
                        $(".vigipool_ui_aux1_layer_2").eq(i).hide();
                        break;
                }
                break;
        }
    }
}