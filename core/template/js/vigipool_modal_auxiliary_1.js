function update_vigipool_modal_auxiliary_1() {

    // console.log("///// update_vigipool_modal_auxiliary_1 /////");

    // Variables

    var aux1_sched = get_value_from_position(eq_modal, "aux1_sched");
    var aux1_type = get_value_from_position(eq_modal, "aux1_type");
    var aux1_mode = get_value_from_position(eq_modal, "aux1_mode");
    var aux1_state = get_value_from_position(eq_modal, "aux1_state");
    var aux_conf_m = get_value_from_position(eq_modal, "aux_conf_m");

    // Logs

    // console.log("aux1_sched = " + aux1_sched);
    // console.log("aux1_type = " + aux1_type);
    // console.log("aux1_mode = " + aux1_mode);
    // console.log("aux1_state = " + aux1_state);
    // console.log("aux_conf_m = " + aux_conf_m);

    // Check

    const variables = [aux1_sched, aux1_type, aux1_mode, aux1_state, aux_conf_m];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    if (!isNaN(aux1_mode)) {
        var aux_mode_1 = aux1_mode;

        $('.vigipool_modal_auxiliary_1_off').removeClass("btn-primary");
        $('.vigipool_modal_auxiliary_1_on').removeClass("btn-primary");
        $('.vigipool_modal_auxiliary_1_prog').removeClass("btn-primary");
        $('.vigipool_modal_auxiliary_1_auto').removeClass("btn-primary");

        switch (aux_mode_1) {
            case 0:
                $('.vigipool_modal_auxiliary_1_off').addClass("btn-primary");
                break;
            case 1:
                $('.vigipool_modal_auxiliary_1_on').addClass("btn-primary");
                break;
            case 2:
                $('.vigipool_modal_auxiliary_1_prog').addClass("btn-primary");
                break;
            case 3:
                $('.vigipool_modal_auxiliary_1_auto').addClass("btn-primary");
                break;
            default:
                break;
        }

        //////////////////////////////

    }

    create_program_simple("vigipool_modal_auxiliary_1", 1, aux1_sched);
}

