function update_vigipool_modal_auxiliary_1_prog_1(set_sched_value_save = "") {

    // console.log("///// update_vigipool_modal_all /////");

    // Variables

    if (set_sched_value_save === "") {
        var aux1_sched = get_value_from_position(eq_modal, "aux1_sched");
    } else {
        var aux1_sched = set_sched_value_save;
    }

    // Logs

    // console.log("aux1_sched = " + aux1_sched);

    // Check

    const variables = [aux1_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // Retrieval of sub-variables in the variable

    var begin = get_sched_value(aux1_sched, "programs_number");
    var end = get_sched_value(aux1_sched, "program_1_off_on_and_days");
    $(".slidecontainer").show();

    //    console.log("begin = " + begin);
    //    console.log("end = " + end);

    // Schedule 1
    // At
    $("#vigipool_modal_auxiliary_1_prog_1_sched_1_begin").html(converter("dec", "time_2", parseInt(begin)));
    $("#myvigipool_modal_auxiliary_1_prog_1_sched_1_begin").val(begin);
    // During
    $("#vigipool_modal_auxiliary_1_prog_1_sched_1_end").html(converter("dec", "time_2", parseInt(end)));
    $("#myvigipool_modal_auxiliary_1_prog_1_sched_1_end").val(end);

}

