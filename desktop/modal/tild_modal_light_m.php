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

    <h3><?php get_text("state"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_tild_modal_light_button_off"><?php get_text("off"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_tild_modal_light_button_on""><?php get_text("on"); ?></button>

    <h3><?php get_text("colors"); ?></h3>

    <table style="table-layout: fixed;width: 400px;">
        <tr>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_warm_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_cold_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_blue_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_lagoon_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_cyan_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_green_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
        </tr>
        <tr>
            <th class="transition vigipool_label vigipool_tild_modal_light_warm_label"><?php get_text("warm"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_cold_label"><?php get_text("cold"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_blue_label"><?php get_text("blue"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_lagoon_label"><?php get_text("lagoon"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_cyan_label"><?php get_text("cyan"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_green_label"><?php get_text("green"); ?></th>
        </tr>
        <tr>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_purple_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_magenta_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_pink_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_red_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_orange_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
            <th class="transition vigipool_button" ><span class="transition dot vigipool_tild_modal_light_favorite_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></span></th>
        </tr>
        <tr>
            <th class="transition vigipool_label vigipool_tild_modal_light_purple_label"><?php get_text("purple"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_magenta_label"><?php get_text("magenta"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_pink_label"><?php get_text("pink"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_red_label"><?php get_text("red"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_orange_label"><?php get_text("orange"); ?></th>
            <th class="transition vigipool_label vigipool_tild_modal_light_favorite_label"><?php get_text("favorite"); ?></th>
        </tr>
    </table>

    <h3><?php get_text("sequences"); ?></h3>

    <table class="centerer">
        <tr>
            <th class="transition vigipool_button_sequence vigipool_tild_modal_light_gradiant_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></th>
            <th class="transition vigipool_button_sequence vigipool_tild_modal_light_rainbow_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></th>
            <th class="transition vigipool_button_sequence vigipool_tild_modal_light_parade_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></th>
            <th class="transition vigipool_button_sequence vigipool_tild_modal_light_techno_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></th>
        </tr>
        <tr>
            <th class="transition vigipool_label_sequence vigipool_tild_modal_light_gradiant_label"><?php get_text("gradiant"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_tild_modal_light_rainbow_label"><?php get_text("rainbow"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_tild_modal_light_parade_label"><?php get_text("parade"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_tild_modal_light_techno_label"><?php get_text("techno"); ?></th>
        </tr>
        <tr>
            <th class="transition vigipool_button_sequence vigipool_tild_modal_light_horizon_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></th>
            <th class="transition vigipool_button_sequence vigipool_tild_modal_light_random_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></th>
            <th class="transition vigipool_button_sequence vigipool_tild_modal_light_magical_button"><img src="/plugins/vigipool/desktop/img/check-circle.svg"></th>
        </tr>
        <tr>
            <th class="transition vigipool_label_sequence vigipool_tild_modal_light_horizon_label"><?php get_text("horizon"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_tild_modal_light_random_label"><?php get_text("random"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_tild_modal_light_magical_label"><?php get_text("magical"); ?></th>
        </tr>
    </table>

    <h3><?php get_text("bright"); ?></h3>

    <table class="centerer">
        <tr class="transition vigipool_tild_modal_light_bright">
            <th>
                <img style="filter: invert(1); vertical-align: super;" src="/plugins/vigipool/desktop/img/sun.svg">
            </th>
            <!--<th style="border-radius: 50px;;background-image: linear-gradient(to right, transparent , white); width: 102px;">-->
                <!--<p>⬤</p>-->
            <!--</th>-->
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("low"); ?></p>
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("medium"); ?></p>
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("high"); ?></p>
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("max"); ?></p>
            </th>
        </tr>
    </table>

    <h3 class="transition vigipool_tild_modal_light_speed_title"><?php get_text("speed"); ?></h3>

    <table class="centerer">
        <tr class="transition vigipool_tild_modal_light_speed">
            <th>
                <img style="filter: invert(1); vertical-align: super;" src="/plugins/vigipool/desktop/img/rocket-takeoff-fill.svg">
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("slow"); ?></p>
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("normal"); ?></p>
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("fast"); ?></p>
            </th>
        </tr>
    </table>


    <div class="transition vigipool_modal_light_sched">
        <h3><?php get_text("programming"); ?></h3>
        <table class="centerer">
            <tr>
                <td><?php get_text("program"); ?> 1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="transition vigipool_modal_light_sched_1_off_on">Off/On</td>
            </tr>
            <tr>
                <td class="transition vigipool_modal_light_sched_1_lundi"><?php get_text("monday"); ?></td>
                <td class="transition vigipool_modal_light_sched_1_mardi"><?php get_text("tuesday"); ?></td>
                <td class="transition vigipool_modal_light_sched_1_mercredi"><?php get_text("wednesday"); ?></td>
                <td class="transition vigipool_modal_light_sched_1_jeudi"><?php get_text("thursday"); ?></td>
                <td class="transition vigipool_modal_light_sched_1_vendredi"><?php get_text("friday"); ?></td>
                <td class="transition vigipool_modal_light_sched_1_samedi"><?php get_text("saturday"); ?></td>
                <td class="transition vigipool_modal_light_sched_1_dimanche"><?php get_text("sunday"); ?></td>
            </tr>
            <tr>
                <td><?php get_text("color"); ?> : </td>
                <td class="transition vigipool_modal_light_sched_1_color"></td>
                <td class="transition vigipool_modal_light_sched_1_color_circle"><img alt="alt" height="20"/></td>
                <td></td>
                <td><?php get_text("duration"); ?> : </td>
                <td class="transition vigipool_modal_light_sched_1_duration"></td>
                <td><?php get_text("hours"); ?></td>
            </tr>
        </table>
        <br/>
        <table class="centerer">
            <tr>
                <td><?php get_text("program"); ?> 2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="transition vigipool_modal_light_sched_2_off_on">Off/On</td>
            </tr>
            <tr>
                <td class="transition vigipool_modal_light_sched_2_lundi"><?php get_text("monday"); ?></td>
                <td class="transition vigipool_modal_light_sched_2_mardi"><?php get_text("tuesday"); ?></td>
                <td class="transition vigipool_modal_light_sched_2_mercredi"><?php get_text("wednesday"); ?></td>
                <td class="transition vigipool_modal_light_sched_2_jeudi"><?php get_text("thursday"); ?></td>
                <td class="transition vigipool_modal_light_sched_2_vendredi"><?php get_text("friday"); ?></td>
                <td class="transition vigipool_modal_light_sched_2_samedi"><?php get_text("saturday"); ?></td>
                <td class="transition vigipool_modal_light_sched_2_dimanche"><?php get_text("sunday"); ?></td>
            </tr>
            <tr>
                <td><?php get_text("color"); ?> : </td>
                <td class="transition vigipool_modal_light_sched_2_color"></td>
                <td class="transition vigipool_modal_light_sched_2_color_circle"><img alt="alt" height="20"/></td>
                <td></td>
                <td><?php get_text("duration"); ?> : </td>
                <td class="transition vigipool_modal_light_sched_2_duration"></td>
                <td><?php get_text("hours"); ?></td>
            </tr>
        </table>
    </div>

    <h3>Historique</h3>

    <button type="button" class="transition btn btn-light vigipool_tild_modal_light_button_code"><?php get_text("history"); ?></button>

</div>


<script>
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_tild_modal_light_title");

    quick_assign('.vigipool_tild_modal_light_button_off', "u8_w", "light_state", "info", "desired", "0");
    quick_assign('.vigipool_tild_modal_light_button_on', "u8_w", "light_state", "info", "desired", "1");

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

    quick_assign('.vigipool_tild_modal_light_warm_button', "u8_w", "light_code", "info", "desired", id_warm);
    quick_assign('.vigipool_tild_modal_light_cold_button', "u8_w", "light_code", "info", "desired", id_cold);
    quick_assign('.vigipool_tild_modal_light_blue_button', "u8_w", "light_code", "info", "desired", id_blue);
    quick_assign('.vigipool_tild_modal_light_lagoon_button', "u8_w", "light_code", "info", "desired", id_lagoon);
    quick_assign('.vigipool_tild_modal_light_cyan_button', "u8_w", "light_code", "info", "desired", id_cyan);
    quick_assign('.vigipool_tild_modal_light_green_button', "u8_w", "light_code", "info", "desired", id_green);
    quick_assign('.vigipool_tild_modal_light_purple_button', "u8_w", "light_code", "info", "desired", id_purple);
    quick_assign('.vigipool_tild_modal_light_magenta_button', "u8_w", "light_code", "info", "desired", id_magenta);
    quick_assign('.vigipool_tild_modal_light_pink_button', "u8_w", "light_code", "info", "desired", id_pink);
    quick_assign('.vigipool_tild_modal_light_red_button', "u8_w", "light_code", "info", "desired", id_red);
    quick_assign('.vigipool_tild_modal_light_orange_button', "u8_w", "light_code", "info", "desired", id_orange);

    quick_assign('.vigipool_tild_modal_light_favorite_button', "u8_w", "light_code", "info", "desired", id_favorite);

    quick_assign('.vigipool_tild_modal_light_gradiant_button', "u8_w", "light_code", "info", "desired", id_gradiant);
    quick_assign('.vigipool_tild_modal_light_rainbow_button', "u8_w", "light_code", "info", "desired", id_rainbow);
    quick_assign('.vigipool_tild_modal_light_parade_button', "u8_w", "light_code", "info", "desired", id_parade);
    quick_assign('.vigipool_tild_modal_light_techno_button', "u8_w", "light_code", "info", "desired", id_techno);
    quick_assign('.vigipool_tild_modal_light_horizon_button', "u8_w", "light_code", "info", "desired", id_horizon);
    quick_assign('.vigipool_tild_modal_light_random_button', "u8_w", "light_code", "info", "desired", id_random);
    quick_assign('.vigipool_tild_modal_light_magical_button', "u8_w", "light_code", "info", "desired", id_magical);

    quick_assign('.vigipool_tild_modal_light_bright > th:nth-child(2) > p', "u8_w", "light_bright", "info", "desired", 0);
    quick_assign('.vigipool_tild_modal_light_bright > th:nth-child(3) > p', "u8_w", "light_bright", "info", "desired", 1);
    quick_assign('.vigipool_tild_modal_light_bright > th:nth-child(4) > p', "u8_w", "light_bright", "info", "desired", 2);
    quick_assign('.vigipool_tild_modal_light_bright > th:nth-child(5) > p', "u8_w", "light_bright", "info", "desired", 3);

    quick_assign('.vigipool_tild_modal_light_speed > th:nth-child(2) > p', "u8_w", "light_speed", "info", "desired", 0);
    quick_assign('.vigipool_tild_modal_light_speed > th:nth-child(3) > p', "u8_w", "light_speed", "info", "desired", 1);
    quick_assign('.vigipool_tild_modal_light_speed > th:nth-child(4) > p', "u8_w", "light_speed", "info", "desired", 2);

    $('.vigipool_tild_modal_light_button_code').click(function () {
        show_history("light_state", eq_modal);
    });
</script>