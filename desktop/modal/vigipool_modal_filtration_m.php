<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="vigipool_ui_text_modal">

    <h2 class="vigipool_modal_title"></h2>

    <h3><?php get_text("common_filtration_type"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <button type="button" class="btn btn-light vigipool_modal_filtration_m_off"><?php get_text("off"); ?></button>
    <button type="button" class="btn btn-light vigipool_modal_filtration_m_on"><?php get_text("on"); ?></button>
    <button type="button" class="btn btn-light vigipool_modal_filtration_m_prog"><?php get_text("prog"); ?></button>
    <button type="button" class="btn btn-light vigipool_modal_filtration_m_auto"><?php get_text("auto"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program_simple("vigipool_modal_filtration_m", 1); ?>

    <br/>
    <br/>

    <h3><?php echo $history_title[$lang] ?></h3>
    <button type="button" class="btn btn-light vigipool_anteam_modal_filtration_button_state"><?php get_text("history"); ?></button>

</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    quick_assign('.vigipool_anteam_modal_filtration_button_off', "u8_w", "filt_mode", "info", "desired", "0");
    quick_assign('.vigipool_anteam_modal_filtration_button_on', "u8_w", "filt_mode", "info", "desired", "1");
    quick_assign('.vigipool_anteam_modal_filtration_button_prog', "u8_w", "filt_mode", "info", "desired", "2");
    quick_assign('.vigipool_anteam_modal_filtration_button_auto', "u8_w", "filt_mode", "info", "desired", "3");

    $('.vigipool_anteam_modal_filtration_button_state').click(function () {
        $("[data-template='vigipool_flow_on']").click();
    });

    access_modal(".vigipool_modal_filtration_m_1_from_label_1", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_from_value_1", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_to_label_1", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_to_value_1", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);

    access_modal(".vigipool_modal_filtration_m_1_from_label_2", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_from_value_2", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_to_label_2", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_to_value_2", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);

    access_modal(".vigipool_modal_filtration_m_1_from_label_3", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_from_value_3", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_to_label_3", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_m_1_to_value_3", "vigipool_modal_filtration_m_prog_1", 0, eq_modal);

</script>