function update_vigipool_modal_filtration_m_prog_1(set_sched_value_save = "") {

    // console.log("///// update_vigipool_modal_all /////");

    // Variables

    if (set_sched_value_save === "") {
        var filt_sched_m = get_value_from_position(eq_modal, "filt_sched_m");
    } else {
        var filt_sched_m = set_sched_value_save;
    }

    // Logs

    // console.log("filt_sched_m = " + filt_sched_m);

    // Check

    const variables = [filt_sched_m];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // Retrieval of sub-variables in the variable

    var begin_1 = get_sched_value(filt_sched_m, "programs_number");
    var end_1 = get_sched_value(filt_sched_m, "program_1_off_on_and_days");
    var begin_2 = get_sched_value(filt_sched_m, "program_1_bright");
    var end_2 = get_sched_value(filt_sched_m, "program_1_speed");
    var begin_3 = get_sched_value(filt_sched_m, "program_1_sched_number");
    var end_3 = get_sched_value(filt_sched_m, "program_1_sched_1_begin");

//    console.log("begin_1 = " + begin_1);
//    console.log("end_1 = " + end_1);
//    console.log("begin_2 = " + begin_2);
//    console.log("end_2 = " + end_2);
//    console.log("begin_3 = " + begin_3);
//    console.log("end_3 = " + end_3);


    $(".slidecontainer").show();


    // Schedule 1
    // At
    $("#vigipool_modal_filtration_m_prog_1_sched_1_begin").html(converter("dec", "time_2", parseInt(begin_1)));
    $("#myvigipool_modal_filtration_m_prog_1_sched_1_begin").val(begin_1);
    // During
    $("#vigipool_modal_filtration_m_prog_1_sched_1_end").html(converter("dec", "time_2", parseInt(end_1)));
    $("#myvigipool_modal_filtration_m_prog_1_sched_1_end").val(end_1);
    // Schedule 2
    // At
    $("#vigipool_modal_filtration_m_prog_1_sched_2_begin").html(converter("dec", "time_2", parseInt(begin_2)));
    $("#myvigipool_modal_filtration_m_prog_1_sched_2_begin").val(begin_2);
    // During
    $("#vigipool_modal_filtration_m_prog_1_sched_2_end").html(converter("dec", "time_2", parseInt(end_2)));
    $("#myvigipool_modal_filtration_m_prog_1_sched_2_end").val(end_2);
    // Schedule 1
    // At
    $("#vigipool_modal_filtration_m_prog_1_sched_3_begin").html(converter("dec", "time_2", parseInt(begin_3)));
    $("#myvigipool_modal_filtration_m_prog_1_sched_3_begin").val(begin_3);
    // During
    $("#vigipool_modal_filtration_m_prog_1_sched_3_end").html(converter("dec", "time_2", parseInt(end_3)));
    $("#myvigipool_modal_filtration_m_prog_1_sched_3_end").val(end_3);

    if (begin_2 === 255 || end_2 === 255) {
        $(".vigipool_modal_filtration_m_prog_1_sched_2").hide();
        $(".vigipool_modal_filtration_m_prog_1_sched_2_add").show();
    } else {
        $(".vigipool_modal_filtration_m_prog_1_sched_2").show();
        $(".vigipool_modal_filtration_m_prog_1_sched_2_add").hide();
    }
    if (begin_3 === 255 || end_3 === 255) {
        $(".vigipool_modal_filtration_m_prog_1_sched_3").hide();
        $(".vigipool_modal_filtration_m_prog_1_sched_3_add").show();
    } else {
        $(".vigipool_modal_filtration_m_prog_1_sched_3").show();
        $(".vigipool_modal_filtration_m_prog_1_sched_3_add").hide();
}

}

