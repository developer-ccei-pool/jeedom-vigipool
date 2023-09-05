function update_vigipool_modal_auxiliary_2() {

    // console.log("///// update_vigipool_modal_auxiliary_2 /////");

    // Variables

    var aux2_sched = get_value_from_position(eq_modal, "aux2_sched");
    var aux2_mode = get_value_from_position(eq_modal, "aux2_mode");
    var aux2_state = get_value_from_position(eq_modal, "aux2_state");
    var aux_conf_m = get_value_from_position(eq_modal, "aux_conf_m");

    // Logs

    // console.log("vigipool_aux2_sched = " + vigipool_aux2_sched);
    // console.log("vigipool_aux2_mode = " + vigipool_aux2_mode);
    // console.log("vigipool_aux2_state = " + vigipool_aux2_state);
    // console.log("vigipool_aux_conf_m = " + vigipool_aux_conf_m);

    // Check

    const variables = [aux2_sched, aux2_mode, aux2_state, aux_conf_m];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    if (!isNaN(aux2_mode)) {
        var aux_mode_2 = aux2_mode;

        $('.vigipool_modal_auxiliary_2_off').removeClass("btn-primary");
        $('.vigipool_modal_auxiliary_2_on').removeClass("btn-primary");
        $('.vigipool_modal_auxiliary_2_prog').removeClass("btn-primary");
        $('.vigipool_modal_auxiliary_2_auto').removeClass("btn-primary");

        switch (aux_mode_2) {
            case 0:
                $('.vigipool_modal_auxiliary_2_off').addClass("btn-primary");
                break;
            case 1:
                $('.vigipool_modal_auxiliary_2_on').addClass("btn-primary");
                break;
            case 2:
                $('.vigipool_modal_auxiliary_2_prog').addClass("btn-primary");
                break;
            case 3:
                $('.vigipool_modal_auxiliary_2_auto').addClass("btn-primary");
                break;
            default:
                break;
        }

        //////////////////////////////

    }

    create_program_simple("vigipool_modal_auxiliary_2", 1, aux2_sched);
}

