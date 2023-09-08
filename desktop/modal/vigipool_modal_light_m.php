<link rel="stylesheet" href="/plugins/vigipool/core/template/css/modal_light.css">

<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <h3><?php get_text("light"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <?php create_ui_on_off("vigipool_modal_light_m"); ?>

    <br/>
    <br/>

    <?php create_ui_prog_auto("vigipool_modal_light_m"); ?>

    <br/>
    <br/>

    <?php create_ui_tild_light("vigipool_modal_light_m") ?>

    <br/>
    <br/>

    <?php create_ui_bright("vigipool_modal_light_m"); ?>

    <br/>
    <br/>

    <?php create_ui_speed("vigipool_modal_light_m"); ?>

    <br/>
    <br/>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program_simple("vigipool_modal_light_m", 1); ?>

    <br/>
    <br/>

    <h3>Historique</h3>

    <button type="button" class="transition btn btn-light vigipool_modal_light_m_button_code"><?php get_text("history"); ?></button>

</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    // create_ui_options_click("vigipool_modal_light_m");

    // Lights And Sequences

    quick_assign('.vigipool_modal_light_m_button_off', "u8_w", "light_mode", "info", "desired", "0");
    quick_assign('.vigipool_modal_light_m_button_on', "u8_w", "light_mode", "info", "desired", "1");
    quick_assign('.vigipool_modal_light_m_button_prog', "u8_w", "light_mode", "info", "desired", "2");
    quick_assign('.vigipool_modal_light_m_button_auto', "u8_w", "light_mode", "info", "desired", "3");

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

    quick_assign('.vigipool_modal_light_m_warm_button', "u8_w", "light_code", "info", "desired", id_warm);
    quick_assign('.vigipool_modal_light_m_cold_button', "u8_w", "light_code", "info", "desired", id_cold);
    quick_assign('.vigipool_modal_light_m_blue_button', "u8_w", "light_code", "info", "desired", id_blue);
    quick_assign('.vigipool_modal_light_m_lagoon_button', "u8_w", "light_code", "info", "desired", id_lagoon);
    quick_assign('.vigipool_modal_light_m_cyan_button', "u8_w", "light_code", "info", "desired", id_cyan);
    quick_assign('.vigipool_modal_light_m_green_button', "u8_w", "light_code", "info", "desired", id_green);
    quick_assign('.vigipool_modal_light_m_purple_button', "u8_w", "light_code", "info", "desired", id_purple);
    quick_assign('.vigipool_modal_light_m_magenta_button', "u8_w", "light_code", "info", "desired", id_magenta);
    quick_assign('.vigipool_modal_light_m_pink_button', "u8_w", "light_code", "info", "desired", id_pink);
    quick_assign('.vigipool_modal_light_m_red_button', "u8_w", "light_code", "info", "desired", id_red);
    quick_assign('.vigipool_modal_light_m_orange_button', "u8_w", "light_code", "info", "desired", id_orange);

    quick_assign('.vigipool_modal_light_m_favorite_button', "u8_w", "light_code", "info", "desired", id_favorite);

    quick_assign('.vigipool_modal_light_m_gradiant_button', "u8_w", "light_code", "info", "desired", id_gradiant);
    quick_assign('.vigipool_modal_light_m_rainbow_button', "u8_w", "light_code", "info", "desired", id_rainbow);
    quick_assign('.vigipool_modal_light_m_parade_button', "u8_w", "light_code", "info", "desired", id_parade);
    quick_assign('.vigipool_modal_light_m_techno_button', "u8_w", "light_code", "info", "desired", id_techno);
    quick_assign('.vigipool_modal_light_m_horizon_button', "u8_w", "light_code", "info", "desired", id_horizon);
    quick_assign('.vigipool_modal_light_m_random_button', "u8_w", "light_code", "info", "desired", id_random);
    quick_assign('.vigipool_modal_light_m_magical_button', "u8_w", "light_code", "info", "desired", id_magical);

    quick_assign('.vigipool_modal_light_m_bright > th:nth-child(2) > p', "u8_w", "light_bright", "info", "desired", 0);
    quick_assign('.vigipool_modal_light_m_bright > th:nth-child(3) > p', "u8_w", "light_bright", "info", "desired", 1);
    quick_assign('.vigipool_modal_light_m_bright > th:nth-child(4) > p', "u8_w", "light_bright", "info", "desired", 2);
    quick_assign('.vigipool_modal_light_m_bright > th:nth-child(5) > p', "u8_w", "light_bright", "info", "desired", 3);

    quick_assign('.vigipool_modal_light_m_speed > th:nth-child(2) > p', "u8_w", "light_speed", "info", "desired", 0);
    quick_assign('.vigipool_modal_light_m_speed > th:nth-child(3) > p', "u8_w", "light_speed", "info", "desired", 1);
    quick_assign('.vigipool_modal_light_m_speed > th:nth-child(4) > p', "u8_w", "light_speed", "info", "desired", 2);

    $('.vigipool_modal_light_m_button_code').click(function () {
        show_history("light_state", eq_modal);
    });

    // Sched

    access_modal(".vigipool_modal_light_m_1_from_label_1", "vigipool_modal_light_m_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_m_1_from_value_1", "vigipool_modal_light_m_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_m_1_to_label_1", "vigipool_modal_light_m_prog_1", eq_modal);
    access_modal(".vigipool_modal_light_m_1_to_value_1", "vigipool_modal_light_m_prog_1", eq_modal);

</script>
