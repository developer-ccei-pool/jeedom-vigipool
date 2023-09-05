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

    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_ph_m">pH-</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_ph_p">pH+</button>

    <h3><?php get_text("maximum_volume_injected"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_00">Disabled</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_10">0,10 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_20">0,20 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_30">0,30 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_40">0,40 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_50">0,50 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_60">0,60 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_70">0,70 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_80">0,80 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0_90">0,90 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_00">1,00 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_10">1,10 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_20">1,20 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_30">1,30 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_40">1,40 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_50">1,50 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_60">1,60 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_70">1,70 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_80">1,80 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1_90">1,90 L/Jour</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_2_00">2,00 L/Jour</button>

    <h3><?php get_text("product_volume_available"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_0">0 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_1">1 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_2">2 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_3">3 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_4">4 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_5">5 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_6">6 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_7">7 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_8">8 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_9">9 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_10">10 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_11">11 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_12">12 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_13">13 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_14">14 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_15">15 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_16">16 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_17">17 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_18">18 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_19">19 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_20">20 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_21">21 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_22">22 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_23">23 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_24">24 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_25">25 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_26">26 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_27">27 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_28">28 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_29">29 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_30">30 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_31">31 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_32">32 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_33">33 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_34">34 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_35">35 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_36">36 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_37">37 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_38">38 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_39">39 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_40">40 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_41">41 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_42">42 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_43">43 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_44">44 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_45">45 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_46">46 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_47">47 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_48">48 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_49">49 L</button>
    <button type="button" class="transition btn btn-light vigipool_phileox_modal_button_50">50 L</button>
</div>


<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_phileox_modal_light_title");

    quick_assign(".vigipool_phileox_modal_button_0_00", "u8_w", "vol_max_24h", "info", "desired", 0);
    quick_assign(".vigipool_phileox_modal_button_0_10", "u8_w", "vol_max_24h", "info", "desired", 10);
    quick_assign(".vigipool_phileox_modal_button_0_20", "u8_w", "vol_max_24h", "info", "desired", 20);
    quick_assign(".vigipool_phileox_modal_button_0_30", "u8_w", "vol_max_24h", "info", "desired", 30);
    quick_assign(".vigipool_phileox_modal_button_0_40", "u8_w", "vol_max_24h", "info", "desired", 40);
    quick_assign(".vigipool_phileox_modal_button_0_50", "u8_w", "vol_max_24h", "info", "desired", 50);
    quick_assign(".vigipool_phileox_modal_button_0_60", "u8_w", "vol_max_24h", "info", "desired", 60);
    quick_assign(".vigipool_phileox_modal_button_0_70", "u8_w", "vol_max_24h", "info", "desired", 70);
    quick_assign(".vigipool_phileox_modal_button_0_80", "u8_w", "vol_max_24h", "info", "desired", 80);
    quick_assign(".vigipool_phileox_modal_button_0_90", "u8_w", "vol_max_24h", "info", "desired", 90);
    quick_assign(".vigipool_phileox_modal_button_1_00", "u8_w", "vol_max_24h", "info", "desired", 100);
    quick_assign(".vigipool_phileox_modal_button_1_10", "u8_w", "vol_max_24h", "info", "desired", 110);
    quick_assign(".vigipool_phileox_modal_button_1_20", "u8_w", "vol_max_24h", "info", "desired", 120);
    quick_assign(".vigipool_phileox_modal_button_1_30", "u8_w", "vol_max_24h", "info", "desired", 130);
    quick_assign(".vigipool_phileox_modal_button_1_40", "u8_w", "vol_max_24h", "info", "desired", 140);
    quick_assign(".vigipool_phileox_modal_button_1_50", "u8_w", "vol_max_24h", "info", "desired", 150);
    quick_assign(".vigipool_phileox_modal_button_1_60", "u8_w", "vol_max_24h", "info", "desired", 160);
    quick_assign(".vigipool_phileox_modal_button_1_70", "u8_w", "vol_max_24h", "info", "desired", 170);
    quick_assign(".vigipool_phileox_modal_button_1_80", "u8_w", "vol_max_24h", "info", "desired", 180);
    quick_assign(".vigipool_phileox_modal_button_1_90", "u8_w", "vol_max_24h", "info", "desired", 190);
    quick_assign(".vigipool_phileox_modal_button_2_00", "u8_w", "vol_max_24h", "info", "desired", 200);
    quick_assign(".vigipool_phileox_modal_button_0", "u8_w", "vol_bac", "info", "desired", 000);
    quick_assign(".vigipool_phileox_modal_button_1", "u8_w", "vol_bac", "info", "desired", 100);
    quick_assign(".vigipool_phileox_modal_button_2", "u8_w", "vol_bac", "info", "desired", 200);
    quick_assign(".vigipool_phileox_modal_button_3", "u8_w", "vol_bac", "info", "desired", 300);
    quick_assign(".vigipool_phileox_modal_button_4", "u8_w", "vol_bac", "info", "desired", 400);
    quick_assign(".vigipool_phileox_modal_button_5", "u8_w", "vol_bac", "info", "desired", 500);
    quick_assign(".vigipool_phileox_modal_button_6", "u8_w", "vol_bac", "info", "desired", 600);
    quick_assign(".vigipool_phileox_modal_button_7", "u8_w", "vol_bac", "info", "desired", 700);
    quick_assign(".vigipool_phileox_modal_button_8", "u8_w", "vol_bac", "info", "desired", 800);
    quick_assign(".vigipool_phileox_modal_button_9", "u8_w", "vol_bac", "info", "desired", 900);
    quick_assign(".vigipool_phileox_modal_button_10", "u8_w", "vol_bac", "info", "desired", 1000);
    quick_assign(".vigipool_phileox_modal_button_11", "u8_w", "vol_bac", "info", "desired", 1100);
    quick_assign(".vigipool_phileox_modal_button_12", "u8_w", "vol_bac", "info", "desired", 1200);
    quick_assign(".vigipool_phileox_modal_button_13", "u8_w", "vol_bac", "info", "desired", 1300);
    quick_assign(".vigipool_phileox_modal_button_14", "u8_w", "vol_bac", "info", "desired", 1400);
    quick_assign(".vigipool_phileox_modal_button_15", "u8_w", "vol_bac", "info", "desired", 1500);
    quick_assign(".vigipool_phileox_modal_button_16", "u8_w", "vol_bac", "info", "desired", 1600);
    quick_assign(".vigipool_phileox_modal_button_17", "u8_w", "vol_bac", "info", "desired", 1700);
    quick_assign(".vigipool_phileox_modal_button_18", "u8_w", "vol_bac", "info", "desired", 1800);
    quick_assign(".vigipool_phileox_modal_button_19", "u8_w", "vol_bac", "info", "desired", 1900);
    quick_assign(".vigipool_phileox_modal_button_20", "u8_w", "vol_bac", "info", "desired", 2000);
    quick_assign(".vigipool_phileox_modal_button_21", "u8_w", "vol_bac", "info", "desired", 2100);
    quick_assign(".vigipool_phileox_modal_button_22", "u8_w", "vol_bac", "info", "desired", 2200);
    quick_assign(".vigipool_phileox_modal_button_23", "u8_w", "vol_bac", "info", "desired", 2300);
    quick_assign(".vigipool_phileox_modal_button_24", "u8_w", "vol_bac", "info", "desired", 2400);
    quick_assign(".vigipool_phileox_modal_button_25", "u8_w", "vol_bac", "info", "desired", 2500);
    quick_assign(".vigipool_phileox_modal_button_26", "u8_w", "vol_bac", "info", "desired", 2600);
    quick_assign(".vigipool_phileox_modal_button_27", "u8_w", "vol_bac", "info", "desired", 2700);
    quick_assign(".vigipool_phileox_modal_button_28", "u8_w", "vol_bac", "info", "desired", 2800);
    quick_assign(".vigipool_phileox_modal_button_29", "u8_w", "vol_bac", "info", "desired", 2900);
    quick_assign(".vigipool_phileox_modal_button_30", "u8_w", "vol_bac", "info", "desired", 3000);
    quick_assign(".vigipool_phileox_modal_button_31", "u8_w", "vol_bac", "info", "desired", 3100);
    quick_assign(".vigipool_phileox_modal_button_32", "u8_w", "vol_bac", "info", "desired", 3200);
    quick_assign(".vigipool_phileox_modal_button_33", "u8_w", "vol_bac", "info", "desired", 3300);
    quick_assign(".vigipool_phileox_modal_button_34", "u8_w", "vol_bac", "info", "desired", 3400);
    quick_assign(".vigipool_phileox_modal_button_35", "u8_w", "vol_bac", "info", "desired", 3500);
    quick_assign(".vigipool_phileox_modal_button_36", "u8_w", "vol_bac", "info", "desired", 3600);
    quick_assign(".vigipool_phileox_modal_button_37", "u8_w", "vol_bac", "info", "desired", 3700);
    quick_assign(".vigipool_phileox_modal_button_38", "u8_w", "vol_bac", "info", "desired", 3800);
    quick_assign(".vigipool_phileox_modal_button_39", "u8_w", "vol_bac", "info", "desired", 3900);
    quick_assign(".vigipool_phileox_modal_button_40", "u8_w", "vol_bac", "info", "desired", 4000);
    quick_assign(".vigipool_phileox_modal_button_41", "u8_w", "vol_bac", "info", "desired", 4100);
    quick_assign(".vigipool_phileox_modal_button_42", "u8_w", "vol_bac", "info", "desired", 4200);
    quick_assign(".vigipool_phileox_modal_button_43", "u8_w", "vol_bac", "info", "desired", 4300);
    quick_assign(".vigipool_phileox_modal_button_44", "u8_w", "vol_bac", "info", "desired", 4400);
    quick_assign(".vigipool_phileox_modal_button_45", "u8_w", "vol_bac", "info", "desired", 4500);
    quick_assign(".vigipool_phileox_modal_button_46", "u8_w", "vol_bac", "info", "desired", 4600);
    quick_assign(".vigipool_phileox_modal_button_47", "u8_w", "vol_bac", "info", "desired", 4700);
    quick_assign(".vigipool_phileox_modal_button_48", "u8_w", "vol_bac", "info", "desired", 4800);
    quick_assign(".vigipool_phileox_modal_button_49", "u8_w", "vol_bac", "info", "desired", 4900);
    quick_assign(".vigipool_phileox_modal_button_50", "u8_w", "vol_bac", "info", "desired", 5000);
</script>