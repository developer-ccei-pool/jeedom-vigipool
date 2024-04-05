function update_vigipool_modal_x3_state() {

    // console.log("///// update_vigipool_modal_x3_state /////");

    // Variables

    var x3_state = get_value_from_position(eq_modal, "x3_state");

    // Logs

    // console.log("x3_state = " + x3_state);

    // Check

    const variables = [x3_state];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    if (x3_state === 0) {
        $(".vigipool_modal_x3_state_button_off").addClass("btn-primary");
        $(".vigipool_modal_x3_state_button_on").removeClass("btn-primary");
    } else if (x3_state === 1) {
        $(".vigipool_modal_x3_state_button_off").removeClass("btn-primary");
        $(".vigipool_modal_x3_state_button_on").addClass("btn-primary");
    }

    // x3_color

    var x3_color = get_value_from_position(eq_modal, "x3_color");
    // console.log("x3_color = " + x3_color);

    $(".vigipool_modal_x3_state_button_color_picker").val(x3_color);

    if (x3_color === x3_rainbow_value) {
        $(x3_rainbow_button).attr("src", x3_rainbow_image_ok);
        // console.log(x3_color + " === " + x3_rainbow_value);
    } else {
        $(x3_rainbow_button).attr("src", x3_rainbow_image);
        // console.log(x3_color + " !== " + x3_rainbow_value);
    }
    if (x3_color === x3_fun_value) {
        $(x3_fun_button).attr("src", x3_fun_image_ok);
        // console.log(x3_color + " === " + x3_fun_value);
    } else {
        $(x3_fun_button).attr("src", x3_fun_image);
        // console.log(x3_color + " !== " + x3_fun_value);
    }
    if (x3_color === x3_ocean_value) {
        console.log("x3_color === x3_ocean_value");
        console.log("x3_color = " + x3_color);
        console.log("x3_ocean_value = " + x3_ocean_value);
        $(x3_ocean_button).attr("src", x3_ocean_image_ok);
    } else {
        console.log("x3_color !== x3_ocean_value");
        console.log("x3_color = " + x3_color);
        console.log("x3_ocean_value = " + x3_ocean_value);
        $(x3_ocean_button).attr("src", x3_ocean_image);
    }
    if (x3_color === x3_flamme_value) {
        $(x3_flamme_button).attr("src", x3_flamme_image_ok);
        // console.log(x3_color + " === " + x3_flamme_value);
    } else {
        $(x3_flamme_button).attr("src", x3_flamme_image);
        // console.log(x3_color + " !== " + x3_flamme_value);
    }
    if (x3_color === x3_parade_value) {
        $(x3_parade_button).attr("src", x3_parade_image_ok);
        // console.log(x3_color + " === " + x3_parade_value);
    } else {
        $(x3_parade_button).attr("src", x3_parade_image);
        // console.log(x3_color + " !== " + x3_parade_value);
    }
    if (x3_color === x3_elegant_value) {
        $(x3_elegant_button).attr("src", x3_elegant_image_ok);
        // console.log(x3_color + " === " + x3_elegant_value);
    } else {
        $(x3_elegant_button).attr("src", x3_elegant_image);
        // console.log(x3_color + " !== " + x3_elegant_value);
    }
    if (x3_color === x3_horizon_value) {
        $(x3_horizon_button).attr("src", x3_horizon_image_ok);
        // console.log(x3_color + " === " + x3_horizon_value);
    } else {
        $(x3_horizon_button).attr("src", x3_horizon_image);
        // console.log(x3_color + " !== " + x3_horizon_value);
    }
    if (x3_color === x3_psyche_value) {
        $(x3_psyche_button).attr("src", x3_psyche_image_ok);
        // console.log(x3_color + " === " + x3_psyche_value);
    } else {
        $(x3_psyche_button).attr("src", x3_psyche_image);
        // console.log(x3_color + " !== " + x3_psyche_value);
    }

    $(document).ready(function () {
        var x3_bright = get_value_from_position(eq_modal, "x3_bright");
        // console.log("x3_bright = " + x3_bright);
        $("#myx3_bright").value(x3_bright);
    });

    // bright

    // speed

    if (is_sequence(x3_color)) {
        $('.vigipool_modal_x3_state_speed').show();
        $('.vigipool_modal_x3_state_speed_title').show();
    } else {
        $('.vigipool_modal_x3_state_speed').hide();
        $('.vigipool_modal_x3_state_speed_title').hide();
    }

    var background_color_off = "#dbdbdb";
    var color_off = "#7e7e7e";
    var background_color_on = "#758f8d";
    var color_on = "white";

    $('.vigipool_modal_x3_state_speed > th:nth-child(2) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_speed > th:nth-child(2) > p').css("color", color_off);
    $('.vigipool_modal_x3_state_speed > th:nth-child(3) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_speed > th:nth-child(3) > p').css("color", color_off);
    $('.vigipool_modal_x3_state_speed > th:nth-child(4) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_speed > th:nth-child(4) > p').css("color", color_off);

    var x3_speed = get_value_from_position(eq_modal, "x3_speed");

    if (x3_speed === 50) {
        $('.vigipool_modal_x3_state_speed > th:nth-child(2) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_speed > th:nth-child(2) > p').css("color", color_on);
    } else if (x3_speed === 100) {
        $('.vigipool_modal_x3_state_speed > th:nth-child(3) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_speed > th:nth-child(3) > p').css("color", color_on);
    } else if (x3_speed === 150) {
        $('.vigipool_modal_x3_state_speed > th:nth-child(4) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_speed > th:nth-child(4) > p').css("color", color_on);
    }

    $(document).ready(function () {
        var x3_sched = get_value_from_position(eq_modal, "x3_sched");
        var p1_color = get_value_from_position(eq_modal, "p1_color");
        var p2_color = get_value_from_position(eq_modal, "p2_color");
        // console.log("x3_sched = " + x3_sched);
        // console.log("p1_color = " + p1_color);
        // console.log("p2_color = " + p2_color);

        create_program("vigipool_modal_x3_state", 1, x3_sched, p1_color);
        create_program("vigipool_modal_x3_state", 2, x3_sched, p2_color);
    });
}


update_vigipool_modal_x3_state();