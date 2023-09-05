function update_vigipool_modal_filtration() {

    // console.log("///// update_vigipool_modal_filtration /////");

    // Variables

    var filt_state = get_value_from_eq(eq_modal, "filt_state", "tild");
    var flow_on = get_value_from_position(eq_modal, "flow_on");
    var filtration_sched = get_value_from_position(eq_modal, "filt_sched");

    // Logs

    // console.log("filt_state = " + filt_state);
    // console.log("flow_on = " + flow_on);
    // console.log("filtration_sched = " + filtration_sched);

    // Check

    const variables = [filt_state, flow_on, filtration_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // Reason

    filt_state = converter("dec", "bin", parseInt(filt_state));
    // console.log("filt_state = " + filt_state);
    // console.log("flow_on = " + flow_on);

    if (filt_state !== undefined) {
        if (parseInt(flow_on) === 0 && parseInt(filt_state) === 0) {
            $(".vigipool_tild_modal_filtration_reason").html("");
            // console.log("Message : none");
        } else if (parseInt(flow_on) === 0 && parseInt(filt_state) > 0) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("forced_by_box")); // forcée par le coffret
            // console.log("Message : forced_by_box");
        } else if (parseInt(flow_on) === 1 && parseInt(filt_state) === 0) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("prohibited_by_box")); // interdit pompe
            // console.log("Message : prohibited_by_box");
        } else if (parseInt(filt_state[7]) === 1) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("forced_march")); // Forcée par la marche continue
            // console.log("Message : forced_march");
        } else if (parseInt(filt_state[6]) === 1) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("filtration_forced_by_user")); // Forcée par la programmation
            // console.log("Message : filtration_forced_by_user");
        } else if (parseInt(filt_state[5]) === 1) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("forced_by_lighting")); // Forcée par l’éclairage
            // console.log("Message : forced_by_lighting");
        } else if (parseInt(filt_state[4]) === 1) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("forced_by_aux")); // Forcée par l’auxiliaire
            // console.log("Message : forced_by_aux");
        } else if (parseInt(filt_state[1]) === 1) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("filtration_forced_by_frost_free_mode")); // La filtration est en marche forcée pour protéger contre le gel
            // console.log("Message : filtration_forced_by_frost_free_mode");
        } else if (parseInt(filt_state[2]) === 1) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("forced_by_pac")); // Forcée par le chauffage
            // console.log("Message : forced_by_pac");
        } else if (parseInt(filt_state[3]) === 1) {
            $(".vigipool_tild_modal_filtration_reason").html(get_text("forced_for_temp")); // Filtration en route pour actualiser la température
            // console.log("Message : forced_for_temp");
        }
    }

    // flow_on

    switch (flow_on) {
        case 0:
            $(".vigipool_tild_modal_filtration_button_off").addClass("btn-primary");
            $(".vigipool_tild_modal_filtration_button_on").removeClass("btn-primary");
            break;
        case 1:
            $(".vigipool_tild_modal_filtration_button_off").removeClass("btn-primary");
            $(".vigipool_tild_modal_filtration_button_on").addClass("btn-primary");
            break;
    }

    // filtration_sched
    create_program("vigipool_modal_filtration", 1, filtration_sched);
    create_program("vigipool_modal_filtration", 2, filtration_sched);
}
