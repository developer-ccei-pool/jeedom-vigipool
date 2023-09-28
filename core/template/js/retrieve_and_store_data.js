console.log("///// NEW DEVICE /////");

var x3_rainbow_value = "S#FF000094#FFFF0094#00FF0094#00FFFF94#0000FF94#FF00FF94";
var x3_fun_value = "S#FF000027#FFFF0027#0000FF27#00FF0027#00FFFF27#FF00FF27#FFFFFF27";
var x3_ocean_value = "S#0000FF32KFF32#008AFF32KFF32#00D8FF32KFF32#00DCD432KFF32#18FFFF32KFF32#01579B32KFF32#039BE532KFF32#00FFFF32KFF32";
var x3_flamme_value = "S#FD31034B#FE88174B#FD4E0A2B#FE6B104B#FFDD004B#FE88172D#FFDD004B#FE88176B";
var x3_parade_value = "S#FFFF00FE#00FF00FE#18FFFFFEKFFFE#FF00FFFE#9C27B0FE#FF0000FE#FFAB40FEK3CFE";
var x3_elegant_value = "SK8038KBF38KFF38KBF38K4438K0038K4438";
var x3_horizon_value = "S#0000FF7FK897F#04FFFF7F";
var x3_psyche_value = "S#FF005004#00000000#0000FF04#00000000#15EDFF04#00000000#C000FF04#00000000#FFFF0004#00000000#FF00FF04#00000000";

var x3_rainbow_button = ".vigipool_modal_x3_state_rainbow_button > img";
var x3_fun_button = ".vigipool_modal_x3_state_fun_button > img";
var x3_ocean_button = ".vigipool_modal_x3_state_ocean_button > img";
var x3_flamme_button = ".vigipool_modal_x3_state_flamme_button > img";
var x3_parade_button = ".vigipool_modal_x3_state_parade_button > img";
var x3_elegant_button = ".vigipool_modal_x3_state_elegant_button > img";
var x3_horizon_button = ".vigipool_modal_x3_state_horizon_button > img";
var x3_psyche_button = ".vigipool_modal_x3_state_psyche_button > img";

var x3_prog_1_rainbow_button = ".vigipool_modal_x3_state_prog_1_rainbow_button > img";
var x3_prog_1_fun_button = ".vigipool_modal_x3_state_prog_1_fun_button > img";
var x3_prog_1_ocean_button = ".vigipool_modal_x3_state_prog_1_ocean_button > img";
var x3_prog_1_flamme_button = ".vigipool_modal_x3_state_prog_1_flamme_button > img";
var x3_prog_1_parade_button = ".vigipool_modal_x3_state_prog_1_parade_button > img";
var x3_prog_1_elegant_button = ".vigipool_modal_x3_state_prog_1_elegant_button > img";
var x3_prog_1_horizon_button = ".vigipool_modal_x3_state_prog_1_horizon_button > img";
var x3_prog_1_psyche_button = ".vigipool_modal_x3_state_prog_1_psyche_button > img";

var x3_prog_2_rainbow_button = ".vigipool_modal_x3_state_prog_2_rainbow_button > img";
var x3_prog_2_fun_button = ".vigipool_modal_x3_state_prog_2_fun_button > img";
var x3_prog_2_ocean_button = ".vigipool_modal_x3_state_prog_2_ocean_button > img";
var x3_prog_2_flamme_button = ".vigipool_modal_x3_state_prog_2_flamme_button > img";
var x3_prog_2_parade_button = ".vigipool_modal_x3_state_prog_2_parade_button > img";
var x3_prog_2_elegant_button = ".vigipool_modal_x3_state_prog_2_elegant_button > img";
var x3_prog_2_horizon_button = ".vigipool_modal_x3_state_prog_2_horizon_button > img";
var x3_prog_2_psyche_button = ".vigipool_modal_x3_state_prog_2_psyche_button > img";

var x3_rainbow_image = "/plugins/vigipool/desktop/img/x3_rainbow.png";
var x3_fun_image = "/plugins/vigipool/desktop/img/x3_fun.png";
var x3_ocean_image = "/plugins/vigipool/desktop/img/x3_ocean.png";
var x3_flamme_image = "/plugins/vigipool/desktop/img/x3_flamme.png";
var x3_parade_image = "/plugins/vigipool/desktop/img/x3_parade.png";
var x3_elegant_image = "/plugins/vigipool/desktop/img/x3_elegant.png";
var x3_horizon_image = "/plugins/vigipool/desktop/img/x3_horizon.png";
var x3_psyche_image = "/plugins/vigipool/desktop/img/x3_psyche.png";

var x3_rainbow_image_ok = "/plugins/vigipool/desktop/img/x3_rainbow_ok.png";
var x3_fun_image_ok = "/plugins/vigipool/desktop/img/x3_fun_ok.png";
var x3_ocean_image_ok = "/plugins/vigipool/desktop/img/x3_ocean_ok.png";
var x3_flamme_image_ok = "/plugins/vigipool/desktop/img/x3_flamme_ok.png";
var x3_parade_image_ok = "/plugins/vigipool/desktop/img/x3_parade_ok.png";
var x3_elegant_image_ok = "/plugins/vigipool/desktop/img/x3_elegant_ok.png";
var x3_horizon_image_ok = "/plugins/vigipool/desktop/img/x3_horizon_ok.png";
var x3_psyche_image_ok = "/plugins/vigipool/desktop/img/x3_psyche_ok.png";

if (eq === undefined || eq >= $(".vigipool_ipaddr").length - 1) {
    var eq = 0;
    var global_equipment_table = new Array();
} else {
    eq = eq + 1;
}

function create_ui_options_click(file_name) {
    access_modal(`.${file_name}_see_advanced_options`, `${file_name}_advanced_options`, 0, eq_modal);
}

function variable_check(variables) {
    for (var i = 0, max = variables.length; i < max; i++) {
        var variable = variables[i];
        // console.log("variable = " + variable);

        if (variable === undefined)
            continue;
        if (variable >= 0)
            return true;
        if (variable.length > 0)
            return true;
    }

    return false;
}

function get_value_from_position(eq_modal, variable) {

    // console.log("eq_modal = " + eq_modal);
    // console.log("variable = " + variable);

    var html = $(".vigipool_" + variable).eq(eq_modal).html();
    // console.log("html = " + html);

    if (variable === "consigne_orp")
        html = fix_consigne_orp(eq_modal, variable, html);
    if (variable === "value_temp")
        html = fix_value_temp(eq_modal, variable, html);
    if (variable === "light_sched")
        return html;
    if (variable === "filt_sched")
        return html;
    if (variable === "aux_sched")
        return html;
    if (variable === "light_sched_m")
        return html;
    if (variable === "filt_sched_m")
        return html;
    if (variable === "aux1_sched")
        return html;
    if (variable === "aux2_sched")
        return html;

    // console.log("html = " + html);

    if (ValidateIPaddress(html)) {
        // console.log("TYPE : 1");
        return html;
    }

    if (html === undefined || html === "") {
        // console.log("TYPE : 2");
        return undefined;
    }

    if (html.includes("A") || html.includes("B") || html.includes("C") || html.includes("D") || html.includes("E") || html.includes("F") || html.includes(" ")) {
        // console.log("TYPE : 3");
        return html;
    }

    if (html.includes(".")) {
        // console.log("TYPE : 4");
        return parseFloat(html);
    }

    if (html.includes(",")) {
        // console.log("TYPE : 5");
        return parseFloat(html);
    }

    if (!isNaN(html)) {
        // console.log("TYPE : 6");
        return parseInt(html);
    }

    return html;
}

function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return true;
    }
    return false;
}

function fix_consigne_orp(eq_modal, variable, html) {

    eq_modal = parseInt(eq_modal);

    if (variable === "consigne_orp" && parseInt(html) < 450 || parseInt(html) > 850) {
        html = $(".vigipool_" + variable).eq(eq_modal + 1).html();
    }
    if (variable === "consigne_orp" && parseInt(html) < 450 || parseInt(html) > 850) {
        html = $(".vigipool_" + variable).eq(eq_modal + 2).html();
    }
    if (variable === "consigne_orp" && parseInt(html) < 450 || parseInt(html) > 850) {
        html = $(".vigipool_" + variable).eq(eq_modal - 1).html();
    }
    if (variable === "consigne_orp" && parseInt(html) < 450 || parseInt(html) > 850) {
        html = $(".vigipool_" + variable).eq(eq_modal - 2).html();
    }

    return html;
}

function fix_value_temp(eq_modal, variable, html) {

    eq_modal = parseInt(eq_modal);

    if (variable === "value_temp" && parseInt(html) < 20 || parseInt(html) > 40) {
        html = $(".vigipool_" + variable).eq(eq_modal + 1).html();
    }
    if (variable === "value_temp" && parseInt(html) < 20 || parseInt(html) > 40) {
        html = $(".vigipool_" + variable).eq(eq_modal + 2).html();
    }
    if (variable === "value_temp" && parseInt(html) < 20 || parseInt(html) > 40) {
        html = $(".vigipool_" + variable).eq(eq_modal - 1).html();
    }
    if (variable === "value_temp" && parseInt(html) < 20 || parseInt(html) > 40) {
        html = $(".vigipool_" + variable).eq(eq_modal - 2).html();
    }

    return html;
}

function get_value_from_eq(eq_position, variable, equipement)
{
    var all_mqtt_data = get_all_mqtt_data();

    var eq_mqtt_data = all_mqtt_data[eq_position];

    for (var i = 0, max = eq_mqtt_data.length; i < max; i++) {

        var eq_mqtt_line = eq_mqtt_data[i];

        if (eq_mqtt_line.includes(equipement + "_")) {
            if (eq_mqtt_line.includes("/" + variable + "/")) {
                return eq_mqtt_line.split(" ")[1];
            }
        }
    }

    return get_value_from_position(eq_position, "variable");

}

function create_program(file_name, sched_number, variable_sched, color = "") {



    if (variable_sched === undefined) {
        return;
    }

    // console.log("file_name = " + file_name);
    // console.log("sched_number = " + sched_number);
    // console.log("variable_sched = " + variable_sched);
    // console.log("color = " + color);

    if (sched_number === 1) {
        var program_1_off_on = get_sched_value(variable_sched, "program_1_off_on");
        // console.log("program_1_off_on = " + program_1_off_on);
        var program_1_samedi = get_sched_value(variable_sched, "program_1_samedi");
        // console.log("program_1_samedi = " + program_1_samedi);
        var program_1_vendredi = get_sched_value(variable_sched, "program_1_vendredi");
        // console.log("program_1_vendredi = " + program_1_vendredi);
        var program_1_jeudi = get_sched_value(variable_sched, "program_1_jeudi");
        // console.log("program_1_jeudi = " + program_1_jeudi);
        var program_1_mercredi = get_sched_value(variable_sched, "program_1_mercredi");
        // console.log("program_1_mercredi = " + program_1_mercredi);
        var program_1_mardi = get_sched_value(variable_sched, "program_1_mardi");
        // console.log("program_1_mardi = " + program_1_mardi);
        var program_1_lundi = get_sched_value(variable_sched, "program_1_lundi");
        // console.log("program_1_lundi = " + program_1_lundi);
        var program_1_dimanche = get_sched_value(variable_sched, "program_1_dimanche");
        // console.log("program_1_dimanche = " + program_1_dimanche);

        var programmation_selected_prog_off_on = program_1_off_on;
        // console.log("programmation_selected_prog_off_on = " + programmation_selected_prog_off_on);
        var programmation_selected_prog_samedi = program_1_samedi;
        // console.log("programmation_selected_prog_samedi = " + programmation_selected_prog_samedi);
        var programmation_selected_prog_vendredi = program_1_vendredi;
        // console.log("programmation_selected_prog_vendredi = " + programmation_selected_prog_vendredi);
        var programmation_selected_prog_jeudi = program_1_jeudi;
        // console.log("programmation_selected_prog_jeudi = " + programmation_selected_prog_jeudi);
        var programmation_selected_prog_mercredi = program_1_mercredi;
        // console.log("programmation_selected_prog_mercredi = " + programmation_selected_prog_mercredi);
        var programmation_selected_prog_mardi = program_1_mardi;
        // console.log("programmation_selected_prog_mardi = " + programmation_selected_prog_mardi);
        var programmation_selected_prog_lundi = program_1_lundi;
        // console.log("programmation_selected_prog_lundi = " + programmation_selected_prog_lundi);
        var programmation_selected_prog_dimanche = program_1_dimanche;
        // console.log("programmation_selected_prog_dimanche = " + programmation_selected_prog_dimanche);

        var programmation_selected_duration = get_sched_duration(variable_sched, 1);
        // console.log("programmation_selected_duration = " + programmation_selected_duration);
    }
    if (sched_number === 2) {
        var program_2_off_on = get_sched_value(variable_sched, "program_2_off_on");
        // console.log("program_2_off_on = " + program_2_off_on);
        var program_2_samedi = get_sched_value(variable_sched, "program_2_samedi");
        // console.log("program_2_samedi = " + program_2_samedi);
        var program_2_vendredi = get_sched_value(variable_sched, "program_2_vendredi");
        // console.log("program_2_vendredi = " + program_2_vendredi);
        var program_2_jeudi = get_sched_value(variable_sched, "program_2_jeudi");
        // console.log("program_2_jeudi = " + program_2_jeudi);
        var program_2_mercredi = get_sched_value(variable_sched, "program_2_mercredi");
        // console.log("program_2_mercredi = " + program_2_mercredi);
        var program_2_mardi = get_sched_value(variable_sched, "program_2_mardi");
        // console.log("program_2_mardi = " + program_2_mardi);
        var program_2_lundi = get_sched_value(variable_sched, "program_2_lundi");
        // console.log("program_2_lundi = " + program_2_lundi);
        var program_2_dimanche = get_sched_value(variable_sched, "program_2_dimanche");
        // console.log("program_2_dimanche = " + program_2_dimanche);

        var programmation_selected_prog_off_on = program_2_off_on;
        // console.log("programmation_selected_prog_off_on = " + programmation_selected_prog_off_on);
        var programmation_selected_prog_samedi = program_2_samedi;
        // console.log("programmation_selected_prog_samedi = " + programmation_selected_prog_samedi);
        var programmation_selected_prog_vendredi = program_2_vendredi;
        // console.log("programmation_selected_prog_vendredi = " + programmation_selected_prog_vendredi);
        var programmation_selected_prog_jeudi = program_2_jeudi;
        // console.log("programmation_selected_prog_jeudi = " + programmation_selected_prog_jeudi);
        var programmation_selected_prog_mercredi = program_2_mercredi;
        // console.log("programmation_selected_prog_mercredi = " + programmation_selected_prog_mercredi);
        var programmation_selected_prog_mardi = program_2_mardi;
        // console.log("programmation_selected_prog_mardi = " + programmation_selected_prog_mardi);
        var programmation_selected_prog_lundi = program_2_lundi;
        // console.log("programmation_selected_prog_lundi = " + programmation_selected_prog_lundi);
        var programmation_selected_prog_dimanche = program_2_dimanche;
        // console.log("programmation_selected_prog_dimanche = " + programmation_selected_prog_dimanche);

        var programmation_selected_duration = get_sched_duration(variable_sched, 2);
        // console.log("programmation_selected_duration = " + programmation_selected_duration);
    }

    if (programmation_selected_prog_off_on === 0) {
        $(`.${file_name}_${sched_number}_off_on`).html("<p style=\"color:red;\">OFF</p>");
    }
    if (programmation_selected_prog_off_on === 1) {
        $(`.${file_name}_${sched_number}_off_on`).html("<p style=\"color:green;\">ON</p>");
    }
    if (programmation_selected_prog_lundi === 0)
    {
        $(`.${file_name}_${sched_number}_lundi`).addClass("vigipool_prog_off");
        $(`.${file_name}_${sched_number}_lundi`).removeClass("vigipool_prog_on");
        // console.log("test = ");
        // console.log(`$(` + `.${file_name}_${sched_number}_lundi` + `).addClass("vigipool_prog_off");`);
    }
    if (programmation_selected_prog_mardi === 0)
    {
        $(`.${file_name}_${sched_number}_mardi`).addClass("vigipool_prog_off");
        $(`.${file_name}_${sched_number}_mardi`).removeClass("vigipool_prog_on");
    }
    if (programmation_selected_prog_mercredi === 0)
    {
        $(`.${file_name}_${sched_number}_mercredi`).addClass("vigipool_prog_off");
        $(`.${file_name}_${sched_number}_mercredi`).removeClass("vigipool_prog_on");
    }
    if (programmation_selected_prog_jeudi === 0)
    {
        $(`.${file_name}_${sched_number}_jeudi`).addClass("vigipool_prog_off");
        $(`.${file_name}_${sched_number}_jeudi`).removeClass("vigipool_prog_on");
    }
    if (programmation_selected_prog_vendredi === 0)
    {
        $(`.${file_name}_${sched_number}_vendredi`).addClass("vigipool_prog_off");
        $(`.${file_name}_${sched_number}_vendredi`).removeClass("vigipool_prog_on");
    }
    if (programmation_selected_prog_samedi === 0)
    {
        $(`.${file_name}_${sched_number}_samedi`).addClass("vigipool_prog_off");
        $(`.${file_name}_${sched_number}_samedi`).removeClass("vigipool_prog_on");
    }
    if (programmation_selected_prog_dimanche === 0)
    {
        $(`.${file_name}_${sched_number}_dimanche`).addClass("vigipool_prog_off");
        $(`.${file_name}_${sched_number}_dimanche`).removeClass("vigipool_prog_on");
    }

    if (programmation_selected_prog_lundi === 1)
    {
        $(`.${file_name}_${sched_number}_lundi`).addClass("vigipool_prog_on");
        $(`.${file_name}_${sched_number}_lundi`).removeClass("vigipool_prog_off");
        // console.log("test = ");
        // console.log(`$(` + `.${file_name}_${sched_number}_lundi` + `).addClass("vigipool_prog_off");`);
    }
    if (programmation_selected_prog_mardi === 1)
    {
        $(`.${file_name}_${sched_number}_mardi`).addClass("vigipool_prog_on");
        $(`.${file_name}_${sched_number}_mardi`).removeClass("vigipool_prog_off");
    }
    if (programmation_selected_prog_mercredi === 1)
    {
        $(`.${file_name}_${sched_number}_mercredi`).addClass("vigipool_prog_on");
        $(`.${file_name}_${sched_number}_mercredi`).removeClass("vigipool_prog_off");
    }
    if (programmation_selected_prog_jeudi === 1)
    {
        $(`.${file_name}_${sched_number}_jeudi`).addClass("vigipool_prog_on");
        $(`.${file_name}_${sched_number}_jeudi`).removeClass("vigipool_prog_off");
    }
    if (programmation_selected_prog_vendredi === 1)
    {
        $(`.${file_name}_${sched_number}_vendredi`).addClass("vigipool_prog_on");
        $(`.${file_name}_${sched_number}_vendredi`).removeClass("vigipool_prog_off");
    }
    if (programmation_selected_prog_samedi === 1)
    {
        $(`.${file_name}_${sched_number}_samedi`).addClass("vigipool_prog_on");
        $(`.${file_name}_${sched_number}_samedi`).removeClass("vigipool_prog_off");
    }
    if (programmation_selected_prog_dimanche === 1)
    {
        $(`.${file_name}_${sched_number}_dimanche`).addClass("vigipool_prog_on");
        $(`.${file_name}_${sched_number}_dimanche`).removeClass("vigipool_prog_off");
    }

    // Color Sequence

    if (is_sequence(color)) {
        // console.log("----------");
        // console.log("file_name = " + file_name);
        // console.log("sched_number = " + sched_number);
        // console.log("color = " + color + "(is_sequence)");
        // console.log("----------");

        $(`.${file_name}_${sched_number}_color_label`).html(get_text("color") + " : ");
        $(`.${file_name}_${sched_number}_color`).html(color_to_text(color));

        var image_from_color = get_image_from_color(color);
        $(`.${file_name}_${sched_number}_color_circle > img`).show();
        $(`.${file_name}_${sched_number}_color_circle > img`).attr("src", get_image_from_color(color));
        $(`.${file_name}_${sched_number}_color_circle > img`).attr("alt", color_to_text(color).toLowerCase());
    } else if (is_not_sequence(color)) {
        // console.log("----------");
        // console.log("file_name = " + file_name);
        // console.log("sched_number = " + sched_number);
        // console.log("color = " + color + "(is_not_sequence)");
        // console.log("----------");

        $(`.${file_name}_${sched_number}_color_label`).html(get_text("color") + " : ");
        $(`.${file_name}_${sched_number}_color`).html(color_to_text(color));

        $(`.${file_name}_${sched_number}_color_circle > svg`).show();
        $(`.${file_name}_${sched_number}_color_circle > svg > circle`).attr("fill", convert_color_id_to_color_hex(color));
    }

    // Duration
    if (file_name === "vigipool_modal_light")
        var sched_duration = get_sched_duration(variable_sched, sched_number);
    else
        var sched_duration = get_sched_duration_to(variable_sched, sched_number);
    // console.log("sched_duration = " + sched_duration);
    $(`.${file_name}_${sched_number}_duration`).html(sched_duration);

    $(document).ready(function () {
        $(`.${file_name}`).show();
    });
}

function create_program_simple(file_name, sched_number, variable_sched, color = "") {

    // tild_B8D61A440B70    / s44_w / light_sched   / info / reported 02 3E 02 0A 01 4C 88 41 02 0A 01 4C 88
    // tild_B8D61A440B70    / s44_w / aux_sched     / info / reported 02 3E 00 00 01 20 50 41 00 00 01 20 50
    // tild_B8D61A440B70    / s44_w / filt_sched    / info / reported 02 3E 00 00 01 20 50 41 00 00 01 20 50
    // anteam_90380CABBD94  / s44_w / light_sched_m / info / reported 2A 02
    // anteam_90380CABBD94  / s44_w / filt_sched_m  / info / reported 01 02 04 05 06 07
    // anteam_90380CABBD94  / s44_w / aux1_sched    / info / reported 04 02
    // anteam_90380CABBD94  / s44_w / aux2_sched    / info / reported 10 24

    var day = get_text("day");

    if (variable_sched !== undefined) {

        var max_length = variable_sched.length;

        if (max_length >= 3) {
            var from_1 = variable_sched[0] + variable_sched[1];
            var to_1 = variable_sched[2] + variable_sched[3];
            from_1 = converter("hex", "time_2", from_1);
            to_1 = converter("hex", "time_2", to_1);
            $(`.${file_name}_${sched_number}_from_value_1`).html("&nbsp;" + from_1 + "&nbsp;");
            $(`.${file_name}_${sched_number}_to_value_1`).html("&nbsp;" + to_1 + "&nbsp;");
        }

        if (max_length >= 7) {
            var from_2 = variable_sched[4] + variable_sched[5];
            var to_2 = variable_sched[6] + variable_sched[7];
            from_2 = converter("hex", "time_2", from_2);
            to_2 = converter("hex", "time_2", to_2);
            $(`.${file_name}_${sched_number}_from_value_2`).html("&nbsp;" + from_2 + "&nbsp;");
            $(`.${file_name}_${sched_number}_to_value_2`).html("&nbsp;" + to_2 + "&nbsp;");
        } else {
            $(`.${file_name}_${sched_number}_from_label_2`).html("");
            $(`.${file_name}_${sched_number}_to_label_2`).html("");
        }

        if (max_length >= 11) {
            var from_3 = variable_sched[8] + variable_sched[9];
            var to_3 = variable_sched[10] + variable_sched[11];
            from_3 = converter("hex", "time_2", from_3);
            to_3 = converter("hex", "time_2", to_3);
            $(`.${file_name}_${sched_number}_from_value_3`).html("&nbsp;" + from_3 + "&nbsp;");
            $(`.${file_name}_${sched_number}_to_value_3`).html("&nbsp;" + to_3 + "&nbsp;");
        } else {
            $(`.${file_name}_${sched_number}_from_label_3`).html("");
            $(`.${file_name}_${sched_number}_to_label_3`).html("");
        }

        if (max_length >= 3)
        {
            from_1 = converter("hex", "dec", variable_sched[0] + variable_sched[1]);
            to_1 = converter("hex", "dec", variable_sched[2] + variable_sched[3]);
            $(`.${file_name}_${sched_number}_duration`).html("<img src=\"/plugins/vigipool/desktop/img/clock.svg\" style=\"filter: invert(1);\" />" + "&nbsp;" + get_duration_2(from_1, to_1) + " / " + day);
        }

        if (max_length >= 7)
        {
            from_2 = converter("hex", "dec", variable_sched[4] + variable_sched[5]);
            to_2 = converter("hex", "dec", variable_sched[6] + variable_sched[7]);
            $(`.${file_name}_${sched_number}_duration`).html("<img src=\"/plugins/vigipool/desktop/img/clock.svg\" style=\"filter: invert(1);\" />" + "&nbsp;" + get_duration_2(from_1, to_1, from_2, to_2) + " / " + day);
        }

        if (max_length >= 11)
        {
            from_3 = converter("hex", "dec", variable_sched[8] + variable_sched[9]);
            to_3 = converter("hex", "dec", variable_sched[10] + variable_sched[11]);
            $(`.${file_name}_${sched_number}_duration`).html("<img src=\"/plugins/vigipool/desktop/img/clock.svg\" style=\"filter: invert(1);\" />" + "&nbsp;" + get_duration_2(from_1, to_1, from_2, to_2, from_3, to_3) + " / " + day);
        }
}
}

function get_duration_2(from_1, to_1, from_2 = "", to_2 = "", from_3 = "", to_3 = "")
{
    var duration = [];
    for (let index = 0; index < 47; index++)
    {
        if (from_1 < to_1)
        {
            if (from_1 <= index && index < to_1)
            {
                duration[index] = true;
            }
        }
        if (from_2 < to_2 && from_2 != "" && to_2 != "")
        {
            if (from_2 <= index && index < to_2)
            {
                duration[index] = true;
            }
        }
        if (from_3 < to_3 && from_3 != "" && to_3 != "")
        {
            if (from_3 <= index && index < to_3)
            {
                duration[index] = true;
            }
        }
        if (from_1 > to_1)
        {
            if (from_1 <= index || index < to_1)
            {
                duration[index] = true;
            }
        }
        if (from_2 > to_2 && from_2 != "" && to_2 != "")
        {
            if (from_2 <= index || index < to_2)
            {
                duration[index] = true;
            }
        }
        if (from_3 > to_3 && from_3 != "" && to_3 != "")
        {
            if (from_3 <= index || index < to_3)
            {
                duration[index] = true;
            }
        }
    }

    var result = 0;

    for (let index = 0; index < 47; index++)
    {
        if (duration[index])
        {
            result = result + 1;
        }
    }

    result = converter("dec", "time_2", result);

    return result;
}

function getName(d) {
    const error = new Error();
    const firefoxMatch = (error.stack.split('\n')[0 + d].match(/^.*(?=@)/) || [])[0];
    const chromeMatch = ((((error.stack.split('at ') || [])[1 + d] || '').match(/(^|\.| <| )(.*[^(<])( \()/) || [])[2] || '').split('.').pop();
    const safariMatch = error.stack.split('\n')[0 + d];

    // firefoxMatch ? console.log('firefoxMatch', firefoxMatch) : void 0;
    // chromeMatch ? console.log('chromeMatch', chromeMatch) : void 0;
    // safariMatch ? console.log('safariMatch', safariMatch) : void 0;

    return firefoxMatch || chromeMatch || safariMatch;
}


function get_image_from_color(color) {

    // Tild

    var id_gradiant = 16;
    var id_rainbow = 17;
    var id_parade = 18;
    var id_techno = 19;
    var id_horizon = 20;
    var id_random = 21;
    var id_magical = 22;
    var id_favorite = 11;

    var id_gradiant_2 = "16";
    var id_rainbow_2 = "17";
    var id_parade_2 = "18";
    var id_techno_2 = "19";
    var id_horizon_2 = "20";
    var id_random_2 = "21";
    var id_magical_2 = "22";
    var id_favorite_2 = "11";

    if (color === id_gradiant || color === id_gradiant_2 || color === "gradiant")
        return "/plugins/vigipool/desktop/img/gradiant.png";
    if (color === id_rainbow || color === id_rainbow_2 || color === "rainbow")
        return "/plugins/vigipool/desktop/img/rainbow.png";
    if (color === id_parade || color === id_parade_2 || color === "parade")
        return "/plugins/vigipool/desktop/img/parade.png";
    if (color === id_techno || color === id_techno_2 || color === "techno")
        return "/plugins/vigipool/desktop/img/techno.png";
    if (color === id_horizon || color === id_horizon_2 || color === "horizon")
        return "/plugins/vigipool/desktop/img/horizon.png";
    if (color === id_random || color === id_random_2 || color === "random")
        return "/plugins/vigipool/desktop/img/random.png";
    if (color === id_magical || color === id_magical_2 || color === "magical")
        return "/plugins/vigipool/desktop/img/magical.png";
    if (color === id_favorite || color === id_favorite_2 || color === "favorite")
        return "/plugins/vigipool/desktop/img/favorite.png";

    // X3

    var x3_rainbow_value = "S#FF000094#FFFF0094#00FF0094#00FFFF94#0000FF94#FF00FF94";
    var x3_fun_value = "S#FF000027#FFFF0027#0000FF27#00FF0027#00FFFF27#FF00FF27#FFFFFF27";
    var x3_ocean_value = "S#0000FF32KFF32#008AFF32KFF32#00D8FF32KFF32#00DCD432KFF32#18FFFF32KFF32#01579B32KFF32#039BE532KFF32#00FFFF32KFF32";
    var x3_flamme_value = "S#FD31034B#FE88174B#FD4E0A2B#FE6B104B#FFDD004B#FE88172D#FFDD004B#FE88176B";
    var x3_parade_value = "S#FFFF00FE#00FF00FE#18FFFFFEKFFFE#FF00FFFE#9C27B0FE#FF0000FE#FFAB40FEK3CFE";
    var x3_elegant_value = "SK8038KBF38KFF38KBF38K4438K0038K4438";
    var x3_horizon_value = "S#0000FF7FK897F#04FFFF7F";
    var x3_psyche_value = "S#FF005004#00000000#0000FF04#00000000#15EDFF04#00000000#C000FF04#00000000#FFFF0004#00000000#FF00FF04#00000000";

    if (color === x3_rainbow_value || color === "rainbow")
        return "/plugins/vigipool/desktop/img/x3_rainbow.png";
    if (color === x3_fun_value || color === "fun")
        return "/plugins/vigipool/desktop/img/x3_fun.png";
    if (color === x3_ocean_value || color === "ocean")
        return "/plugins/vigipool/desktop/img/x3_ocean.png";
    if (color === x3_flamme_value || color === "flamme")
        return "/plugins/vigipool/desktop/img/x3_flamme.png";
    if (color === x3_parade_value || color === "parade")
        return "/plugins/vigipool/desktop/img/x3_parade.png";
    if (color === x3_elegant_value || color === "elegant")
        return "/plugins/vigipool/desktop/img/x3_elegant.png";
    if (color === x3_horizon_value || color === "horizon")
        return "/plugins/vigipool/desktop/img/x3_horizon.png";
    if (color === x3_psyche_value || color === "psyche")
        return "/plugins/vigipool/desktop/img/x3_psyche.png";

    return "/plugins/vigipool/desktop/img/" + color + ".png";
}

function convert_color_id_to_color_hex(color) {
    var id_warm = 0;
    var id_cold = 1;
    var id_blue = 2;
    var id_lagoon = 3;
    var id_cyan = 4;
    var id_green = 10;
    var id_purple = 5;
    var id_magenta = 6;
    var id_pink = 7;
    var id_red = 8;
    var id_orange = 9;

    var id_warm_2 = "0";
    var id_cold_2 = "1";
    var id_blue_2 = "2";
    var id_lagoon_2 = "3";
    var id_cyan_2 = "4";
    var id_green_2 = "10";
    var id_purple_2 = "5";
    var id_magenta_2 = "6";
    var id_pink_2 = "7";
    var id_red_2 = "8";
    var id_orange_2 = "9";

    var hex_warm = "#f4e3be";
    var hex_cold = "#ffffff";
    var hex_blue = "#7eadcf";
    var hex_lagoon = "#a0d4dc";
    var hex_cyan = "#c1f1f9";
    var hex_green = "#9dc46f";
    var hex_purple = "#c25dba";
    var hex_magenta = "#cc86c3";
    var hex_pink = "#ecb7e7";
    var hex_red = "#d3585a";
    var hex_orange = "#e3aa52";

    if (color === id_warm || color === id_warm_2)
        return hex_warm;
    if (color === id_cold || color === id_cold_2)
        return hex_cold;
    if (color === id_blue || color === id_blue_2)
        return hex_blue;
    if (color === id_lagoon || color === id_lagoon_2)
        return hex_lagoon;
    if (color === id_cyan || color === id_cyan_2)
        return hex_cyan;
    if (color === id_green || color === id_green_2)
        return hex_green;
    if (color === id_purple || color === id_purple_2)
        return hex_purple;
    if (color === id_magenta || color === id_magenta_2)
        return hex_magenta;
    if (color === id_pink || color === id_pink_2)
        return hex_pink;
    if (color === id_red || color === id_red_2)
        return hex_red;
    if (color === id_orange || color === id_orange_2)
        return hex_orange;

    if (color === "warm")
        return hex_warm;
    if (color === "cold")
        return hex_cold;
    if (color === "blue")
        return hex_blue;
    if (color === "lagoon")
        return hex_lagoon;
    if (color === "cyan")
        return hex_cyan;
    if (color === "green")
        return hex_green;
    if (color === "purple")
        return hex_purple;
    if (color === "magenta")
        return hex_magenta;
    if (color === "pink")
        return hex_pink;
    if (color === "red")
        return hex_red;
    if (color === "orange")
        return hex_orange;

    return color;
}

function is_not_sequence(color) {
    var id_warm = 0;
    var id_cold = 1;
    var id_blue = 2;
    var id_lagoon = 3;
    var id_cyan = 4;
    var id_green = 10;
    var id_purple = 5;
    var id_magenta = 6;
    var id_pink = 7;
    var id_red = 8;
    var id_orange = 9;

    var id_warm_2 = "0";
    var id_cold_2 = "1";
    var id_blue_2 = "2";
    var id_lagoon_2 = "3";
    var id_cyan_2 = "4";
    var id_green_2 = "10";
    var id_purple_2 = "5";
    var id_magenta_2 = "6";
    var id_pink_2 = "7";
    var id_red_2 = "8";
    var id_orange_2 = "9";

    if (id_warm === color || id_warm_2 === color)
        return true;
    if (id_cold === color || id_cold_2 === color)
        return true;
    if (id_blue === color || id_blue_2 === color)
        return true;
    if (id_lagoon === color || id_lagoon_2 === color)
        return true;
    if (id_cyan === color || id_cyan_2 === color)
        return true;
    if (id_green === color || id_green_2 === color)
        return true;
    if (id_purple === color || id_purple_2 === color)
        return true;
    if (id_magenta === color || id_magenta_2 === color)
        return true;
    if (id_pink === color || id_pink_2 === color)
        return true;
    if (id_red === color || id_red_2 === color)
        return true;
    if (id_orange === color || id_orange_2 === color)
        return true;

    return false;
}

function is_sequence(color) {

    if (color === "S#FF000094#FFFF0094#00FF0094#00FFFF94#0000FF94#FF00FF94")
        return true;
    if (color === "S#FF000027#FFFF0027#0000FF27#00FF0027#00FFFF27#FF00FF27#FFFFFF27")
        return true;
    if (color === "S#0000FF32KFF32#008AFF32KFF32#00D8FF32KFF32#00DCD432KFF32#18FFFF32KFF32#01579B32KFF32#039BE532KFF32#00FFFF32KFF32")
        return true;
    if (color === "S#FD31034B#FE88174B#FD4E0A2B#FE6B104B#FFDD004B#FE88172D#FFDD004B#FE88176B")
        return true;
    if (color === "S#FFFF00FE#00FF00FE#18FFFFFEKFFFE#FF00FFFE#9C27B0FE#FF0000FE#FFAB40FEK3CFE")
        return true;
    if (color === "SK8038KBF38KFF38KBF38K4438K0038K4438")
        return true;
    if (color === "S#0000FF7FK897F#04FFFF7F")
        return true;
    if (color === "S#FF005004#00000000#0000FF04#00000000#15EDFF04#00000000#C000FF04#00000000#FFFF0004#00000000#FF00FF04#00000000")
        return true;
    if (color === "16")
        return true;
    if (color === "17")
        return true;
    if (color === "18")
        return true;
    if (color === "19")
        return true;
    if (color === "20")
        return true;
    if (color === "21")
        return true;
    if (color === "22")
        return true;
    if (color === 16)
        return true;
    if (color === 17)
        return true;
    if (color === 18)
        return true;
    if (color === 19)
        return true;
    if (color === 20)
        return true;
    if (color === 21)
        return true;
    if (color === 22)
        return true;

    // console.log("color = " + color + "(is not a sequence)");

    return false;
}


function color_to_text(color) {

    // Couleurs Tild

    if (color === 0)
        return get_text("warm");
    if (color === 1)
        return get_text("cold");
    if (color === 2)
        return get_text("blue");
    if (color === 3)
        return get_text("lagoon");
    if (color === 4)
        return get_text("cyan");
    if (color === 10)
        return get_text("green");
    if (color === 5)
        return get_text("purple");
    if (color === 6)
        return get_text("magenta");
    if (color === 7)
        return get_text("pink");
    if (color === 8)
        return get_text("red");
    if (color === 9)
        return get_text("orange");
    if (color === 16)
        return get_text("gradiant");
    if (color === 17)
        return get_text("rainbow");
    if (color === 18)
        return get_text("parade");
    if (color === 19)
        return get_text("techno");
    if (color === 20)
        return get_text("horizon");
    if (color === 21)
        return get_text("random");
    if (color === 22)
        return get_text("magical");
    if (color === 11)
        return get_text("favorite");

    // Sequences X3

    if (color === "S#FF000094#FFFF0094#00FF0094#00FFFF94#0000FF94#FF00FF94")
        return get_text("rainbow");

    if (color === "S#FF000027#FFFF0027#0000FF27#00FF0027#00FFFF27#FF00FF27#FFFFFF27")
        return get_text("fun");

    if (color === "S#0000FF32KFF32#008AFF32KFF32#00D8FF32KFF32#00DCD432KFF32#18FFFF32KFF32#01579B32KFF32#039BE532KFF32#00FFFF32KFF32")
        return get_text("ocean");

    if (color === "S#FD31034B#FE88174B#FD4E0A2B#FE6B104B#FFDD004B#FE88172D#FFDD004B#FE88176B")
        return get_text("flamme");

    if (color === "S#FFFF00FE#00FF00FE#18FFFFFEKFFFE#FF00FFFE#9C27B0FE#FF0000FE#FFAB40FEK3CFE")
        return get_text("parade");

    if (color === "SK8038KBF38KFF38KBF38K4438K0038K4438")
        return get_text("elegant");

    if (color === "S#0000FF7FK897F#04FFFF7F")
        return get_text("horizon");

    if (color === "S#FF005004#00000000#0000FF04#00000000#15EDFF04#00000000#C000FF04#00000000#FFFF0004#00000000#FF00FF04#00000000")
        return get_text("psyche");

    return color;
}

function get_sched_duration(sched, program) {
    if (program === 1) {
        var program_1_sched_1_begin = get_sched_value(sched, "program_1_sched_1_begin");
        var program_1_sched_1_end = get_sched_value(sched, "program_1_sched_1_end");
        program_1_sched_1_end = fix_end_dec(program_1_sched_1_end);
        // console.log("program_1_sched_1_begin = " + program_1_sched_1_begin);
        // console.log("program_1_sched_1_end = " + program_1_sched_1_end);

        var program_1_sched_2_begin = get_sched_value(sched, "program_1_sched_2_begin");
        var program_1_sched_2_end = get_sched_value(sched, "program_1_sched_2_end");
        program_1_sched_2_end = fix_end_dec(program_1_sched_2_end);
        // console.log("program_1_sched_2_begin = " + program_1_sched_2_begin);
        // console.log("program_1_sched_2_end = " + program_1_sched_2_end);

        var program_1_sched_3_begin = get_sched_value(sched, "program_1_sched_3_begin");
        var program_1_sched_3_end = get_sched_value(sched, "program_1_sched_3_end");
        program_1_sched_3_end = fix_end_dec(program_1_sched_3_end);
        // console.log("program_1_sched_3_begin = " + program_1_sched_3_begin);
        // console.log("program_1_sched_3_end = " + program_1_sched_3_end);

        var program_1_sched_1_finish = program_1_sched_1_begin + program_1_sched_1_end;
        var program_1_sched_2_finish = program_1_sched_2_begin + program_1_sched_2_end;
        var program_1_sched_3_finish = program_1_sched_3_begin + program_1_sched_3_end;
        // console.log("program_1_sched_1_finish" + program_1_sched_1_finish);
        // console.log("program_1_sched_2_finish" + program_1_sched_2_finish);
        // console.log("program_1_sched_3_finish" + program_1_sched_3_finish);
    }
    if (program === 2) {
        var program_2_sched_1_begin = get_sched_value(sched, "program_2_sched_1_begin");
        var program_2_sched_1_end = get_sched_value(sched, "program_2_sched_1_end");
        program_2_sched_1_end = fix_end_dec(program_2_sched_1_end);
        // console.log("program_2_sched_1_begin = " + program_2_sched_1_begin);
        // console.log("program_2_sched_1_end = " + program_2_sched_1_end);

        var program_2_sched_2_begin = get_sched_value(sched, "program_2_sched_2_begin");
        var program_2_sched_2_end = get_sched_value(sched, "program_2_sched_2_end");
        program_2_sched_2_end = fix_end_dec(program_2_sched_2_end);
        // console.log("program_2_sched_2_begin = " + program_2_sched_2_begin);
        // console.log("program_2_sched_2_end = " + program_2_sched_2_end);

        var program_2_sched_3_begin = get_sched_value(sched, "program_2_sched_3_begin");
        var program_2_sched_3_end = get_sched_value(sched, "program_2_sched_3_end");
        program_2_sched_3_end = fix_end_dec(program_2_sched_3_end);
        // console.log("program_2_sched_3_begin = " + program_2_sched_3_begin);
        // console.log("program_2_sched_3_end = " + program_2_sched_3_end);

        var program_2_sched_1_finish = program_2_sched_1_begin + program_2_sched_1_end;
        var program_2_sched_2_finish = program_2_sched_2_begin + program_2_sched_2_end;
        var program_2_sched_3_finish = program_2_sched_3_begin + program_2_sched_3_end;
        // console.log("program_2_sched_1_finish" + program_2_sched_1_finish);
        // console.log("program_2_sched_2_finish" + program_2_sched_2_finish);
        // console.log("program_2_sched_3_finish" + program_2_sched_3_finish);

    }

    var day = [];

    if (program === 1) {
        for (var i = 0, max = 96; i < max; i++) {
            if (program_1_sched_1_begin <= i && i <= program_1_sched_1_finish) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
            if (program_1_sched_2_begin <= i && i <= program_1_sched_2_finish) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
            if (program_1_sched_3_begin <= i && i <= program_1_sched_3_finish) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
        }
    }
    if (program === 2) {
        for (var i = 0, max = 96; i < max; i++) {
            if (program_2_sched_1_begin <= i && i <= program_2_sched_1_finish) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
            if (program_2_sched_2_begin <= i && i <= program_2_sched_2_finish) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
            if (program_2_sched_3_begin <= i && i <= program_2_sched_3_finish) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
        }
    }

    // console.log("day = " + day);

    var result = -1;

    for (var i = 0, max = 96; i < max; i++)
        if (day[i])
            result = result + 1;

    // console.log("result = " + result);

    result = converter("dec", "time_4", result);

    // console.log("result = " + result);

    return result;

}

function get_sched_duration_to(sched, program) {
    if (program === 1) {
        var program_1_sched_1_begin = get_sched_value(sched, "program_1_sched_1_begin");
        var program_1_sched_1_end = get_sched_value(sched, "program_1_sched_1_end");
        program_1_sched_1_end = fix_end_dec(program_1_sched_1_end);
        // console.log("program_1_sched_1_begin = " + program_1_sched_1_begin);
        // console.log("program_1_sched_1_end = " + program_1_sched_1_end);

        var program_1_sched_2_begin = get_sched_value(sched, "program_1_sched_2_begin");
        var program_1_sched_2_end = get_sched_value(sched, "program_1_sched_2_end");
        program_1_sched_2_end = fix_end_dec(program_1_sched_2_end);
        // console.log("program_1_sched_2_begin = " + program_1_sched_2_begin);
        // console.log("program_1_sched_2_end = " + program_1_sched_2_end);

        var program_1_sched_3_begin = get_sched_value(sched, "program_1_sched_3_begin");
        var program_1_sched_3_end = get_sched_value(sched, "program_1_sched_3_end");
        program_1_sched_3_end = fix_end_dec(program_1_sched_3_end);
        // console.log("program_1_sched_3_begin = " + program_1_sched_3_begin);
        // console.log("program_1_sched_3_end = " + program_1_sched_3_end);

        var program_1_sched_1_finish = program_1_sched_1_begin + program_1_sched_1_end;
        var program_1_sched_2_finish = program_1_sched_2_begin + program_1_sched_2_end;
        var program_1_sched_3_finish = program_1_sched_3_begin + program_1_sched_3_end;
        // console.log("program_1_sched_1_finish" + program_1_sched_1_finish);
        // console.log("program_1_sched_2_finish" + program_1_sched_2_finish);
        // console.log("program_1_sched_3_finish" + program_1_sched_3_finish);
    }
    if (program === 2) {
        var program_2_sched_1_begin = get_sched_value(sched, "program_2_sched_1_begin");
        var program_2_sched_1_end = get_sched_value(sched, "program_2_sched_1_end");
        program_2_sched_1_end = fix_end_dec(program_2_sched_1_end);
        // console.log("program_2_sched_1_begin = " + program_2_sched_1_begin);
        // console.log("program_2_sched_1_end = " + program_2_sched_1_end);

        var program_2_sched_2_begin = get_sched_value(sched, "program_2_sched_2_begin");
        var program_2_sched_2_end = get_sched_value(sched, "program_2_sched_2_end");
        program_2_sched_2_end = fix_end_dec(program_2_sched_2_end);
        // console.log("program_2_sched_2_begin = " + program_2_sched_2_begin);
        // console.log("program_2_sched_2_end = " + program_2_sched_2_end);

        var program_2_sched_3_begin = get_sched_value(sched, "program_2_sched_3_begin");
        var program_2_sched_3_end = get_sched_value(sched, "program_2_sched_3_end");
        program_2_sched_3_end = fix_end_dec(program_2_sched_3_end);
        // console.log("program_2_sched_3_begin = " + program_2_sched_3_begin);
        // console.log("program_2_sched_3_end = " + program_2_sched_3_end);
    }

    var day = [];

    if (program === 1) {
        for (var i = 0, max = 96; i < max; i++) {
            if (program_1_sched_1_begin <= i && i <= program_1_sched_1_end) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
            if (program_1_sched_2_begin <= i && i <= program_1_sched_2_end) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
            if (program_1_sched_3_begin <= i && i <= program_1_sched_3_end) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
        }
    }
    if (program === 2) {
        for (var i = 0, max = 96; i < max; i++) {
            if (program_2_sched_1_begin <= i && i <= program_2_sched_1_end) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
            if (program_2_sched_2_begin <= i && i <= program_2_sched_2_end) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
            if (program_2_sched_3_begin <= i && i <= program_2_sched_3_end) {
                day[i] = true;
                // console.log("day[" + i + "] = true;");
            }
        }
    }

    // console.log("day = " + day);

    var result = -1;

    for (var i = 0, max = 96; i < max; i++)
        if (day[i])
            result = result + 1;

    // console.log("result = " + result);

    result = converter("dec", "time_4", result);

    // console.log("result = " + result);

    return result;

}

function convert_light_timer_to_slider(light_timer) {

    // console.log("light_timer = " + light_timer);
    light_timer = light_timer * 1000;
    // console.log("light_timer = " + light_timer);
    light_timer = light_timer - Date.now();
    // console.log("light_timer - Date.now = " + light_timer);

    var quarter = 3600000 / 4;
    var quarters = 0;

    while (light_timer > 0) {
        light_timer = light_timer - quarter;
        // console.log("light_timer = " + light_timer);
        quarters = quarters + 1;
        // console.log("quarters = " + quarters);
    }

    return quarters;

}

function create_ui_tild_light(file_name, light_code) {

    if (light_code !== "error" && light_code !== undefined) {

        // console.log(`file_name = ${file_name}`);
        // console.log(`light_code = ${light_code}`);

        $(`.${file_name}_warm_button > img`).hide();
        $(`.${file_name}_cold_button > img`).hide();
        $(`.${file_name}_blue_button > img`).hide();
        $(`.${file_name}_lagoon_button > img`).hide();
        $(`.${file_name}_cyan_button > img`).hide();
        $(`.${file_name}_green_button > img`).hide();
        $(`.${file_name}_purple_button > img`).hide();
        $(`.${file_name}_magenta_button > img`).hide();
        $(`.${file_name}_pink_button > img`).hide();
        $(`.${file_name}_red_button > img`).hide();
        $(`.${file_name}_orange_button > img`).hide();
        $(`.${file_name}_favorite_button > img`).hide();
        $(`.${file_name}_gradiant_button > img`).css(`opacity`, `0%`);
        $(`.${file_name}_rainbow_button > img`).css(`opacity`, `0%`);
        $(`.${file_name}_parade_button > img`).css(`opacity`, `0%`);
        $(`.${file_name}_techno_button > img`).css(`opacity`, `0%`);
        $(`.${file_name}_horizon_button > img`).css(`opacity`, `0%`);
        $(`.${file_name}_random_button > img`).css(`opacity`, `0%`);
        $(`.${file_name}_magical_button > img`).css(`opacity`, `0%`);

        $(`.${file_name}_warm_label`).css(`opacity`, `100%`);
        $(`.${file_name}_cold_label`).css(`opacity`, `100%`);
        $(`.${file_name}_blue_label`).css(`opacity`, `100%`);
        $(`.${file_name}_lagoon_label`).css(`opacity`, `100%`);
        $(`.${file_name}_cyan_label`).css(`opacity`, `100%`);
        $(`.${file_name}_green_label`).css(`opacity`, `100%`);
        $(`.${file_name}_purple_label`).css(`opacity`, `100%`);
        $(`.${file_name}_magenta_label`).css(`opacity`, `100%`);
        $(`.${file_name}_pink_label`).css(`opacity`, `100%`);
        $(`.${file_name}_red_label`).css(`opacity`, `100%`);
        $(`.${file_name}_orange_label`).css(`opacity`, `100%`);
        $(`.${file_name}_favorite_label`).css(`opacity`, `100%`);
        $(`.${file_name}_gradiant_label`).css(`opacity`, `100%`);
        $(`.${file_name}_rainbow_label`).css(`opacity`, `100%`);
        $(`.${file_name}_parade_label`).css(`opacity`, `100%`);
        $(`.${file_name}_techno_label`).css(`opacity`, `100%`);
        $(`.${file_name}_horizon_label`).css(`opacity`, `100%`);
        $(`.${file_name}_random_label`).css(`opacity`, `100%`);
        $(`.${file_name}_magical_label`).css(`opacity`, `100%`);


        $(document).ready(function () {
            switch (light_code) {
                case 0:
                    $(`.${file_name}_warm_button > img`).show();
                    $(`.${file_name}_warm_label`).css(`opacity`, `50%`);
                    break;
                case 1:
                    $(`.${file_name}_cold_button > img`).show();
                    $(`.${file_name}_cold_label`).css(`opacity`, `50%`);
                    break;
                case 2:
                    $(`.${file_name}_blue_button > img`).show();
                    $(`.${file_name}_blue_label`).css(`opacity`, `50%`);
                    break;
                case 3:
                    $(`.${file_name}_lagoon_button > img`).show();
                    $(`.${file_name}_lagoon_label`).css(`opacity`, `50%`);
                    break;
                case 4:
                    $(`.${file_name}_cyan_button > img`).show();
                    $(`.${file_name}_cyan_label`).css(`opacity`, `50%`);
                    break;
                case 10:
                    $(`.${file_name}_green_button > img`).show();
                    $(`.${file_name}_green_label`).css(`opacity`, `50%`);
                    break;
                case 5:
                    $(`.${file_name}_purple_button > img`).show();
                    $(`.${file_name}_purple_label`).css(`opacity`, `50%`);
                    break;
                case 6:
                    $(`.${file_name}_magenta_button > img`).show();
                    $(`.${file_name}_magenta_label`).css(`opacity`, `50%`);
                    break;
                case 7:
                    $(`.${file_name}_pink_button > img`).show();
                    $(`.${file_name}_pink_label`).css(`opacity`, `50%`);
                    break;
                case 8:
                    $(`.${file_name}_red_button > img`).show();
                    $(`.${file_name}_red_label`).css(`opacity`, `50%`);
                    break;
                case 9:
                    $(`.${file_name}_orange_button > img`).show();
                    $(`.${file_name}_orange_label`).css(`opacity`, `50%`);
                    break;
                case 11:
                    $(`.${file_name}_favorite_button > img`).show();
                    $(`.${file_name}_favorite_label`).css(`opacity`, `50%`);
                    break;
                case 16:
                    $(`.${file_name}_gradiant_button > img`).css(`opacity`, `100%`);
                    $(`.${file_name}_gradiant_label`).css(`opacity`, `50%`);
                    break;
                case 17:
                    $(`.${file_name}_rainbow_button > img`).css(`opacity`, `100%`);
                    $(`.${file_name}_rainbow_label`).css(`opacity`, `50%`);
                    break;
                case 18:
                    $(`.${file_name}_parade_button > img`).css(`opacity`, `100%`);
                    $(`.${file_name}_parade_label`).css(`opacity`, `50%`);
                    break;
                case 19:
                    $(`.${file_name}_techno_button > img`).css(`opacity`, `100%`);
                    $(`.${file_name}_techno_label`).css(`opacity`, `50%`);
                    break;
                case 20:
                    $(`.${file_name}_horizon_button > img`).css(`opacity`, `100%`);
                    $(`.${file_name}_horizon_label`).css(`opacity`, `50%`);
                    break;
                case 21:
                    $(`.${file_name}_random_button > img`).css(`opacity`, `100%`);
                    $(`.${file_name}_random_label`).css(`opacity`, `50%`);
                    break;
                case 22:
                    $(`.${file_name}_magical_button > img`).css(`opacity`, `100%`);
                    $(`.${file_name}_magical_label`).css(`opacity`, `50%`);
                    break;
                default:
                    console.log(`ERROR light_code not found : ${light_code}`);
            }
        });
    }
}

function create_ui_bright(file_name, program_2_bright) {
    var background_color_off = "#dbdbdb";
    var color_off = "#7e7e7e";
    var background_color_on = "#758f8d";
    var color_on = "white";

    $(`.${file_name}_bright > th:nth-child(2) > p`).css("background-color", background_color_off);
    $(`.${file_name}_bright > th:nth-child(2) > p`).css("color", color_off);
    $(`.${file_name}_bright > th:nth-child(3) > p`).css("background-color", background_color_off);
    $(`.${file_name}_bright > th:nth-child(3) > p`).css("color", color_off);
    $(`.${file_name}_bright > th:nth-child(4) > p`).css("background-color", background_color_off);
    $(`.${file_name}_bright > th:nth-child(4) > p`).css("color", color_off);
    $(`.${file_name}_bright > th:nth-child(5) > p`).css("background-color", background_color_off);
    $(`.${file_name}_bright > th:nth-child(5) > p`).css("color", color_off);

    if (program_2_bright === 0) {
        $(`.${file_name}_bright > th:nth-child(2) > p`).css("background-color", background_color_on);
        $(`.${file_name}_bright > th:nth-child(2) > p`).css("color", color_on);
    } else if (program_2_bright === 1) {
        $(`.${file_name}_bright > th:nth-child(3) > p`).css("background-color", background_color_on);
        $(`.${file_name}_bright > th:nth-child(3) > p`).css("color", color_on);
    } else if (program_2_bright === 2) {
        $(`.${file_name}_bright > th:nth-child(4) > p`).css("background-color", background_color_on);
        $(`.${file_name}_bright > th:nth-child(4) > p`).css("color", color_on);
    } else if (program_2_bright === 3) {
        $(`.${file_name}_bright > th:nth-child(5) > p`).css("background-color", background_color_on);
        $(`.${file_name}_bright > th:nth-child(5) > p`).css("color", color_on);
    }
}

function create_ui_speed(file_name, program_2_speed, p2_color) {
    var background_color_off = "#dbdbdb";
    var color_off = "#7e7e7e";
    var background_color_on = "#758f8d";
    var color_on = "white";


    $(document).ready(function () {
        if (16 <= p2_color) {
            $(`.${file_name}_speed`).show();
            $(`.${file_name}_speed_title`).show();
        } else {
            $(`.${file_name}_speed`).hide();
            $(`.${file_name}_speed_title`).hide();
        }
    });


    $(`.${file_name}_speed > th:nth-child(2) > p`).css("background-color", background_color_off);
    $(`.${file_name}_speed > th:nth-child(2) > p`).css("color", color_off);
    $(`.${file_name}_speed > th:nth-child(3) > p`).css("background-color", background_color_off);
    $(`.${file_name}_speed > th:nth-child(3) > p`).css("color", color_off);
    $(`.${file_name}_speed > th:nth-child(4) > p`).css("background-color", background_color_off);
    $(`.${file_name}_speed > th:nth-child(4) > p`).css("color", color_off);

    if (program_2_speed === 1) {
        $(`.${file_name}_speed > th:nth-child(2) > p`).css("background-color", background_color_on);
        $(`.${file_name}_speed > th:nth-child(2) > p`).css("color", color_on);
    } else if (program_2_speed === 2) {
        $(`.${file_name}_speed > th:nth-child(3) > p`).css("background-color", background_color_on);
        $(`.${file_name}_speed > th:nth-child(3) > p`).css("color", color_on);
    } else if (program_2_speed === 3) {
        $(`.${file_name}_speed > th:nth-child(4) > p`).css("background-color", background_color_on);
        $(`.${file_name}_speed > th:nth-child(4) > p`).css("color", color_on);
    }
}

function create_ui_tild_light_click(file_name) {

    var id_warm = 0;
    var id_cold = 1;
    var id_blue = 2;
    var id_lagoon = 3;
    var id_cyan = 4;
    var id_green = 10;
    var id_purple = 5;
    var id_magenta = 6;
    var id_pink = 7;
    var id_red = 8;
    var id_orange = 9;
    var id_gradiant = 16;
    var id_rainbow = 17;
    var id_parade = 18;
    var id_techno = 19;
    var id_horizon = 20;
    var id_random = 21;
    var id_magical = 22;
    var id_favorite = 11;

    $(`.${file_name}_warm_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_warm);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_cold_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_cold);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_blue_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_blue);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_lagoon_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_lagoon);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_cyan_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_cyan);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_green_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_green);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_purple_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_purple);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_magenta_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_magenta);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_pink_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_pink);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_red_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_red);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_orange_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_orange);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_favorite_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_favorite);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_gradiant_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_gradiant);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_rainbow_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_rainbow);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_parade_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_parade);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_techno_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_techno);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_horizon_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_horizon);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_random_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_random);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(`.${file_name}_magical_button`).click(function () {
        var new_light_sched = set_light_sched_value(`prog_2_bright`, id_magical);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
}

function get_sched_value(variable_sched, selection) {

    if (variable_sched === undefined) {
        return;
    }

    var programs_number = "";
    var program_1_off_on_and_days = "";
    var program_1_bright = "";
    var program_1_speed = "";
    var program_1_sched_number = "";
    var program_1_sched_1_begin = "";
    var program_1_sched_1_end = "";
    var program_1_sched_2_begin = "";
    var program_1_sched_2_end = "";
    var program_1_sched_3_begin = "";
    var program_1_sched_3_end = "";
    var program_2_off_on_and_days = "";
    var program_2_bright = "";
    var program_2_speed = "";
    var program_2_sched_number = "";
    var program_2_sched_1_begin = "";
    var program_2_sched_1_end = "";
    var program_2_sched_2_begin = "";
    var program_2_sched_2_end = "";
    var program_2_sched_3_begin = "";
    var program_2_sched_3_end = "";
    var program_3_off_on_and_days = "";
    var program_3_bright = "";
    var program_3_speed = "";
    var program_3_sched_number = "";
    var program_3_sched_1_begin = "";
    var program_3_sched_1_end = "";
    var program_3_sched_2_begin = "";
    var program_3_sched_2_end = "";
    var program_3_sched_3_begin = "";
    var program_3_sched_3_end = "";

    var variable_selector = 0;
    var position_selector = 0;

    // console.log("variable_selector = " + variable_selector);
    // console.log("position_selector = " + position_selector);

    for (var i = 0, max = 54; i < max; i++) {
        // console.log("variable_selector = " + variable_selector);
        // console.log("position_selector = " + position_selector);

        switch (variable_selector) {
            case 0:
                programs_number = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 1:
                program_1_off_on_and_days = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 2:
                program_1_bright = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 3:
                program_1_speed = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 4:
                program_1_sched_number = parseInt(variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 5:
                program_1_sched_1_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 6:
                program_1_sched_1_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                if (program_1_sched_number === 1) {
                    variable_selector = variable_selector + 1 + 2 + 2;
                    position_selector = position_selector + 2;
                }
                if (program_1_sched_number === 2) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                if (program_1_sched_number === 3) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                break;
            case 7:
                program_1_sched_2_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 8:
                program_1_sched_2_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                if (program_1_sched_number === 2) {
                    variable_selector = variable_selector + 1 + 2;
                    position_selector = position_selector + 2;
                }
                if (program_1_sched_number === 3) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                break;
            case 9:
                program_1_sched_3_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 10:
                program_1_sched_3_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 11:
                program_2_off_on_and_days = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 12:
                program_2_bright = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 13:
                program_2_speed = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 14:
                program_2_sched_number = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 15:
                program_2_sched_1_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 16:
                program_2_sched_1_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                if (program_2_sched_number === 1) {
                    variable_selector = variable_selector + 1 + 2 + 2;
                    position_selector = position_selector + 2;
                }
                if (program_2_sched_number === 2) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                if (program_2_sched_number === 3) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                break;
            case 17:
                program_2_sched_2_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 18:
                program_2_sched_2_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                if (program_2_sched_number === 2) {
                    variable_selector = variable_selector + 1 + 1;
                    position_selector = position_selector + 2;
                }
                if (program_2_sched_number === 3) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                break;
            case 19:
                program_2_sched_3_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 20:
                program_2_sched_3_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 21:
                program_3_off_on_and_days = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 22:
                program_3_bright = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 23:
                program_3_speed = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 24:
                program_3_sched_number = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 25:
                program_3_sched_1_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 26:
                program_3_sched_1_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                if (program_3_sched_number === 1) {
                    variable_selector = variable_selector + 1 + 2 + 2;
                    position_selector = position_selector + 2;
                }
                if (program_3_sched_number === 2) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                if (program_3_sched_number === 3) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                break;
            case 27:
                program_3_sched_2_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 28:
                program_3_sched_2_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                if (program_3_sched_number === 2) {
                    variable_selector = variable_selector + 1 + 2;
                    position_selector = position_selector + 2;
                }
                if (program_3_sched_number === 3) {
                    variable_selector = variable_selector + 1;
                    position_selector = position_selector + 2;
                }
                break;
            case 29:
                program_3_sched_3_begin = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]);
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            case 30:
                program_3_sched_3_end = converter("hex", "dec", variable_sched[position_selector] + variable_sched[position_selector + 1]) - 128;
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
                break;
            default:
                variable_selector = variable_selector + 1;
                position_selector = position_selector + 2;
        }
    }

    // console.log("programs_number = " + programs_number);
    // console.log("program_1_off_on_and_days = " + program_1_off_on_and_days);
    // console.log("program_1_bright = " + program_1_bright);
    // console.log("program_1_speed = " + program_1_speed);
    // console.log("program_1_sched_number = " + program_1_sched_number);
    // console.log("program_1_sched_1_begin = " + program_1_sched_1_begin);
    // console.log("program_1_sched_1_end = " + program_1_sched_1_end);
    // console.log("program_1_sched_2_begin = " + program_1_sched_2_begin);
    // console.log("program_1_sched_2_end = " + program_1_sched_2_end);
    // console.log("program_1_sched_3_begin = " + program_1_sched_3_begin);
    // console.log("program_1_sched_3_end = " + program_1_sched_3_end);
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
    // console.log("program_3_off_on_and_days = " + program_3_off_on_and_days);
    // console.log("program_3_bright = " + program_3_bright);
    // console.log("program_3_speed = " + program_3_speed);
    // console.log("program_3_sched_number = " + program_3_sched_number);
    // console.log("program_3_sched_1_begin = " + program_3_sched_1_begin);
    // console.log("program_3_sched_1_end = " + program_3_sched_1_end);
    // console.log("program_3_sched_2_begin = " + program_3_sched_2_begin);
    // console.log("program_3_sched_2_end = " + program_3_sched_2_end);
    // console.log("program_3_sched_3_begin = " + program_3_sched_3_begin);
    // console.log("program_3_sched_3_end = " + program_3_sched_3_end);

    if (selection === "programs_number")
        return parseInt(programs_number);
    if (selection === "program_1_off_on_and_days")
        return parseInt(program_1_off_on_and_days);
    if (selection === "program_1_bright")
        return parseInt(program_1_bright);
    if (selection === "program_1_speed")
        return parseInt(program_1_speed);
    if (selection === "program_1_sched_number")
        return parseInt(program_1_sched_number);
    if (selection === "program_1_sched_1_begin")
        return parseInt(program_1_sched_1_begin);
    if (selection === "program_1_sched_1_end")
        return parseInt(program_1_sched_1_end);
    if (selection === "program_1_sched_2_begin")
        return parseInt(program_1_sched_2_begin);
    if (selection === "program_1_sched_2_end")
        return parseInt(program_1_sched_2_end);
    if (selection === "program_1_sched_3_begin")
        return parseInt(program_1_sched_3_begin);
    if (selection === "program_1_sched_3_end")
        return parseInt(program_1_sched_3_end);
    if (selection === "program_2_off_on_and_days")
        return parseInt(program_2_off_on_and_days);
    if (selection === "program_2_bright")
        return parseInt(program_2_bright);
    if (selection === "program_2_speed")
        return parseInt(program_2_speed);
    if (selection === "program_2_sched_number")
        return parseInt(program_2_sched_number);
    if (selection === "program_2_sched_1_begin")
        return parseInt(program_2_sched_1_begin);
    if (selection === "program_2_sched_1_end")
        return parseInt(program_2_sched_1_end);
    if (selection === "program_2_sched_2_begin")
        return parseInt(program_2_sched_2_begin);
    if (selection === "program_2_sched_2_end")
        return parseInt(program_2_sched_2_end);
    if (selection === "program_2_sched_3_begin")
        return parseInt(program_2_sched_3_begin);
    if (selection === "program_2_sched_3_end")
        return parseInt(program_2_sched_3_end);
    if (selection === "program_3_off_on_and_days")
        return parseInt(program_3_off_on_and_days);
    if (selection === "program_3_bright")
        return parseInt(program_3_bright);
    if (selection === "program_3_speed")
        return parseInt(program_3_speed);
    if (selection === "program_3_sched_number")
        return parseInt(program_3_sched_number);
    if (selection === "program_3_sched_1_begin")
        return parseInt(program_3_sched_1_begin);
    if (selection === "program_3_sched_1_end")
        return parseInt(program_3_sched_1_end);
    if (selection === "program_3_sched_2_begin")
        return parseInt(program_3_sched_2_begin);
    if (selection === "program_3_sched_2_end")
        return parseInt(program_3_sched_2_end);
    if (selection === "program_3_sched_3_begin")
        return parseInt(program_3_sched_3_begin);
    if (selection === "program_3_sched_3_end")
        return parseInt(program_3_sched_3_end);

    if (selection === "program_1_color")
        return parseInt(program_1_bright);
    if (selection === "program_2_color")
        return parseInt(program_2_bright);

    if (selection === "1")
        return parseInt(programs_number);
    if (selection === "2")
        return parseInt(program_1_off_on_and_days);
    if (selection === "3")
        return parseInt(program_1_bright);
    if (selection === "4")
        return parseInt(program_1_speed);
    if (selection === "5")
        return parseInt(program_1_sched_number);
    if (selection === "6")
        return parseInt(program_1_sched_1_begin);

    if (program_1_off_on_and_days === undefined) {
        return;
    }

    program_1_off_on_and_days = converter("dec", "bin", program_1_off_on_and_days);
    program_1_off_on = parseInt(program_1_off_on_and_days[0]);
    program_1_samedi = parseInt(program_1_off_on_and_days[1]);
    program_1_vendredi = parseInt(program_1_off_on_and_days[2]);
    program_1_jeudi = parseInt(program_1_off_on_and_days[3]);
    program_1_mercredi = parseInt(program_1_off_on_and_days[4]);
    program_1_mardi = parseInt(program_1_off_on_and_days[5]);
    program_1_lundi = parseInt(program_1_off_on_and_days[6]);
    program_1_dimanche = parseInt(program_1_off_on_and_days[7]);

    // console.log("program_1_off_on = " + program_1_off_on);
    // console.log("program_1_samedi = " + program_1_samedi);
    // console.log("program_1_vendredi = " + program_1_vendredi);
    // console.log("program_1_jeudi = " + program_1_jeudi);
    // console.log("program_1_mercredi = " + program_1_mercredi);
    // console.log("program_1_mardi = " + program_1_mardi);
    // console.log("program_1_lundi = " + program_1_lundi);
    // console.log("program_1_dimanche = " + program_1_dimanche);

    if (selection === "program_1_off_on")
        return parseInt(program_1_off_on);
    if (selection === "program_1_samedi")
        return parseInt(program_1_samedi);
    if (selection === "program_1_vendredi")
        return parseInt(program_1_vendredi);
    if (selection === "program_1_jeudi")
        return parseInt(program_1_jeudi);
    if (selection === "program_1_mercredi")
        return parseInt(program_1_mercredi);
    if (selection === "program_1_mardi")
        return parseInt(program_1_mardi);
    if (selection === "program_1_lundi")
        return parseInt(program_1_lundi);
    if (selection === "program_1_dimanche")
        return parseInt(program_1_dimanche);

    program_2_off_on_and_days = converter("dec", "bin", program_2_off_on_and_days);
    program_2_off_on = parseInt(program_2_off_on_and_days[0]);
    program_2_samedi = parseInt(program_2_off_on_and_days[1]);
    program_2_vendredi = parseInt(program_2_off_on_and_days[2]);
    program_2_jeudi = parseInt(program_2_off_on_and_days[3]);
    program_2_mercredi = parseInt(program_2_off_on_and_days[4]);
    program_2_mardi = parseInt(program_2_off_on_and_days[5]);
    program_2_lundi = parseInt(program_2_off_on_and_days[6]);
    program_2_dimanche = parseInt(program_2_off_on_and_days[7]);

    // console.log("program_2_off_on = " + program_2_off_on);
    // console.log("program_2_samedi = " + program_2_samedi);
    // console.log("program_2_vendredi = " + program_2_vendredi);
    // console.log("program_2_jeudi = " + program_2_jeudi);
    // console.log("program_2_mercredi = " + program_2_mercredi);
    // console.log("program_2_mardi = " + program_2_mardi);
    // console.log("program_2_lundi = " + program_2_lundi);
    // console.log("program_2_dimanche = " + program_2_dimanche);

    if (selection === "program_2_off_on")
        return parseInt(program_2_off_on);
    if (selection === "program_2_samedi")
        return parseInt(program_2_samedi);
    if (selection === "program_2_vendredi")
        return parseInt(program_2_vendredi);
    if (selection === "program_2_jeudi")
        return parseInt(program_2_jeudi);
    if (selection === "program_2_mercredi")
        return parseInt(program_2_mercredi);
    if (selection === "program_2_mardi")
        return parseInt(program_2_mardi);
    if (selection === "program_2_lundi")
        return parseInt(program_2_lundi);
    if (selection === "program_2_dimanche")
        return parseInt(program_2_dimanche);

    return "error";
}

var set_light_sched_value_save = "";

function set_light_sched_value(name, value) {

    // Récupération des valeurs de basesselected_program_1_sched_2_begin

    if (set_light_sched_value_save === "") {
        var light_sched = get_value_from_position(eq_modal, "light_sched");
    } else {
        var light_sched = set_light_sched_value_save;
    }
    console.log("light_sched = " + light_sched);


    // 02 7E 64 64 01 04 10 7E 64 64 01 04 88

    var selected_programs_number = get_sched_value(light_sched, "programs_number");
    var selected_program_1_off_on_and_days = get_sched_value(light_sched, "program_1_off_on_and_days");
    var selected_program_1_bright = get_sched_value(light_sched, "program_1_bright");
    var selected_program_1_speed = get_sched_value(light_sched, "program_1_speed");
    var selected_program_1_sched_number = get_sched_value(light_sched, "program_1_sched_number");
    var selected_program_1_sched_1_begin = get_sched_value(light_sched, "program_1_sched_1_begin");
    var selected_program_1_sched_1_end = get_sched_value(light_sched, "program_1_sched_1_end");
    var selected_program_1_sched_2_begin = get_sched_value(light_sched, "program_1_sched_2_begin");
    var selected_program_1_sched_2_end = get_sched_value(light_sched, "program_1_sched_2_end");
    var selected_program_1_sched_3_begin = get_sched_value(light_sched, "program_1_sched_3_begin");
    var selected_program_1_sched_3_end = get_sched_value(light_sched, "program_1_sched_3_end");
    var selected_program_2_off_on_and_days = get_sched_value(light_sched, "program_2_off_on_and_days");
    var selected_program_2_bright = get_sched_value(light_sched, "program_2_bright");
    var selected_program_2_speed = get_sched_value(light_sched, "program_2_speed");
    var selected_program_2_sched_number = get_sched_value(light_sched, "program_2_sched_number");
    var selected_program_2_sched_1_begin = get_sched_value(light_sched, "program_2_sched_1_begin");
    var selected_program_2_sched_1_end = get_sched_value(light_sched, "program_2_sched_1_end");
    var selected_program_2_sched_2_begin = get_sched_value(light_sched, "program_2_sched_2_begin");
    var selected_program_2_sched_2_end = get_sched_value(light_sched, "program_2_sched_2_end");
    var selected_program_2_sched_3_begin = get_sched_value(light_sched, "program_2_sched_3_begin");
    var selected_program_2_sched_3_end = get_sched_value(light_sched, "program_2_sched_3_end");
    var selected_program_3_off_on_and_days = get_sched_value(light_sched, "program_3_off_on_and_days");
    var selected_program_3_bright = get_sched_value(light_sched, "program_3_bright");
    var selected_program_3_speed = get_sched_value(light_sched, "program_3_speed");
    var selected_program_3_sched_number = get_sched_value(light_sched, "program_3_sched_number");
    var selected_program_3_sched_1_begin = get_sched_value(light_sched, "program_3_sched_1_begin");
    var selected_program_3_sched_1_end = get_sched_value(light_sched, "program_3_sched_1_end");
    var selected_program_3_sched_2_begin = get_sched_value(light_sched, "program_3_sched_2_begin");
    var selected_program_3_sched_2_end = get_sched_value(light_sched, "program_3_sched_2_end");
    var selected_program_3_sched_3_begin = get_sched_value(light_sched, "program_3_sched_3_begin");
    var selected_program_3_sched_3_end = get_sched_value(light_sched, "program_3_sched_3_end");


    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
    // console.log("selected_program_1_bright = " + selected_program_1_bright);
    // console.log("selected_program_1_speed = " + selected_program_1_speed);
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);
    // console.log("selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
    // console.log("selected_program_2_bright = " + selected_program_2_bright);
    // console.log("selected_program_2_speed = " + selected_program_2_speed);
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);
    // console.log("selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
    // console.log("selected_program_3_bright = " + selected_program_3_bright);
    // console.log("selected_program_3_speed = " + selected_program_3_speed);
    // console.log("selected_program_3_sched_number = " + selected_program_3_sched_number);
    // console.log("selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    selected_program_1_sched_1_end = fix_end_dec(selected_program_1_sched_1_end);
    selected_program_1_sched_2_end = fix_end_dec(selected_program_1_sched_2_end);
    selected_program_1_sched_3_end = fix_end_dec(selected_program_1_sched_3_end);
    selected_program_2_sched_1_end = fix_end_dec(selected_program_2_sched_1_end);
    selected_program_2_sched_2_end = fix_end_dec(selected_program_2_sched_2_end);
    selected_program_2_sched_3_end = fix_end_dec(selected_program_2_sched_3_end);
    selected_program_3_sched_1_end = fix_end_dec(selected_program_3_sched_1_end);
    selected_program_3_sched_2_end = fix_end_dec(selected_program_3_sched_2_end);
    selected_program_3_sched_3_end = fix_end_dec(selected_program_3_sched_3_end);

    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    var old_programs_number = converter("dec", "hex", selected_programs_number);
    var old_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);
    var old_program_1_bright = converter("dec", "hex", selected_program_1_bright);
    var old_program_1_speed = converter("dec", "hex", selected_program_1_speed);
    var old_program_1_sched_number = converter("dec", "hex", selected_program_1_sched_number);
    var old_program_1_sched_1_begin = converter("dec", "hex", selected_program_1_sched_1_begin);
    var old_program_1_sched_1_end = converter("dec", "hex", selected_program_1_sched_1_end);
    var old_program_1_sched_2_begin = converter("dec", "hex", selected_program_1_sched_2_begin);
    var old_program_1_sched_2_end = converter("dec", "hex", selected_program_1_sched_2_end);
    var old_program_1_sched_3_begin = converter("dec", "hex", selected_program_1_sched_3_begin);
    var old_program_1_sched_3_end = converter("dec", "hex", selected_program_1_sched_3_end);
    var old_program_2_off_on_and_days = converter("dec", "hex", selected_program_2_off_on_and_days);
    var old_program_2_bright = converter("dec", "hex", selected_program_2_bright);
    var old_program_2_speed = converter("dec", "hex", selected_program_2_speed);
    var old_program_2_sched_number = converter("dec", "hex", selected_program_2_sched_number);
    var old_program_2_sched_1_begin = converter("dec", "hex", selected_program_2_sched_1_begin);
    var old_program_2_sched_1_end = converter("dec", "hex", selected_program_2_sched_1_end);
    var old_program_2_sched_2_begin = converter("dec", "hex", selected_program_2_sched_2_begin);
    var old_program_2_sched_2_end = converter("dec", "hex", selected_program_2_sched_2_end);
    var old_program_2_sched_3_begin = converter("dec", "hex", selected_program_2_sched_3_begin);
    var old_program_2_sched_3_end = converter("dec", "hex", selected_program_2_sched_3_end);
    var old_program_3_off_on_and_days = converter("dec", "hex", selected_program_3_off_on_and_days);
    var old_program_3_bright = converter("dec", "hex", selected_program_3_bright);
    var old_program_3_speed = converter("dec", "hex", selected_program_3_speed);
    var old_program_3_sched_number = converter("dec", "hex", selected_program_3_sched_number);
    var old_program_3_sched_1_begin = converter("dec", "hex", selected_program_3_sched_1_begin);
    var old_program_3_sched_1_end = converter("dec", "hex", selected_program_3_sched_1_end);
    var old_program_3_sched_2_begin = converter("dec", "hex", selected_program_3_sched_2_begin);
    var old_program_3_sched_2_end = converter("dec", "hex", selected_program_3_sched_2_end);
    var old_program_3_sched_3_begin = converter("dec", "hex", selected_program_3_sched_3_begin);
    var old_program_3_sched_3_end = converter("dec", "hex", selected_program_3_sched_3_end);

    if (old_programs_number === undefined)
        old_programs_number = "";
    if (old_program_1_off_on_and_days === undefined)
        old_program_1_off_on_and_days = "";
    if (old_program_1_bright === undefined)
        old_program_1_bright = "";
    if (old_program_1_speed === undefined)
        old_program_1_speed = "";
    if (old_program_1_sched_number === undefined)
        old_program_1_sched_number = "";
    if (old_program_1_sched_1_begin === undefined)
        old_program_1_sched_1_begin = "";
    if (old_program_1_sched_1_end === undefined)
        old_program_1_sched_1_end = "";
    if (old_program_1_sched_2_begin === undefined)
        old_program_1_sched_2_begin = "";
    if (old_program_1_sched_2_end === undefined)
        old_program_1_sched_2_end = "";
    if (old_program_1_sched_3_begin === undefined)
        old_program_1_sched_3_begin = "";
    if (old_program_1_sched_3_end === undefined)
        old_program_1_sched_3_end = "";
    if (old_program_2_off_on_and_days === undefined)
        old_program_2_off_on_and_days = "";
    if (old_program_2_bright === undefined)
        old_program_2_bright = "";
    if (old_program_2_speed === undefined)
        old_program_2_speed = "";
    if (old_program_2_sched_number === undefined)
        old_program_2_sched_number = "";
    if (old_program_2_sched_1_begin === undefined)
        old_program_2_sched_1_begin = "";
    if (old_program_2_sched_1_end === undefined)
        old_program_2_sched_1_end = "";
    if (old_program_2_sched_2_begin === undefined)
        old_program_2_sched_2_begin = "";
    if (old_program_2_sched_2_end === undefined)
        old_program_2_sched_2_end = "";
    if (old_program_2_sched_3_begin === undefined)
        old_program_2_sched_3_begin = "";
    if (old_program_2_sched_3_end === undefined)
        old_program_2_sched_3_end = "";
    if (old_program_3_off_on_and_days === undefined)
        old_program_3_off_on_and_days = "";
    if (old_program_3_bright === undefined)
        old_program_3_bright = "";
    if (old_program_3_speed === undefined)
        old_program_3_speed = "";
    if (old_program_3_sched_number === undefined)
        old_program_3_sched_number = "";
    if (old_program_3_sched_1_begin === undefined)
        old_program_3_sched_1_begin = "";
    if (old_program_3_sched_1_end === undefined)
        old_program_3_sched_1_end = "";
    if (old_program_3_sched_2_begin === undefined)
        old_program_3_sched_2_begin = "";
    if (old_program_3_sched_2_end === undefined)
        old_program_3_sched_2_end = "";
    if (old_program_3_sched_3_begin === undefined)
        old_program_3_sched_3_begin = "";
    if (old_program_3_sched_3_end === undefined)
        old_program_3_sched_3_end = "";

    console.log("off_on bright speeds scheds begin1 endin1 begin2 endin2 begin3 endin3");
    console.log(old_program_1_off_on_and_days + "     " + old_program_1_bright + "     " + old_program_1_speed + "     " + old_program_1_sched_number + "     " + old_program_1_sched_1_begin + "     " + old_program_1_sched_1_end + "     " + old_program_1_sched_2_begin + "     " + old_program_1_sched_2_end + "     " + old_program_1_sched_3_begin + "     " + old_program_1_sched_3_end + "     ");
    console.log(old_program_2_off_on_and_days + "     " + old_program_2_bright + "     " + old_program_2_speed + "     " + old_program_2_sched_number + "     " + old_program_2_sched_1_begin + "     " + old_program_2_sched_1_end + "     " + old_program_2_sched_2_begin + "     " + old_program_2_sched_2_end + "     " + old_program_2_sched_3_begin + "     " + old_program_2_sched_3_end + "     ");
    console.log(old_program_3_off_on_and_days + "     " + old_program_3_bright + "     " + old_program_3_speed + "     " + old_program_3_sched_number + "     " + old_program_3_sched_1_begin + "     " + old_program_3_sched_1_end + "     " + old_program_3_sched_2_begin + "     " + old_program_3_sched_2_end + "     " + old_program_3_sched_3_begin + "     " + old_program_3_sched_3_end + "     ");


    // Ajout des nouvelles valeurs

    if ("progs_number" === name)
        selected_programs_number = value;
    else if ("prog_1_off_on_and_days" === name)
        selected_program_1_off_on_and_days = value;
    else if ("prog_1_bright" === name)
        selected_program_1_bright = value;
    else if ("prog_1_speed" === name)
        selected_program_1_speed = value;
    else if ("prog_1_sched_number" === name)
        selected_program_1_sched_number = value;
    else if ("prog_1_sched_1_begin" === name)
        selected_program_1_sched_1_begin = value;
    else if ("prog_1_sched_1_end" === name)
        selected_program_1_sched_1_end = value;
    else if ("prog_1_sched_2_begin" === name)
        selected_program_1_sched_2_begin = value;
    else if ("prog_1_sched_2_end" === name)
        selected_program_1_sched_2_end = value;
    else if ("prog_1_sched_3_begin" === name)
        selected_program_1_sched_3_begin = value;
    else if ("prog_1_sched_3_end" === name)
        selected_program_1_sched_3_end = value;
    else if ("prog_2_off_on_and_days" === name)
        selected_program_2_off_on_and_days = value;
    else if ("prog_2_bright" === name)
        selected_program_2_bright = value;
    else if ("prog_2_speed" === name)
        selected_program_2_speed = value;
    else if ("prog_2_sched_number" === name)
        selected_program_2_sched_number = value;
    else if ("prog_2_sched_1_begin" === name)
        selected_program_2_sched_1_begin = value;
    else if ("prog_2_sched_1_end" === name)
        selected_program_2_sched_1_end = value;
    else if ("prog_2_sched_2_begin" === name)
        selected_program_2_sched_2_begin = value;
    else if ("prog_2_sched_2_end" === name)
        selected_program_2_sched_2_end = value;
    else if ("prog_2_sched_3_begin" === name)
        selected_program_2_sched_3_begin = value;
    else if ("prog_2_sched_3_end" === name)
        selected_program_2_sched_3_end = value;
    else if ("prog_3_off_on_and_days" === name)
        selected_program_3_off_on_and_days = value;
    else if ("prog_3_bright" === name)
        selected_program_3_bright = value;
    else if ("prog_3_speed" === name)
        selected_program_3_speed = value;
    else if ("prog_3_sched_number" === name)
        selected_program_3_sched_number = value;
    else if ("prog_3_sched_1_begin" === name)
        selected_program_3_sched_1_begin = value;
    else if ("prog_3_sched_1_end" === name)
        selected_program_3_sched_1_end = value;
    else if ("prog_3_sched_2_begin" === name)
        selected_program_3_sched_2_begin = value;
    else if ("prog_3_sched_2_end" === name)
        selected_program_3_sched_2_end = value;
    else if ("prog_3_sched_3_begin" === name)
        selected_program_3_sched_3_begin = value;
    else if ("prog_3_sched_3_end" === name)
        selected_program_3_sched_3_end = value;

    // fix sched number

    if (selected_program_1_sched_1_begin > 0 || selected_program_1_sched_1_end > 0)
        selected_program_1_sched_number = 1;
    if (selected_program_1_sched_2_begin > 0 || selected_program_1_sched_2_end > 0)
        selected_program_1_sched_number = 2;
    if (selected_program_1_sched_3_begin > 0 || selected_program_1_sched_3_end > 0)
        selected_program_1_sched_number = 3;

//    if (selected_program_1_sched_1_begin > 0) {
//        console.log("selected_program_1_sched_1_begin (" + selected_program_1_sched_1_begin + ") > 0");
//    }
//    if (selected_program_1_sched_1_end > 0) {
//        console.log("selected_program_1_sched_1_end (" + selected_program_1_sched_1_end + ") > 0");
//    }
//    if (selected_program_1_sched_2_begin > 0) {
//        console.log("selected_program_1_sched_2_begin (" + selected_program_1_sched_2_begin + ") > 0");
//    }
//    if (selected_program_1_sched_2_end > 0) {
//        console.log("selected_program_1_sched_2_end (" + selected_program_1_sched_2_end + ") > 0");
//    }
//    if (selected_program_1_sched_3_begin > 0) {
//        console.log("selected_program_1_sched_3_begin (" + selected_program_1_sched_3_begin + ") > 0");
//    }
//    if (selected_program_1_sched_3_end > 0) {
//        console.log("selected_program_1_sched_3_end (" + selected_program_1_sched_3_end + ") > 0");
//    }
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);

    if (selected_program_2_sched_1_begin > 0 || selected_program_2_sched_1_end > 0)
        selected_program_2_sched_number = 1;
    if (selected_program_2_sched_2_begin > 0 || selected_program_2_sched_2_end > 0)
        selected_program_2_sched_number = 2;
    if (selected_program_2_sched_3_begin > 0 || selected_program_2_sched_3_end > 0)
        selected_program_2_sched_number = 3;

    if (selected_program_2_sched_1_begin > 0) {
        console.log("selected_program_2_sched_1_begin (" + selected_program_2_sched_1_begin + ") > 0");
    }
    if (selected_program_2_sched_1_end > 0) {
        console.log("selected_program_2_sched_1_end (" + selected_program_2_sched_1_end + ") > 0");
    }
    if (selected_program_2_sched_2_begin > 0) {
        console.log("selected_program_2_sched_2_begin (" + selected_program_2_sched_2_begin + ") > 0");
    }
    if (selected_program_2_sched_2_end > 0) {
        console.log("selected_program_2_sched_2_end (" + selected_program_2_sched_2_end + ") > 0");
    }
    if (selected_program_2_sched_3_begin > 0) {
        console.log("selected_program_2_sched_3_begin (" + selected_program_2_sched_3_begin + ") > 0");
    }
    if (selected_program_2_sched_3_end > 0) {
        console.log("selected_program_2_sched_3_end (" + selected_program_2_sched_3_end + ") > 0");
    }
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);

    // Convertion

    selected_programs_number = converter("dec", "hex", selected_programs_number);
    selected_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);
    selected_program_1_bright = converter("dec", "hex", selected_program_1_bright);
    selected_program_1_speed = converter("dec", "hex", selected_program_1_speed);
    selected_program_1_sched_number = converter("dec", "hex", selected_program_1_sched_number);
    selected_program_1_sched_1_begin = converter("dec", "hex", selected_program_1_sched_1_begin);
    selected_program_1_sched_1_end = converter("dec", "hex", selected_program_1_sched_1_end);
    selected_program_1_sched_2_begin = converter("dec", "hex", selected_program_1_sched_2_begin);
    selected_program_1_sched_2_end = converter("dec", "hex", selected_program_1_sched_2_end);
    selected_program_1_sched_3_begin = converter("dec", "hex", selected_program_1_sched_3_begin);
    selected_program_1_sched_3_end = converter("dec", "hex", selected_program_1_sched_3_end);
    selected_program_2_off_on_and_days = converter("dec", "hex", selected_program_2_off_on_and_days);
    selected_program_2_bright = converter("dec", "hex", selected_program_2_bright);
    selected_program_2_speed = converter("dec", "hex", selected_program_2_speed);
    selected_program_2_sched_number = converter("dec", "hex", selected_program_2_sched_number);
    selected_program_2_sched_1_begin = converter("dec", "hex", selected_program_2_sched_1_begin);
    selected_program_2_sched_1_end = converter("dec", "hex", selected_program_2_sched_1_end);
    selected_program_2_sched_2_begin = converter("dec", "hex", selected_program_2_sched_2_begin);
    selected_program_2_sched_2_end = converter("dec", "hex", selected_program_2_sched_2_end);
    selected_program_2_sched_3_begin = converter("dec", "hex", selected_program_2_sched_3_begin);
    selected_program_2_sched_3_end = converter("dec", "hex", selected_program_2_sched_3_end);
    selected_program_3_off_on_and_days = converter("dec", "hex", selected_program_3_off_on_and_days);
    selected_program_3_bright = converter("dec", "hex", selected_program_3_bright);
    selected_program_3_speed = converter("dec", "hex", selected_program_3_speed);
    selected_program_3_sched_number = converter("dec", "hex", selected_program_3_sched_number);
    selected_program_3_sched_1_begin = converter("dec", "hex", selected_program_3_sched_1_begin);
    selected_program_3_sched_1_end = converter("dec", "hex", selected_program_3_sched_1_end);
    selected_program_3_sched_2_begin = converter("dec", "hex", selected_program_3_sched_2_begin);
    selected_program_3_sched_2_end = converter("dec", "hex", selected_program_3_sched_2_end);
    selected_program_3_sched_3_begin = converter("dec", "hex", selected_program_3_sched_3_begin);
    selected_program_3_sched_3_end = converter("dec", "hex", selected_program_3_sched_3_end);

    if (selected_programs_number === undefined)
        selected_programs_number = "";
    if (selected_program_1_off_on_and_days === undefined)
        selected_program_1_off_on_and_days = "";
    if (selected_program_1_bright === undefined)
        selected_program_1_bright = "";
    if (selected_program_1_speed === undefined)
        selected_program_1_speed = "";
    if (selected_program_1_sched_number === undefined)
        selected_program_1_sched_number = "";
    if (selected_program_1_sched_1_begin === undefined)
        selected_program_1_sched_1_begin = "";
    if (selected_program_1_sched_1_end === undefined)
        selected_program_1_sched_1_end = "";
    if (selected_program_1_sched_2_begin === undefined)
        selected_program_1_sched_2_begin = "";
    if (selected_program_1_sched_2_end === undefined)
        selected_program_1_sched_2_end = "";
    if (selected_program_1_sched_3_begin === undefined)
        selected_program_1_sched_3_begin = "";
    if (selected_program_1_sched_3_end === undefined)
        selected_program_1_sched_3_end = "";
    if (selected_program_2_off_on_and_days === undefined)
        selected_program_2_off_on_and_days = "";
    if (selected_program_2_bright === undefined)
        selected_program_2_bright = "";
    if (selected_program_2_speed === undefined)
        selected_program_2_speed = "";
    if (selected_program_2_sched_number === undefined)
        selected_program_2_sched_number = "";
    if (selected_program_2_sched_1_begin === undefined)
        selected_program_2_sched_1_begin = "";
    if (selected_program_2_sched_1_end === undefined)
        selected_program_2_sched_1_end = "";
    if (selected_program_2_sched_2_begin === undefined)
        selected_program_2_sched_2_begin = "";
    if (selected_program_2_sched_2_end === undefined)
        selected_program_2_sched_2_end = "";
    if (selected_program_2_sched_3_begin === undefined)
        selected_program_2_sched_3_begin = "";
    if (selected_program_2_sched_3_end === undefined)
        selected_program_2_sched_3_end = "";
    if (selected_program_3_off_on_and_days === undefined)
        selected_program_3_off_on_and_days = "";
    if (selected_program_3_bright === undefined)
        selected_program_3_bright = "";
    if (selected_program_3_speed === undefined)
        selected_program_3_speed = "";
    if (selected_program_3_sched_number === undefined)
        selected_program_3_sched_number = "";
    if (selected_program_3_sched_1_begin === undefined)
        selected_program_3_sched_1_begin = "";
    if (selected_program_3_sched_1_end === undefined)
        selected_program_3_sched_1_end = "";
    if (selected_program_3_sched_2_begin === undefined)
        selected_program_3_sched_2_begin = "";
    if (selected_program_3_sched_2_end === undefined)
        selected_program_3_sched_2_end = "";
    if (selected_program_3_sched_3_begin === undefined)
        selected_program_3_sched_3_begin = "";
    if (selected_program_3_sched_3_end === undefined)
        selected_program_3_sched_3_end = "";

    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
    // console.log("selected_program_1_bright = " + selected_program_1_bright);
    // console.log("selected_program_1_speed = " + selected_program_1_speed);
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);
    // console.log("selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
    // console.log("selected_program_2_bright = " + selected_program_2_bright);
    // console.log("selected_program_2_speed = " + selected_program_2_speed);
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);
    // console.log("selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
    // console.log("selected_program_3_bright = " + selected_program_3_bright);
    // console.log("selected_program_3_speed = " + selected_program_3_speed);
    // console.log("selected_program_3_sched_number = " + selected_program_3_sched_number);
    // console.log("selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    // Fill Blank

    if (is_void(selected_program_1_sched_2_begin) && !is_void(selected_program_1_sched_2_end))
        selected_program_1_sched_2_begin = "00";
    if (!is_void(selected_program_1_sched_2_begin) && is_void(selected_program_1_sched_2_end))
        selected_program_1_sched_2_end = "00";
    if (is_void(selected_program_1_sched_3_begin) && !is_void(selected_program_1_sched_3_end))
        selected_program_1_sched_3_begin = "00";
    if (!is_void(selected_program_1_sched_3_begin) && is_void(selected_program_1_sched_3_end))
        selected_program_1_sched_3_end = "00";

    // Delete Void Sched

    if (selected_program_1_sched_2_begin === "00" && selected_program_1_sched_2_end === "00") {
        selected_program_1_sched_2_begin = "";
        selected_program_1_sched_2_end = "";
    }
    if (selected_program_1_sched_3_begin === "00" && selected_program_1_sched_3_end === "00") {
        selected_program_1_sched_3_begin = "";
        selected_program_1_sched_3_end = "";
    }

    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);

    // Final

    console.log("off_on bright speeds scheds begin1 endin1 begin2 endin2 begin3 endin3");
    console.log(selected_program_1_off_on_and_days + "     " + selected_program_1_bright + "     " + selected_program_1_speed + "     " + selected_program_1_sched_number + "     " + selected_program_1_sched_1_begin + "     " + selected_program_1_sched_1_end + "     " + selected_program_1_sched_2_begin + "     " + selected_program_1_sched_2_end + "     " + selected_program_1_sched_3_begin + "     " + selected_program_1_sched_3_end + "     ");
    console.log(selected_program_2_off_on_and_days + "     " + selected_program_2_bright + "     " + selected_program_2_speed + "     " + selected_program_2_sched_number + "     " + selected_program_2_sched_1_begin + "     " + selected_program_2_sched_1_end + "     " + selected_program_2_sched_2_begin + "     " + selected_program_2_sched_2_end + "     " + selected_program_2_sched_3_begin + "     " + selected_program_2_sched_3_end + "     ");
    console.log(selected_program_3_off_on_and_days + "     " + selected_program_3_bright + "     " + selected_program_3_speed + "     " + selected_program_3_sched_number + "     " + selected_program_3_sched_1_begin + "     " + selected_program_3_sched_1_end + "     " + selected_program_3_sched_2_begin + "     " + selected_program_3_sched_2_end + "     " + selected_program_3_sched_3_begin + "     " + selected_program_3_sched_3_end + "     ");

    if (old_programs_number !== selected_programs_number) {
        console.log("old_programs_number (" + old_programs_number + ") -----> selected_programs_number (" + selected_programs_number + ")");
    }
    if (old_program_1_off_on_and_days !== selected_program_1_off_on_and_days) {
        console.log("old_program_1_off_on_and_days (" + old_program_1_off_on_and_days + ") -----> selected_program_1_off_on_and_days (" + selected_program_1_off_on_and_days + ")");
    }
    if (old_program_1_bright !== selected_program_1_bright) {
        console.log("old_program_1_bright (" + old_program_1_bright + ") -----> selected_program_1_bright (" + selected_program_1_bright + ")");
    }
    if (old_program_1_speed !== selected_program_1_speed) {
        console.log("old_program_1_speed (" + old_program_1_speed + ") -----> selected_program_1_speed (" + selected_program_1_speed + ")");
    }
    if (old_program_1_sched_number !== selected_program_1_sched_number) {
        console.log("old_program_1_sched_number (" + old_program_1_sched_number + ") -----> selected_program_1_sched_number (" + selected_program_1_sched_number + ")");
    }
    if (old_program_1_sched_1_begin !== selected_program_1_sched_1_begin) {
        console.log("old_program_1_sched_1_begin (" + old_program_1_sched_1_begin + ") -----> selected_program_1_sched_1_begin (" + selected_program_1_sched_1_begin + ")");
    }
    if (old_program_1_sched_1_end !== selected_program_1_sched_1_end) {
        console.log("old_program_1_sched_1_end (" + old_program_1_sched_1_end + ") -----> selected_program_1_sched_1_end (" + selected_program_1_sched_1_end + ")");
    }
    if (old_program_1_sched_2_begin !== selected_program_1_sched_2_begin) {
        console.log("old_program_1_sched_2_begin (" + old_program_1_sched_2_begin + ") -----> selected_program_1_sched_2_begin (" + selected_program_1_sched_2_begin + ")");
    }
    if (old_program_1_sched_2_end !== selected_program_1_sched_2_end) {
        console.log("old_program_1_sched_2_end (" + old_program_1_sched_2_end + ") -----> selected_program_1_sched_2_end (" + selected_program_1_sched_2_end + ")");
    }
    if (old_program_1_sched_3_begin !== selected_program_1_sched_3_begin) {
        console.log("old_program_1_sched_3_begin (" + old_program_1_sched_3_begin + ") -----> selected_program_1_sched_3_begin (" + selected_program_1_sched_3_begin + ")");
    }
    if (old_program_1_sched_3_end !== selected_program_1_sched_3_end) {
        console.log("old_program_1_sched_3_end (" + old_program_1_sched_3_end + ") -----> selected_program_1_sched_3_end (" + selected_program_1_sched_3_end + ")");
    }
    if (old_program_2_off_on_and_days !== selected_program_2_off_on_and_days) {
        console.log("old_program_2_off_on_and_days (" + old_program_2_off_on_and_days + ") -----> selected_program_2_off_on_and_days (" + selected_program_2_off_on_and_days + ")");
    }
    if (old_program_2_bright !== selected_program_2_bright) {
        console.log("old_program_2_bright (" + old_program_2_bright + ") -----> selected_program_2_bright (" + selected_program_2_bright + ")");
    }
    if (old_program_2_speed !== selected_program_2_speed) {
        console.log("old_program_2_speed (" + old_program_2_speed + ") -----> selected_program_2_speed (" + selected_program_2_speed + ")");
    }
    if (old_program_2_sched_number !== selected_program_2_sched_number) {
        console.log("old_program_2_sched_number (" + old_program_2_sched_number + ") -----> selected_program_2_sched_number (" + selected_program_2_sched_number + ")");
    }
    if (old_program_2_sched_1_begin !== selected_program_2_sched_1_begin) {
        console.log("old_program_2_sched_1_begin (" + old_program_2_sched_1_begin + ") -----> selected_program_2_sched_1_begin (" + selected_program_2_sched_1_begin + ")");
    }
    if (old_program_2_sched_1_end !== selected_program_2_sched_1_end) {
        console.log("old_program_2_sched_1_end (" + old_program_2_sched_1_end + ") -----> selected_program_2_sched_1_end (" + selected_program_2_sched_1_end + ")");
    }
    if (old_program_2_sched_2_begin !== selected_program_2_sched_2_begin) {
        console.log("old_program_2_sched_2_begin (" + old_program_2_sched_2_begin + ") -----> selected_program_2_sched_2_begin (" + selected_program_2_sched_2_begin + ")");
    }
    if (old_program_2_sched_2_end !== selected_program_2_sched_2_end) {
        console.log("old_program_2_sched_2_end (" + old_program_2_sched_2_end + ") -----> selected_program_2_sched_2_end (" + selected_program_2_sched_2_end + ")");
    }
    if (old_program_2_sched_3_begin !== selected_program_2_sched_3_begin) {
        console.log("old_program_2_sched_3_begin (" + old_program_2_sched_3_begin + ") -----> selected_program_2_sched_3_begin (" + selected_program_2_sched_3_begin + ")");
    }
    if (old_program_2_sched_3_end !== selected_program_2_sched_3_end) {
        console.log("old_program_2_sched_3_end (" + old_program_2_sched_3_end + ") -----> selected_program_2_sched_3_end (" + selected_program_2_sched_3_end + ")");
    }
    if (old_program_3_off_on_and_days !== selected_program_3_off_on_and_days) {
        console.log("old_program_3_off_on_and_days (" + old_program_3_off_on_and_days + ") -----> selected_program_3_off_on_and_days (" + selected_program_3_off_on_and_days + ")");
    }
    if (old_program_3_bright !== selected_program_3_bright) {
        console.log("old_program_3_bright (" + old_program_3_bright + ") -----> selected_program_3_bright (" + selected_program_3_bright + ")");
    }
    if (old_program_3_speed !== selected_program_3_speed) {
        console.log("old_program_3_speed (" + old_program_3_speed + ") -----> selected_program_3_speed (" + selected_program_3_speed + ")");
    }
    if (old_program_3_sched_number !== selected_program_3_sched_number) {
        console.log("old_program_3_sched_number (" + old_program_3_sched_number + ") -----> selected_program_3_sched_number (" + selected_program_3_sched_number + ")");
    }
    if (old_program_3_sched_1_begin !== selected_program_3_sched_1_begin) {
        console.log("old_program_3_sched_1_begin (" + old_program_3_sched_1_begin + ") -----> selected_program_3_sched_1_begin (" + selected_program_3_sched_1_begin + ")");
    }
    if (old_program_3_sched_1_end !== selected_program_3_sched_1_end) {
        console.log("old_program_3_sched_1_end (" + old_program_3_sched_1_end + ") -----> selected_program_3_sched_1_end (" + selected_program_3_sched_1_end + ")");
    }
    if (old_program_3_sched_2_begin !== selected_program_3_sched_2_begin) {
        console.log("old_program_3_sched_2_begin (" + old_program_3_sched_2_begin + ") -----> selected_program_3_sched_2_begin (" + selected_program_3_sched_2_begin + ")");
    }
    if (old_program_3_sched_2_end !== selected_program_3_sched_2_end) {
        console.log("old_program_3_sched_2_end (" + old_program_3_sched_2_end + ") -----> selected_program_3_sched_2_end (" + selected_program_3_sched_2_end + ")");
    }
    if (old_program_3_sched_3_begin !== selected_program_3_sched_3_begin) {
        console.log("old_program_3_sched_3_begin (" + old_program_3_sched_3_begin + ") -----> selected_program_3_sched_3_begin (" + selected_program_3_sched_3_begin + ")");
    }
    if (old_program_3_sched_3_end !== selected_program_3_sched_3_end) {
        console.log("old_program_3_sched_3_end (" + old_program_3_sched_3_end + ") -----> selected_program_3_sched_3_end (" + selected_program_3_sched_3_end + ")");
    }

    var new_light_sched = `${selected_programs_number}${selected_program_1_off_on_and_days}${selected_program_1_bright}${selected_program_1_speed}${selected_program_1_sched_number}${selected_program_1_sched_1_begin}${selected_program_1_sched_1_end}${selected_program_1_sched_2_begin}${selected_program_1_sched_2_end}${selected_program_1_sched_3_begin}${selected_program_1_sched_3_end}${selected_program_2_off_on_and_days}${selected_program_2_bright}${selected_program_2_speed}${selected_program_2_sched_number}${selected_program_2_sched_1_begin}${selected_program_2_sched_1_end}${selected_program_2_sched_2_begin}${selected_program_2_sched_2_end}${selected_program_2_sched_3_begin}${selected_program_2_sched_3_end}${selected_program_3_off_on_and_days}${selected_program_3_bright}${selected_program_3_speed}${selected_program_3_sched_number}${selected_program_3_sched_1_begin}${selected_program_3_sched_1_end}${selected_program_3_sched_2_begin}${selected_program_3_sched_2_end}${selected_program_3_sched_3_begin}${selected_program_3_sched_3_end}`;
    console.log("new_light_sched = " + new_light_sched);

    var ok = check_sched_for_errors(selected_programs_number, selected_program_1_off_on_and_days, selected_program_1_bright, selected_program_1_speed, selected_program_1_sched_number, selected_program_1_sched_1_begin, selected_program_1_sched_1_end, selected_program_1_sched_2_begin, selected_program_1_sched_2_end, selected_program_1_sched_3_begin, selected_program_1_sched_3_end, selected_program_2_off_on_and_days, selected_program_2_bright, selected_program_2_speed, selected_program_2_sched_number, selected_program_2_sched_1_begin, selected_program_2_sched_1_end, selected_program_2_sched_2_begin, selected_program_2_sched_2_end, selected_program_2_sched_3_begin, selected_program_2_sched_3_end, selected_program_3_off_on_and_days, selected_program_3_bright, selected_program_3_speed, selected_program_3_sched_number, selected_program_3_sched_1_begin, selected_program_3_sched_1_end, selected_program_3_sched_2_begin, selected_program_3_sched_2_end, selected_program_3_sched_3_begin, selected_program_3_sched_3_end);

    set_light_sched_value_save = new_light_sched;
    return new_light_sched;
//    if (ok)
//        quick_send("s44_w", "light_sched", "info", "desired", new_light_sched);

    // quick_send("s44_w", "light_sched", "info", "desired", new_light_sched);
    // quick_send("s44_w", "light_sched", "info", "desired", "02 FE 64 64 03 04 08 7E 64 64 03 04 08 03");
    // hard reset : quick_send("s44_w", "light_sched", "info", "desired", "027E64640104887E6464010488");
    // 02 7E 64 64 01 04 10 7E 64 64 01 04 88
    // 02 7E 64 64 01 04 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 09 0F 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 09 10 0F 7E 64 64 01 04
    // 02 7E 64 64 03 04 08 0F 7E 64 64 01 04
    // 02 7E 64 64 03 04 08 0C 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 0C 17 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 0A 0D 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 0A 00 00 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 08 00 00 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 08 0C 00 00 00 7E 64 64 01
}

var set_filtration_sched_value_save = "";

function set_filtration_sched_value(name, value) {

    // Récupération des valeurs de basesselected_program_1_sched_2_begin

    if (set_filtration_sched_value_save === "") {
        var filtration_sched = get_value_from_position(eq_modal, "filt_sched");
    } else {
        var filtration_sched = set_filtration_sched_value_save;
    }
    console.log("filtration_sched = " + filtration_sched);


    // 02 7E 64 64 01 04 10 7E 64 64 01 04 88

    var selected_programs_number = get_sched_value(filtration_sched, "programs_number");
    var selected_program_1_off_on_and_days = get_sched_value(filtration_sched, "program_1_off_on_and_days");
    var selected_program_1_bright = get_sched_value(filtration_sched, "program_1_bright");
    var selected_program_1_speed = get_sched_value(filtration_sched, "program_1_speed");
    var selected_program_1_sched_number = get_sched_value(filtration_sched, "program_1_sched_number");
    var selected_program_1_sched_1_begin = get_sched_value(filtration_sched, "program_1_sched_1_begin");
    var selected_program_1_sched_1_end = get_sched_value(filtration_sched, "program_1_sched_1_end");
    var selected_program_1_sched_2_begin = get_sched_value(filtration_sched, "program_1_sched_2_begin");
    var selected_program_1_sched_2_end = get_sched_value(filtration_sched, "program_1_sched_2_end");
    var selected_program_1_sched_3_begin = get_sched_value(filtration_sched, "program_1_sched_3_begin");
    var selected_program_1_sched_3_end = get_sched_value(filtration_sched, "program_1_sched_3_end");
    var selected_program_2_off_on_and_days = get_sched_value(filtration_sched, "program_2_off_on_and_days");
    var selected_program_2_bright = get_sched_value(filtration_sched, "program_2_bright");
    var selected_program_2_speed = get_sched_value(filtration_sched, "program_2_speed");
    var selected_program_2_sched_number = get_sched_value(filtration_sched, "program_2_sched_number");
    var selected_program_2_sched_1_begin = get_sched_value(filtration_sched, "program_2_sched_1_begin");
    var selected_program_2_sched_1_end = get_sched_value(filtration_sched, "program_2_sched_1_end");
    var selected_program_2_sched_2_begin = get_sched_value(filtration_sched, "program_2_sched_2_begin");
    var selected_program_2_sched_2_end = get_sched_value(filtration_sched, "program_2_sched_2_end");
    var selected_program_2_sched_3_begin = get_sched_value(filtration_sched, "program_2_sched_3_begin");
    var selected_program_2_sched_3_end = get_sched_value(filtration_sched, "program_2_sched_3_end");
    var selected_program_3_off_on_and_days = get_sched_value(filtration_sched, "program_3_off_on_and_days");
    var selected_program_3_bright = get_sched_value(filtration_sched, "program_3_bright");
    var selected_program_3_speed = get_sched_value(filtration_sched, "program_3_speed");
    var selected_program_3_sched_number = get_sched_value(filtration_sched, "program_3_sched_number");
    var selected_program_3_sched_1_begin = get_sched_value(filtration_sched, "program_3_sched_1_begin");
    var selected_program_3_sched_1_end = get_sched_value(filtration_sched, "program_3_sched_1_end");
    var selected_program_3_sched_2_begin = get_sched_value(filtration_sched, "program_3_sched_2_begin");
    var selected_program_3_sched_2_end = get_sched_value(filtration_sched, "program_3_sched_2_end");
    var selected_program_3_sched_3_begin = get_sched_value(filtration_sched, "program_3_sched_3_begin");
    var selected_program_3_sched_3_end = get_sched_value(filtration_sched, "program_3_sched_3_end");


    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
    // console.log("selected_program_1_bright = " + selected_program_1_bright);
    // console.log("selected_program_1_speed = " + selected_program_1_speed);
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);
    // console.log("selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
    // console.log("selected_program_2_bright = " + selected_program_2_bright);
    // console.log("selected_program_2_speed = " + selected_program_2_speed);
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);
    // console.log("selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
    // console.log("selected_program_3_bright = " + selected_program_3_bright);
    // console.log("selected_program_3_speed = " + selected_program_3_speed);
    // console.log("selected_program_3_sched_number = " + selected_program_3_sched_number);
    // console.log("selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    selected_program_1_sched_1_end = fix_end_dec(selected_program_1_sched_1_end);
    selected_program_1_sched_2_end = fix_end_dec(selected_program_1_sched_2_end);
    selected_program_1_sched_3_end = fix_end_dec(selected_program_1_sched_3_end);
    selected_program_2_sched_1_end = fix_end_dec(selected_program_2_sched_1_end);
    selected_program_2_sched_2_end = fix_end_dec(selected_program_2_sched_2_end);
    selected_program_2_sched_3_end = fix_end_dec(selected_program_2_sched_3_end);
    selected_program_3_sched_1_end = fix_end_dec(selected_program_3_sched_1_end);
    selected_program_3_sched_2_end = fix_end_dec(selected_program_3_sched_2_end);
    selected_program_3_sched_3_end = fix_end_dec(selected_program_3_sched_3_end);

    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    var old_programs_number = converter("dec", "hex", selected_programs_number);
    var old_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);
    var old_program_1_bright = converter("dec", "hex", selected_program_1_bright);
    var old_program_1_speed = converter("dec", "hex", selected_program_1_speed);
    var old_program_1_sched_number = converter("dec", "hex", selected_program_1_sched_number);
    var old_program_1_sched_1_begin = converter("dec", "hex", selected_program_1_sched_1_begin);
    var old_program_1_sched_1_end = converter("dec", "hex", selected_program_1_sched_1_end);
    var old_program_1_sched_2_begin = converter("dec", "hex", selected_program_1_sched_2_begin);
    var old_program_1_sched_2_end = converter("dec", "hex", selected_program_1_sched_2_end);
    var old_program_1_sched_3_begin = converter("dec", "hex", selected_program_1_sched_3_begin);
    var old_program_1_sched_3_end = converter("dec", "hex", selected_program_1_sched_3_end);
    var old_program_2_off_on_and_days = converter("dec", "hex", selected_program_2_off_on_and_days);
    var old_program_2_bright = converter("dec", "hex", selected_program_2_bright);
    var old_program_2_speed = converter("dec", "hex", selected_program_2_speed);
    var old_program_2_sched_number = converter("dec", "hex", selected_program_2_sched_number);
    var old_program_2_sched_1_begin = converter("dec", "hex", selected_program_2_sched_1_begin);
    var old_program_2_sched_1_end = converter("dec", "hex", selected_program_2_sched_1_end);
    var old_program_2_sched_2_begin = converter("dec", "hex", selected_program_2_sched_2_begin);
    var old_program_2_sched_2_end = converter("dec", "hex", selected_program_2_sched_2_end);
    var old_program_2_sched_3_begin = converter("dec", "hex", selected_program_2_sched_3_begin);
    var old_program_2_sched_3_end = converter("dec", "hex", selected_program_2_sched_3_end);
    var old_program_3_off_on_and_days = converter("dec", "hex", selected_program_3_off_on_and_days);
    var old_program_3_bright = converter("dec", "hex", selected_program_3_bright);
    var old_program_3_speed = converter("dec", "hex", selected_program_3_speed);
    var old_program_3_sched_number = converter("dec", "hex", selected_program_3_sched_number);
    var old_program_3_sched_1_begin = converter("dec", "hex", selected_program_3_sched_1_begin);
    var old_program_3_sched_1_end = converter("dec", "hex", selected_program_3_sched_1_end);
    var old_program_3_sched_2_begin = converter("dec", "hex", selected_program_3_sched_2_begin);
    var old_program_3_sched_2_end = converter("dec", "hex", selected_program_3_sched_2_end);
    var old_program_3_sched_3_begin = converter("dec", "hex", selected_program_3_sched_3_begin);
    var old_program_3_sched_3_end = converter("dec", "hex", selected_program_3_sched_3_end);

    if (old_programs_number === undefined)
        old_programs_number = "";
    if (old_program_1_off_on_and_days === undefined)
        old_program_1_off_on_and_days = "";
    if (old_program_1_bright === undefined)
        old_program_1_bright = "";
    if (old_program_1_speed === undefined)
        old_program_1_speed = "";
    if (old_program_1_sched_number === undefined)
        old_program_1_sched_number = "";
    if (old_program_1_sched_1_begin === undefined)
        old_program_1_sched_1_begin = "";
    if (old_program_1_sched_1_end === undefined)
        old_program_1_sched_1_end = "";
    if (old_program_1_sched_2_begin === undefined)
        old_program_1_sched_2_begin = "";
    if (old_program_1_sched_2_end === undefined)
        old_program_1_sched_2_end = "";
    if (old_program_1_sched_3_begin === undefined)
        old_program_1_sched_3_begin = "";
    if (old_program_1_sched_3_end === undefined)
        old_program_1_sched_3_end = "";
    if (old_program_2_off_on_and_days === undefined)
        old_program_2_off_on_and_days = "";
    if (old_program_2_bright === undefined)
        old_program_2_bright = "";
    if (old_program_2_speed === undefined)
        old_program_2_speed = "";
    if (old_program_2_sched_number === undefined)
        old_program_2_sched_number = "";
    if (old_program_2_sched_1_begin === undefined)
        old_program_2_sched_1_begin = "";
    if (old_program_2_sched_1_end === undefined)
        old_program_2_sched_1_end = "";
    if (old_program_2_sched_2_begin === undefined)
        old_program_2_sched_2_begin = "";
    if (old_program_2_sched_2_end === undefined)
        old_program_2_sched_2_end = "";
    if (old_program_2_sched_3_begin === undefined)
        old_program_2_sched_3_begin = "";
    if (old_program_2_sched_3_end === undefined)
        old_program_2_sched_3_end = "";
    if (old_program_3_off_on_and_days === undefined)
        old_program_3_off_on_and_days = "";
    if (old_program_3_bright === undefined)
        old_program_3_bright = "";
    if (old_program_3_speed === undefined)
        old_program_3_speed = "";
    if (old_program_3_sched_number === undefined)
        old_program_3_sched_number = "";
    if (old_program_3_sched_1_begin === undefined)
        old_program_3_sched_1_begin = "";
    if (old_program_3_sched_1_end === undefined)
        old_program_3_sched_1_end = "";
    if (old_program_3_sched_2_begin === undefined)
        old_program_3_sched_2_begin = "";
    if (old_program_3_sched_2_end === undefined)
        old_program_3_sched_2_end = "";
    if (old_program_3_sched_3_begin === undefined)
        old_program_3_sched_3_begin = "";
    if (old_program_3_sched_3_end === undefined)
        old_program_3_sched_3_end = "";

    console.log("off_on bright speeds scheds begin1 endin1 begin2 endin2 begin3 endin3");
    console.log(old_program_1_off_on_and_days + "     " + old_program_1_bright + "     " + old_program_1_speed + "     " + old_program_1_sched_number + "     " + old_program_1_sched_1_begin + "     " + old_program_1_sched_1_end + "     " + old_program_1_sched_2_begin + "     " + old_program_1_sched_2_end + "     " + old_program_1_sched_3_begin + "     " + old_program_1_sched_3_end + "     ");
    console.log(old_program_2_off_on_and_days + "     " + old_program_2_bright + "     " + old_program_2_speed + "     " + old_program_2_sched_number + "     " + old_program_2_sched_1_begin + "     " + old_program_2_sched_1_end + "     " + old_program_2_sched_2_begin + "     " + old_program_2_sched_2_end + "     " + old_program_2_sched_3_begin + "     " + old_program_2_sched_3_end + "     ");
    console.log(old_program_3_off_on_and_days + "     " + old_program_3_bright + "     " + old_program_3_speed + "     " + old_program_3_sched_number + "     " + old_program_3_sched_1_begin + "     " + old_program_3_sched_1_end + "     " + old_program_3_sched_2_begin + "     " + old_program_3_sched_2_end + "     " + old_program_3_sched_3_begin + "     " + old_program_3_sched_3_end + "     ");


    // Ajout des nouvelles valeurs

    if ("progs_number" === name)
        selected_programs_number = value;
    else if ("prog_1_off_on_and_days" === name)
        selected_program_1_off_on_and_days = value;
    else if ("prog_1_bright" === name)
        selected_program_1_bright = value;
    else if ("prog_1_speed" === name)
        selected_program_1_speed = value;
    else if ("prog_1_sched_number" === name)
        selected_program_1_sched_number = value;
    else if ("prog_1_sched_1_begin" === name)
        selected_program_1_sched_1_begin = value;
    else if ("prog_1_sched_1_end" === name)
        selected_program_1_sched_1_end = value;
    else if ("prog_1_sched_2_begin" === name)
        selected_program_1_sched_2_begin = value;
    else if ("prog_1_sched_2_end" === name)
        selected_program_1_sched_2_end = value;
    else if ("prog_1_sched_3_begin" === name)
        selected_program_1_sched_3_begin = value;
    else if ("prog_1_sched_3_end" === name)
        selected_program_1_sched_3_end = value;
    else if ("prog_2_off_on_and_days" === name)
        selected_program_2_off_on_and_days = value;
    else if ("prog_2_bright" === name)
        selected_program_2_bright = value;
    else if ("prog_2_speed" === name)
        selected_program_2_speed = value;
    else if ("prog_2_sched_number" === name)
        selected_program_2_sched_number = value;
    else if ("prog_2_sched_1_begin" === name)
        selected_program_2_sched_1_begin = value;
    else if ("prog_2_sched_1_end" === name)
        selected_program_2_sched_1_end = value;
    else if ("prog_2_sched_2_begin" === name)
        selected_program_2_sched_2_begin = value;
    else if ("prog_2_sched_2_end" === name)
        selected_program_2_sched_2_end = value;
    else if ("prog_2_sched_3_begin" === name)
        selected_program_2_sched_3_begin = value;
    else if ("prog_2_sched_3_end" === name)
        selected_program_2_sched_3_end = value;
    else if ("prog_3_off_on_and_days" === name)
        selected_program_3_off_on_and_days = value;
    else if ("prog_3_bright" === name)
        selected_program_3_bright = value;
    else if ("prog_3_speed" === name)
        selected_program_3_speed = value;
    else if ("prog_3_sched_number" === name)
        selected_program_3_sched_number = value;
    else if ("prog_3_sched_1_begin" === name)
        selected_program_3_sched_1_begin = value;
    else if ("prog_3_sched_1_end" === name)
        selected_program_3_sched_1_end = value;
    else if ("prog_3_sched_2_begin" === name)
        selected_program_3_sched_2_begin = value;
    else if ("prog_3_sched_2_end" === name)
        selected_program_3_sched_2_end = value;
    else if ("prog_3_sched_3_begin" === name)
        selected_program_3_sched_3_begin = value;
    else if ("prog_3_sched_3_end" === name)
        selected_program_3_sched_3_end = value;

    // fix sched number

    if (selected_program_1_sched_1_begin > 0 || selected_program_1_sched_1_end > 0)
        selected_program_1_sched_number = 1;
    if (selected_program_1_sched_2_begin > 0 || selected_program_1_sched_2_end > 0)
        selected_program_1_sched_number = 2;
    if (selected_program_1_sched_3_begin > 0 || selected_program_1_sched_3_end > 0)
        selected_program_1_sched_number = 3;

//    if (selected_program_1_sched_1_begin > 0) {
//        console.log("selected_program_1_sched_1_begin (" + selected_program_1_sched_1_begin + ") > 0");
//    }
//    if (selected_program_1_sched_1_end > 0) {
//        console.log("selected_program_1_sched_1_end (" + selected_program_1_sched_1_end + ") > 0");
//    }
//    if (selected_program_1_sched_2_begin > 0) {
//        console.log("selected_program_1_sched_2_begin (" + selected_program_1_sched_2_begin + ") > 0");
//    }
//    if (selected_program_1_sched_2_end > 0) {
//        console.log("selected_program_1_sched_2_end (" + selected_program_1_sched_2_end + ") > 0");
//    }
//    if (selected_program_1_sched_3_begin > 0) {
//        console.log("selected_program_1_sched_3_begin (" + selected_program_1_sched_3_begin + ") > 0");
//    }
//    if (selected_program_1_sched_3_end > 0) {
//        console.log("selected_program_1_sched_3_end (" + selected_program_1_sched_3_end + ") > 0");
//    }
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);

    if (selected_program_2_sched_1_begin > 0 || selected_program_2_sched_1_end > 0)
        selected_program_2_sched_number = 1;
    if (selected_program_2_sched_2_begin > 0 || selected_program_2_sched_2_end > 0)
        selected_program_2_sched_number = 2;
    if (selected_program_2_sched_3_begin > 0 || selected_program_2_sched_3_end > 0)
        selected_program_2_sched_number = 3;

    if (selected_program_2_sched_1_begin > 0) {
        console.log("selected_program_2_sched_1_begin (" + selected_program_2_sched_1_begin + ") > 0");
    }
    if (selected_program_2_sched_1_end > 0) {
        console.log("selected_program_2_sched_1_end (" + selected_program_2_sched_1_end + ") > 0");
    }
    if (selected_program_2_sched_2_begin > 0) {
        console.log("selected_program_2_sched_2_begin (" + selected_program_2_sched_2_begin + ") > 0");
    }
    if (selected_program_2_sched_2_end > 0) {
        console.log("selected_program_2_sched_2_end (" + selected_program_2_sched_2_end + ") > 0");
    }
    if (selected_program_2_sched_3_begin > 0) {
        console.log("selected_program_2_sched_3_begin (" + selected_program_2_sched_3_begin + ") > 0");
    }
    if (selected_program_2_sched_3_end > 0) {
        console.log("selected_program_2_sched_3_end (" + selected_program_2_sched_3_end + ") > 0");
    }
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);

    // Convertion

    selected_programs_number = converter("dec", "hex", selected_programs_number);
    selected_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);
    selected_program_1_bright = converter("dec", "hex", selected_program_1_bright);
    selected_program_1_speed = converter("dec", "hex", selected_program_1_speed);
    selected_program_1_sched_number = converter("dec", "hex", selected_program_1_sched_number);
    selected_program_1_sched_1_begin = converter("dec", "hex", selected_program_1_sched_1_begin);
    selected_program_1_sched_1_end = converter("dec", "hex", selected_program_1_sched_1_end);
    selected_program_1_sched_2_begin = converter("dec", "hex", selected_program_1_sched_2_begin);
    selected_program_1_sched_2_end = converter("dec", "hex", selected_program_1_sched_2_end);
    selected_program_1_sched_3_begin = converter("dec", "hex", selected_program_1_sched_3_begin);
    selected_program_1_sched_3_end = converter("dec", "hex", selected_program_1_sched_3_end);
    selected_program_2_off_on_and_days = converter("dec", "hex", selected_program_2_off_on_and_days);
    selected_program_2_bright = converter("dec", "hex", selected_program_2_bright);
    selected_program_2_speed = converter("dec", "hex", selected_program_2_speed);
    selected_program_2_sched_number = converter("dec", "hex", selected_program_2_sched_number);
    selected_program_2_sched_1_begin = converter("dec", "hex", selected_program_2_sched_1_begin);
    selected_program_2_sched_1_end = converter("dec", "hex", selected_program_2_sched_1_end);
    selected_program_2_sched_2_begin = converter("dec", "hex", selected_program_2_sched_2_begin);
    selected_program_2_sched_2_end = converter("dec", "hex", selected_program_2_sched_2_end);
    selected_program_2_sched_3_begin = converter("dec", "hex", selected_program_2_sched_3_begin);
    selected_program_2_sched_3_end = converter("dec", "hex", selected_program_2_sched_3_end);
    selected_program_3_off_on_and_days = converter("dec", "hex", selected_program_3_off_on_and_days);
    selected_program_3_bright = converter("dec", "hex", selected_program_3_bright);
    selected_program_3_speed = converter("dec", "hex", selected_program_3_speed);
    selected_program_3_sched_number = converter("dec", "hex", selected_program_3_sched_number);
    selected_program_3_sched_1_begin = converter("dec", "hex", selected_program_3_sched_1_begin);
    selected_program_3_sched_1_end = converter("dec", "hex", selected_program_3_sched_1_end);
    selected_program_3_sched_2_begin = converter("dec", "hex", selected_program_3_sched_2_begin);
    selected_program_3_sched_2_end = converter("dec", "hex", selected_program_3_sched_2_end);
    selected_program_3_sched_3_begin = converter("dec", "hex", selected_program_3_sched_3_begin);
    selected_program_3_sched_3_end = converter("dec", "hex", selected_program_3_sched_3_end);

    if (selected_programs_number === undefined)
        selected_programs_number = "";
    if (selected_program_1_off_on_and_days === undefined)
        selected_program_1_off_on_and_days = "";
    if (selected_program_1_bright === undefined)
        selected_program_1_bright = "";
    if (selected_program_1_speed === undefined)
        selected_program_1_speed = "";
    if (selected_program_1_sched_number === undefined)
        selected_program_1_sched_number = "";
    if (selected_program_1_sched_1_begin === undefined)
        selected_program_1_sched_1_begin = "";
    if (selected_program_1_sched_1_end === undefined)
        selected_program_1_sched_1_end = "";
    if (selected_program_1_sched_2_begin === undefined)
        selected_program_1_sched_2_begin = "";
    if (selected_program_1_sched_2_end === undefined)
        selected_program_1_sched_2_end = "";
    if (selected_program_1_sched_3_begin === undefined)
        selected_program_1_sched_3_begin = "";
    if (selected_program_1_sched_3_end === undefined)
        selected_program_1_sched_3_end = "";
    if (selected_program_2_off_on_and_days === undefined)
        selected_program_2_off_on_and_days = "";
    if (selected_program_2_bright === undefined)
        selected_program_2_bright = "";
    if (selected_program_2_speed === undefined)
        selected_program_2_speed = "";
    if (selected_program_2_sched_number === undefined)
        selected_program_2_sched_number = "";
    if (selected_program_2_sched_1_begin === undefined)
        selected_program_2_sched_1_begin = "";
    if (selected_program_2_sched_1_end === undefined)
        selected_program_2_sched_1_end = "";
    if (selected_program_2_sched_2_begin === undefined)
        selected_program_2_sched_2_begin = "";
    if (selected_program_2_sched_2_end === undefined)
        selected_program_2_sched_2_end = "";
    if (selected_program_2_sched_3_begin === undefined)
        selected_program_2_sched_3_begin = "";
    if (selected_program_2_sched_3_end === undefined)
        selected_program_2_sched_3_end = "";
    if (selected_program_3_off_on_and_days === undefined)
        selected_program_3_off_on_and_days = "";
    if (selected_program_3_bright === undefined)
        selected_program_3_bright = "";
    if (selected_program_3_speed === undefined)
        selected_program_3_speed = "";
    if (selected_program_3_sched_number === undefined)
        selected_program_3_sched_number = "";
    if (selected_program_3_sched_1_begin === undefined)
        selected_program_3_sched_1_begin = "";
    if (selected_program_3_sched_1_end === undefined)
        selected_program_3_sched_1_end = "";
    if (selected_program_3_sched_2_begin === undefined)
        selected_program_3_sched_2_begin = "";
    if (selected_program_3_sched_2_end === undefined)
        selected_program_3_sched_2_end = "";
    if (selected_program_3_sched_3_begin === undefined)
        selected_program_3_sched_3_begin = "";
    if (selected_program_3_sched_3_end === undefined)
        selected_program_3_sched_3_end = "";

    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
    // console.log("selected_program_1_bright = " + selected_program_1_bright);
    // console.log("selected_program_1_speed = " + selected_program_1_speed);
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);
    // console.log("selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
    // console.log("selected_program_2_bright = " + selected_program_2_bright);
    // console.log("selected_program_2_speed = " + selected_program_2_speed);
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);
    // console.log("selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
    // console.log("selected_program_3_bright = " + selected_program_3_bright);
    // console.log("selected_program_3_speed = " + selected_program_3_speed);
    // console.log("selected_program_3_sched_number = " + selected_program_3_sched_number);
    // console.log("selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    // Fill Blank

    if (is_void(selected_program_1_sched_2_begin) && !is_void(selected_program_1_sched_2_end))
        selected_program_1_sched_2_begin = "00";
    if (!is_void(selected_program_1_sched_2_begin) && is_void(selected_program_1_sched_2_end))
        selected_program_1_sched_2_end = "00";
    if (is_void(selected_program_1_sched_3_begin) && !is_void(selected_program_1_sched_3_end))
        selected_program_1_sched_3_begin = "00";
    if (!is_void(selected_program_1_sched_3_begin) && is_void(selected_program_1_sched_3_end))
        selected_program_1_sched_3_end = "00";

    // Delete Void Sched

    if (selected_program_1_sched_2_begin === "00" && selected_program_1_sched_2_end === "00") {
        selected_program_1_sched_2_begin = "";
        selected_program_1_sched_2_end = "";
    }
    if (selected_program_1_sched_3_begin === "00" && selected_program_1_sched_3_end === "00") {
        selected_program_1_sched_3_begin = "";
        selected_program_1_sched_3_end = "";
    }

    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);

    // Final

    console.log("off_on bright speeds scheds begin1 endin1 begin2 endin2 begin3 endin3");
    console.log(selected_program_1_off_on_and_days + "     " + selected_program_1_bright + "     " + selected_program_1_speed + "     " + selected_program_1_sched_number + "     " + selected_program_1_sched_1_begin + "     " + selected_program_1_sched_1_end + "     " + selected_program_1_sched_2_begin + "     " + selected_program_1_sched_2_end + "     " + selected_program_1_sched_3_begin + "     " + selected_program_1_sched_3_end + "     ");
    console.log(selected_program_2_off_on_and_days + "     " + selected_program_2_bright + "     " + selected_program_2_speed + "     " + selected_program_2_sched_number + "     " + selected_program_2_sched_1_begin + "     " + selected_program_2_sched_1_end + "     " + selected_program_2_sched_2_begin + "     " + selected_program_2_sched_2_end + "     " + selected_program_2_sched_3_begin + "     " + selected_program_2_sched_3_end + "     ");
    console.log(selected_program_3_off_on_and_days + "     " + selected_program_3_bright + "     " + selected_program_3_speed + "     " + selected_program_3_sched_number + "     " + selected_program_3_sched_1_begin + "     " + selected_program_3_sched_1_end + "     " + selected_program_3_sched_2_begin + "     " + selected_program_3_sched_2_end + "     " + selected_program_3_sched_3_begin + "     " + selected_program_3_sched_3_end + "     ");

    if (old_programs_number !== selected_programs_number) {
        console.log("old_programs_number (" + old_programs_number + ") -----> selected_programs_number (" + selected_programs_number + ")");
    }
    if (old_program_1_off_on_and_days !== selected_program_1_off_on_and_days) {
        console.log("old_program_1_off_on_and_days (" + old_program_1_off_on_and_days + ") -----> selected_program_1_off_on_and_days (" + selected_program_1_off_on_and_days + ")");
    }
    if (old_program_1_bright !== selected_program_1_bright) {
        console.log("old_program_1_bright (" + old_program_1_bright + ") -----> selected_program_1_bright (" + selected_program_1_bright + ")");
    }
    if (old_program_1_speed !== selected_program_1_speed) {
        console.log("old_program_1_speed (" + old_program_1_speed + ") -----> selected_program_1_speed (" + selected_program_1_speed + ")");
    }
    if (old_program_1_sched_number !== selected_program_1_sched_number) {
        console.log("old_program_1_sched_number (" + old_program_1_sched_number + ") -----> selected_program_1_sched_number (" + selected_program_1_sched_number + ")");
    }
    if (old_program_1_sched_1_begin !== selected_program_1_sched_1_begin) {
        console.log("old_program_1_sched_1_begin (" + old_program_1_sched_1_begin + ") -----> selected_program_1_sched_1_begin (" + selected_program_1_sched_1_begin + ")");
    }
    if (old_program_1_sched_1_end !== selected_program_1_sched_1_end) {
        console.log("old_program_1_sched_1_end (" + old_program_1_sched_1_end + ") -----> selected_program_1_sched_1_end (" + selected_program_1_sched_1_end + ")");
    }
    if (old_program_1_sched_2_begin !== selected_program_1_sched_2_begin) {
        console.log("old_program_1_sched_2_begin (" + old_program_1_sched_2_begin + ") -----> selected_program_1_sched_2_begin (" + selected_program_1_sched_2_begin + ")");
    }
    if (old_program_1_sched_2_end !== selected_program_1_sched_2_end) {
        console.log("old_program_1_sched_2_end (" + old_program_1_sched_2_end + ") -----> selected_program_1_sched_2_end (" + selected_program_1_sched_2_end + ")");
    }
    if (old_program_1_sched_3_begin !== selected_program_1_sched_3_begin) {
        console.log("old_program_1_sched_3_begin (" + old_program_1_sched_3_begin + ") -----> selected_program_1_sched_3_begin (" + selected_program_1_sched_3_begin + ")");
    }
    if (old_program_1_sched_3_end !== selected_program_1_sched_3_end) {
        console.log("old_program_1_sched_3_end (" + old_program_1_sched_3_end + ") -----> selected_program_1_sched_3_end (" + selected_program_1_sched_3_end + ")");
    }
    if (old_program_2_off_on_and_days !== selected_program_2_off_on_and_days) {
        console.log("old_program_2_off_on_and_days (" + old_program_2_off_on_and_days + ") -----> selected_program_2_off_on_and_days (" + selected_program_2_off_on_and_days + ")");
    }
    if (old_program_2_bright !== selected_program_2_bright) {
        console.log("old_program_2_bright (" + old_program_2_bright + ") -----> selected_program_2_bright (" + selected_program_2_bright + ")");
    }
    if (old_program_2_speed !== selected_program_2_speed) {
        console.log("old_program_2_speed (" + old_program_2_speed + ") -----> selected_program_2_speed (" + selected_program_2_speed + ")");
    }
    if (old_program_2_sched_number !== selected_program_2_sched_number) {
        console.log("old_program_2_sched_number (" + old_program_2_sched_number + ") -----> selected_program_2_sched_number (" + selected_program_2_sched_number + ")");
    }
    if (old_program_2_sched_1_begin !== selected_program_2_sched_1_begin) {
        console.log("old_program_2_sched_1_begin (" + old_program_2_sched_1_begin + ") -----> selected_program_2_sched_1_begin (" + selected_program_2_sched_1_begin + ")");
    }
    if (old_program_2_sched_1_end !== selected_program_2_sched_1_end) {
        console.log("old_program_2_sched_1_end (" + old_program_2_sched_1_end + ") -----> selected_program_2_sched_1_end (" + selected_program_2_sched_1_end + ")");
    }
    if (old_program_2_sched_2_begin !== selected_program_2_sched_2_begin) {
        console.log("old_program_2_sched_2_begin (" + old_program_2_sched_2_begin + ") -----> selected_program_2_sched_2_begin (" + selected_program_2_sched_2_begin + ")");
    }
    if (old_program_2_sched_2_end !== selected_program_2_sched_2_end) {
        console.log("old_program_2_sched_2_end (" + old_program_2_sched_2_end + ") -----> selected_program_2_sched_2_end (" + selected_program_2_sched_2_end + ")");
    }
    if (old_program_2_sched_3_begin !== selected_program_2_sched_3_begin) {
        console.log("old_program_2_sched_3_begin (" + old_program_2_sched_3_begin + ") -----> selected_program_2_sched_3_begin (" + selected_program_2_sched_3_begin + ")");
    }
    if (old_program_2_sched_3_end !== selected_program_2_sched_3_end) {
        console.log("old_program_2_sched_3_end (" + old_program_2_sched_3_end + ") -----> selected_program_2_sched_3_end (" + selected_program_2_sched_3_end + ")");
    }
    if (old_program_3_off_on_and_days !== selected_program_3_off_on_and_days) {
        console.log("old_program_3_off_on_and_days (" + old_program_3_off_on_and_days + ") -----> selected_program_3_off_on_and_days (" + selected_program_3_off_on_and_days + ")");
    }
    if (old_program_3_bright !== selected_program_3_bright) {
        console.log("old_program_3_bright (" + old_program_3_bright + ") -----> selected_program_3_bright (" + selected_program_3_bright + ")");
    }
    if (old_program_3_speed !== selected_program_3_speed) {
        console.log("old_program_3_speed (" + old_program_3_speed + ") -----> selected_program_3_speed (" + selected_program_3_speed + ")");
    }
    if (old_program_3_sched_number !== selected_program_3_sched_number) {
        console.log("old_program_3_sched_number (" + old_program_3_sched_number + ") -----> selected_program_3_sched_number (" + selected_program_3_sched_number + ")");
    }
    if (old_program_3_sched_1_begin !== selected_program_3_sched_1_begin) {
        console.log("old_program_3_sched_1_begin (" + old_program_3_sched_1_begin + ") -----> selected_program_3_sched_1_begin (" + selected_program_3_sched_1_begin + ")");
    }
    if (old_program_3_sched_1_end !== selected_program_3_sched_1_end) {
        console.log("old_program_3_sched_1_end (" + old_program_3_sched_1_end + ") -----> selected_program_3_sched_1_end (" + selected_program_3_sched_1_end + ")");
    }
    if (old_program_3_sched_2_begin !== selected_program_3_sched_2_begin) {
        console.log("old_program_3_sched_2_begin (" + old_program_3_sched_2_begin + ") -----> selected_program_3_sched_2_begin (" + selected_program_3_sched_2_begin + ")");
    }
    if (old_program_3_sched_2_end !== selected_program_3_sched_2_end) {
        console.log("old_program_3_sched_2_end (" + old_program_3_sched_2_end + ") -----> selected_program_3_sched_2_end (" + selected_program_3_sched_2_end + ")");
    }
    if (old_program_3_sched_3_begin !== selected_program_3_sched_3_begin) {
        console.log("old_program_3_sched_3_begin (" + old_program_3_sched_3_begin + ") -----> selected_program_3_sched_3_begin (" + selected_program_3_sched_3_begin + ")");
    }
    if (old_program_3_sched_3_end !== selected_program_3_sched_3_end) {
        console.log("old_program_3_sched_3_end (" + old_program_3_sched_3_end + ") -----> selected_program_3_sched_3_end (" + selected_program_3_sched_3_end + ")");
    }

    var new_filtration_sched = `${selected_programs_number}${selected_program_1_off_on_and_days}${selected_program_1_bright}${selected_program_1_speed}${selected_program_1_sched_number}${selected_program_1_sched_1_begin}${selected_program_1_sched_1_end}${selected_program_1_sched_2_begin}${selected_program_1_sched_2_end}${selected_program_1_sched_3_begin}${selected_program_1_sched_3_end}${selected_program_2_off_on_and_days}${selected_program_2_bright}${selected_program_2_speed}${selected_program_2_sched_number}${selected_program_2_sched_1_begin}${selected_program_2_sched_1_end}${selected_program_2_sched_2_begin}${selected_program_2_sched_2_end}${selected_program_2_sched_3_begin}${selected_program_2_sched_3_end}${selected_program_3_off_on_and_days}${selected_program_3_bright}${selected_program_3_speed}${selected_program_3_sched_number}${selected_program_3_sched_1_begin}${selected_program_3_sched_1_end}${selected_program_3_sched_2_begin}${selected_program_3_sched_2_end}${selected_program_3_sched_3_begin}${selected_program_3_sched_3_end}`;
    console.log("new_filtration_sched = " + new_filtration_sched);

    var ok = check_sched_for_errors(selected_programs_number, selected_program_1_off_on_and_days, selected_program_1_bright, selected_program_1_speed, selected_program_1_sched_number, selected_program_1_sched_1_begin, selected_program_1_sched_1_end, selected_program_1_sched_2_begin, selected_program_1_sched_2_end, selected_program_1_sched_3_begin, selected_program_1_sched_3_end, selected_program_2_off_on_and_days, selected_program_2_bright, selected_program_2_speed, selected_program_2_sched_number, selected_program_2_sched_1_begin, selected_program_2_sched_1_end, selected_program_2_sched_2_begin, selected_program_2_sched_2_end, selected_program_2_sched_3_begin, selected_program_2_sched_3_end, selected_program_3_off_on_and_days, selected_program_3_bright, selected_program_3_speed, selected_program_3_sched_number, selected_program_3_sched_1_begin, selected_program_3_sched_1_end, selected_program_3_sched_2_begin, selected_program_3_sched_2_end, selected_program_3_sched_3_begin, selected_program_3_sched_3_end);

    set_filtration_sched_value_save = new_filtration_sched;
    return new_filtration_sched;
//    if (ok)
//        quick_send("s44_w", "filtration_sched", "info", "desired", new_filtration_sched);

    // quick_send("s44_w", "filtration_sched", "info", "desired", new_filtration_sched);
    // quick_send("s44_w", "filtration_sched", "info", "desired", "02 FE 64 64 03 04 08 7E 64 64 03 04 08 03");
    // hard reset : quick_send("s44_w", "filtration_sched", "info", "desired", "027E64640104887E6464010488");
    // 02 7E 64 64 01 04 10 7E 64 64 01 04 88
    // 02 7E 64 64 01 04 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 09 0F 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 09 10 0F 7E 64 64 01 04
    // 02 7E 64 64 03 04 08 0F 7E 64 64 01 04
    // 02 7E 64 64 03 04 08 0C 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 0C 17 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 0A 0D 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 0A 00 00 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 08 00 00 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 08 0C 00 00 00 7E 64 64 01
}

var set_auxiliary_sched_value_save = "";

function set_auxiliary_sched_value(name, value) {

    // Récupération des valeurs de basesselected_program_1_sched_2_begin

    if (set_auxiliary_sched_value_save === "") {
        var auxiliary_sched = get_value_from_position(eq_modal, "filt_sched");
    } else {
        var auxiliary_sched = set_auxiliary_sched_value_save;
    }
    // console.log("auxiliary_sched = " + auxiliary_sched);

    // 02 7E 64 64 01 04 10 7E 64 64 01 04 88

    var selected_programs_number = get_sched_value(auxiliary_sched, "programs_number");
    var selected_program_1_off_on_and_days = get_sched_value(auxiliary_sched, "program_1_off_on_and_days");
    var selected_program_1_bright = get_sched_value(auxiliary_sched, "program_1_bright");
    var selected_program_1_speed = get_sched_value(auxiliary_sched, "program_1_speed");
    var selected_program_1_sched_number = get_sched_value(auxiliary_sched, "program_1_sched_number");
    var selected_program_1_sched_1_begin = get_sched_value(auxiliary_sched, "program_1_sched_1_begin");
    var selected_program_1_sched_1_end = get_sched_value(auxiliary_sched, "program_1_sched_1_end");
    var selected_program_1_sched_2_begin = get_sched_value(auxiliary_sched, "program_1_sched_2_begin");
    var selected_program_1_sched_2_end = get_sched_value(auxiliary_sched, "program_1_sched_2_end");
    var selected_program_1_sched_3_begin = get_sched_value(auxiliary_sched, "program_1_sched_3_begin");
    var selected_program_1_sched_3_end = get_sched_value(auxiliary_sched, "program_1_sched_3_end");
    var selected_program_2_off_on_and_days = get_sched_value(auxiliary_sched, "program_2_off_on_and_days");
    var selected_program_2_bright = get_sched_value(auxiliary_sched, "program_2_bright");
    var selected_program_2_speed = get_sched_value(auxiliary_sched, "program_2_speed");
    var selected_program_2_sched_number = get_sched_value(auxiliary_sched, "program_2_sched_number");
    var selected_program_2_sched_1_begin = get_sched_value(auxiliary_sched, "program_2_sched_1_begin");
    var selected_program_2_sched_1_end = get_sched_value(auxiliary_sched, "program_2_sched_1_end");
    var selected_program_2_sched_2_begin = get_sched_value(auxiliary_sched, "program_2_sched_2_begin");
    var selected_program_2_sched_2_end = get_sched_value(auxiliary_sched, "program_2_sched_2_end");
    var selected_program_2_sched_3_begin = get_sched_value(auxiliary_sched, "program_2_sched_3_begin");
    var selected_program_2_sched_3_end = get_sched_value(auxiliary_sched, "program_2_sched_3_end");
    var selected_program_3_off_on_and_days = get_sched_value(auxiliary_sched, "program_3_off_on_and_days");
    var selected_program_3_bright = get_sched_value(auxiliary_sched, "program_3_bright");
    var selected_program_3_speed = get_sched_value(auxiliary_sched, "program_3_speed");
    var selected_program_3_sched_number = get_sched_value(auxiliary_sched, "program_3_sched_number");
    var selected_program_3_sched_1_begin = get_sched_value(auxiliary_sched, "program_3_sched_1_begin");
    var selected_program_3_sched_1_end = get_sched_value(auxiliary_sched, "program_3_sched_1_end");
    var selected_program_3_sched_2_begin = get_sched_value(auxiliary_sched, "program_3_sched_2_begin");
    var selected_program_3_sched_2_end = get_sched_value(auxiliary_sched, "program_3_sched_2_end");
    var selected_program_3_sched_3_begin = get_sched_value(auxiliary_sched, "program_3_sched_3_begin");
    var selected_program_3_sched_3_end = get_sched_value(auxiliary_sched, "program_3_sched_3_end");


    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
    // console.log("selected_program_1_bright = " + selected_program_1_bright);
    // console.log("selected_program_1_speed = " + selected_program_1_speed);
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);
    // console.log("selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
    // console.log("selected_program_2_bright = " + selected_program_2_bright);
    // console.log("selected_program_2_speed = " + selected_program_2_speed);
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);
    // console.log("selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
    // console.log("selected_program_3_bright = " + selected_program_3_bright);
    // console.log("selected_program_3_speed = " + selected_program_3_speed);
    // console.log("selected_program_3_sched_number = " + selected_program_3_sched_number);
    // console.log("selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    selected_program_1_sched_1_end = fix_end_dec(selected_program_1_sched_1_end);
    selected_program_1_sched_2_end = fix_end_dec(selected_program_1_sched_2_end);
    selected_program_1_sched_3_end = fix_end_dec(selected_program_1_sched_3_end);
    selected_program_2_sched_1_end = fix_end_dec(selected_program_2_sched_1_end);
    selected_program_2_sched_2_end = fix_end_dec(selected_program_2_sched_2_end);
    selected_program_2_sched_3_end = fix_end_dec(selected_program_2_sched_3_end);
    selected_program_3_sched_1_end = fix_end_dec(selected_program_3_sched_1_end);
    selected_program_3_sched_2_end = fix_end_dec(selected_program_3_sched_2_end);
    selected_program_3_sched_3_end = fix_end_dec(selected_program_3_sched_3_end);

    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    var old_programs_number = converter("dec", "hex", selected_programs_number);
    var old_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);
    var old_program_1_bright = converter("dec", "hex", selected_program_1_bright);
    var old_program_1_speed = converter("dec", "hex", selected_program_1_speed);
    var old_program_1_sched_number = converter("dec", "hex", selected_program_1_sched_number);
    var old_program_1_sched_1_begin = converter("dec", "hex", selected_program_1_sched_1_begin);
    var old_program_1_sched_1_end = converter("dec", "hex", selected_program_1_sched_1_end);
    var old_program_1_sched_2_begin = converter("dec", "hex", selected_program_1_sched_2_begin);
    var old_program_1_sched_2_end = converter("dec", "hex", selected_program_1_sched_2_end);
    var old_program_1_sched_3_begin = converter("dec", "hex", selected_program_1_sched_3_begin);
    var old_program_1_sched_3_end = converter("dec", "hex", selected_program_1_sched_3_end);
    var old_program_2_off_on_and_days = converter("dec", "hex", selected_program_2_off_on_and_days);
    var old_program_2_bright = converter("dec", "hex", selected_program_2_bright);
    var old_program_2_speed = converter("dec", "hex", selected_program_2_speed);
    var old_program_2_sched_number = converter("dec", "hex", selected_program_2_sched_number);
    var old_program_2_sched_1_begin = converter("dec", "hex", selected_program_2_sched_1_begin);
    var old_program_2_sched_1_end = converter("dec", "hex", selected_program_2_sched_1_end);
    var old_program_2_sched_2_begin = converter("dec", "hex", selected_program_2_sched_2_begin);
    var old_program_2_sched_2_end = converter("dec", "hex", selected_program_2_sched_2_end);
    var old_program_2_sched_3_begin = converter("dec", "hex", selected_program_2_sched_3_begin);
    var old_program_2_sched_3_end = converter("dec", "hex", selected_program_2_sched_3_end);
    var old_program_3_off_on_and_days = converter("dec", "hex", selected_program_3_off_on_and_days);
    var old_program_3_bright = converter("dec", "hex", selected_program_3_bright);
    var old_program_3_speed = converter("dec", "hex", selected_program_3_speed);
    var old_program_3_sched_number = converter("dec", "hex", selected_program_3_sched_number);
    var old_program_3_sched_1_begin = converter("dec", "hex", selected_program_3_sched_1_begin);
    var old_program_3_sched_1_end = converter("dec", "hex", selected_program_3_sched_1_end);
    var old_program_3_sched_2_begin = converter("dec", "hex", selected_program_3_sched_2_begin);
    var old_program_3_sched_2_end = converter("dec", "hex", selected_program_3_sched_2_end);
    var old_program_3_sched_3_begin = converter("dec", "hex", selected_program_3_sched_3_begin);
    var old_program_3_sched_3_end = converter("dec", "hex", selected_program_3_sched_3_end);

    if (old_programs_number === undefined)
        old_programs_number = "";
    if (old_program_1_off_on_and_days === undefined)
        old_program_1_off_on_and_days = "";
    if (old_program_1_bright === undefined)
        old_program_1_bright = "";
    if (old_program_1_speed === undefined)
        old_program_1_speed = "";
    if (old_program_1_sched_number === undefined)
        old_program_1_sched_number = "";
    if (old_program_1_sched_1_begin === undefined)
        old_program_1_sched_1_begin = "";
    if (old_program_1_sched_1_end === undefined)
        old_program_1_sched_1_end = "";
    if (old_program_1_sched_2_begin === undefined)
        old_program_1_sched_2_begin = "";
    if (old_program_1_sched_2_end === undefined)
        old_program_1_sched_2_end = "";
    if (old_program_1_sched_3_begin === undefined)
        old_program_1_sched_3_begin = "";
    if (old_program_1_sched_3_end === undefined)
        old_program_1_sched_3_end = "";
    if (old_program_2_off_on_and_days === undefined)
        old_program_2_off_on_and_days = "";
    if (old_program_2_bright === undefined)
        old_program_2_bright = "";
    if (old_program_2_speed === undefined)
        old_program_2_speed = "";
    if (old_program_2_sched_number === undefined)
        old_program_2_sched_number = "";
    if (old_program_2_sched_1_begin === undefined)
        old_program_2_sched_1_begin = "";
    if (old_program_2_sched_1_end === undefined)
        old_program_2_sched_1_end = "";
    if (old_program_2_sched_2_begin === undefined)
        old_program_2_sched_2_begin = "";
    if (old_program_2_sched_2_end === undefined)
        old_program_2_sched_2_end = "";
    if (old_program_2_sched_3_begin === undefined)
        old_program_2_sched_3_begin = "";
    if (old_program_2_sched_3_end === undefined)
        old_program_2_sched_3_end = "";
    if (old_program_3_off_on_and_days === undefined)
        old_program_3_off_on_and_days = "";
    if (old_program_3_bright === undefined)
        old_program_3_bright = "";
    if (old_program_3_speed === undefined)
        old_program_3_speed = "";
    if (old_program_3_sched_number === undefined)
        old_program_3_sched_number = "";
    if (old_program_3_sched_1_begin === undefined)
        old_program_3_sched_1_begin = "";
    if (old_program_3_sched_1_end === undefined)
        old_program_3_sched_1_end = "";
    if (old_program_3_sched_2_begin === undefined)
        old_program_3_sched_2_begin = "";
    if (old_program_3_sched_2_end === undefined)
        old_program_3_sched_2_end = "";
    if (old_program_3_sched_3_begin === undefined)
        old_program_3_sched_3_begin = "";
    if (old_program_3_sched_3_end === undefined)
        old_program_3_sched_3_end = "";

    console.log("off_on bright speeds scheds begin1 endin1 begin2 endin2 begin3 endin3");
    console.log(old_program_1_off_on_and_days + "     " + old_program_1_bright + "     " + old_program_1_speed + "     " + old_program_1_sched_number + "     " + old_program_1_sched_1_begin + "     " + old_program_1_sched_1_end + "     " + old_program_1_sched_2_begin + "     " + old_program_1_sched_2_end + "     " + old_program_1_sched_3_begin + "     " + old_program_1_sched_3_end + "     ");
    console.log(old_program_2_off_on_and_days + "     " + old_program_2_bright + "     " + old_program_2_speed + "     " + old_program_2_sched_number + "     " + old_program_2_sched_1_begin + "     " + old_program_2_sched_1_end + "     " + old_program_2_sched_2_begin + "     " + old_program_2_sched_2_end + "     " + old_program_2_sched_3_begin + "     " + old_program_2_sched_3_end + "     ");
    console.log(old_program_3_off_on_and_days + "     " + old_program_3_bright + "     " + old_program_3_speed + "     " + old_program_3_sched_number + "     " + old_program_3_sched_1_begin + "     " + old_program_3_sched_1_end + "     " + old_program_3_sched_2_begin + "     " + old_program_3_sched_2_end + "     " + old_program_3_sched_3_begin + "     " + old_program_3_sched_3_end + "     ");


    // Ajout des nouvelles valeurs

    if ("progs_number" === name)
        selected_programs_number = value;
    else if ("prog_1_off_on_and_days" === name)
        selected_program_1_off_on_and_days = value;
    else if ("prog_1_bright" === name)
        selected_program_1_bright = value;
    else if ("prog_1_speed" === name)
        selected_program_1_speed = value;
    else if ("prog_1_sched_number" === name)
        selected_program_1_sched_number = value;
    else if ("prog_1_sched_1_begin" === name)
        selected_program_1_sched_1_begin = value;
    else if ("prog_1_sched_1_end" === name)
        selected_program_1_sched_1_end = value;
    else if ("prog_1_sched_2_begin" === name)
        selected_program_1_sched_2_begin = value;
    else if ("prog_1_sched_2_end" === name)
        selected_program_1_sched_2_end = value;
    else if ("prog_1_sched_3_begin" === name)
        selected_program_1_sched_3_begin = value;
    else if ("prog_1_sched_3_end" === name)
        selected_program_1_sched_3_end = value;
    else if ("prog_2_off_on_and_days" === name)
        selected_program_2_off_on_and_days = value;
    else if ("prog_2_bright" === name)
        selected_program_2_bright = value;
    else if ("prog_2_speed" === name)
        selected_program_2_speed = value;
    else if ("prog_2_sched_number" === name)
        selected_program_2_sched_number = value;
    else if ("prog_2_sched_1_begin" === name)
        selected_program_2_sched_1_begin = value;
    else if ("prog_2_sched_1_end" === name)
        selected_program_2_sched_1_end = value;
    else if ("prog_2_sched_2_begin" === name)
        selected_program_2_sched_2_begin = value;
    else if ("prog_2_sched_2_end" === name)
        selected_program_2_sched_2_end = value;
    else if ("prog_2_sched_3_begin" === name)
        selected_program_2_sched_3_begin = value;
    else if ("prog_2_sched_3_end" === name)
        selected_program_2_sched_3_end = value;
    else if ("prog_3_off_on_and_days" === name)
        selected_program_3_off_on_and_days = value;
    else if ("prog_3_bright" === name)
        selected_program_3_bright = value;
    else if ("prog_3_speed" === name)
        selected_program_3_speed = value;
    else if ("prog_3_sched_number" === name)
        selected_program_3_sched_number = value;
    else if ("prog_3_sched_1_begin" === name)
        selected_program_3_sched_1_begin = value;
    else if ("prog_3_sched_1_end" === name)
        selected_program_3_sched_1_end = value;
    else if ("prog_3_sched_2_begin" === name)
        selected_program_3_sched_2_begin = value;
    else if ("prog_3_sched_2_end" === name)
        selected_program_3_sched_2_end = value;
    else if ("prog_3_sched_3_begin" === name)
        selected_program_3_sched_3_begin = value;
    else if ("prog_3_sched_3_end" === name)
        selected_program_3_sched_3_end = value;

    // fix sched number

    if (selected_program_1_sched_1_begin > 0 || selected_program_1_sched_1_end > 0)
        selected_program_1_sched_number = 1;
    if (selected_program_1_sched_2_begin > 0 || selected_program_1_sched_2_end > 0)
        selected_program_1_sched_number = 2;
    if (selected_program_1_sched_3_begin > 0 || selected_program_1_sched_3_end > 0)
        selected_program_1_sched_number = 3;

//    if (selected_program_1_sched_1_begin > 0) {
//        console.log("selected_program_1_sched_1_begin (" + selected_program_1_sched_1_begin + ") > 0");
//    }
//    if (selected_program_1_sched_1_end > 0) {
//        console.log("selected_program_1_sched_1_end (" + selected_program_1_sched_1_end + ") > 0");
//    }
//    if (selected_program_1_sched_2_begin > 0) {
//        console.log("selected_program_1_sched_2_begin (" + selected_program_1_sched_2_begin + ") > 0");
//    }
//    if (selected_program_1_sched_2_end > 0) {
//        console.log("selected_program_1_sched_2_end (" + selected_program_1_sched_2_end + ") > 0");
//    }
//    if (selected_program_1_sched_3_begin > 0) {
//        console.log("selected_program_1_sched_3_begin (" + selected_program_1_sched_3_begin + ") > 0");
//    }
//    if (selected_program_1_sched_3_end > 0) {
//        console.log("selected_program_1_sched_3_end (" + selected_program_1_sched_3_end + ") > 0");
//    }
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);

    if (selected_program_2_sched_1_begin > 0 || selected_program_2_sched_1_end > 0)
        selected_program_2_sched_number = 1;
    if (selected_program_2_sched_2_begin > 0 || selected_program_2_sched_2_end > 0)
        selected_program_2_sched_number = 2;
    if (selected_program_2_sched_3_begin > 0 || selected_program_2_sched_3_end > 0)
        selected_program_2_sched_number = 3;

    if (selected_program_2_sched_1_begin > 0) {
        console.log("selected_program_2_sched_1_begin (" + selected_program_2_sched_1_begin + ") > 0");
    }
    if (selected_program_2_sched_1_end > 0) {
        console.log("selected_program_2_sched_1_end (" + selected_program_2_sched_1_end + ") > 0");
    }
    if (selected_program_2_sched_2_begin > 0) {
        console.log("selected_program_2_sched_2_begin (" + selected_program_2_sched_2_begin + ") > 0");
    }
    if (selected_program_2_sched_2_end > 0) {
        console.log("selected_program_2_sched_2_end (" + selected_program_2_sched_2_end + ") > 0");
    }
    if (selected_program_2_sched_3_begin > 0) {
        console.log("selected_program_2_sched_3_begin (" + selected_program_2_sched_3_begin + ") > 0");
    }
    if (selected_program_2_sched_3_end > 0) {
        console.log("selected_program_2_sched_3_end (" + selected_program_2_sched_3_end + ") > 0");
    }
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);

    // Convertion

    selected_programs_number = converter("dec", "hex", selected_programs_number);
    selected_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);
    selected_program_1_bright = converter("dec", "hex", selected_program_1_bright);
    selected_program_1_speed = converter("dec", "hex", selected_program_1_speed);
    selected_program_1_sched_number = converter("dec", "hex", selected_program_1_sched_number);
    selected_program_1_sched_1_begin = converter("dec", "hex", selected_program_1_sched_1_begin);
    selected_program_1_sched_1_end = converter("dec", "hex", selected_program_1_sched_1_end);
    selected_program_1_sched_2_begin = converter("dec", "hex", selected_program_1_sched_2_begin);
    selected_program_1_sched_2_end = converter("dec", "hex", selected_program_1_sched_2_end);
    selected_program_1_sched_3_begin = converter("dec", "hex", selected_program_1_sched_3_begin);
    selected_program_1_sched_3_end = converter("dec", "hex", selected_program_1_sched_3_end);
    selected_program_2_off_on_and_days = converter("dec", "hex", selected_program_2_off_on_and_days);
    selected_program_2_bright = converter("dec", "hex", selected_program_2_bright);
    selected_program_2_speed = converter("dec", "hex", selected_program_2_speed);
    selected_program_2_sched_number = converter("dec", "hex", selected_program_2_sched_number);
    selected_program_2_sched_1_begin = converter("dec", "hex", selected_program_2_sched_1_begin);
    selected_program_2_sched_1_end = converter("dec", "hex", selected_program_2_sched_1_end);
    selected_program_2_sched_2_begin = converter("dec", "hex", selected_program_2_sched_2_begin);
    selected_program_2_sched_2_end = converter("dec", "hex", selected_program_2_sched_2_end);
    selected_program_2_sched_3_begin = converter("dec", "hex", selected_program_2_sched_3_begin);
    selected_program_2_sched_3_end = converter("dec", "hex", selected_program_2_sched_3_end);
    selected_program_3_off_on_and_days = converter("dec", "hex", selected_program_3_off_on_and_days);
    selected_program_3_bright = converter("dec", "hex", selected_program_3_bright);
    selected_program_3_speed = converter("dec", "hex", selected_program_3_speed);
    selected_program_3_sched_number = converter("dec", "hex", selected_program_3_sched_number);
    selected_program_3_sched_1_begin = converter("dec", "hex", selected_program_3_sched_1_begin);
    selected_program_3_sched_1_end = converter("dec", "hex", selected_program_3_sched_1_end);
    selected_program_3_sched_2_begin = converter("dec", "hex", selected_program_3_sched_2_begin);
    selected_program_3_sched_2_end = converter("dec", "hex", selected_program_3_sched_2_end);
    selected_program_3_sched_3_begin = converter("dec", "hex", selected_program_3_sched_3_begin);
    selected_program_3_sched_3_end = converter("dec", "hex", selected_program_3_sched_3_end);

    if (selected_programs_number === undefined)
        selected_programs_number = "";
    if (selected_program_1_off_on_and_days === undefined)
        selected_program_1_off_on_and_days = "";
    if (selected_program_1_bright === undefined)
        selected_program_1_bright = "";
    if (selected_program_1_speed === undefined)
        selected_program_1_speed = "";
    if (selected_program_1_sched_number === undefined)
        selected_program_1_sched_number = "";
    if (selected_program_1_sched_1_begin === undefined)
        selected_program_1_sched_1_begin = "";
    if (selected_program_1_sched_1_end === undefined)
        selected_program_1_sched_1_end = "";
    if (selected_program_1_sched_2_begin === undefined)
        selected_program_1_sched_2_begin = "";
    if (selected_program_1_sched_2_end === undefined)
        selected_program_1_sched_2_end = "";
    if (selected_program_1_sched_3_begin === undefined)
        selected_program_1_sched_3_begin = "";
    if (selected_program_1_sched_3_end === undefined)
        selected_program_1_sched_3_end = "";
    if (selected_program_2_off_on_and_days === undefined)
        selected_program_2_off_on_and_days = "";
    if (selected_program_2_bright === undefined)
        selected_program_2_bright = "";
    if (selected_program_2_speed === undefined)
        selected_program_2_speed = "";
    if (selected_program_2_sched_number === undefined)
        selected_program_2_sched_number = "";
    if (selected_program_2_sched_1_begin === undefined)
        selected_program_2_sched_1_begin = "";
    if (selected_program_2_sched_1_end === undefined)
        selected_program_2_sched_1_end = "";
    if (selected_program_2_sched_2_begin === undefined)
        selected_program_2_sched_2_begin = "";
    if (selected_program_2_sched_2_end === undefined)
        selected_program_2_sched_2_end = "";
    if (selected_program_2_sched_3_begin === undefined)
        selected_program_2_sched_3_begin = "";
    if (selected_program_2_sched_3_end === undefined)
        selected_program_2_sched_3_end = "";
    if (selected_program_3_off_on_and_days === undefined)
        selected_program_3_off_on_and_days = "";
    if (selected_program_3_bright === undefined)
        selected_program_3_bright = "";
    if (selected_program_3_speed === undefined)
        selected_program_3_speed = "";
    if (selected_program_3_sched_number === undefined)
        selected_program_3_sched_number = "";
    if (selected_program_3_sched_1_begin === undefined)
        selected_program_3_sched_1_begin = "";
    if (selected_program_3_sched_1_end === undefined)
        selected_program_3_sched_1_end = "";
    if (selected_program_3_sched_2_begin === undefined)
        selected_program_3_sched_2_begin = "";
    if (selected_program_3_sched_2_end === undefined)
        selected_program_3_sched_2_end = "";
    if (selected_program_3_sched_3_begin === undefined)
        selected_program_3_sched_3_begin = "";
    if (selected_program_3_sched_3_end === undefined)
        selected_program_3_sched_3_end = "";

    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
    // console.log("selected_program_1_bright = " + selected_program_1_bright);
    // console.log("selected_program_1_speed = " + selected_program_1_speed);
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);
    // console.log("selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
    // console.log("selected_program_2_bright = " + selected_program_2_bright);
    // console.log("selected_program_2_speed = " + selected_program_2_speed);
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);
    // console.log("selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
    // console.log("selected_program_3_bright = " + selected_program_3_bright);
    // console.log("selected_program_3_speed = " + selected_program_3_speed);
    // console.log("selected_program_3_sched_number = " + selected_program_3_sched_number);
    // console.log("selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    // Fill Blank

    if (is_void(selected_program_1_sched_2_begin) && !is_void(selected_program_1_sched_2_end))
        selected_program_1_sched_2_begin = "00";
    if (!is_void(selected_program_1_sched_2_begin) && is_void(selected_program_1_sched_2_end))
        selected_program_1_sched_2_end = "00";
    if (is_void(selected_program_1_sched_3_begin) && !is_void(selected_program_1_sched_3_end))
        selected_program_1_sched_3_begin = "00";
    if (!is_void(selected_program_1_sched_3_begin) && is_void(selected_program_1_sched_3_end))
        selected_program_1_sched_3_end = "00";

    // Delete Void Sched

    if (selected_program_1_sched_2_begin === "00" && selected_program_1_sched_2_end === "00") {
        selected_program_1_sched_2_begin = "";
        selected_program_1_sched_2_end = "";
    }
    if (selected_program_1_sched_3_begin === "00" && selected_program_1_sched_3_end === "00") {
        selected_program_1_sched_3_begin = "";
        selected_program_1_sched_3_end = "";
    }

    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);

    // Final

    console.log("off_on bright speeds scheds begin1 endin1 begin2 endin2 begin3 endin3");
    console.log(selected_program_1_off_on_and_days + "     " + selected_program_1_bright + "     " + selected_program_1_speed + "     " + selected_program_1_sched_number + "     " + selected_program_1_sched_1_begin + "     " + selected_program_1_sched_1_end + "     " + selected_program_1_sched_2_begin + "     " + selected_program_1_sched_2_end + "     " + selected_program_1_sched_3_begin + "     " + selected_program_1_sched_3_end + "     ");
    console.log(selected_program_2_off_on_and_days + "     " + selected_program_2_bright + "     " + selected_program_2_speed + "     " + selected_program_2_sched_number + "     " + selected_program_2_sched_1_begin + "     " + selected_program_2_sched_1_end + "     " + selected_program_2_sched_2_begin + "     " + selected_program_2_sched_2_end + "     " + selected_program_2_sched_3_begin + "     " + selected_program_2_sched_3_end + "     ");
    console.log(selected_program_3_off_on_and_days + "     " + selected_program_3_bright + "     " + selected_program_3_speed + "     " + selected_program_3_sched_number + "     " + selected_program_3_sched_1_begin + "     " + selected_program_3_sched_1_end + "     " + selected_program_3_sched_2_begin + "     " + selected_program_3_sched_2_end + "     " + selected_program_3_sched_3_begin + "     " + selected_program_3_sched_3_end + "     ");

    if (old_programs_number !== selected_programs_number) {
        console.log("old_programs_number (" + old_programs_number + ") -----> selected_programs_number (" + selected_programs_number + ")");
    }
    if (old_program_1_off_on_and_days !== selected_program_1_off_on_and_days) {
        console.log("old_program_1_off_on_and_days (" + old_program_1_off_on_and_days + ") -----> selected_program_1_off_on_and_days (" + selected_program_1_off_on_and_days + ")");
    }
    if (old_program_1_bright !== selected_program_1_bright) {
        console.log("old_program_1_bright (" + old_program_1_bright + ") -----> selected_program_1_bright (" + selected_program_1_bright + ")");
    }
    if (old_program_1_speed !== selected_program_1_speed) {
        console.log("old_program_1_speed (" + old_program_1_speed + ") -----> selected_program_1_speed (" + selected_program_1_speed + ")");
    }
    if (old_program_1_sched_number !== selected_program_1_sched_number) {
        console.log("old_program_1_sched_number (" + old_program_1_sched_number + ") -----> selected_program_1_sched_number (" + selected_program_1_sched_number + ")");
    }
    if (old_program_1_sched_1_begin !== selected_program_1_sched_1_begin) {
        console.log("old_program_1_sched_1_begin (" + old_program_1_sched_1_begin + ") -----> selected_program_1_sched_1_begin (" + selected_program_1_sched_1_begin + ")");
    }
    if (old_program_1_sched_1_end !== selected_program_1_sched_1_end) {
        console.log("old_program_1_sched_1_end (" + old_program_1_sched_1_end + ") -----> selected_program_1_sched_1_end (" + selected_program_1_sched_1_end + ")");
    }
    if (old_program_1_sched_2_begin !== selected_program_1_sched_2_begin) {
        console.log("old_program_1_sched_2_begin (" + old_program_1_sched_2_begin + ") -----> selected_program_1_sched_2_begin (" + selected_program_1_sched_2_begin + ")");
    }
    if (old_program_1_sched_2_end !== selected_program_1_sched_2_end) {
        console.log("old_program_1_sched_2_end (" + old_program_1_sched_2_end + ") -----> selected_program_1_sched_2_end (" + selected_program_1_sched_2_end + ")");
    }
    if (old_program_1_sched_3_begin !== selected_program_1_sched_3_begin) {
        console.log("old_program_1_sched_3_begin (" + old_program_1_sched_3_begin + ") -----> selected_program_1_sched_3_begin (" + selected_program_1_sched_3_begin + ")");
    }
    if (old_program_1_sched_3_end !== selected_program_1_sched_3_end) {
        console.log("old_program_1_sched_3_end (" + old_program_1_sched_3_end + ") -----> selected_program_1_sched_3_end (" + selected_program_1_sched_3_end + ")");
    }
    if (old_program_2_off_on_and_days !== selected_program_2_off_on_and_days) {
        console.log("old_program_2_off_on_and_days (" + old_program_2_off_on_and_days + ") -----> selected_program_2_off_on_and_days (" + selected_program_2_off_on_and_days + ")");
    }
    if (old_program_2_bright !== selected_program_2_bright) {
        console.log("old_program_2_bright (" + old_program_2_bright + ") -----> selected_program_2_bright (" + selected_program_2_bright + ")");
    }
    if (old_program_2_speed !== selected_program_2_speed) {
        console.log("old_program_2_speed (" + old_program_2_speed + ") -----> selected_program_2_speed (" + selected_program_2_speed + ")");
    }
    if (old_program_2_sched_number !== selected_program_2_sched_number) {
        console.log("old_program_2_sched_number (" + old_program_2_sched_number + ") -----> selected_program_2_sched_number (" + selected_program_2_sched_number + ")");
    }
    if (old_program_2_sched_1_begin !== selected_program_2_sched_1_begin) {
        console.log("old_program_2_sched_1_begin (" + old_program_2_sched_1_begin + ") -----> selected_program_2_sched_1_begin (" + selected_program_2_sched_1_begin + ")");
    }
    if (old_program_2_sched_1_end !== selected_program_2_sched_1_end) {
        console.log("old_program_2_sched_1_end (" + old_program_2_sched_1_end + ") -----> selected_program_2_sched_1_end (" + selected_program_2_sched_1_end + ")");
    }
    if (old_program_2_sched_2_begin !== selected_program_2_sched_2_begin) {
        console.log("old_program_2_sched_2_begin (" + old_program_2_sched_2_begin + ") -----> selected_program_2_sched_2_begin (" + selected_program_2_sched_2_begin + ")");
    }
    if (old_program_2_sched_2_end !== selected_program_2_sched_2_end) {
        console.log("old_program_2_sched_2_end (" + old_program_2_sched_2_end + ") -----> selected_program_2_sched_2_end (" + selected_program_2_sched_2_end + ")");
    }
    if (old_program_2_sched_3_begin !== selected_program_2_sched_3_begin) {
        console.log("old_program_2_sched_3_begin (" + old_program_2_sched_3_begin + ") -----> selected_program_2_sched_3_begin (" + selected_program_2_sched_3_begin + ")");
    }
    if (old_program_2_sched_3_end !== selected_program_2_sched_3_end) {
        console.log("old_program_2_sched_3_end (" + old_program_2_sched_3_end + ") -----> selected_program_2_sched_3_end (" + selected_program_2_sched_3_end + ")");
    }
    if (old_program_3_off_on_and_days !== selected_program_3_off_on_and_days) {
        console.log("old_program_3_off_on_and_days (" + old_program_3_off_on_and_days + ") -----> selected_program_3_off_on_and_days (" + selected_program_3_off_on_and_days + ")");
    }
    if (old_program_3_bright !== selected_program_3_bright) {
        console.log("old_program_3_bright (" + old_program_3_bright + ") -----> selected_program_3_bright (" + selected_program_3_bright + ")");
    }
    if (old_program_3_speed !== selected_program_3_speed) {
        console.log("old_program_3_speed (" + old_program_3_speed + ") -----> selected_program_3_speed (" + selected_program_3_speed + ")");
    }
    if (old_program_3_sched_number !== selected_program_3_sched_number) {
        console.log("old_program_3_sched_number (" + old_program_3_sched_number + ") -----> selected_program_3_sched_number (" + selected_program_3_sched_number + ")");
    }
    if (old_program_3_sched_1_begin !== selected_program_3_sched_1_begin) {
        console.log("old_program_3_sched_1_begin (" + old_program_3_sched_1_begin + ") -----> selected_program_3_sched_1_begin (" + selected_program_3_sched_1_begin + ")");
    }
    if (old_program_3_sched_1_end !== selected_program_3_sched_1_end) {
        console.log("old_program_3_sched_1_end (" + old_program_3_sched_1_end + ") -----> selected_program_3_sched_1_end (" + selected_program_3_sched_1_end + ")");
    }
    if (old_program_3_sched_2_begin !== selected_program_3_sched_2_begin) {
        console.log("old_program_3_sched_2_begin (" + old_program_3_sched_2_begin + ") -----> selected_program_3_sched_2_begin (" + selected_program_3_sched_2_begin + ")");
    }
    if (old_program_3_sched_2_end !== selected_program_3_sched_2_end) {
        console.log("old_program_3_sched_2_end (" + old_program_3_sched_2_end + ") -----> selected_program_3_sched_2_end (" + selected_program_3_sched_2_end + ")");
    }
    if (old_program_3_sched_3_begin !== selected_program_3_sched_3_begin) {
        console.log("old_program_3_sched_3_begin (" + old_program_3_sched_3_begin + ") -----> selected_program_3_sched_3_begin (" + selected_program_3_sched_3_begin + ")");
    }
    if (old_program_3_sched_3_end !== selected_program_3_sched_3_end) {
        console.log("old_program_3_sched_3_end (" + old_program_3_sched_3_end + ") -----> selected_program_3_sched_3_end (" + selected_program_3_sched_3_end + ")");
    }

    var new_auxiliary_sched = `${selected_programs_number}${selected_program_1_off_on_and_days}${selected_program_1_bright}${selected_program_1_speed}${selected_program_1_sched_number}${selected_program_1_sched_1_begin}${selected_program_1_sched_1_end}${selected_program_1_sched_2_begin}${selected_program_1_sched_2_end}${selected_program_1_sched_3_begin}${selected_program_1_sched_3_end}${selected_program_2_off_on_and_days}${selected_program_2_bright}${selected_program_2_speed}${selected_program_2_sched_number}${selected_program_2_sched_1_begin}${selected_program_2_sched_1_end}${selected_program_2_sched_2_begin}${selected_program_2_sched_2_end}${selected_program_2_sched_3_begin}${selected_program_2_sched_3_end}${selected_program_3_off_on_and_days}${selected_program_3_bright}${selected_program_3_speed}${selected_program_3_sched_number}${selected_program_3_sched_1_begin}${selected_program_3_sched_1_end}${selected_program_3_sched_2_begin}${selected_program_3_sched_2_end}${selected_program_3_sched_3_begin}${selected_program_3_sched_3_end}`;
    console.log("new_auxiliary_sched = " + new_auxiliary_sched);

    var ok = check_sched_for_errors(selected_programs_number, selected_program_1_off_on_and_days, selected_program_1_bright, selected_program_1_speed, selected_program_1_sched_number, selected_program_1_sched_1_begin, selected_program_1_sched_1_end, selected_program_1_sched_2_begin, selected_program_1_sched_2_end, selected_program_1_sched_3_begin, selected_program_1_sched_3_end, selected_program_2_off_on_and_days, selected_program_2_bright, selected_program_2_speed, selected_program_2_sched_number, selected_program_2_sched_1_begin, selected_program_2_sched_1_end, selected_program_2_sched_2_begin, selected_program_2_sched_2_end, selected_program_2_sched_3_begin, selected_program_2_sched_3_end, selected_program_3_off_on_and_days, selected_program_3_bright, selected_program_3_speed, selected_program_3_sched_number, selected_program_3_sched_1_begin, selected_program_3_sched_1_end, selected_program_3_sched_2_begin, selected_program_3_sched_2_end, selected_program_3_sched_3_begin, selected_program_3_sched_3_end);

    set_auxiliary_sched_value_save = new_auxiliary_sched;
    return new_auxiliary_sched;
//    if (ok)
//        quick_send("s44_w", "auxiliary_sched", "info", "desired", new_auxiliary_sched);

    // quick_send("s44_w", "auxiliary_sched", "info", "desired", new_auxiliary_sched);
    // quick_send("s44_w", "auxiliary_sched", "info", "desired", "02 FE 64 64 03 04 08 7E 64 64 03 04 08 03");
    // hard reset : quick_send("s44_w", "auxiliary_sched", "info", "desired", "027E64640104887E6464010488");
    // 02 7E 64 64 01 04 10 7E 64 64 01 04 88
    // 02 7E 64 64 01 04 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 09 0F 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 09 10 0F 7E 64 64 01 04
    // 02 7E 64 64 03 04 08 0F 7E 64 64 01 04
    // 02 7E 64 64 03 04 08 0C 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 0C 17 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 0A 0D 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 0A 00 00 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 08 00 00 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 08 0C 00 00 00 7E 64 64 01
}

var set_sched_value_save = "";

function set_sched_value(name, value) {

    // Récupération des valeurs de basesselected_program_1_sched_2_begin

    if (set_sched_value_save === "") {
        var x3_sched = get_value_from_position(eq_modal, "x3_sched");
    } else {
        var x3_sched = set_sched_value_save;
    }
    console.log("x3_sched = " + x3_sched);


    // 02 7E 64 64 01 04 10 7E 64 64 01 04 88

    var selected_programs_number = get_sched_value(x3_sched, "programs_number");
    var selected_program_1_off_on_and_days = get_sched_value(x3_sched, "program_1_off_on_and_days");
    var selected_program_1_bright = get_sched_value(x3_sched, "program_1_bright");
    var selected_program_1_speed = get_sched_value(x3_sched, "program_1_speed");
    var selected_program_1_sched_number = get_sched_value(x3_sched, "program_1_sched_number");
    var selected_program_1_sched_1_begin = get_sched_value(x3_sched, "program_1_sched_1_begin");
    var selected_program_1_sched_1_end = get_sched_value(x3_sched, "program_1_sched_1_end");
    var selected_program_1_sched_2_begin = get_sched_value(x3_sched, "program_1_sched_2_begin");
    var selected_program_1_sched_2_end = get_sched_value(x3_sched, "program_1_sched_2_end");
    var selected_program_1_sched_3_begin = get_sched_value(x3_sched, "program_1_sched_3_begin");
    var selected_program_1_sched_3_end = get_sched_value(x3_sched, "program_1_sched_3_end");
    var selected_program_2_off_on_and_days = get_sched_value(x3_sched, "program_2_off_on_and_days");
    var selected_program_2_bright = get_sched_value(x3_sched, "program_2_bright");
    var selected_program_2_speed = get_sched_value(x3_sched, "program_2_speed");
    var selected_program_2_sched_number = get_sched_value(x3_sched, "program_2_sched_number");
    var selected_program_2_sched_1_begin = get_sched_value(x3_sched, "program_2_sched_1_begin");
    var selected_program_2_sched_1_end = get_sched_value(x3_sched, "program_2_sched_1_end");
    var selected_program_2_sched_2_begin = get_sched_value(x3_sched, "program_2_sched_2_begin");
    var selected_program_2_sched_2_end = get_sched_value(x3_sched, "program_2_sched_2_end");
    var selected_program_2_sched_3_begin = get_sched_value(x3_sched, "program_2_sched_3_begin");
    var selected_program_2_sched_3_end = get_sched_value(x3_sched, "program_2_sched_3_end");
    var selected_program_3_off_on_and_days = get_sched_value(x3_sched, "program_3_off_on_and_days");
    var selected_program_3_bright = get_sched_value(x3_sched, "program_3_bright");
    var selected_program_3_speed = get_sched_value(x3_sched, "program_3_speed");
    var selected_program_3_sched_number = get_sched_value(x3_sched, "program_3_sched_number");
    var selected_program_3_sched_1_begin = get_sched_value(x3_sched, "program_3_sched_1_begin");
    var selected_program_3_sched_1_end = get_sched_value(x3_sched, "program_3_sched_1_end");
    var selected_program_3_sched_2_begin = get_sched_value(x3_sched, "program_3_sched_2_begin");
    var selected_program_3_sched_2_end = get_sched_value(x3_sched, "program_3_sched_2_end");
    var selected_program_3_sched_3_begin = get_sched_value(x3_sched, "program_3_sched_3_begin");
    var selected_program_3_sched_3_end = get_sched_value(x3_sched, "program_3_sched_3_end");


    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
    // console.log("selected_program_1_bright = " + selected_program_1_bright);
    // console.log("selected_program_1_speed = " + selected_program_1_speed);
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);
    // console.log("selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
    // console.log("selected_program_2_bright = " + selected_program_2_bright);
    // console.log("selected_program_2_speed = " + selected_program_2_speed);
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);
    // console.log("selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
    // console.log("selected_program_3_bright = " + selected_program_3_bright);
    // console.log("selected_program_3_speed = " + selected_program_3_speed);
    // console.log("selected_program_3_sched_number = " + selected_program_3_sched_number);
    // console.log("selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    selected_program_1_sched_1_end = fix_end_dec(selected_program_1_sched_1_end);
    selected_program_1_sched_2_end = fix_end_dec(selected_program_1_sched_2_end);
    selected_program_1_sched_3_end = fix_end_dec(selected_program_1_sched_3_end);
    selected_program_2_sched_1_end = fix_end_dec(selected_program_2_sched_1_end);
    selected_program_2_sched_2_end = fix_end_dec(selected_program_2_sched_2_end);
    selected_program_2_sched_3_end = fix_end_dec(selected_program_2_sched_3_end);
    selected_program_3_sched_1_end = fix_end_dec(selected_program_3_sched_1_end);
    selected_program_3_sched_2_end = fix_end_dec(selected_program_3_sched_2_end);
    selected_program_3_sched_3_end = fix_end_dec(selected_program_3_sched_3_end);

    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    var old_programs_number = converter("dec", "hex", selected_programs_number);
    var old_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);
    var old_program_1_bright = converter("dec", "hex", selected_program_1_bright);
    var old_program_1_speed = converter("dec", "hex", selected_program_1_speed);
    var old_program_1_sched_number = converter("dec", "hex", selected_program_1_sched_number);
    var old_program_1_sched_1_begin = converter("dec", "hex", selected_program_1_sched_1_begin);
    var old_program_1_sched_1_end = converter("dec", "hex", selected_program_1_sched_1_end);
    var old_program_1_sched_2_begin = converter("dec", "hex", selected_program_1_sched_2_begin);
    var old_program_1_sched_2_end = converter("dec", "hex", selected_program_1_sched_2_end);
    var old_program_1_sched_3_begin = converter("dec", "hex", selected_program_1_sched_3_begin);
    var old_program_1_sched_3_end = converter("dec", "hex", selected_program_1_sched_3_end);
    var old_program_2_off_on_and_days = converter("dec", "hex", selected_program_2_off_on_and_days);
    var old_program_2_bright = converter("dec", "hex", selected_program_2_bright);
    var old_program_2_speed = converter("dec", "hex", selected_program_2_speed);
    var old_program_2_sched_number = converter("dec", "hex", selected_program_2_sched_number);
    var old_program_2_sched_1_begin = converter("dec", "hex", selected_program_2_sched_1_begin);
    var old_program_2_sched_1_end = converter("dec", "hex", selected_program_2_sched_1_end);
    var old_program_2_sched_2_begin = converter("dec", "hex", selected_program_2_sched_2_begin);
    var old_program_2_sched_2_end = converter("dec", "hex", selected_program_2_sched_2_end);
    var old_program_2_sched_3_begin = converter("dec", "hex", selected_program_2_sched_3_begin);
    var old_program_2_sched_3_end = converter("dec", "hex", selected_program_2_sched_3_end);
    var old_program_3_off_on_and_days = converter("dec", "hex", selected_program_3_off_on_and_days);
    var old_program_3_bright = converter("dec", "hex", selected_program_3_bright);
    var old_program_3_speed = converter("dec", "hex", selected_program_3_speed);
    var old_program_3_sched_number = converter("dec", "hex", selected_program_3_sched_number);
    var old_program_3_sched_1_begin = converter("dec", "hex", selected_program_3_sched_1_begin);
    var old_program_3_sched_1_end = converter("dec", "hex", selected_program_3_sched_1_end);
    var old_program_3_sched_2_begin = converter("dec", "hex", selected_program_3_sched_2_begin);
    var old_program_3_sched_2_end = converter("dec", "hex", selected_program_3_sched_2_end);
    var old_program_3_sched_3_begin = converter("dec", "hex", selected_program_3_sched_3_begin);
    var old_program_3_sched_3_end = converter("dec", "hex", selected_program_3_sched_3_end);

    if (old_programs_number === undefined)
        old_programs_number = "";
    if (old_program_1_off_on_and_days === undefined)
        old_program_1_off_on_and_days = "";
    if (old_program_1_bright === undefined)
        old_program_1_bright = "";
    if (old_program_1_speed === undefined)
        old_program_1_speed = "";
    if (old_program_1_sched_number === undefined)
        old_program_1_sched_number = "";
    if (old_program_1_sched_1_begin === undefined)
        old_program_1_sched_1_begin = "";
    if (old_program_1_sched_1_end === undefined)
        old_program_1_sched_1_end = "";
    if (old_program_1_sched_2_begin === undefined)
        old_program_1_sched_2_begin = "";
    if (old_program_1_sched_2_end === undefined)
        old_program_1_sched_2_end = "";
    if (old_program_1_sched_3_begin === undefined)
        old_program_1_sched_3_begin = "";
    if (old_program_1_sched_3_end === undefined)
        old_program_1_sched_3_end = "";
    if (old_program_2_off_on_and_days === undefined)
        old_program_2_off_on_and_days = "";
    if (old_program_2_bright === undefined)
        old_program_2_bright = "";
    if (old_program_2_speed === undefined)
        old_program_2_speed = "";
    if (old_program_2_sched_number === undefined)
        old_program_2_sched_number = "";
    if (old_program_2_sched_1_begin === undefined)
        old_program_2_sched_1_begin = "";
    if (old_program_2_sched_1_end === undefined)
        old_program_2_sched_1_end = "";
    if (old_program_2_sched_2_begin === undefined)
        old_program_2_sched_2_begin = "";
    if (old_program_2_sched_2_end === undefined)
        old_program_2_sched_2_end = "";
    if (old_program_2_sched_3_begin === undefined)
        old_program_2_sched_3_begin = "";
    if (old_program_2_sched_3_end === undefined)
        old_program_2_sched_3_end = "";
    if (old_program_3_off_on_and_days === undefined)
        old_program_3_off_on_and_days = "";
    if (old_program_3_bright === undefined)
        old_program_3_bright = "";
    if (old_program_3_speed === undefined)
        old_program_3_speed = "";
    if (old_program_3_sched_number === undefined)
        old_program_3_sched_number = "";
    if (old_program_3_sched_1_begin === undefined)
        old_program_3_sched_1_begin = "";
    if (old_program_3_sched_1_end === undefined)
        old_program_3_sched_1_end = "";
    if (old_program_3_sched_2_begin === undefined)
        old_program_3_sched_2_begin = "";
    if (old_program_3_sched_2_end === undefined)
        old_program_3_sched_2_end = "";
    if (old_program_3_sched_3_begin === undefined)
        old_program_3_sched_3_begin = "";
    if (old_program_3_sched_3_end === undefined)
        old_program_3_sched_3_end = "";

    console.log("off_on bright speeds scheds begin1 endin1 begin2 endin2 begin3 endin3");
    console.log(old_program_1_off_on_and_days + "     " + old_program_1_bright + "     " + old_program_1_speed + "     " + old_program_1_sched_number + "     " + old_program_1_sched_1_begin + "     " + old_program_1_sched_1_end + "     " + old_program_1_sched_2_begin + "     " + old_program_1_sched_2_end + "     " + old_program_1_sched_3_begin + "     " + old_program_1_sched_3_end + "     ");
    console.log(old_program_2_off_on_and_days + "     " + old_program_2_bright + "     " + old_program_2_speed + "     " + old_program_2_sched_number + "     " + old_program_2_sched_1_begin + "     " + old_program_2_sched_1_end + "     " + old_program_2_sched_2_begin + "     " + old_program_2_sched_2_end + "     " + old_program_2_sched_3_begin + "     " + old_program_2_sched_3_end + "     ");
    console.log(old_program_3_off_on_and_days + "     " + old_program_3_bright + "     " + old_program_3_speed + "     " + old_program_3_sched_number + "     " + old_program_3_sched_1_begin + "     " + old_program_3_sched_1_end + "     " + old_program_3_sched_2_begin + "     " + old_program_3_sched_2_end + "     " + old_program_3_sched_3_begin + "     " + old_program_3_sched_3_end + "     ");


    // Ajout des nouvelles valeurs

    if ("progs_number" === name)
        selected_programs_number = value;
    else if ("prog_1_off_on_and_days" === name)
        selected_program_1_off_on_and_days = value;
    else if ("prog_1_bright" === name)
        selected_program_1_bright = value;
    else if ("prog_1_speed" === name)
        selected_program_1_speed = value;
    else if ("prog_1_sched_number" === name)
        selected_program_1_sched_number = value;
    else if ("prog_1_sched_1_begin" === name)
        selected_program_1_sched_1_begin = value;
    else if ("prog_1_sched_1_end" === name)
        selected_program_1_sched_1_end = value;
    else if ("prog_1_sched_2_begin" === name)
        selected_program_1_sched_2_begin = value;
    else if ("prog_1_sched_2_end" === name)
        selected_program_1_sched_2_end = value;
    else if ("prog_1_sched_3_begin" === name)
        selected_program_1_sched_3_begin = value;
    else if ("prog_1_sched_3_end" === name)
        selected_program_1_sched_3_end = value;
    else if ("prog_2_off_on_and_days" === name)
        selected_program_2_off_on_and_days = value;
    else if ("prog_2_bright" === name)
        selected_program_2_bright = value;
    else if ("prog_2_speed" === name)
        selected_program_2_speed = value;
    else if ("prog_2_sched_number" === name)
        selected_program_2_sched_number = value;
    else if ("prog_2_sched_1_begin" === name)
        selected_program_2_sched_1_begin = value;
    else if ("prog_2_sched_1_end" === name)
        selected_program_2_sched_1_end = value;
    else if ("prog_2_sched_2_begin" === name)
        selected_program_2_sched_2_begin = value;
    else if ("prog_2_sched_2_end" === name)
        selected_program_2_sched_2_end = value;
    else if ("prog_2_sched_3_begin" === name)
        selected_program_2_sched_3_begin = value;
    else if ("prog_2_sched_3_end" === name)
        selected_program_2_sched_3_end = value;
    else if ("prog_3_off_on_and_days" === name)
        selected_program_3_off_on_and_days = value;
    else if ("prog_3_bright" === name)
        selected_program_3_bright = value;
    else if ("prog_3_speed" === name)
        selected_program_3_speed = value;
    else if ("prog_3_sched_number" === name)
        selected_program_3_sched_number = value;
    else if ("prog_3_sched_1_begin" === name)
        selected_program_3_sched_1_begin = value;
    else if ("prog_3_sched_1_end" === name)
        selected_program_3_sched_1_end = value;
    else if ("prog_3_sched_2_begin" === name)
        selected_program_3_sched_2_begin = value;
    else if ("prog_3_sched_2_end" === name)
        selected_program_3_sched_2_end = value;
    else if ("prog_3_sched_3_begin" === name)
        selected_program_3_sched_3_begin = value;
    else if ("prog_3_sched_3_end" === name)
        selected_program_3_sched_3_end = value;

    // fix sched number

    if (selected_program_1_sched_1_begin > 0 || selected_program_1_sched_1_end > 0)
        selected_program_1_sched_number = 1;
    if (selected_program_1_sched_2_begin > 0 || selected_program_1_sched_2_end > 0)
        selected_program_1_sched_number = 2;
    if (selected_program_1_sched_3_begin > 0 || selected_program_1_sched_3_end > 0)
        selected_program_1_sched_number = 3;

//    if (selected_program_1_sched_1_begin > 0) {
//        console.log("selected_program_1_sched_1_begin (" + selected_program_1_sched_1_begin + ") > 0");
//    }
//    if (selected_program_1_sched_1_end > 0) {
//        console.log("selected_program_1_sched_1_end (" + selected_program_1_sched_1_end + ") > 0");
//    }
//    if (selected_program_1_sched_2_begin > 0) {
//        console.log("selected_program_1_sched_2_begin (" + selected_program_1_sched_2_begin + ") > 0");
//    }
//    if (selected_program_1_sched_2_end > 0) {
//        console.log("selected_program_1_sched_2_end (" + selected_program_1_sched_2_end + ") > 0");
//    }
//    if (selected_program_1_sched_3_begin > 0) {
//        console.log("selected_program_1_sched_3_begin (" + selected_program_1_sched_3_begin + ") > 0");
//    }
//    if (selected_program_1_sched_3_end > 0) {
//        console.log("selected_program_1_sched_3_end (" + selected_program_1_sched_3_end + ") > 0");
//    }
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);

    if (selected_program_2_sched_1_begin > 0 || selected_program_2_sched_1_end > 0)
        selected_program_2_sched_number = 1;
    if (selected_program_2_sched_2_begin > 0 || selected_program_2_sched_2_end > 0)
        selected_program_2_sched_number = 2;
    if (selected_program_2_sched_3_begin > 0 || selected_program_2_sched_3_end > 0)
        selected_program_2_sched_number = 3;

    if (selected_program_2_sched_1_begin > 0) {
        console.log("selected_program_2_sched_1_begin (" + selected_program_2_sched_1_begin + ") > 0");
    }
    if (selected_program_2_sched_1_end > 0) {
        console.log("selected_program_2_sched_1_end (" + selected_program_2_sched_1_end + ") > 0");
    }
    if (selected_program_2_sched_2_begin > 0) {
        console.log("selected_program_2_sched_2_begin (" + selected_program_2_sched_2_begin + ") > 0");
    }
    if (selected_program_2_sched_2_end > 0) {
        console.log("selected_program_2_sched_2_end (" + selected_program_2_sched_2_end + ") > 0");
    }
    if (selected_program_2_sched_3_begin > 0) {
        console.log("selected_program_2_sched_3_begin (" + selected_program_2_sched_3_begin + ") > 0");
    }
    if (selected_program_2_sched_3_end > 0) {
        console.log("selected_program_2_sched_3_end (" + selected_program_2_sched_3_end + ") > 0");
    }
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);

    // Convertion

    selected_programs_number = converter("dec", "hex", selected_programs_number);
    selected_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);
    selected_program_1_bright = converter("dec", "hex", selected_program_1_bright);
    selected_program_1_speed = converter("dec", "hex", selected_program_1_speed);
    selected_program_1_sched_number = converter("dec", "hex", selected_program_1_sched_number);
    selected_program_1_sched_1_begin = converter("dec", "hex", selected_program_1_sched_1_begin);
    selected_program_1_sched_1_end = converter("dec", "hex", selected_program_1_sched_1_end);
    selected_program_1_sched_2_begin = converter("dec", "hex", selected_program_1_sched_2_begin);
    selected_program_1_sched_2_end = converter("dec", "hex", selected_program_1_sched_2_end);
    selected_program_1_sched_3_begin = converter("dec", "hex", selected_program_1_sched_3_begin);
    selected_program_1_sched_3_end = converter("dec", "hex", selected_program_1_sched_3_end);
    selected_program_2_off_on_and_days = converter("dec", "hex", selected_program_2_off_on_and_days);
    selected_program_2_bright = converter("dec", "hex", selected_program_2_bright);
    selected_program_2_speed = converter("dec", "hex", selected_program_2_speed);
    selected_program_2_sched_number = converter("dec", "hex", selected_program_2_sched_number);
    selected_program_2_sched_1_begin = converter("dec", "hex", selected_program_2_sched_1_begin);
    selected_program_2_sched_1_end = converter("dec", "hex", selected_program_2_sched_1_end);
    selected_program_2_sched_2_begin = converter("dec", "hex", selected_program_2_sched_2_begin);
    selected_program_2_sched_2_end = converter("dec", "hex", selected_program_2_sched_2_end);
    selected_program_2_sched_3_begin = converter("dec", "hex", selected_program_2_sched_3_begin);
    selected_program_2_sched_3_end = converter("dec", "hex", selected_program_2_sched_3_end);
    selected_program_3_off_on_and_days = converter("dec", "hex", selected_program_3_off_on_and_days);
    selected_program_3_bright = converter("dec", "hex", selected_program_3_bright);
    selected_program_3_speed = converter("dec", "hex", selected_program_3_speed);
    selected_program_3_sched_number = converter("dec", "hex", selected_program_3_sched_number);
    selected_program_3_sched_1_begin = converter("dec", "hex", selected_program_3_sched_1_begin);
    selected_program_3_sched_1_end = converter("dec", "hex", selected_program_3_sched_1_end);
    selected_program_3_sched_2_begin = converter("dec", "hex", selected_program_3_sched_2_begin);
    selected_program_3_sched_2_end = converter("dec", "hex", selected_program_3_sched_2_end);
    selected_program_3_sched_3_begin = converter("dec", "hex", selected_program_3_sched_3_begin);
    selected_program_3_sched_3_end = converter("dec", "hex", selected_program_3_sched_3_end);

    if (selected_programs_number === undefined)
        selected_programs_number = "";
    if (selected_program_1_off_on_and_days === undefined)
        selected_program_1_off_on_and_days = "";
    if (selected_program_1_bright === undefined)
        selected_program_1_bright = "";
    if (selected_program_1_speed === undefined)
        selected_program_1_speed = "";
    if (selected_program_1_sched_number === undefined)
        selected_program_1_sched_number = "";
    if (selected_program_1_sched_1_begin === undefined)
        selected_program_1_sched_1_begin = "";
    if (selected_program_1_sched_1_end === undefined)
        selected_program_1_sched_1_end = "";
    if (selected_program_1_sched_2_begin === undefined)
        selected_program_1_sched_2_begin = "";
    if (selected_program_1_sched_2_end === undefined)
        selected_program_1_sched_2_end = "";
    if (selected_program_1_sched_3_begin === undefined)
        selected_program_1_sched_3_begin = "";
    if (selected_program_1_sched_3_end === undefined)
        selected_program_1_sched_3_end = "";
    if (selected_program_2_off_on_and_days === undefined)
        selected_program_2_off_on_and_days = "";
    if (selected_program_2_bright === undefined)
        selected_program_2_bright = "";
    if (selected_program_2_speed === undefined)
        selected_program_2_speed = "";
    if (selected_program_2_sched_number === undefined)
        selected_program_2_sched_number = "";
    if (selected_program_2_sched_1_begin === undefined)
        selected_program_2_sched_1_begin = "";
    if (selected_program_2_sched_1_end === undefined)
        selected_program_2_sched_1_end = "";
    if (selected_program_2_sched_2_begin === undefined)
        selected_program_2_sched_2_begin = "";
    if (selected_program_2_sched_2_end === undefined)
        selected_program_2_sched_2_end = "";
    if (selected_program_2_sched_3_begin === undefined)
        selected_program_2_sched_3_begin = "";
    if (selected_program_2_sched_3_end === undefined)
        selected_program_2_sched_3_end = "";
    if (selected_program_3_off_on_and_days === undefined)
        selected_program_3_off_on_and_days = "";
    if (selected_program_3_bright === undefined)
        selected_program_3_bright = "";
    if (selected_program_3_speed === undefined)
        selected_program_3_speed = "";
    if (selected_program_3_sched_number === undefined)
        selected_program_3_sched_number = "";
    if (selected_program_3_sched_1_begin === undefined)
        selected_program_3_sched_1_begin = "";
    if (selected_program_3_sched_1_end === undefined)
        selected_program_3_sched_1_end = "";
    if (selected_program_3_sched_2_begin === undefined)
        selected_program_3_sched_2_begin = "";
    if (selected_program_3_sched_2_end === undefined)
        selected_program_3_sched_2_end = "";
    if (selected_program_3_sched_3_begin === undefined)
        selected_program_3_sched_3_begin = "";
    if (selected_program_3_sched_3_end === undefined)
        selected_program_3_sched_3_end = "";

    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
    // console.log("selected_program_1_bright = " + selected_program_1_bright);
    // console.log("selected_program_1_speed = " + selected_program_1_speed);
    // console.log("selected_program_1_sched_number = " + selected_program_1_sched_number);
    // console.log("selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
    // console.log("selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
    // console.log("selected_program_2_bright = " + selected_program_2_bright);
    // console.log("selected_program_2_speed = " + selected_program_2_speed);
    // console.log("selected_program_2_sched_number = " + selected_program_2_sched_number);
    // console.log("selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
    // console.log("selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
    // console.log("selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
    // console.log("selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
    // console.log("selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
    // console.log("selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
    // console.log("selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
    // console.log("selected_program_3_bright = " + selected_program_3_bright);
    // console.log("selected_program_3_speed = " + selected_program_3_speed);
    // console.log("selected_program_3_sched_number = " + selected_program_3_sched_number);
    // console.log("selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
    // console.log("selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
    // console.log("selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
    // console.log("selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
    // console.log("selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
    // console.log("selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);

    // Fill Blank

    if (is_void(selected_program_1_sched_2_begin) && !is_void(selected_program_1_sched_2_end))
        selected_program_1_sched_2_begin = "00";
    if (!is_void(selected_program_1_sched_2_begin) && is_void(selected_program_1_sched_2_end))
        selected_program_1_sched_2_end = "00";
    if (is_void(selected_program_1_sched_3_begin) && !is_void(selected_program_1_sched_3_end))
        selected_program_1_sched_3_begin = "00";
    if (!is_void(selected_program_1_sched_3_begin) && is_void(selected_program_1_sched_3_end))
        selected_program_1_sched_3_end = "00";

    // Delete Void Sched

    if (selected_program_1_sched_2_begin === "00" && selected_program_1_sched_2_end === "00") {
        selected_program_1_sched_2_begin = "";
        selected_program_1_sched_2_end = "";
    }
    if (selected_program_1_sched_3_begin === "00" && selected_program_1_sched_3_end === "00") {
        selected_program_1_sched_3_begin = "";
        selected_program_1_sched_3_end = "";
    }

    // console.log("selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
    // console.log("selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
    // console.log("selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);

    // Final

    console.log("off_on bright speeds scheds begin1 endin1 begin2 endin2 begin3 endin3");
    console.log(selected_program_1_off_on_and_days + "     " + selected_program_1_bright + "     " + selected_program_1_speed + "     " + selected_program_1_sched_number + "     " + selected_program_1_sched_1_begin + "     " + selected_program_1_sched_1_end + "     " + selected_program_1_sched_2_begin + "     " + selected_program_1_sched_2_end + "     " + selected_program_1_sched_3_begin + "     " + selected_program_1_sched_3_end + "     ");
    console.log(selected_program_2_off_on_and_days + "     " + selected_program_2_bright + "     " + selected_program_2_speed + "     " + selected_program_2_sched_number + "     " + selected_program_2_sched_1_begin + "     " + selected_program_2_sched_1_end + "     " + selected_program_2_sched_2_begin + "     " + selected_program_2_sched_2_end + "     " + selected_program_2_sched_3_begin + "     " + selected_program_2_sched_3_end + "     ");
    console.log(selected_program_3_off_on_and_days + "     " + selected_program_3_bright + "     " + selected_program_3_speed + "     " + selected_program_3_sched_number + "     " + selected_program_3_sched_1_begin + "     " + selected_program_3_sched_1_end + "     " + selected_program_3_sched_2_begin + "     " + selected_program_3_sched_2_end + "     " + selected_program_3_sched_3_begin + "     " + selected_program_3_sched_3_end + "     ");

    if (old_programs_number !== selected_programs_number) {
        console.log("old_programs_number (" + old_programs_number + ") -----> selected_programs_number (" + selected_programs_number + ")");
    }
    if (old_program_1_off_on_and_days !== selected_program_1_off_on_and_days) {
        console.log("old_program_1_off_on_and_days (" + old_program_1_off_on_and_days + ") -----> selected_program_1_off_on_and_days (" + selected_program_1_off_on_and_days + ")");
    }
    if (old_program_1_bright !== selected_program_1_bright) {
        console.log("old_program_1_bright (" + old_program_1_bright + ") -----> selected_program_1_bright (" + selected_program_1_bright + ")");
    }
    if (old_program_1_speed !== selected_program_1_speed) {
        console.log("old_program_1_speed (" + old_program_1_speed + ") -----> selected_program_1_speed (" + selected_program_1_speed + ")");
    }
    if (old_program_1_sched_number !== selected_program_1_sched_number) {
        console.log("old_program_1_sched_number (" + old_program_1_sched_number + ") -----> selected_program_1_sched_number (" + selected_program_1_sched_number + ")");
    }
    if (old_program_1_sched_1_begin !== selected_program_1_sched_1_begin) {
        console.log("old_program_1_sched_1_begin (" + old_program_1_sched_1_begin + ") -----> selected_program_1_sched_1_begin (" + selected_program_1_sched_1_begin + ")");
    }
    if (old_program_1_sched_1_end !== selected_program_1_sched_1_end) {
        console.log("old_program_1_sched_1_end (" + old_program_1_sched_1_end + ") -----> selected_program_1_sched_1_end (" + selected_program_1_sched_1_end + ")");
    }
    if (old_program_1_sched_2_begin !== selected_program_1_sched_2_begin) {
        console.log("old_program_1_sched_2_begin (" + old_program_1_sched_2_begin + ") -----> selected_program_1_sched_2_begin (" + selected_program_1_sched_2_begin + ")");
    }
    if (old_program_1_sched_2_end !== selected_program_1_sched_2_end) {
        console.log("old_program_1_sched_2_end (" + old_program_1_sched_2_end + ") -----> selected_program_1_sched_2_end (" + selected_program_1_sched_2_end + ")");
    }
    if (old_program_1_sched_3_begin !== selected_program_1_sched_3_begin) {
        console.log("old_program_1_sched_3_begin (" + old_program_1_sched_3_begin + ") -----> selected_program_1_sched_3_begin (" + selected_program_1_sched_3_begin + ")");
    }
    if (old_program_1_sched_3_end !== selected_program_1_sched_3_end) {
        console.log("old_program_1_sched_3_end (" + old_program_1_sched_3_end + ") -----> selected_program_1_sched_3_end (" + selected_program_1_sched_3_end + ")");
    }
    if (old_program_2_off_on_and_days !== selected_program_2_off_on_and_days) {
        console.log("old_program_2_off_on_and_days (" + old_program_2_off_on_and_days + ") -----> selected_program_2_off_on_and_days (" + selected_program_2_off_on_and_days + ")");
    }
    if (old_program_2_bright !== selected_program_2_bright) {
        console.log("old_program_2_bright (" + old_program_2_bright + ") -----> selected_program_2_bright (" + selected_program_2_bright + ")");
    }
    if (old_program_2_speed !== selected_program_2_speed) {
        console.log("old_program_2_speed (" + old_program_2_speed + ") -----> selected_program_2_speed (" + selected_program_2_speed + ")");
    }
    if (old_program_2_sched_number !== selected_program_2_sched_number) {
        console.log("old_program_2_sched_number (" + old_program_2_sched_number + ") -----> selected_program_2_sched_number (" + selected_program_2_sched_number + ")");
    }
    if (old_program_2_sched_1_begin !== selected_program_2_sched_1_begin) {
        console.log("old_program_2_sched_1_begin (" + old_program_2_sched_1_begin + ") -----> selected_program_2_sched_1_begin (" + selected_program_2_sched_1_begin + ")");
    }
    if (old_program_2_sched_1_end !== selected_program_2_sched_1_end) {
        console.log("old_program_2_sched_1_end (" + old_program_2_sched_1_end + ") -----> selected_program_2_sched_1_end (" + selected_program_2_sched_1_end + ")");
    }
    if (old_program_2_sched_2_begin !== selected_program_2_sched_2_begin) {
        console.log("old_program_2_sched_2_begin (" + old_program_2_sched_2_begin + ") -----> selected_program_2_sched_2_begin (" + selected_program_2_sched_2_begin + ")");
    }
    if (old_program_2_sched_2_end !== selected_program_2_sched_2_end) {
        console.log("old_program_2_sched_2_end (" + old_program_2_sched_2_end + ") -----> selected_program_2_sched_2_end (" + selected_program_2_sched_2_end + ")");
    }
    if (old_program_2_sched_3_begin !== selected_program_2_sched_3_begin) {
        console.log("old_program_2_sched_3_begin (" + old_program_2_sched_3_begin + ") -----> selected_program_2_sched_3_begin (" + selected_program_2_sched_3_begin + ")");
    }
    if (old_program_2_sched_3_end !== selected_program_2_sched_3_end) {
        console.log("old_program_2_sched_3_end (" + old_program_2_sched_3_end + ") -----> selected_program_2_sched_3_end (" + selected_program_2_sched_3_end + ")");
    }
    if (old_program_3_off_on_and_days !== selected_program_3_off_on_and_days) {
        console.log("old_program_3_off_on_and_days (" + old_program_3_off_on_and_days + ") -----> selected_program_3_off_on_and_days (" + selected_program_3_off_on_and_days + ")");
    }
    if (old_program_3_bright !== selected_program_3_bright) {
        console.log("old_program_3_bright (" + old_program_3_bright + ") -----> selected_program_3_bright (" + selected_program_3_bright + ")");
    }
    if (old_program_3_speed !== selected_program_3_speed) {
        console.log("old_program_3_speed (" + old_program_3_speed + ") -----> selected_program_3_speed (" + selected_program_3_speed + ")");
    }
    if (old_program_3_sched_number !== selected_program_3_sched_number) {
        console.log("old_program_3_sched_number (" + old_program_3_sched_number + ") -----> selected_program_3_sched_number (" + selected_program_3_sched_number + ")");
    }
    if (old_program_3_sched_1_begin !== selected_program_3_sched_1_begin) {
        console.log("old_program_3_sched_1_begin (" + old_program_3_sched_1_begin + ") -----> selected_program_3_sched_1_begin (" + selected_program_3_sched_1_begin + ")");
    }
    if (old_program_3_sched_1_end !== selected_program_3_sched_1_end) {
        console.log("old_program_3_sched_1_end (" + old_program_3_sched_1_end + ") -----> selected_program_3_sched_1_end (" + selected_program_3_sched_1_end + ")");
    }
    if (old_program_3_sched_2_begin !== selected_program_3_sched_2_begin) {
        console.log("old_program_3_sched_2_begin (" + old_program_3_sched_2_begin + ") -----> selected_program_3_sched_2_begin (" + selected_program_3_sched_2_begin + ")");
    }
    if (old_program_3_sched_2_end !== selected_program_3_sched_2_end) {
        console.log("old_program_3_sched_2_end (" + old_program_3_sched_2_end + ") -----> selected_program_3_sched_2_end (" + selected_program_3_sched_2_end + ")");
    }
    if (old_program_3_sched_3_begin !== selected_program_3_sched_3_begin) {
        console.log("old_program_3_sched_3_begin (" + old_program_3_sched_3_begin + ") -----> selected_program_3_sched_3_begin (" + selected_program_3_sched_3_begin + ")");
    }
    if (old_program_3_sched_3_end !== selected_program_3_sched_3_end) {
        console.log("old_program_3_sched_3_end (" + old_program_3_sched_3_end + ") -----> selected_program_3_sched_3_end (" + selected_program_3_sched_3_end + ")");
    }

    var new_x3_sched = `${selected_programs_number}${selected_program_1_off_on_and_days}${selected_program_1_bright}${selected_program_1_speed}${selected_program_1_sched_number}${selected_program_1_sched_1_begin}${selected_program_1_sched_1_end}${selected_program_1_sched_2_begin}${selected_program_1_sched_2_end}${selected_program_1_sched_3_begin}${selected_program_1_sched_3_end}${selected_program_2_off_on_and_days}${selected_program_2_bright}${selected_program_2_speed}${selected_program_2_sched_number}${selected_program_2_sched_1_begin}${selected_program_2_sched_1_end}${selected_program_2_sched_2_begin}${selected_program_2_sched_2_end}${selected_program_2_sched_3_begin}${selected_program_2_sched_3_end}${selected_program_3_off_on_and_days}${selected_program_3_bright}${selected_program_3_speed}${selected_program_3_sched_number}${selected_program_3_sched_1_begin}${selected_program_3_sched_1_end}${selected_program_3_sched_2_begin}${selected_program_3_sched_2_end}${selected_program_3_sched_3_begin}${selected_program_3_sched_3_end}`;
    console.log("new_x3_sched = " + new_x3_sched);

    var ok = check_sched_for_errors(selected_programs_number, selected_program_1_off_on_and_days, selected_program_1_bright, selected_program_1_speed, selected_program_1_sched_number, selected_program_1_sched_1_begin, selected_program_1_sched_1_end, selected_program_1_sched_2_begin, selected_program_1_sched_2_end, selected_program_1_sched_3_begin, selected_program_1_sched_3_end, selected_program_2_off_on_and_days, selected_program_2_bright, selected_program_2_speed, selected_program_2_sched_number, selected_program_2_sched_1_begin, selected_program_2_sched_1_end, selected_program_2_sched_2_begin, selected_program_2_sched_2_end, selected_program_2_sched_3_begin, selected_program_2_sched_3_end, selected_program_3_off_on_and_days, selected_program_3_bright, selected_program_3_speed, selected_program_3_sched_number, selected_program_3_sched_1_begin, selected_program_3_sched_1_end, selected_program_3_sched_2_begin, selected_program_3_sched_2_end, selected_program_3_sched_3_begin, selected_program_3_sched_3_end);

    set_sched_value_save = new_x3_sched;
    return new_x3_sched;
//    if (ok)
//        quick_send("s44_w", "x3_sched", "info", "desired", new_x3_sched);

    // quick_send("s44_w", "x3_sched", "info", "desired", new_x3_sched);
    // quick_send("s44_w", "x3_sched", "info", "desired", "02 FE 64 64 03 04 08 7E 64 64 03 04 08 03");
    // hard reset : quick_send("s44_w", "x3_sched", "info", "desired", "027E64640104887E6464010488");
    // 02 7E 64 64 01 04 10 7E 64 64 01 04 88
    // 02 7E 64 64 01 04 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 09 0F 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 09 10 0F 7E 64 64 01 04
    // 02 7E 64 64 03 04 08 0F 7E 64 64 01 04
    // 02 7E 64 64 03 04 08 0C 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 0C 17 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 0A 0D 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 0A 00 00 7E 64 64 01 04 08
    // 02 7E 64 64 01 04 08 00 00 7E 64 64 01 04 08
    // 02 7E 64 64 02 04 08 0C 00 00 00 7E 64 64 01
}

var set_light_m_sched_value_save = "";

function set_light_m_sched_value(name, value) {

    // Récupération des valeurs de basesselected_program_1_sched_2_begin

    if (set_light_m_sched_value_save === "") {
        var light_sched_m = get_value_from_position(eq_modal, "light_sched_m");
    } else {
        var light_sched_m = set_light_m_sched_value_save;
    }
    console.log("light_sched_m = " + light_sched_m);

    var selected_programs_number = get_sched_value(light_sched_m, "programs_number");
    var selected_program_1_off_on_and_days = get_sched_value(light_sched_m, "program_1_off_on_and_days");

    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);

    selected_programs_number = fix_end_dec(selected_programs_number);
    selected_program_1_off_on_and_days = fix_end_dec(selected_program_1_off_on_and_days);

    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);

    var old_programs_number = converter("dec", "hex", selected_programs_number);
    var old_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);

    if (old_programs_number === undefined)
        old_programs_number = "";
    if (old_program_1_off_on_and_days === undefined)
        old_program_1_off_on_and_days = "";

    if ("prog_1_sched_1_begin" === name)
        selected_programs_number = value;
    else if ("prog_1_sched_1_end" === name)
        selected_program_1_off_on_and_days = value;

    selected_programs_number = converter("dec", "hex", selected_programs_number);
    selected_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);

    if (selected_programs_number === undefined)
        selected_programs_number = "";
    if (selected_program_1_off_on_and_days === undefined)
        selected_program_1_off_on_and_days = "";

    // Final

    var new_x3_sched = `${selected_programs_number}${selected_program_1_off_on_and_days}`;
    console.log("new_x3_sched = " + new_x3_sched);

    set_light_m_sched_value_save = new_x3_sched;
    console.log("set_light_m_sched_value_save = " + set_light_m_sched_value_save);

    return new_x3_sched;
}

var set_filtration_m_sched_value_save = "";

function set_filtration_m_sched_value(name, value) {

    // Récupération de la valeur de base

    if (set_filtration_m_sched_value_save === "") {
        var filtration_sched_m = get_value_from_position(eq_modal, "filt_sched_m");
    } else {
        var filtration_sched_m = set_filtration_m_sched_value_save;
    }
    console.log("filtration_sched_m = " + filtration_sched_m);

    // 02 04 06 08 00 0A

    var iterator = 0;
    var selected_begin_1 = filtration_sched_m[iterator + 0] + filtration_sched_m[iterator + 1];
    iterator = iterator + 2;
    var selected_end_1 = filtration_sched_m[iterator + 0] + filtration_sched_m[iterator + 1];
    iterator = iterator + 2;
    var selected_begin_2 = filtration_sched_m[iterator + 0] + filtration_sched_m[iterator + 1];
    iterator = iterator + 2;
    var selected_end_2 = filtration_sched_m[iterator + 0] + filtration_sched_m[iterator + 1];
    iterator = iterator + 2;
    var selected_begin_3 = filtration_sched_m[iterator + 0] + filtration_sched_m[iterator + 1];
    iterator = iterator + 2;
    var selected_end_3 = filtration_sched_m[iterator + 0] + filtration_sched_m[iterator + 1];

    console.log("selected_begin_1 = " + selected_begin_1);
    console.log("selected_end_1 = " + selected_end_1);
    console.log("selected_begin_2 = " + selected_begin_2);
    console.log("selected_end_2 = " + selected_end_2);
    console.log("selected_begin_3 = " + selected_begin_3);
    console.log("selected_end_3 = " + selected_end_3);

    selected_begin_1 = fix_end_dec(selected_begin_1);
    selected_end_1 = fix_end_dec(selected_end_1);
    selected_begin_2 = fix_end_dec(selected_begin_2);
    selected_end_2 = fix_end_dec(selected_end_2);
    selected_begin_3 = fix_end_dec(selected_begin_3);
    selected_end_3 = fix_end_dec(selected_end_3);

    console.log("selected_begin_1 = " + selected_begin_1);
    console.log("selected_end_1 = " + selected_end_1);
    console.log("selected_begin_2 = " + selected_begin_2);
    console.log("selected_end_2 = " + selected_end_2);
    console.log("selected_begin_3 = " + selected_begin_3);
    console.log("selected_end_3 = " + selected_end_3);

    var old_begin_1 = converter("dec", "hex", selected_begin_1);
    var old_end_1 = converter("dec", "hex", selected_end_1);
    var old_begin_2 = converter("dec", "hex", selected_begin_2);
    var old_end_2 = converter("dec", "hex", selected_end_2);
    var old_begin_3 = converter("dec", "hex", selected_begin_3);
    var old_end_3 = converter("dec", "hex", selected_end_3);

    if (old_begin_1 === undefined || old_begin_1 === "FF")
        old_begin_1 = "FF";
    if (old_end_1 === undefined || old_end_1 === "FF")
        old_end_1 = "FF";
    if (old_begin_2 === undefined || old_begin_2 === "FF")
        old_begin_2 = "FF";
    if (old_end_2 === undefined || old_end_2 === "FF")
        old_end_2 = "FF";
    if (old_begin_3 === undefined || old_begin_3 === "FF")
        old_begin_3 = "FF";
    if (old_end_3 === undefined || old_end_3 === "FF")
        old_end_3 = "FF";

    if ("prog_1_sched_1_begin" === name)
        selected_begin_1 = value;
    else if ("prog_1_sched_1_end" === name)
        selected_end_1 = value;
    if ("prog_1_sched_2_begin" === name)
        selected_begin_2 = value;
    else if ("prog_1_sched_2_end" === name)
        selected_end_2 = value;
    if ("prog_1_sched_3_begin" === name)
        selected_begin_3 = value;
    else if ("prog_1_sched_3_end" === name)
        selected_end_3 = value;

    selected_begin_1 = converter("dec", "hex", selected_begin_1);
    selected_end_1 = converter("dec", "hex", selected_end_1);
    selected_begin_2 = converter("dec", "hex", selected_begin_2);
    selected_end_2 = converter("dec", "hex", selected_end_2);
    selected_begin_3 = converter("dec", "hex", selected_begin_3);
    selected_end_3 = converter("dec", "hex", selected_end_3);

    if (selected_begin_1 === undefined || selected_begin_1 === "FF")
        selected_begin_1 = "";
    if (selected_end_1 === undefined || selected_end_1 === "FF")
        selected_end_1 = "";
    if (selected_begin_2 === undefined || selected_begin_2 === "FF")
        selected_begin_2 = "";
    if (selected_end_2 === undefined || selected_end_2 === "FF")
        selected_end_2 = "";
    if (selected_begin_3 === undefined || selected_begin_3 === "FF")
        selected_begin_3 = "";
    if (selected_end_3 === undefined || selected_end_3 === "FF")
        selected_end_3 = "";

    // Final

    var new_x3_sched = `${selected_begin_1}${selected_end_1}${selected_begin_2}${selected_end_2}${selected_begin_3}${selected_end_3}`;
    console.log("new_x3_sched = " + new_x3_sched);

    set_filtration_m_sched_value_save = new_x3_sched;
    console.log("set_filtration_m_sched_value_save = " + set_filtration_m_sched_value_save);

    return new_x3_sched;
}

var set_auxiliary_1_sched_value_save = "";

function set_auxiliary_1_sched_value(name, value) {

    // Récupération des valeurs de basesselected_program_1_sched_2_begin

    if (set_auxiliary_1_sched_value_save === "") {
        var light_sched_m = get_value_from_position(eq_modal, "light_sched_m");
    } else {
        var light_sched_m = set_auxiliary_1_sched_value_save;
    }
    console.log("light_sched_m = " + light_sched_m);

    var selected_programs_number = get_sched_value(light_sched_m, "programs_number");
    var selected_program_1_off_on_and_days = get_sched_value(light_sched_m, "program_1_off_on_and_days");

    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);

    selected_programs_number = fix_end_dec(selected_programs_number);
    selected_program_1_off_on_and_days = fix_end_dec(selected_program_1_off_on_and_days);

    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);

    var old_programs_number = converter("dec", "hex", selected_programs_number);
    var old_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);

    if (old_programs_number === undefined)
        old_programs_number = "";
    if (old_program_1_off_on_and_days === undefined)
        old_program_1_off_on_and_days = "";

    if ("prog_1_sched_1_begin" === name)
        selected_programs_number = value;
    else if ("prog_1_sched_1_end" === name)
        selected_program_1_off_on_and_days = value;

    selected_programs_number = converter("dec", "hex", selected_programs_number);
    selected_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);

    if (selected_programs_number === undefined)
        selected_programs_number = "";
    if (selected_program_1_off_on_and_days === undefined)
        selected_program_1_off_on_and_days = "";

    // Final

    var new_x3_sched = `${selected_programs_number}${selected_program_1_off_on_and_days}`;
    console.log("new_x3_sched = " + new_x3_sched);

    set_auxiliary_1_sched_value_save = new_x3_sched;
    console.log("set_auxiliary_1_sched_value_save = " + set_auxiliary_1_sched_value_save);

    return new_x3_sched;
}

var set_auxiliary_2_sched_value_save = "";

function set_auxiliary_2_sched_value(name, value) {

    // Récupération des valeurs de basesselected_program_1_sched_2_begin

    if (set_auxiliary_2_sched_value_save === "") {
        var light_sched_m = get_value_from_position(eq_modal, "light_sched_m");
    } else {
        var light_sched_m = set_auxiliary_2_sched_value_save;
    }
    console.log("light_sched_m = " + light_sched_m);

    var selected_programs_number = get_sched_value(light_sched_m, "programs_number");
    var selected_program_1_off_on_and_days = get_sched_value(light_sched_m, "program_1_off_on_and_days");

    // console.log("selected_programs_number = " + selected_programs_number);
    // console.log("selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);

    selected_programs_number = fix_end_dec(selected_programs_number);
    selected_program_1_off_on_and_days = fix_end_dec(selected_program_1_off_on_and_days);

    // console.log("selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
    // console.log("selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);

    var old_programs_number = converter("dec", "hex", selected_programs_number);
    var old_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);

    if (old_programs_number === undefined)
        old_programs_number = "";
    if (old_program_1_off_on_and_days === undefined)
        old_program_1_off_on_and_days = "";

    if ("prog_1_sched_1_begin" === name)
        selected_programs_number = value;
    else if ("prog_1_sched_1_end" === name)
        selected_program_1_off_on_and_days = value;

    selected_programs_number = converter("dec", "hex", selected_programs_number);
    selected_program_1_off_on_and_days = converter("dec", "hex", selected_program_1_off_on_and_days);

    if (selected_programs_number === undefined)
        selected_programs_number = "";
    if (selected_program_1_off_on_and_days === undefined)
        selected_program_1_off_on_and_days = "";

    // Final

    var new_x3_sched = `${selected_programs_number}${selected_program_1_off_on_and_days}`;
    console.log("new_x3_sched = " + new_x3_sched);

    set_auxiliary_2_sched_value_save = new_x3_sched;
    console.log("set_auxiliary_2_sched_value_save = " + set_auxiliary_2_sched_value_save);

    return new_x3_sched;
}

function fix_end_dec(value) {
    value = parseInt(value);
    if (value < 0)
        return value + 128;
    return value;
}

function check_sched_for_errors(selected_programs_number, selected_program_1_off_on_and_days, selected_program_1_bright, selected_program_1_speed, selected_program_1_sched_number, selected_program_1_sched_1_begin, selected_program_1_sched_1_end, selected_program_1_sched_2_begin, selected_program_1_sched_2_end, selected_program_1_sched_3_begin, selected_program_1_sched_3_end, selected_program_2_off_on_and_days, selected_program_2_bright, selected_program_2_speed, selected_program_2_sched_number, selected_program_2_sched_1_begin, selected_program_2_sched_1_end, selected_program_2_sched_2_begin, selected_program_2_sched_2_end, selected_program_2_sched_3_begin, selected_program_2_sched_3_end, selected_program_3_off_on_and_days, selected_program_3_bright, selected_program_3_speed, selected_program_3_sched_number, selected_program_3_sched_1_begin, selected_program_3_sched_1_end, selected_program_3_sched_2_begin, selected_program_3_sched_2_end, selected_program_3_sched_3_begin, selected_program_3_sched_3_end) {

    if (selected_programs_number !== "01" && selected_programs_number !== "02" && selected_programs_number !== "03") {
        console.log("ERROR SCHED : selected_programs_number = " + selected_programs_number);
        return false;
    }
    if (is_void(selected_program_1_off_on_and_days)) {
        console.log("ERROR SCHED : selected_program_1_off_on_and_days = " + selected_program_1_off_on_and_days);
        return false;
    }
    if (converter("hex", "dec", selected_program_1_bright) > 100) {
        console.log("ERROR SCHED : selected_program_1_bright = " + selected_program_1_bright);
        return false;
    }
    if (converter("hex", "dec", selected_program_1_speed) > 150) {
        console.log("ERROR SCHED : selected_program_1_speed = " + selected_program_1_speed);
        return false;
    }
    if (selected_program_1_sched_number !== "01" && selected_program_1_sched_number !== "02" && selected_program_1_sched_number !== "03") {
        console.log("ERROR SCHED : selected_program_1_sched_number = " + selected_program_1_sched_number);
        return false;
    }
    if (is_void(selected_program_1_sched_1_begin)) {
        console.log("ERROR SCHED : selected_program_1_sched_1_begin = " + selected_program_1_sched_1_begin);
        return false;
    }
    if (is_void(selected_program_1_sched_1_end)) {
        console.log("ERROR SCHED : selected_program_1_sched_1_end = " + selected_program_1_sched_1_end);
        return false;
    }
    if (is_void(selected_program_1_sched_2_begin) && selected_program_1_sched_number === "02" || selected_program_1_sched_number === "03") {
        console.log("ERROR SCHED : selected_program_1_sched_2_begin = " + selected_program_1_sched_2_begin);
        return false;
    }
    if (is_void(selected_program_1_sched_2_end) && !is_void(selected_program_1_sched_2_begin)) {
        console.log("ERROR SCHED : selected_program_1_sched_2_end = " + selected_program_1_sched_2_end);
        return false;
    }
    if (selected_program_1_sched_3_begin && selected_program_1_sched_number !== "03") {
        console.log("ERROR SCHED : selected_program_1_sched_3_begin = " + selected_program_1_sched_3_begin);
        return false;
    }
    if (is_void(selected_program_1_sched_3_end) && !is_void(selected_program_1_sched_3_begin)) {
        console.log("ERROR SCHED : selected_program_1_sched_3_end = " + selected_program_1_sched_3_end);
        return false;
    }
    if (selected_programs_number === "02" || selected_programs_number === "03") {
        if (is_void(selected_program_2_off_on_and_days)) {
            console.log("ERROR SCHED : selected_program_2_off_on_and_days = " + selected_program_2_off_on_and_days);
            return false;
        }
        if (converter("hex", "dec", selected_program_2_bright) > 100) {
            console.log("ERROR SCHED : selected_program_2_bright = " + selected_program_2_bright);
            return false;
        }
        if (converter("hex", "dec", selected_program_2_speed) > 150) {
            console.log("ERROR SCHED : selected_program_2_speed = " + selected_program_2_speed);
            return false;
        }
        if (selected_program_2_sched_number !== "01" && selected_program_2_sched_number !== "02" && selected_program_2_sched_number !== "03") {
            console.log("ERROR SCHED : selected_program_2_sched_number = " + selected_program_2_sched_number);
            console.log("ERROR SCHED : selected_program_2_sched_number = " + selected_program_2_sched_number);
            return false;
        }
        if (is_void(selected_program_2_sched_1_begin)) {
            console.log("ERROR SCHED : selected_program_2_sched_1_begin = " + selected_program_2_sched_1_begin);
            return false;
        }
        if (is_void(selected_program_2_sched_1_end)) {
            console.log("ERROR SCHED : selected_program_2_sched_1_end = " + selected_program_2_sched_1_end);
            return false;
        }
        if (is_void(selected_program_2_sched_2_begin) && selected_program_2_sched_number === "02" || selected_program_2_sched_number === "03") {
            console.log("ERROR SCHED : selected_program_2_sched_2_begin = " + selected_program_2_sched_2_begin);
            return false;
        }
        if (is_void(selected_program_2_sched_2_end) && !is_void(selected_program_2_sched_2_begin)) {
            console.log("ERROR SCHED : selected_program_2_sched_2_end = " + selected_program_2_sched_2_end);
            return false;
        }
        if (selected_program_2_sched_3_begin && selected_program_2_sched_number !== "03") {
            console.log("ERROR SCHED : selected_program_2_sched_3_begin = " + selected_program_2_sched_3_begin);
            return false;
        }
        if (is_void(selected_program_2_sched_3_end) && !is_void(selected_program_2_sched_3_begin)) {
            console.log("ERROR SCHED : selected_program_2_sched_3_end = " + selected_program_2_sched_3_end);
            return false;
        }
    }
    if (selected_programs_number === "03") {
        if (is_void(selected_program_3_off_on_and_days)) {
            console.log("ERROR SCHED : selected_program_3_off_on_and_days = " + selected_program_3_off_on_and_days);
            return false;
        }
        if (converter("hex", "dec", selected_program_3_bright) > 100) {
            console.log("ERROR SCHED : selected_program_3_bright = " + selected_program_3_bright);
            return false;
        }
        if (converter("hex", "dec", selected_program_3_speed) > 150) {
            console.log("ERROR SCHED : selected_program_3_speed = " + selected_program_3_speed);
            return false;
        }
        if (selected_program_3_sched_number !== "01" && selected_program_3_sched_number !== "02" && selected_program_3_sched_number !== "03") {
            console.log("ERROR SCHED : selected_program_3_sched_number = " + selected_program_3_sched_number);
            return false;
        }
        if (is_void(selected_program_3_sched_1_begin)) {
            console.log("ERROR SCHED : selected_program_3_sched_1_begin = " + selected_program_3_sched_1_begin);
            return false;
        }
        if (is_void(selected_program_3_sched_1_end)) {
            console.log("ERROR SCHED : selected_program_3_sched_1_end = " + selected_program_3_sched_1_end);
            return false;
        }
        if (is_void(selected_program_3_sched_2_begin) && selected_program_3_sched_number === "02" || selected_program_3_sched_number === "03") {
            console.log("ERROR SCHED : selected_program_3_sched_2_begin = " + selected_program_3_sched_2_begin);
            return false;
        }
        if (is_void(selected_program_3_sched_2_end) && !is_void(selected_program_3_sched_2_begin)) {
            console.log("ERROR SCHED : selected_program_3_sched_2_end = " + selected_program_3_sched_2_end);
            return false;
        }
        if (selected_program_3_sched_3_begin && selected_program_3_sched_number !== "03") {
            console.log("ERROR SCHED : selected_program_3_sched_3_begin = " + selected_program_3_sched_3_begin);
            return false;
        }
        if (is_void(selected_program_3_sched_3_end) && !is_void(selected_program_3_sched_3_begin)) {
            console.log("ERROR SCHED : selected_program_3_sched_3_end = " + selected_program_3_sched_3_end);
            return false;
        }
    }
    return true;
}

function is_void(value) {
    if (value === 0)
        return true;
    if (value === "0")
        return true;
    if (value === "")
        return true;
    if (value === undefined)
        return true;
}

function reverse_bool(bool) {
    if (bool === false)
        return true;
    if (bool === true)
        return false;
    if (bool === 0)
        return 1;
    if (bool === 1)
        return 0;
    if (bool === "0")
        return "1";
    if (bool === "1")
        return "0";
}

function test_input(slider) {
    slider.onabort = function () {
        console.log("onabort");
    };
    slider.onafterprint = function () {
        console.log("onafterprint");
    };
    slider.onanimationend = function () {
        console.log("onanimationend");
    };
    slider.onanimationiteration = function () {
        console.log("onanimationiteration");
    };
    slider.onanimationstart = function () {
        console.log("onanimationstart");
    };
    slider.onbeforeprint = function () {
        console.log("onbeforeprint");
    };
    slider.onbeforeunload = function () {
        console.log("onbeforeunload");
    };
    slider.onblur = function () {
        console.log("onblur");
    };
    slider.oncanplay = function () {
        console.log("oncanplay");
    };
    slider.oncanplaythrough = function () {
        console.log("oncanplaythrough");
    };
    slider.onchange = function () {
        console.log("onchange");
    };
    slider.onclick = function () {
        console.log("onclick");
    };
    slider.oncontextmenu = function () {
        console.log("oncontextmenu");
    };
    slider.oncopy = function () {
        console.log("oncopy");
    };
    slider.oncut = function () {
        console.log("oncut");
    };
    slider.ondblclick = function () {
        console.log("ondblclick");
    };
    slider.ondrag = function () {
        console.log("ondrag");
    };
    slider.ondragend = function () {
        console.log("ondragend");
    };
    slider.ondragenter = function () {
        console.log("ondragenter");
    };
    slider.ondragleave = function () {
        console.log("ondragleave");
    };
    slider.ondragover = function () {
        console.log("ondragover");
    };
    slider.ondragstart = function () {
        console.log("ondragstart");
    };
    slider.ondrop = function () {
        console.log("ondrop");
    };
    slider.ondurationchange = function () {
        console.log("ondurationchange");
    };
    slider.onended = function () {
        console.log("onended");
    };
    slider.onerror = function () {
        console.log("onerror");
    };
    slider.onfocus = function () {
        console.log("onfocus");
    };
    slider.onfocusin = function () {
        console.log("onfocusin");
    };
    slider.onfocusout = function () {
        console.log("onfocusout");
    };
    slider.onfullscreenchange = function () {
        console.log("onfullscreenchange");
    };
    slider.onfullscreenerror = function () {
        console.log("onfullscreenerror");
    };
    slider.onhashchange = function () {
        console.log("onhashchange");
    };
    slider.oninput = function () {
        console.log("oninput");
    };
    slider.oninvalid = function () {
        console.log("oninvalid");
    };
    slider.onkeydown = function () {
        console.log("onkeydown");
    };
    slider.onkeypress = function () {
        console.log("onkeypress");
    };
    slider.onkeyup = function () {
        console.log("onkeyup");
    };
    slider.onload = function () {
        console.log("onload");
    };
    slider.onloadeddata = function () {
        console.log("onloadeddata");
    };
    slider.onloadedmetadata = function () {
        console.log("onloadedmetadata");
    };
    slider.onloadstart = function () {
        console.log("onloadstart");
    };
    slider.onmessage = function () {
        console.log("onmessage");
    };
    slider.onmousedown = function () {
        console.log("onmousedown");
    };
    slider.onmouseenter = function () {
        console.log("onmouseenter");
    };
    slider.onmouseleave = function () {
        console.log("onmouseleave");
    };
    slider.onmousemove = function () {
        console.log("onmousemove");
    };
    slider.onmouseover = function () {
        console.log("onmouseover");
    };
    slider.onmouseout = function () {
        console.log("onmouseout");
    };
    slider.onmouseup = function () {
        console.log("onmouseup");
    };
    slider.onoffline = function () {
        console.log("onoffline");
    };
    slider.ononline = function () {
        console.log("ononline");
    };
    slider.onopen = function () {
        console.log("onopen");
    };
    slider.onpagehide = function () {
        console.log("onpagehide");
    };
    slider.onpageshow = function () {
        console.log("onpageshow");
    };
    slider.onpaste = function () {
        console.log("onpaste");
    };
    slider.onpause = function () {
        console.log("onpause");
    };
    slider.onplay = function () {
        console.log("onplay");
    };
    slider.onplaying = function () {
        console.log("onplaying");
    };
    slider.onprogress = function () {
        console.log("onprogress");
    };
    slider.onratechange = function () {
        console.log("onratechange");
    };
    slider.onresize = function () {
        console.log("onresize");
    };
    slider.onreset = function () {
        console.log("onreset");
    };
    slider.onscroll = function () {
        console.log("onscroll");
    };
    slider.onsearch = function () {
        console.log("onsearch");
    };
    slider.onseeked = function () {
        console.log("onseeked");
    };
    slider.onseeking = function () {
        console.log("onseeking");
    };
    slider.onselect = function () {
        console.log("onselect");
    };
    slider.onshow = function () {
        console.log("onshow");
    };
    slider.onstalled = function () {
        console.log("onstalled");
    };
    slider.onsubmit = function () {
        console.log("onsubmit");
    };
    slider.onsuspend = function () {
        console.log("onsuspend");
    };
    slider.ontimeupdate = function () {
        console.log("ontimeupdate");
    };
    slider.ontoggle = function () {
        console.log("ontoggle");
    };
    slider.ontouchcancel = function () {
        console.log("ontouchcancel");
    };
    slider.ontouchend = function () {
        console.log("ontouchend");
    };
    slider.ontouchmove = function () {
        console.log("ontouchmove");
    };
    slider.ontouchstart = function () {
        console.log("ontouchstart");
    };
    slider.ontransitionend = function () {
        console.log("ontransitionend");
    };
    slider.onunload = function () {
        console.log("onunload");
    };
    slider.onvolumechange = function () {
        console.log("onvolumechange");
    };
    slider.onwaiting = function () {
        console.log("onwaiting");
    };
    slider.onwheel = function () {
        console.log("onwheel");
    };
}