<link rel="stylesheet" href="/plugins/vigipool/core/template/css/modal_light.css">

<?php
/* This file is part of Jeedom.
 *
 * Jeedom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Jeedom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <?php create_ui_options("vigipool_modal_light"); ?>

    <?php create_ui_on_off("vigipool_modal_light"); ?>

    <?php create_ui_tild_light("vigipool_modal_light") ?>

    <?php create_ui_timer("vigipool_modal_light") ?>
    <br/>
    <?php create_slider("light_timer", 0, 24 * 4); ?>
    <br/>
    <button type="button" class="transition btn btn-light vigipool_modal_light_button_timer_start"><?php get_text("start_timer"); ?></button>

    <?php create_ui_bright("vigipool_modal_light"); ?>

    <?php create_ui_speed("vigipool_modal_light"); ?>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program("vigipool_modal_light", 1); ?>
    <?php create_program("vigipool_modal_light", 2); ?>

    <h3>Historique</h3>

    <button type="button" class="transition btn btn-light vigipool_modal_light_button_code"><?php get_text("history"); ?></button>

</div>


<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    create_ui_options_click("vigipool_modal_light");

    // Lights And Sequences

    quick_assign('.vigipool_modal_light_button_off', "u8_w", "light_state", "info", "desired", "0");
    quick_assign('.vigipool_modal_light_button_on', "u8_w", "light_state", "info", "desired", "1");

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

    quick_assign('.vigipool_modal_light_warm_button', "u8_w", "light_code", "info", "desired", id_warm);
    quick_assign('.vigipool_modal_light_cold_button', "u8_w", "light_code", "info", "desired", id_cold);
    quick_assign('.vigipool_modal_light_blue_button', "u8_w", "light_code", "info", "desired", id_blue);
    quick_assign('.vigipool_modal_light_lagoon_button', "u8_w", "light_code", "info", "desired", id_lagoon);
    quick_assign('.vigipool_modal_light_cyan_button', "u8_w", "light_code", "info", "desired", id_cyan);
    quick_assign('.vigipool_modal_light_green_button', "u8_w", "light_code", "info", "desired", id_green);
    quick_assign('.vigipool_modal_light_purple_button', "u8_w", "light_code", "info", "desired", id_purple);
    quick_assign('.vigipool_modal_light_magenta_button', "u8_w", "light_code", "info", "desired", id_magenta);
    quick_assign('.vigipool_modal_light_pink_button', "u8_w", "light_code", "info", "desired", id_pink);
    quick_assign('.vigipool_modal_light_red_button', "u8_w", "light_code", "info", "desired", id_red);
    quick_assign('.vigipool_modal_light_orange_button', "u8_w", "light_code", "info", "desired", id_orange);

    quick_assign('.vigipool_modal_light_favorite_button', "u8_w", "light_code", "info", "desired", id_favorite);

    quick_assign('.vigipool_modal_light_gradiant_button', "u8_w", "light_code", "info", "desired", id_gradiant);
    quick_assign('.vigipool_modal_light_rainbow_button', "u8_w", "light_code", "info", "desired", id_rainbow);
    quick_assign('.vigipool_modal_light_parade_button', "u8_w", "light_code", "info", "desired", id_parade);
    quick_assign('.vigipool_modal_light_techno_button', "u8_w", "light_code", "info", "desired", id_techno);
    quick_assign('.vigipool_modal_light_horizon_button', "u8_w", "light_code", "info", "desired", id_horizon);
    quick_assign('.vigipool_modal_light_random_button', "u8_w", "light_code", "info", "desired", id_random);
    quick_assign('.vigipool_modal_light_magical_button', "u8_w", "light_code", "info", "desired", id_magical);

    quick_assign('.vigipool_modal_light_bright > th:nth-child(2) > p', "u8_w", "light_bright", "info", "desired", 0);
    quick_assign('.vigipool_modal_light_bright > th:nth-child(3) > p', "u8_w", "light_bright", "info", "desired", 1);
    quick_assign('.vigipool_modal_light_bright > th:nth-child(4) > p', "u8_w", "light_bright", "info", "desired", 2);
    quick_assign('.vigipool_modal_light_bright > th:nth-child(5) > p', "u8_w", "light_bright", "info", "desired", 3);

    quick_assign('.vigipool_modal_light_speed > th:nth-child(2) > p', "u8_w", "light_speed", "info", "desired", 0);
    quick_assign('.vigipool_modal_light_speed > th:nth-child(3) > p', "u8_w", "light_speed", "info", "desired", 1);
    quick_assign('.vigipool_modal_light_speed > th:nth-child(4) > p', "u8_w", "light_speed", "info", "desired", 2);

    // Timer

    var light_state = get_value_from_position(eq_modal, "light_state");
    if (light_state === 3) {
        $(".vigipool_modal_light_button_timer_off").removeClass("btn-primary");
        $(".vigipool_modal_light_button_timer_on").addClass("btn-primary");

        var light_state = get_value_from_position(eq_modal, "light_state");
        if (light_state === 1) {
            $("#light_timer").show();
            $("#mylight_timer").show();
            $(".vigipool_modal_light_button_timer_start").show();
        } else {
            alert(get_text("light_banner_timer_on_light_off_description"));
        }
    } else {
        $(".vigipool_modal_light_button_timer_off").addClass("btn-primary");
        $(".vigipool_modal_light_button_timer_on").removeClass("btn-primary");

        $("#light_timer").hide();
        $("#mylight_timer").hide();
        $(".vigipool_modal_light_button_timer_start").hide();
    }

    $(".vigipool_modal_light_button_timer_off").click(function () {
        $(".vigipool_modal_light_button_timer_off").addClass("btn-primary");
        $(".vigipool_modal_light_button_timer_on").removeClass("btn-primary");

        $("#light_timer").hide();
        $("#mylight_timer").hide();
        $(".vigipool_modal_light_button_timer_start").hide();
    });
    $(".vigipool_modal_light_button_timer_on").click(function () {
        $(".vigipool_modal_light_button_timer_off").removeClass("btn-primary");
        $(".vigipool_modal_light_button_timer_on").addClass("btn-primary");

        var light_state = get_value_from_position(eq_modal, "light_state");
        if (light_state === 1) {
            $("#light_timer").show();
            $("#mylight_timer").show();
            $(".vigipool_modal_light_button_timer_start").show();
        } else {
            alert(get_text("light_banner_timer_on_light_off_description"));
        }
    });

    var light_timer = get_value_from_position(eq_modal, "light_timer");
    light_timer = convert_light_timer_to_slider(light_timer);

    var id = "light_timer";
    var init_value = light_timer;
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u32_w";
    var variable = "light_timer";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    $('.vigipool_modal_light_button_timer_start').click(function () {
//        quick_send("u32_w", "light_timer", "info", "desired", convert_time_4_to_timer($("#mylight_timer").value()));
        quick_send("u8_w", "light_state", "info", "desired", 3);
    });

    // History

    $('.vigipool_modal_light_button_code').click(function () {
        show_history("light_state", eq_modal);
    });

    // Sched

    access_modal(".vigipool_modal_light_1_off_on", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_lundi", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_mardi", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_mercredi", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_jeudi", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_vendredi", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_samedi", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_dimanche", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_color", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_color_circle", "vigipool_modal_light_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_1_duration", "vigipool_modal_light_prog_1", eq_modal);

    access_modal(".vigipool_modal_light_2_off_on", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_lundi", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_mardi", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_mercredi", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_jeudi", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_vendredi", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_samedi", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_dimanche", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_color", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_color_circle", "vigipool_modal_light_prog_2", eq_modal);
    access_modal(".vigipool_modal_light_2_duration", "vigipool_modal_light_prog_2", eq_modal);

</script>
