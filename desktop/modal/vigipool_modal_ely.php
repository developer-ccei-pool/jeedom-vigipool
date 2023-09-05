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

    <h3><?php get_text("mode"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_modal_ely_mode_off"><?php get_text("off"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_ely_mode_programmed"><?php get_text("programmed"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_ely_mode_auto"><?php get_text("auto"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_ely_mode_regulated"><?php get_text("regulated"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_ely_mode_shock"><?php get_text("shock"); ?></button>

    <div class="vigipool_modal_ely_slider_ely_duration_theo">
        <h3><?php get_text("daily_production_duration"); ?></h3>
        <?php create_slider("ely_duration_theo", 0, 24); ?>
    </div>

    <div class="vigipool_modal_ely_slider_consigne_orp">
        <h3><?php get_text("consigne_orp"); ?></h3>
        <?php create_slider("consigne_orp", 45, 85); ?>
    </div>

    <div class="vigipool_modal_ely_slider_choc_duration">
        <h3><?php get_text("choc_duration"); ?></h3>
        <?php create_slider("choc_duration", 1, 72); ?>
    </div>

    <div class="vigipool_modal_ely_slider_power_ely">
        <h3><?php get_text("power"); ?></h3>
        <p style="color:red;"><?php get_text("warning_power"); ?></p>
        <?php create_slider("power_ely", 50, 125); ?>
    </div>


    <h3><?php get_text("instant_chlorine_prod"); ?></h3>
    <p class="transition vigipool_modal_ely_instant_chlorine_prod"></p>

    <h3><?php get_text("temperature"); ?></h3>

    <p class="transition vigipool_modal_ely_temperature"></p>

    <h3><?php get_text("min_temperature"); ?></h3>

    <?php create_slider("temp_min_off_ely", 10, 20); ?>

    <h3><?php get_text("chlorine_prod"); ?></h3>

    <p class="transition vigipool_modal_ely_chlorine_prod"></p>

    <h3><?php get_text("water_hardness"); ?></h3>

    <!--<button type="button" class="transition btn btn-light vigipool_modal_ely_water_hardness_0"><?php get_text("very_soft"); ?></button>-->
    <!--<button type="button" class="transition btn btn-light vigipool_modal_ely_water_hardness_1"><?php get_text("soft"); ?></button>-->
    <!--<button type="button" class="transition btn btn-light vigipool_modal_ely_water_hardness_2"><?php get_text("slightly_soft"); ?></button>-->
    <!--<button type="button" class="transition btn btn-light vigipool_modal_ely_water_hardness_3"><?php get_text("slightly_hard"); ?></button>-->
    <!--<button type="button" class="transition btn btn-light vigipool_modal_ely_water_hardness_4"><?php get_text("hard"); ?></button>-->
    <!--<button type="button" class="transition btn btn-light vigipool_modal_ely_water_hardness_5"><?php get_text("very_hard"); ?></button>-->
    <?php create_slider("water_hardness", 0, 5); ?>

    <h3><?php get_text("voltage"); ?></h3>

    <p class="transition vigipool_modal_ely_voltage"></p>

    <h3><?php get_text("amperage"); ?></h3>

    <p class="transition vigipool_modal_ely_amperage"></p>

    <h3><?php get_text("internal_temperature"); ?></h3>

    <p class="transition vigipool_modal_ely_internal_temperature"></p>
</div>


<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    quick_assign(".vigipool_modal_ely_mode_off", "u8_w", "mode_ely", "info", "desired", 0);
    quick_assign(".vigipool_modal_ely_mode_programmed", "u8_w", "mode_ely", "info", "desired", 1);
    quick_assign(".vigipool_modal_ely_mode_auto", "u8_w", "mode_ely", "info", "desired", 2);
    quick_assign(".vigipool_modal_ely_mode_regulated", "u8_w", "mode_ely", "info", "desired", 3);

    quick_assign(".vigipool_modal_ely_mode_off", "u8_w", "mode_choc", "info", "desired", 0);
    quick_assign(".vigipool_modal_ely_mode_programmed", "u8_w", "mode_choc", "info", "desired", 0);
    quick_assign(".vigipool_modal_ely_mode_auto", "u8_w", "mode_choc", "info", "desired", 0);
    quick_assign(".vigipool_modal_ely_mode_regulated", "u8_w", "mode_choc", "info", "desired", 0);
    quick_assign(".vigipool_modal_ely_mode_shock", "u8_w", "mode_choc", "info", "desired", 1);

    var id = "ely_duration_theo";
    var init_value = get_value_from_position(eq_modal, "ely_duration_theo");
    var division = 1;
    var unit = "H";
    var disable = true;
    var type = "u8_w";
    var variable = "ely_duration_theo";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    var id = "consigne_orp";
    var init_value = get_value_from_eq(eq_modal, "consigne_orp", "zelix") / 10;
    var division = 0.1;
    var unit = "mV";
    var disable = true;
    var type = "u16_w";
    var variable = "consigne_orp";
    var info = "info";
    var desired = "desired";
    var value = 10;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    var id = "choc_duration";
    var init_value = get_value_from_position(eq_modal, "choc_duration");
    var division = 1;
    var unit = "H";
    var disable = true;
    var type = "u8_w";
    var variable = "choc_duration";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);


    var id = "power_ely";
    var init_value = get_value_from_position(eq_modal, "power_ely");
    var division = 1;
    var unit = "%";
    var disable = false;
    var type = "u8_w";
    var variable = "power_ely";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    var id = "temp_min_off_ely";
    var init_value = get_value_from_position(eq_modal, "temp_min_off_ely");
    var division = 1;
    var unit = "H";
    var disable = false;
    var type = "u16_w";
    var variable = "temp_min_off_ely";
    var info = "info";
    var desired = "desired";
    var value = 10;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    var id = "water_hardness";
    var init_value = get_value_from_position(eq_modal, "water_hardness");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "water_hardness";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value, "water_hardness");

    for (var i = 0, max = 6; i < max; i++) {
        quick_assign(".vigipool_modal_ely_water_hardness_" + i, "u8_w", "water_hardness", "info", "desired", i);
    }
</script>