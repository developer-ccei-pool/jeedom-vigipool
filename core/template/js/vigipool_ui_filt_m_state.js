function update_vigipool_ui_filt_m_state() {

//     console.log("refresh_dashboard_filt_m_state");

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        // Variables de bases

        var filt_m_sched = get_value_from_position(i, "filt_sched_m");
        var filt_mode = get_value_from_position(i, "filt_mode");
        var filt_m_state = get_value_from_position(i, "filt_state_m");
        var filt_cur_nom = get_value_from_position(i, "filt_cur_nom");
        var filt_cur = get_value_from_position(i, "filt_cur");
        var filt_state = get_value_from_position(i, "filt_state");

        if (!is_variable_available(i, "filt_state_m")) {
            $(".vigipool_ui_filt_m_label").eq(i).hide();
            $(".vigipool_ui_filt_m_state").eq(i).hide();
        } else {
            $(".vigipool_ui_filt_m_label").eq(i).show();
            $(".vigipool_ui_filt_m_state").eq(i).show();
        }

        var flow_on = get_value_from_position(i, "flow_on");

        // Variables avancées

        var FILT_ON = get_bit(filt_m_state, 0);
        var FILT_ON = get_bit(filt_m_state, 1);
        var FILT_PROG = get_bit(filt_m_state, 2);
        var FILT_LIGHT = get_bit(filt_m_state, 3);
        var FILT_AUX = get_bit(filt_m_state, 4);
        var FILT_SERV = get_bit(filt_m_state, 5);
        var FILT_FROST = get_bit(filt_m_state, 6);
        var FILT_PAC = get_bit(filt_m_state, 7);

        // console.log("FILT_ON = " + FILT_ON);
        // console.log("FILT_PROG = " + FILT_PROG);
        // console.log("FILT_LIGHT = " + FILT_LIGHT);
        // console.log("FILT_AUX = " + FILT_AUX);
        // console.log("FILT_SERV = " + FILT_SERV);
        // console.log("FILT_FROST = " + FILT_FROST);
        // console.log("FILT_PAC = " + FILT_PAC);

        var vigipool_aux_conf = parseInt($(".vigipool_aux_conf").eq(i).html());

        var en_marche = get_bit(vigipool_aux_conf, 0);
        var asservi_filt = get_bit(vigipool_aux_conf, 1);
        var prio_aux = get_bit(vigipool_aux_conf, 2);
        var consigne_temp = get_bit(vigipool_aux_conf, 3);
        var aux_min_temp = get_bit(vigipool_aux_conf, 4);
        var consigne_orp = get_bit(vigipool_aux_conf, 5);

        // Result

        $(".vigipool_ui_tild_flow_on_m_1").eq(i).hide();
        $(".vigipool_ui_tild_flow_on_m_2").eq(i).hide();
        $(".vigipool_ui_tild_flow_on_m_3").eq(i).hide();
        $(".vigipool_ui_tild_flow_on_m_4").eq(i).hide();

        if (!filt_m_state) {
            $(".vigipool_ui_tild_flow_on_m_1").eq(i).show();
        } else if (filt_m_state) {
            $(".vigipool_ui_tild_flow_on_m_2").eq(i).show();
        }


    }
}

