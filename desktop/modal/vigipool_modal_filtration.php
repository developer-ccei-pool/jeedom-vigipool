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

<div class="vigipool_ui_text_modal">

    <h2 class="vigipool_modal_title"></h2>

    <?php create_ui_options("vigipool_modal_filtration"); ?>

    <h3>Filtration</h3>

    <p class="vigipool_tild_modal_filtration_reason"></p>

    <button type="button" class="btn btn-filt vigipool_tild_modal_filtration_button_off"><?php get_text("off"); ?></button>
    <button type="button" class="btn btn-filt vigipool_tild_modal_filtration_button_on"><?php get_text("on"); ?></button>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program("vigipool_modal_filtration", 1); ?>
    <?php create_program("vigipool_modal_filtration", 2); ?>

    <h3><?php get_text("history_title"); ?></h3>

    <button type="button" class="btn btn-filt vigipool_tild_modal_filtration_button_filtration_state"><?php get_text("history"); ?></button>
</div>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    create_ui_options_click("vigipool_modal_filtration");

    quick_assign('.vigipool_tild_modal_filtration_button_off', "u8_w", "filt_state", "info", "desired", "0");
    quick_assign('.vigipool_tild_modal_filtration_button_on', "u8_w", "filt_state", "info", "desired", "1");

    $('.vigipool_tild_modal_filtration_button_off').click(function () {
        all_mqtt_data = Array();
    });
    $('.vigipool_tild_modal_filtration_button_on').click(function () {
        all_mqtt_data = Array();
    });

    $('.vigipool_tild_modal_filtration_button_filtration_state').click(function () {
        show_history("flow_on", eq_modal);
    });

    access_modal(".vigipool_modal_filtration_1_off_on", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_lundi", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_mardi", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_mercredi", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_jeudi", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_vendredi", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_samedi", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_dimanche", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_color", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_color_circle", "vigipool_modal_filtration_prog_1", eq_modal);
    access_modal(".vigipool_modal_filtration_1_duration", "vigipool_modal_filtration_prog_1", eq_modal);

    access_modal(".vigipool_modal_filtration_2_off_on", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_lundi", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_mardi", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_mercredi", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_jeudi", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_vendredi", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_samedi", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_dimanche", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_color", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_color_circle", "vigipool_modal_filtration_prog_2", eq_modal);
    access_modal(".vigipool_modal_filtration_2_duration", "vigipool_modal_filtration_prog_2", eq_modal);

</script>