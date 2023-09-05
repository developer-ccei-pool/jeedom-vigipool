$(".vigipool_ui_filt_label > p").html(get_text("vigipool_modal_filtration"));

function update_vigipool_ui_filt_state() {

    // console.log("refresh_dashboard_filt_state");

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        // Variables de bases

        var filt_sched = get_value_from_position(i, "filt_sched");
        var filt_light_force = get_value_from_position(i, "filt_light_force");
        var filt_state = get_value_from_position(i, "filt_state");
        var filt_state_m = get_value_from_position(i, "filt_state_m");
        var filt_serv_inter = get_value_from_position(i, "filt_serv_inter");

        // console.log("filt_sched = " + filt_sched);
        // console.log("filt_light_force = " + filt_light_force);
        // console.log("filt_state = " + filt_state);
        // console.log("filt_serv_inter = " + filt_serv_inter);

        if (filt_state === undefined || filt_state_m !== undefined) {
            $(".vigipool_ui_filt_label").eq(i).hide();
            $(".vigipool_ui_filt_state").eq(i).hide();
        } else {
            $(".vigipool_ui_filt_label").eq(i).show();
            $(".vigipool_ui_filt_state").eq(i).show();
        }

        var flow_on = get_value_from_position(i, "flow_on");

        // Variables avancées

        var FILT_ON = get_bit(filt_state, 0);
        var FILT_ON = get_bit(filt_state, 1);
        var FILT_PROG = get_bit(filt_state, 2);
        var FILT_LIGHT = get_bit(filt_state, 3);
        var FILT_AUX = get_bit(filt_state, 4);
        var FILT_SERV = get_bit(filt_state, 5);
        var FILT_FROST = get_bit(filt_state, 6);
        var FILT_PAC = get_bit(filt_state, 7);

        var vigipool_aux_conf = parseInt($(".vigipool_aux_conf").eq(i).html());

        var en_marche = get_bit(vigipool_aux_conf, 0);
        var asservi_filt = get_bit(vigipool_aux_conf, 1);
        var prio_aux = get_bit(vigipool_aux_conf, 2);
        var consigne_temp = get_bit(vigipool_aux_conf, 3);
        var aux_min_temp = get_bit(vigipool_aux_conf, 4);
        var consigne_orp = get_bit(vigipool_aux_conf, 5);

        // Result

        var prog = false;

        if (filt_state)
            prog = true;

        var marche = false;

        if (flow_on)
            marche = true;

        var forcer = false;

        if (filt_light_force)
            forcer = true;
        if (asservi_filt)
            forcer = true;
        if (prio_aux)
            forcer = true;

        $(".vigipool_ui_tild_flow_on_1").eq(i).hide();
        $(".vigipool_ui_tild_flow_on_2").eq(i).hide();
        $(".vigipool_ui_tild_flow_on_3").eq(i).hide();
        $(".vigipool_ui_tild_flow_on_4").eq(i).hide();

        if (!marche && !forcer === prog) {
            $(".vigipool_ui_tild_flow_on_1").eq(i).show();
        } else if (marche && !forcer === prog) {
            $(".vigipool_ui_tild_flow_on_2").eq(i).show();
        } else if (!marche && forcer === prog) {
            $(".vigipool_ui_tild_flow_on_3").eq(i).show();
        } else if (marche && forcer === prog) {
            $(".vigipool_ui_tild_flow_on_4").eq(i).show();
        }
    }
}