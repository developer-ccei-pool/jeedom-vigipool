function update_vigipool_modal_ely() {

    // console.log("///// update_vigipool_modal_ely /////");

    // Variables

    var mode_ely = get_value_from_position(eq_modal, "mode_ely");
    var mode_choc = get_value_from_position(eq_modal, "mode_choc");
    var prod_on = get_value_from_position(eq_modal, "prod_on");
    var prod_chlore = get_value_from_position(eq_modal, "prod_chlore");
    var power_ely = get_value_from_position(eq_modal, "power_ely");
    var value_temp = get_value_from_position(eq_modal, "value_temp");
    var value_temp_int = get_value_from_position(eq_modal, "value_temp_int");
    var temp_min_off_ely = get_value_from_position(eq_modal, "temp_min_off_ely");
    var water_hardness = get_value_from_position(eq_modal, "water_hardness");
    var ely_duration_theo = get_value_from_position(eq_modal, "ely_duration_theo");
    var consigne_orp = get_value_from_position(eq_modal, "consigne_orp");
    var choc_duration = get_value_from_position(eq_modal, "choc_duration");
    var voltage_ely = get_value_from_position(eq_modal, "voltage_ely");
    var current_ely = get_value_from_position(eq_modal, "current_ely");

    // Logs

    // console.log("mode_ely = " + mode_ely);
    // console.log("mode_choc = " + mode_choc);
    // console.log("prod_on = " + prod_on);
    // console.log("prod_chlore = " + prod_chlore);
    // console.log("power_ely = " + power_ely);
    // console.log("value_temp = " + value_temp);
    // console.log("value_temp_int = " + value_temp_int);
    // console.log("temp_min_off_ely = " + temp_min_off_ely);
    // console.log("water_hardness = " + water_hardness);
    // console.log("ely_duration_theo = " + ely_duration_theo);
    // console.log("consigne_orp = " + consigne_orp);
    // console.log("choc_duration = " + choc_duration);
    // console.log("voltage_ely = " + voltage_ely);
    // console.log("current_ely = " + current_ely);

    // Check
    
    const variables = [mode_ely, mode_choc, prod_on, prod_chlore, power_ely, value_temp, value_temp_int, temp_min_off_ely, water_hardness, ely_duration_theo, consigne_orp, choc_duration, voltage_ely, current_ely];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // mode_ely & mode_choc

    $(".vigipool_modal_ely_mode_off").removeClass("btn-primary");
    $(".vigipool_modal_ely_mode_programmed").removeClass("btn-primary");
    $(".vigipool_modal_ely_mode_auto").removeClass("btn-primary");
    $(".vigipool_modal_ely_mode_regulated").removeClass("btn-primary");

    switch (mode_ely) {
        case 0:
            $(".vigipool_modal_ely_mode_off").addClass("btn-primary");
            $(".vigipool_modal_ely_slider_power_ely").hide();
            $(".vigipool_modal_ely_slider_ely_duration_theo").hide();
            $(".vigipool_modal_ely_slider_consigne_orp").hide();
            $(".vigipool_modal_ely_slider_choc_duration").hide();
            break;
        case 1:
            $(".vigipool_modal_ely_mode_programmed").addClass("btn-primary");
            $(".vigipool_modal_ely_slider_power_ely").show();
            $(".vigipool_modal_ely_slider_ely_duration_theo").show();
            $(".vigipool_modal_ely_slider_consigne_orp").hide();
            $(".vigipool_modal_ely_slider_choc_duration").hide();
            break;
        case 2:
            $(".vigipool_modal_ely_mode_auto").addClass("btn-primary");
            $(".vigipool_modal_ely_slider_power_ely").show();
            $(".vigipool_modal_ely_slider_ely_duration_theo").show();
            $(".vigipool_modal_ely_slider_consigne_orp").hide();
            $(".vigipool_modal_ely_slider_choc_duration").hide();
            break;
        case 3:
            $(".vigipool_modal_ely_mode_regulated").addClass("btn-primary");
            $(".vigipool_modal_ely_slider_power_ely").show();
            $(".vigipool_modal_ely_slider_ely_duration_theo").hide();
            $(".vigipool_modal_ely_slider_consigne_orp").show();
            $(".vigipool_modal_ely_slider_choc_duration").hide();
            break;
    }

    switch (mode_choc) {
        case 0:
            $(".vigipool_modal_ely_mode_shock").removeClass("btn-primary");
            break;
        case 1:
            $(".vigipool_modal_ely_mode_off").removeClass("btn-primary");
            $(".vigipool_modal_ely_mode_programmed").removeClass("btn-primary");
            $(".vigipool_modal_ely_mode_auto").removeClass("btn-primary");
            $(".vigipool_modal_ely_mode_regulated").removeClass("btn-primary");
            $(".vigipool_modal_ely_mode_shock").addClass("btn-primary");
            $(".vigipool_modal_ely_slider_power_ely").hide();
            $(".vigipool_modal_ely_slider_ely_duration_theo").hide();
            $(".vigipool_modal_ely_slider_consigne_orp").hide();
            $(".vigipool_modal_ely_slider_choc_duration").show();
            break;
    }

    // ely_duration_theo

    link_variable_to_buttons(ely_duration_theo, "vigipool_modal_ely_daily_production_duration_", 0, 24);

    // power_ely
    var slider = document.getElementById("mypower_ely");
    if (slider !== undefined && slider !== null) {

        var power = $("#power_ely").html();
        power = power.replaceAll(" ", "");
        power = power.replaceAll("%", "");
        if (power <= 100) {
            $("#md_modal > div > p:nth-child(18)").hide();
        } else {
            $("#md_modal > div > p:nth-child(18)").show();
        }

        slider.onmousemove = function () {
            var power = $("#power_ely").html();
            power = power.replaceAll(" ", "");
            power = power.replaceAll("%", "");
            if (power <= 100) {
                $("#md_modal > div > p:nth-child(18)").hide();
            } else {
                $("#md_modal > div > p:nth-child(18)").show();
            }
        };
    }

    // prod_chlore
    $(".vigipool_modal_ely_instant_chlorine_prod").html(prod_chlore + " g/h");

    // value_temp
    $(".vigipool_modal_ely_temperature").html(value_temp + " °C");

    // temp_min_off_ely
    link_variable_to_buttons(temp_min_off_ely, "vigipool_modal_ely_temp_min_off_ely_", 10, 20);

    // prod_on
    if (prod_on === 0)
        $(".vigipool_modal_ely_chlorine_prod").html(get_text("stopped"));
    if (prod_on === 1)
        $(".vigipool_modal_ely_chlorine_prod").html(get_text("on"));

    // water_hardness
    var slider = document.getElementById("mywater_hardness");
    if (slider !== undefined && slider !== null) {

        var mywater_hardness = parseInt($("#water_hardness").html());
        switch (mywater_hardness) {
            case 0:
                $("#water_hardness").html(get_text("very_soft"));
                break;
            case 1:
                $("#water_hardness").html(get_text("soft"));
                break;
            case 2:
                $("#water_hardness").html(get_text("slightly_soft"));
                break;
            case 3:
                $("#water_hardness").html(get_text("slightly_hard"));
                break;
            case 4:
                $("#water_hardness").html(get_text("hard"));
                break;
            case 5:
                $("#water_hardness").html(get_text("very_hard"));
                break;
        }

        slider.onmousemove = function () {
            var mywater_hardness = parseInt($("#water_hardness").html());
            switch (mywater_hardness) {
                case 0:
                    $("#water_hardness").html(get_text("very_soft"));
                    break;
                case 1:
                    $("#water_hardness").html(get_text("soft"));
                    break;
                case 2:
                    $("#water_hardness").html(get_text("slightly_soft"));
                    break;
                case 3:
                    $("#water_hardness").html(get_text("slightly_hard"));
                    break;
                case 4:
                    $("#water_hardness").html(get_text("hard"));
                    break;
                case 5:
                    $("#water_hardness").html(get_text("very_hard"));
                    break;
            }
        }
    }

    // voltage_ely
    $(".vigipool_modal_ely_voltage").html(voltage_ely + " V");

    // current_ely
    $(".vigipool_modal_ely_amperage").html((current_ely / 10) + " A");

    // value_temp_int
    $(".vigipool_modal_ely_internal_temperature").html((value_temp_int / 10) + " °C");
} 