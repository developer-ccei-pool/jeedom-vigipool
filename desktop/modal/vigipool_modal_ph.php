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

    <h3><?php get_text("type_of_product_injected"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_modal_source_ph_ph_m">pH-</button>
    <button type="button" class="transition btn btn-light vigipool_modal_source_ph_ph_p">pH+</button>

    <h3><?php get_text("maximum_volume_injected"); ?></h3>

    <?php
    create_slider("vol_max_24h", 0, 20);
    ?>

    <h3><?php get_text("product_volume_available"); ?></h3>

    <?php
    create_slider("vol_bac", 0, 50);
    ?>
</div>


<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    // Volume maximum injecté

    var id = "vol_max_24h";
    var vol_max_24h = get_value_from_position(eq_modal, "vol_max_24h");
    var init_value = vol_max_24h * 10;
    var division = 10;
    var unit = "L/Day";
    var disable = true;
    var type = "u16_w";
    var variable = "vol_max_24h";
    var info = "info";
    var desired = "desired";
    var value = 10;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    // Volume produit disponible

    var id = "vol_bac";
    var vol_bac = get_value_from_position(eq_modal, "vol_bac");
    console.log(vol_bac);
    var init_value = vol_bac / 100;
    var division = 1;
    var unit = "L";
    var disable = false;
    var type = "u16_w";
    var variable = "vol_bac";
    var info = "info";
    var desired = "desired";
    var value = 100;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

</script>