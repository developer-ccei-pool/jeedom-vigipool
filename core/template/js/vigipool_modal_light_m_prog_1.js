function update_vigipool_modal_light_m_prog_1(set_sched_value_save = "") {

    // console.log("///// update_vigipool_modal_all /////");

    // Variables

    if (set_sched_value_save === "") {
        var light_sched = get_value_from_position(eq_modal, "light_sched_m");
    } else {
        var light_sched = set_sched_value_save;
    }

    // Logs

    // console.log("light_sched = " + light_sched);

    // Check

    const variables = [light_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // Retrieval of sub-variables in the variable

    var begin = get_sched_value(light_sched, "programs_number");
    var end = get_sched_value(light_sched, "program_1_off_on_and_days");
    $(".slidecontainer").show();

    //    console.log("begin = " + begin);
    //    console.log("end = " + end);

    // Schedule 1
    // At
    $("#vigipool_modal_light_m_prog_1_sched_1_begin").html(converter("dec", "time_2", parseInt(begin)));
    $("#myvigipool_modal_light_m_prog_1_sched_1_begin").val(begin);
    // During
    $("#vigipool_modal_light_m_prog_1_sched_1_end").html(converter("dec", "time_2", parseInt(end)));
    $("#myvigipool_modal_light_m_prog_1_sched_1_end").val(end);

}

