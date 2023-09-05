function update_vigipool_modal_light_m() {

    // console.log("///// update_vigipool_modal_light_m /////");

    // Variables

    var light_sched = get_value_from_position(eq_modal, "light_sched_m");
    var light_mode = get_value_from_position(eq_modal, "light_mode");
    var light_type = get_value_from_position(eq_modal, ".light_type_m");
    var light_code = get_value_from_position(eq_modal, ".light_code");
    var light_bright = get_value_from_position(eq_modal, "light_bright");
    var light_speed = get_value_from_position(eq_modal, "light_speed");
    var light_state = get_value_from_position(eq_modal, "light_state_m");

    // Logs

    // console.log("light_sched = " + light_sched);
    // console.log("light_mode = " + light_mode);
    // console.log("light_type = " + light_type);
    // console.log("light_code = " + light_code);
    // console.log("light_bright = " + light_bright);
    // console.log("light_speed = " + light_speed);
    // console.log("light_state = " + light_state);

    // Check

    const variables = [light_sched, light_mode, light_type, light_code, light_bright, light_speed, light_state];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // Bright
    $('.vigipool_modal_light_m_bright > th:nth-child(2) > p').css("background-color", "white");
    $('.vigipool_modal_light_m_bright > th:nth-child(2) > p').css("color", "black");
    $('.vigipool_modal_light_m_bright > th:nth-child(3) > p').css("background-color", "white");
    $('.vigipool_modal_light_m_bright > th:nth-child(3) > p').css("color", "black");
    $('.vigipool_modal_light_m_bright > th:nth-child(4) > p').css("background-color", "white");
    $('.vigipool_modal_light_m_bright > th:nth-child(4) > p').css("color", "black");
    $('.vigipool_modal_light_m_bright > th:nth-child(5) > p').css("background-color", "white");
    $('.vigipool_modal_light_m_bright > th:nth-child(5) > p').css("color", "black");

    if (light_bright === 0) {
        $('.vigipool_modal_light_m_bright > th:nth-child(2) > p').css("background-color", "gray");
        $('.vigipool_modal_light_m_bright > th:nth-child(2) > p').css("color", "white");
    } else if (light_bright === 1) {
        $('.vigipool_modal_light_m_bright > th:nth-child(3) > p').css("background-color", "gray");
        $('.vigipool_modal_light_m_bright > th:nth-child(3) > p').css("color", "white");
    } else if (light_bright === 2) {
        $('.vigipool_modal_light_m_bright > th:nth-child(4) > p').css("background-color", "gray");
        $('.vigipool_modal_light_m_bright > th:nth-child(4) > p').css("color", "white");
    } else if (light_bright === 3) {
        $('.vigipool_modal_light_m_bright > th:nth-child(5) > p').css("background-color", "gray");
        $('.vigipool_modal_light_m_bright > th:nth-child(5) > p').css("color", "white");
    }

    // Speed

    if (light_code > 11) {
        $('.vigipool_modal_light_m_speed').show();
        $('.vigipool_modal_light_m_speed_title').show();
    } else {
        $('.vigipool_modal_light_m_speed').hide();
        $('.vigipool_modal_light_m_speed_title').hide();
    }

    $('.vigipool_modal_light_m_speed > th:nth-child(2) > p').css("background-color", "white");
    $('.vigipool_modal_light_m_speed > th:nth-child(2) > p').css("color", "black");
    $('.vigipool_modal_light_m_speed > th:nth-child(3) > p').css("background-color", "white");
    $('.vigipool_modal_light_m_speed > th:nth-child(3) > p').css("color", "black");
    $('.vigipool_modal_light_m_speed > th:nth-child(4) > p').css("background-color", "white");
    $('.vigipool_modal_light_m_speed > th:nth-child(4) > p').css("color", "black");


    if (light_speed === 0) {
        $('.vigipool_modal_light_m_speed > th:nth-child(2) > p').css("background-color", "gray");
        $('.vigipool_modal_light_m_speed > th:nth-child(2) > p').css("color", "white");
    } else if (light_speed === 1) {
        $('.vigipool_modal_light_m_speed > th:nth-child(3) > p').css("background-color", "gray");
        $('.vigipool_modal_light_m_speed > th:nth-child(3) > p').css("color", "white");
    } else if (light_speed === 2) {
        $('.vigipool_modal_light_m_speed > th:nth-child(4) > p').css("background-color", "gray");
        $('.vigipool_modal_light_m_speed > th:nth-child(4) > p').css("color", "white");
    }

    //////////////////////////////

    // if (isset(light_sched)) {
    //     var vigipool_light_sched_prog_begin_hex = light_sched[0] + light_sched[1];
    //     var vigipool_light_sched_prog_end_hex = light_sched[2] + light_sched[3];
    //     var begin = converter("hex", "time_2", vigipool_light_sched_prog_begin_hex);
    //     var end = converter("hex", "time_2", vigipool_light_sched_prog_end_hex);
    //
    //     var duration = converter("hex", "dec", vigipool_light_sched_prog_end_hex) - converter("hex", "dec", vigipool_light_sched_prog_begin_hex);
    //     duration = converter("dec", "time_2", duration);
    //
    //     $(".vigipool_modal_light_1_prog_begin_end").html(get_text("from") + " " + begin + " " + get_text("to") + " " + end);
    //     $(".vigipool_modal_light_1_prog_duration").html(duration + "h / " + get_text("day"));
    // }

    create_program_simple("vigipool_modal_light_m", 1, light_sched);

    //////////////////////////////

    switch (light_mode) {
        case 0:
            $(".vigipool_modal_light_m_button_off").addClass("btn-primary");
            $(".vigipool_modal_light_m_button_on").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_prog").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_auto").removeClass("btn-primary");
            break;
        case 1:
            $(".vigipool_modal_light_m_button_off").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_on").addClass("btn-primary");
            $(".vigipool_modal_light_m_button_prog").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_auto").removeClass("btn-primary");
            break;
        case 2:
            $(".vigipool_modal_light_m_button_off").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_on").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_prog").addClass("btn-primary");
            $(".vigipool_modal_light_m_button_auto").removeClass("btn-primary");
            break;
        case 3:
            $(".vigipool_modal_light_m_button_off").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_on").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_prog").removeClass("btn-primary");
            $(".vigipool_modal_light_m_button_auto").addClass("btn-primary");
            break;
    }

    hide_checks_anteam();

    switch (light_code) {
        case 0:
            $(".vigipool_modal_light_m_warm_button > img").show();
            $(".vigipool_modal_light_m_warm_label").css("opacity", "50%");
            break;
        case 1:
            $(".vigipool_modal_light_m_cold_button > img").show();
            $(".vigipool_modal_light_m_cold_label").css("opacity", "50%");
            break;
        case 2:
            $(".vigipool_modal_light_m_blue_button > img").show();
            $(".vigipool_modal_light_m_blue_label").css("opacity", "50%");
            break;
        case 3:
            $(".vigipool_modal_light_m_lagoon_button > img").show();
            $(".vigipool_modal_light_m_lagoon_label").css("opacity", "50%");
            break;
        case 4:
            $(".vigipool_modal_light_m_cyan_button > img").show();
            $(".vigipool_modal_light_m_cyan_label").css("opacity", "50%");
            break;
        case 10:
            $(".vigipool_modal_light_m_green_button > img").show();
            $(".vigipool_modal_light_m_green_label").css("opacity", "50%");
            break;
        case 5:
            $(".vigipool_modal_light_m_purple_button > img").show();
            $(".vigipool_modal_light_m_purple_label").css("opacity", "50%");
            break;
        case 6:
            $(".vigipool_modal_light_m_magenta_button > img").show();
            $(".vigipool_modal_light_m_magenta_label").css("opacity", "50%");
            break;
        case 7:
            $(".vigipool_modal_light_m_pink_button > img").show();
            $(".vigipool_modal_light_m_pink_label").css("opacity", "50%");
            break;
        case 8:
            $(".vigipool_modal_light_m_red_button > img").show();
            $(".vigipool_modal_light_m_red_label").css("opacity", "50%");
            break;
        case 9:
            $(".vigipool_modal_light_m_orange_button > img").show();
            $(".vigipool_modal_light_m_orange_label").css("opacity", "50%");
            break;
        case 11:
            $(".vigipool_modal_light_m_favorite_button > img").show();
            $(".vigipool_modal_light_m_favorite_label").css("opacity", "50%");
            break;
        case 16:
            $(".vigipool_modal_light_m_gradiant_button > img").css("opacity", "100%");
            $(".vigipool_modal_light_m_gradiant_label").css("opacity", "50%");
            break;
        case 17:
            $(".vigipool_modal_light_m_rainbow_button > img").css("opacity", "100%");
            $(".vigipool_modal_light_m_rainbow_label").css("opacity", "50%");
            break;
        case 18:
            $(".vigipool_modal_light_m_parade_button > img").css("opacity", "100%");
            $(".vigipool_modal_light_m_parade_label").css("opacity", "50%");
            break;
        case 19:
            $(".vigipool_modal_light_m_techno_button > img").css("opacity", "100%");
            $(".vigipool_modal_light_m_techno_label").css("opacity", "50%");
            break;
        case 20:
            $(".vigipool_modal_light_m_horizon_button > img").css("opacity", "100%");
            $(".vigipool_modal_light_m_horizon_label").css("opacity", "50%");
            break;
        case 21:
            $(".vigipool_modal_light_m_random_button > img").css("opacity", "100%");
            $(".vigipool_modal_light_m_random_label").css("opacity", "50%");
            break;
        case 22:
            $(".vigipool_modal_light_m_magical_button > img").css("opacity", "100%");
            $(".vigipool_modal_light_m_magical_label").css("opacity", "50%");
            break;
    }

}



function hide_checks_anteam() {
    $('.vigipool_modal_light_m_warm_button > img').hide();
    $('.vigipool_modal_light_m_cold_button > img').hide();
    $('.vigipool_modal_light_m_blue_button > img').hide();
    $('.vigipool_modal_light_m_lagoon_button > img').hide();
    $('.vigipool_modal_light_m_cyan_button > img').hide();
    $('.vigipool_modal_light_m_green_button > img').hide();
    $('.vigipool_modal_light_m_purple_button > img').hide();
    $('.vigipool_modal_light_m_magenta_button > img').hide();
    $('.vigipool_modal_light_m_pink_button > img').hide();
    $('.vigipool_modal_light_m_red_button > img').hide();
    $('.vigipool_modal_light_m_orange_button > img').hide();
    $('.vigipool_modal_light_m_favorite_button > img').hide();

    $('.vigipool_modal_light_m_warm_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_cold_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_blue_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_lagoon_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_cyan_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_green_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_purple_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_magenta_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_pink_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_red_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_orange_label').css("opacity", "100%");
    $('.vigipool_modal_light_m_favorite_label').css("opacity", "100%");

    $(".vigipool_modal_light_m_gradiant_button > img").css("opacity", "0%");
    $(".vigipool_modal_light_m_gradiant_label").css("opacity", "100%");
    $(".vigipool_modal_light_m_rainbow_button > img").css("opacity", "0%");
    $(".vigipool_modal_light_m_rainbow_label").css("opacity", "100%");
    $(".vigipool_modal_light_m_parade_button > img").css("opacity", "0%");
    $(".vigipool_modal_light_m_parade_label").css("opacity", "100%");
    $(".vigipool_modal_light_m_techno_button > img").css("opacity", "0%");
    $(".vigipool_modal_light_m_techno_label").css("opacity", "100%");
    $(".vigipool_modal_light_m_horizon_button > img").css("opacity", "0%");
    $(".vigipool_modal_light_m_horizon_label").css("opacity", "100%");
    $(".vigipool_modal_light_m_random_button > img").css("opacity", "0%");
    $(".vigipool_modal_light_m_random_label").css("opacity", "100%");
    $(".vigipool_modal_light_m_magical_button > img").css("opacity", "0%");
    $(".vigipool_modal_light_m_magical_label").css("opacity", "100%");
}
