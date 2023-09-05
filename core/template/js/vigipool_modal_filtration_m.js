function update_vigipool_modal_filtration_m() {

    // console.log("///// update_vigipool_modal_filtration_m /////");

    // Variables

    var filt_mode = get_value_from_position(eq_modal, "filt_mode");
    var filt_sched_m = get_value_from_position(eq_modal, "filt_sched_m");

    // Logs

    // console.log("filt_mode = " + filt_mode);
    // console.log("filt_sched_m = " + filt_sched_m);

    // Check

    const variables = [filt_mode, filt_sched_m];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // filt_mode

    $(".vigipool_modal_filtration_m_off").removeClass("btn-primary");
    $(".vigipool_modal_filtration_m_on").removeClass("btn-primary");
    $(".vigipool_modal_filtration_m_prog").removeClass("btn-primary");
    $(".vigipool_modal_filtration_m_auto").removeClass("btn-primary");

    switch (filt_mode) {
        case 0:
            $(".vigipool_modal_filtration_m_off").addClass("btn-primary");
            break;
        case 1:
            $(".vigipool_modal_filtration_m_on").addClass("btn-primary");
            break;
        case 2:
            $(".vigipool_modal_filtration_m_prog").addClass("btn-primary");
            break;
        case 3:
            $(".vigipool_modal_filtration_m_auto").addClass("btn-primary");
            break;
    }

    // filt_sched_m

    create_program_simple("vigipool_modal_filtration_m", 1, filt_sched_m);
}
