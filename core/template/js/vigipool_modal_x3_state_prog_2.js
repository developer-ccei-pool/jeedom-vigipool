function update_vigipool_modal_x3_state_prog_2(set_sched_value_save = "") {

    // console.log("///// update_vigipool_modal_x3_state_prog_2 /////");

    // Variables

    if (set_sched_value_save === "") {
        var x3_sched = get_value_from_position(eq_modal, "x3_sched");
    } else {
        var x3_sched = set_sched_value_save;
    }

    // Logs

    // console.log("x3_sched = " + x3_sched);

    // Check

    const variables = [x3_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display
    
    var p2_color = get_value_from_position(eq_modal, "p2_color");

    var programs_number = get_sched_value(x3_sched, "programs_number");
    var program_2_off_on_and_days = get_sched_value(x3_sched, "program_2_off_on_and_days");
    var program_2_bright = get_sched_value(x3_sched, "program_2_bright");
    var program_2_speed = get_sched_value(x3_sched, "program_2_speed");
    var program_2_sched_number = get_sched_value(x3_sched, "program_2_sched_number");
    var program_2_sched_1_begin = get_sched_value(x3_sched, "program_2_sched_1_begin");
    var program_2_sched_1_end = fix_end_dec(get_sched_value(x3_sched, "program_2_sched_1_end"));
    var program_2_sched_2_begin = get_sched_value(x3_sched, "program_2_sched_2_begin");
    var program_2_sched_2_end = fix_end_dec(get_sched_value(x3_sched, "program_2_sched_2_end"));
    var program_2_sched_3_begin = get_sched_value(x3_sched, "program_2_sched_3_begin");
    var program_2_sched_3_end = fix_end_dec(get_sched_value(x3_sched, "program_2_sched_3_end"));
    var program_2_off_on = get_sched_value(x3_sched, "program_2_off_on");
    var program_2_samedi = get_sched_value(x3_sched, "program_2_samedi");
    var program_2_vendredi = get_sched_value(x3_sched, "program_2_vendredi");
    var program_2_jeudi = get_sched_value(x3_sched, "program_2_jeudi");
    var program_2_mercredi = get_sched_value(x3_sched, "program_2_mercredi");
    var program_2_mardi = get_sched_value(x3_sched, "program_2_mardi");
    var program_2_lundi = get_sched_value(x3_sched, "program_2_lundi");
    var program_2_dimanche = get_sched_value(x3_sched, "program_2_dimanche");

    // console.log("programs_number = " + programs_number);
    // console.log("program_2_off_on_and_days = " + program_2_off_on_and_days);
    // console.log("program_2_bright = " + program_2_bright);
    // console.log("program_2_speed = " + program_2_speed);
    // console.log("program_2_sched_number = " + program_2_sched_number);
    // console.log("program_2_sched_1_begin = " + program_2_sched_1_begin);
    // console.log("program_2_sched_1_end = " + program_2_sched_1_end);
    // console.log("program_2_sched_2_begin = " + program_2_sched_2_begin);
    // console.log("program_2_sched_2_end = " + program_2_sched_2_end);
    // console.log("program_2_sched_3_begin = " + program_2_sched_3_begin);
    // console.log("program_2_sched_3_end = " + program_2_sched_3_end);
    // console.log("program_2_off_on = " + program_2_off_on);
    // console.log("program_2_samedi = " + program_2_samedi);
    // console.log("program_2_vendredi = " + program_2_vendredi);
    // console.log("program_2_jeudi = " + program_2_jeudi);
    // console.log("program_2_mercredi = " + program_2_mercredi);
    // console.log("program_2_mardi = " + program_2_mardi);
    // console.log("program_2_lundi = " + program_2_lundi);
    // console.log("program_2_dimanche = " + program_2_dimanche);

    if (isNaN(program_2_sched_1_begin))
        program_2_sched_1_begin = 0;
    if (isNaN(program_2_sched_1_end))
        program_2_sched_1_end = 0;
    if (isNaN(program_2_sched_2_begin))
        program_2_sched_2_begin = 0;
    if (isNaN(program_2_sched_2_end))
        program_2_sched_2_end = 0;
    if (isNaN(program_2_sched_3_begin))
        program_2_sched_3_begin = 0;
    if (isNaN(program_2_sched_3_end))
        program_2_sched_3_end = 0;

    // State

    if (program_2_off_on === 0) {
        $(".vigipool_modal_x3_state_prog_2_button_off").addClass("btn-primary");
        $(".vigipool_modal_x3_state_prog_2_button_on").removeClass("btn-primary");
    } else if (program_2_off_on === 1) {
        $(".vigipool_modal_x3_state_prog_2_button_off").removeClass("btn-primary");
        $(".vigipool_modal_x3_state_prog_2_button_on").addClass("btn-primary");
    }

    // Color picker

    $(".vigipool_modal_x3_state_prog_2_button_color_picker").val(p2_color);

    // Saved colors 
    // Sequences

    if (p2_color === x3_rainbow_value) {
        $(x3_rainbow_button).attr("src", x3_rainbow_image_ok);
        // console.log(p2_color + " === " + x3_rainbow_value);
    } else {
        $(x3_rainbow_button).attr("src", x3_rainbow_image);
        // console.log(p2_color + " !== " + x3_rainbow_value);
    }
    if (p2_color === x3_fun_value) {
        $(x3_fun_button).attr("src", x3_fun_image_ok);
        // console.log(p2_color + " === " + x3_fun_value);
    } else {
        $(x3_fun_button).attr("src", x3_fun_image);
        // console.log(p2_color + " !== " + x3_fun_value);
    }
    if (p2_color === x3_ocean_value) {
        $(x3_ocean_button).attr("src", x3_ocean_image_ok);
        // console.log(p2_color + " === " + x3_ocean_value);
    } else {
        $(x3_ocean_button).attr("src", x3_ocean_image);
        // console.log(p2_color + " !== " + x3_ocean_value);
    }
    if (p2_color === x3_flamme_value) {
        $(x3_flamme_button).attr("src", x3_flamme_image_ok);
        // console.log(p2_color + " === " + x3_flamme_value);
    } else {
        $(x3_flamme_button).attr("src", x3_flamme_image);
        // console.log(p2_color + " !== " + x3_flamme_value);
    }
    if (p2_color === x3_parade_value) {
        $(x3_parade_button).attr("src", x3_parade_image_ok);
        // console.log(p2_color + " === " + x3_parade_value);
    } else {
        $(x3_parade_button).attr("src", x3_parade_image);
        // console.log(p2_color + " !== " + x3_parade_value);
    }
    if (p2_color === x3_elegant_value) {
        $(x3_elegant_button).attr("src", x3_elegant_image_ok);
        // console.log(p2_color + " === " + x3_elegant_value);
    } else {
        $(x3_elegant_button).attr("src", x3_elegant_image);
        // console.log(p2_color + " !== " + x3_elegant_value);
    }
    if (p2_color === x3_horizon_value) {
        $(x3_horizon_button).attr("src", x3_horizon_image_ok);
        // console.log(p2_color + " === " + x3_horizon_value);
    } else {
        $(x3_horizon_button).attr("src", x3_horizon_image);
        // console.log(p2_color + " !== " + x3_horizon_value);
    }
    if (p2_color === x3_psyche_value) {
        $(x3_psyche_button).attr("src", x3_psyche_image_ok);
        // console.log(p2_color + " === " + x3_psyche_value);
    } else {
        $(x3_psyche_button).attr("src", x3_psyche_image);
        // console.log(p2_color + " !== " + x3_psyche_value);
    }

    // Schedule 1
    // At
    $("#vigipool_modal_x3_state_prog_2_sched_1_begin").html(converter("dec", "time_4", parseInt(program_2_sched_1_begin)));
    $("#myvigipool_modal_x3_state_prog_2_sched_1_begin").val(program_2_sched_1_begin);
    // During
    $("#vigipool_modal_x3_state_prog_2_sched_1_end").html(converter("dec", "time_4", parseInt(program_2_sched_1_end)));
    $("#myvigipool_modal_x3_state_prog_2_sched_1_end").val(program_2_sched_1_end);

    // Schedule 2
    // At
    $("#vigipool_modal_x3_state_prog_2_sched_2_begin").html(converter("dec", "time_4", parseInt(program_2_sched_2_begin)));
    $("#myvigipool_modal_x3_state_prog_2_sched_2_begin").val(program_2_sched_2_begin);
    // During
    $("#vigipool_modal_x3_state_prog_2_sched_2_end").html(converter("dec", "time_4", parseInt(program_2_sched_2_end)));
    $("#myvigipool_modal_x3_state_prog_2_sched_2_end").val(program_2_sched_2_end);

    // Schedule 3
    // At
    $("#vigipool_modal_x3_state_prog_2_sched_3_begin").html(converter("dec", "time_4", parseInt(program_2_sched_3_begin)));
    $("#myvigipool_modal_x3_state_prog_2_sched_3_begin").val(program_2_sched_3_begin);
    // During
    $("#vigipool_modal_x3_state_prog_2_sched_3_end").html(converter("dec", "time_4", parseInt(program_2_sched_3_end)));
    $("#myvigipool_modal_x3_state_prog_2_sched_3_end").val(program_2_sched_3_end);

    if (program_2_sched_2_begin === 0 && program_2_sched_2_end === 0) {
        $(".vigipool_modal_x3_state_prog_2_sched_2").hide();
        $(".vigipool_modal_x3_state_prog_2_sched_2_add").show();
    } else {
        $(".vigipool_modal_x3_state_prog_2_sched_2").show();
        $(".vigipool_modal_x3_state_prog_2_sched_2_add").hide();
    }
    if (program_2_sched_3_begin === 0 && program_2_sched_3_end === 0) {
        $(".vigipool_modal_x3_state_prog_2_sched_3").hide();
        $(".vigipool_modal_x3_state_prog_2_sched_3_add").show();
    } else {
        $(".vigipool_modal_x3_state_prog_2_sched_3").show();
        $(".vigipool_modal_x3_state_prog_2_sched_3_add").hide();
    }

    // Brightness
    $("#vigipool_modal_x3_state_prog_2_bright").val(program_2_bright);

    // Speed
    if (is_sequence(p2_color)) {
        $('.vigipool_modal_x3_state_prog_2_speed').show();
        $('.vigipool_modal_x3_state_prog_2_speed_title').show();
    } else {
        $('.vigipool_modal_x3_state_prog_2_speed').hide();
        $('.vigipool_modal_x3_state_prog_2_speed_title').hide();
    }

    var background_color_off = "#dbdbdb";
    var color_off = "#7e7e7e";
    var background_color_on = "#758f8d";
    var color_on = "white";

    $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(2) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(2) > p').css("color", color_off);
    $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(3) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(3) > p').css("color", color_off);
    $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(4) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(4) > p').css("color", color_off);

    if (program_2_speed === 50) {
        $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(2) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(2) > p').css("color", color_on);
    } else if (program_2_speed === 100) {
        $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(3) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(3) > p').css("color", color_on);
    } else if (program_2_speed === 150) {
        $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(4) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_prog_2_speed > th:nth-child(4) > p').css("color", color_on);
    }

    // Scheduling
    // Program 1
    create_program("vigipool_modal_x3_state_prog_2", 2, x3_sched, p2_color);
}

