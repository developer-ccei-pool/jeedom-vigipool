function update_vigipool_ui_aux_state() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        var aux_sched = get_value_from_position(i, "aux_sched");
        var aux_type = get_value_from_position(i, "aux_type");
        var aux_temp_hyst = get_value_from_position(i, "aux_temp_hyst");
        var aux_state = get_value_from_position(i, "aux_state");
        var aux_conf = get_value_from_position(i, "aux_conf");
        var aux_min_temp = get_value_from_position(i, "aux_min_temp");
        var consigne_temp = get_value_from_position(i, "consigne_temp");
        var consigne_temp_unit = get_value_from_position(i, "consigne_temp_unit");

        var en_marche = get_bit(aux_conf, 0);
        var asservi_filt = get_bit(aux_conf, 1);
        var prio_aux = get_bit(aux_conf, 2);
        var consigne_temp = get_bit(aux_conf, 3);
        var aux_min_temp = get_bit(aux_conf, 4);
        var consigne_orp = get_bit(aux_conf, 5);

        // console.log("aux_sched = " + aux_sched);
        // console.log("aux_type = " + aux_type);
        // console.log("aux_temp_hyst = " + aux_temp_hyst);
        // console.log("aux_state = " + aux_state);
        // console.log("aux_conf = " + aux_conf);
        // console.log("aux_min_temp = " + aux_min_temp);
        // console.log("consigne_temp = " + consigne_temp);
        // console.log("consigne_temp_unit = " + consigne_temp_unit);
        // console.log("en_marche = " + en_marche);
        // console.log("asservi_filt = " + asservi_filt);
        // console.log("prio_aux = " + prio_aux);
        // console.log("consigne_temp = " + consigne_temp);
        // console.log("aux_min_temp = " + aux_min_temp);
        // console.log("consigne_orp = " + consigne_orp);

        if (aux_state === undefined || aux_type === 1) {
            $(".vigipool_ui_aux_label").eq(i).hide();
            $(".vigipool_ui_aux_state").eq(i).hide();
        } else {
            $(".vigipool_ui_aux_label").eq(i).show();
            $(".vigipool_ui_aux_state").eq(i).show();
        }


        // console.log("aux_sched = " + aux_sched);
        // 
        // 
        // console.log("aux_type = " + aux_type);
        // console.log("aux_temp_hyst = " + aux_temp_hyst);
        // console.log("aux_state = " + aux_state);
        // console.log("aux_conf = " + aux_conf);
        // console.log("aux_min_temp = " + aux_min_temp);
        //
        // console.log("consigne_temp = " + consigne_temp);
        // console.log("consigne_temp_unit = " + consigne_temp_unit);
        //
        // console.log("en_marche = " + en_marche);
        // console.log("asservi_filt = " + asservi_filt);
        // console.log("prio_aux = " + prio_aux);
        // console.log("consigne_temp = " + consigne_temp);
        // console.log("aux_min_temp = " + aux_min_temp);
        // console.log("consigne_orp = " + consigne_orp);


        switch (aux_type) {
            case 0:
                $(".vigipool_ui_aux_label > p").eq(i).html("");
                break;
            case 1:
                $(".vigipool_ui_aux_label > p").eq(i).html(get_text("none"));
                break;
            case 2:
                $(".vigipool_ui_aux_label > p").eq(i).html(get_text("heater"));
                break;
            case 3:
                $(".vigipool_ui_aux_label > p").eq(i).html(get_text("treatment"));
                break;
            case 4:
                $(".vigipool_ui_aux_label > p").eq(i).html(get_text("booster"));
                break;
            case 5:
                $(".vigipool_ui_aux_label > p").eq(i).html(get_text("auxiliary"));
                break;
            default:
                $(".vigipool_ui_aux_label > p").eq(i).html(get_text("auxiliary"));
                break;
        }

        $(".vigipool_ui_aux_layer_2").eq(i).html(consigne_temp + consigne_temp_unit);

        if (aux_type === 1)
            $(".vigipool_ui_tild_auxiliary").eq(i).hide();
        else
            $(".vigipool_ui_tild_auxiliary").eq(i).show();

        // console.log("aux_type = " + aux_type);
        // console.log("en_marche = " + en_marche);

        switch (aux_type)
        {
            case 2:
                switch (en_marche)
                {
                    case 0:
                        $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/heater_off.png");
                        $(".vigipool_ui_aux_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/heater_on.png");
                        $(".vigipool_ui_aux_circle").eq(i).css("background-color", "");
                        $(".vigipool_ui_aux_circle").eq(i).css("background", "linear-gradient(#711a16, #d98233)");
                        $(".vigipool_ui_aux_layer_2").eq(i).show();
                        break;
                }
                break;
            case 3:
                switch (en_marche)
                {
                    case 0:
                        $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/treatment_off.png");
                        $(".vigipool_ui_aux_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/treatment_on.png");
                        $(".vigipool_ui_aux_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux_circle").eq(i).css("background-color", "#758f8d");
                        $(".vigipool_ui_aux_layer_2").eq(i).hide();
                        break;
                }
                break;
            case 4:
                switch (en_marche)
                {
                    case 0:
                        $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/booster_off.png");
                        $(".vigipool_ui_aux_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/booster_on.png");
                        $(".vigipool_ui_aux_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux_circle").eq(i).css("background-color", "#758f8d");
                        $(".vigipool_ui_aux_layer_2").eq(i).hide();
                        break;
                }
                break;
            case 5:
                switch (en_marche)
                {
                    case 0:
                        $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/auxiliary_off.svg");
                        $(".vigipool_ui_aux_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux_circle").eq(i).css("background-color", "#085a7d");
                        $(".vigipool_ui_aux_layer_2").eq(i).hide();
                        break;
                    default:
                        $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/auxiliary_on.svg");
                        $(".vigipool_ui_aux_circle").eq(i).css("background", "");
                        $(".vigipool_ui_aux_circle").eq(i).css("background-color", "#758f8d");
                        $(".vigipool_ui_aux_layer_2").eq(i).hide();
                        break;
                }
                break;
            default :
                $(".vigipool_ui_aux_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/auxiliary_off.svg");
                $(".vigipool_ui_aux_circle").eq(i).css("background", "");
                $(".vigipool_ui_aux_circle").eq(i).css("background-color", "#085a7d");
                $(".vigipool_ui_aux_layer_2").eq(i).hide();
                break;
        }
    }
}