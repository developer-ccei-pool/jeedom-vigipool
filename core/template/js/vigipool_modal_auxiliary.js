function update_vigipool_modal_auxiliary() {

    // console.log("///// update_vigipool_modal_auxiliary /////");

    // Variables

    var aux_conf = get_value_from_position(eq_modal, "aux_conf");
    var aux_type = get_value_from_position(eq_modal, "aux_type");
    var consigne_temp = get_value_from_position(eq_modal, "consigne_temp");
    var aux_min_temp = get_value_from_position(eq_modal, "aux_min_temp") / 10;
    var aux_sched = get_value_from_position(eq_modal, "aux_sched");

    // Logs

    // console.log("aux_conf = " + aux_conf);
    // console.log("aux_type = " + aux_type);
    // console.log("consigne_temp = " + consigne_temp);
    // console.log("aux_min_temp = " + aux_min_temp);
    // console.log("aux_sched = " + aux_sched);

    // Check

    const variables = [aux_conf, aux_type, consigne_temp, aux_min_temp, aux_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // en_marche

    var en_marche = get_bit(aux_conf, 0);
    switch (en_marche) {
        case 0:
            $('.vigipool_modal_auxiliary_aux_state_on').removeClass("btn-primary");
            $('.vigipool_modal_auxiliary_aux_state_off').addClass("btn-primary");
            break;
        case 1:
            $('.vigipool_modal_auxiliary_aux_state_off').removeClass("btn-primary");
            $('.vigipool_modal_auxiliary_aux_state_on').addClass("btn-primary");
            break;
    }

    // consigne_temp
    if (aux_type !== 2) {
        $("#md_modal > div > h4:nth-child(6)").hide();
        $("#consigne_temp").hide();
        $("#md_modal > div > div:nth-child(8)").hide();
    }

    // aux_min_temp
    if (aux_type !== 3) {
        $("#md_modal > div > h4:nth-child(9)").hide();
        $("#md_modal > div > div:nth-child(11)").hide();
    }

    create_program("vigipool_modal_auxiliary", 1, aux_sched);
    create_program("vigipool_modal_auxiliary", 2, aux_sched);
}