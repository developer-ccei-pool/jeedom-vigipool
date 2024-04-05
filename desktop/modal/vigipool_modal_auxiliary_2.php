<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <h3><?php get_text("auxiliary"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <h3><?php get_text("modes"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_modal_auxiliary_2_off"><?php get_text("off"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_auxiliary_2_on"><?php get_text("on"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_auxiliary_2_prog"><?php get_text("prog"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_auxiliary_2_auto"><?php get_text("auto"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program_simple("vigipool_modal_auxiliary_2", 1); ?>

    <br/>
    <br/>

    <h3><?php get_text("history_title"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_anteam_modal_auxiliary_2_button_state"><?php get_text("history"); ?></button>

</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    quick_assign('.vigipool_modal_auxiliary_2_off', "u8_w", "aux2_mode", "info", "desired", "0");
    quick_assign('.vigipool_modal_auxiliary_2_on', "u8_w", "aux2_mode", "info", "desired", "1");
    quick_assign('.vigipool_modal_auxiliary_2_prog', "u8_w", "aux2_mode", "info", "desired", "2");
    quick_assign('.vigipool_modal_auxiliary_2_auto', "u8_w", "aux2_mode", "info", "desired", "3");

    $('.vigipool_anteam_modal_auxiliary_2_button_state').click(function () {
        show_history("aux2_state", eq_modal);
    });

    // access_modal(".vigipool_modal_auxiliary_2_1_from_label_1", "vigipool_modal_auxiliary_1_prog_1", 0, eq_modal);
    // access_modal(".vigipool_modal_auxiliary_2_1_from_value_1", "vigipool_modal_auxiliary_1_prog_1", 0, eq_modal);
    // access_modal(".vigipool_modal_auxiliary_2_1_to_label_1", "vigipool_modal_auxiliary_1_prog_1", 0, eq_modal);
    // access_modal(".vigipool_modal_auxiliary_2_1_to_value_1", "vigipool_modal_auxiliary_1_prog_1", 0, eq_modal);

</script>
