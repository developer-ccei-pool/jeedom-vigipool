<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <h3><?php get_text("scheduling"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <h3><?php get_text("save"); ?></h3>
    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_prog_1_button_save"><?php get_text("save"); ?></button>
    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_prog_1_button_back"><?php get_text("back"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("state"); ?></h3>
    <button type="button" class="transition btn btn-light vigipool_modal_filtration_prog_1_button_off"><?php get_text("off"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_filtration_prog_1_button_on""><?php get_text("on"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("select_the_start_time_and_duration_of_the_program"); ?></h3>

    <h4><?php get_text("schedule"); ?> 1</h4>
    <h4><?php get_text("from"); ?></h4>
    <?php create_slider("vigipool_modal_filtration_prog_1_sched_1_begin", 0, 24 * 4); ?>
    <h4><?php get_text("to"); ?></h4>
    <?php create_slider("vigipool_modal_filtration_prog_1_sched_1_end", 0, 24 * 4); ?>

    <br/>
    <br/>

    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_prog_1_sched_2_add"><?php get_text("add"); ?></button>

    <div class="vigipool_modal_filtration_prog_1_sched_2">
        <h4><?php get_text("schedule"); ?> 2</h4>
        <h4><?php get_text("from"); ?></h4>
        <?php create_slider("vigipool_modal_filtration_prog_1_sched_2_begin", 0, 24 * 4); ?>
        <h4><?php get_text("to"); ?></h4>
        <?php create_slider("vigipool_modal_filtration_prog_1_sched_2_end", 0, 24 * 4); ?>
    </div>

    <br/>
    <br/>

    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_prog_1_sched_3_add"><?php get_text("add"); ?></button>

    <div class="vigipool_modal_filtration_prog_1_sched_3">
        <h4><?php get_text("schedule"); ?> 3</h4>
        <h4><?php get_text("from"); ?></h4>
        <?php create_slider("vigipool_modal_filtration_prog_1_sched_3_begin", 0, 24 * 4); ?>
        <h4><?php get_text("to"); ?></h4>
        <?php create_slider("vigipool_modal_filtration_prog_1_sched_3_end", 0, 24 * 4); ?>
    </div>

    <br/>
    <br/>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program("vigipool_modal_filtration_prog_1", 1); ?>

    <br/>
    <br/>

    <h3><?php get_text("thermoregulated_mode"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_modal_filtration_prog_1_button_thermo_off"><?php get_text("off"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_filtration_prog_1_button_thermo_on""><?php get_text("on"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("save"); ?></h3>

    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_prog_1_button_save"><?php get_text("save"); ?></button>
    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_prog_1_button_back"><?php get_text("back"); ?></button>

</div>

<?php modal_bot(); ?>

<script>

    // Common
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    // Save
    $(".vigipool_modal_filtration_prog_1_button_save").click(function () {
        quick_send("s44_w", "filt_sched", "info", "desired", set_filtration_sched_value_save);
    });
    access_modal(".vigipool_modal_filtration_prog_1_button_back", "vigipool_modal_filtration", 0);
    access_modal(".vigipool_modal_filtration_prog_1_button_back", "vigipool_modal_filtration", 1);

    // Off On
    $(".vigipool_modal_filtration_prog_1_button_off").click(function () {
        if (set_filtration_sched_value_save === "") {
            var filtration_sched = get_value_from_position(eq_modal, "filt_sched");
        } else {
            var filtration_sched = set_filtration_sched_value_save;
        }

        console.log("filtration_sched = " + filtration_sched);

        var new_program_1_off_on_and_days = get_sched_value(filtration_sched, "program_1_off_on_and_days");
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        new_program_1_off_on_and_days = converter("dec", "bin", new_program_1_off_on_and_days);
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        var program_off_on = 0;
        var program_samedi = parseInt(new_program_1_off_on_and_days[1]);
        var program_vendredi = parseInt(new_program_1_off_on_and_days[2]);
        var program_jeudi = parseInt(new_program_1_off_on_and_days[3]);
        var program_mercredi = parseInt(new_program_1_off_on_and_days[4]);
        var program_mardi = parseInt(new_program_1_off_on_and_days[5]);
        var program_lundi = parseInt(new_program_1_off_on_and_days[6]);
        var program_dimanche = parseInt(new_program_1_off_on_and_days[7]);

        new_program_1_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        new_program_1_off_on_and_days = converter("bin", "dec", new_program_1_off_on_and_days);
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        var new_filtration_sched = set_filtration_sched_value("prog_1_off_on_and_days", new_program_1_off_on_and_days);
        update_vigipool_modal_filtration_prog_1(new_filtration_sched);
    });
    $(".vigipool_modal_filtration_prog_1_button_on").click(function () {
        if (set_filtration_sched_value_save === "") {
            var filtration_sched = get_value_from_position(eq_modal, "filt_sched");
        } else {
            var filtration_sched = set_filtration_sched_value_save;
        }

        var new_program_1_off_on_and_days = get_sched_value(filtration_sched, "program_1_off_on_and_days");
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        new_program_1_off_on_and_days = converter("dec", "bin", new_program_1_off_on_and_days);
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        var program_off_on = 1;
        var program_samedi = parseInt(new_program_1_off_on_and_days[1]);
        var program_vendredi = parseInt(new_program_1_off_on_and_days[2]);
        var program_jeudi = parseInt(new_program_1_off_on_and_days[3]);
        var program_mercredi = parseInt(new_program_1_off_on_and_days[4]);
        var program_mardi = parseInt(new_program_1_off_on_and_days[5]);
        var program_lundi = parseInt(new_program_1_off_on_and_days[6]);
        var program_dimanche = parseInt(new_program_1_off_on_and_days[7]);

        new_program_1_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        new_program_1_off_on_and_days = converter("bin", "dec", new_program_1_off_on_and_days);
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        var new_filtration_sched = set_filtration_sched_value("prog_1_off_on_and_days", new_program_1_off_on_and_days);
        update_vigipool_modal_filtration_prog_1(new_filtration_sched);
    });

    // Schedule

    var filtration_sched = get_value_from_position(eq_modal, "filt_sched");
    console.log("filtration_sched = " + filtration_sched);

    var id = "vigipool_modal_filtration_prog_1_sched_1_begin";
    var init_value = get_sched_value(filtration_sched, "program_1_sched_1_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_prog_1_sched_1_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_filtration_prog_1_sched_1_end";
    var init_value = fix_end_dec(get_sched_value(filtration_sched, "program_1_sched_1_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_prog_1_sched_1_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_filtration_prog_1_sched_2_begin";
    var init_value = get_sched_value(filtration_sched, "program_1_sched_2_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_prog_1_sched_2_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_filtration_prog_1_sched_2_end";
    var init_value = fix_end_dec(get_sched_value(filtration_sched, "program_1_sched_2_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_prog_1_sched_2_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_filtration_prog_1_sched_3_begin";
    var init_value = get_sched_value(filtration_sched, "program_1_sched_3_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_prog_1_sched_3_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_filtration_prog_1_sched_3_end";
    var init_value = fix_end_dec(get_sched_value(filtration_sched, "program_1_sched_3_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_prog_1_sched_3_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    $(".vigipool_modal_filtration_prog_1_sched_2_add").click(function () {
        $(".vigipool_modal_filtration_prog_1_sched_2_add").hide();
        $(".vigipool_modal_filtration_prog_1_sched_2").show();
    });
    $(".vigipool_modal_filtration_prog_1_sched_3_add").click(function () {
        $(".vigipool_modal_filtration_prog_1_sched_3_add").hide();
        $(".vigipool_modal_filtration_prog_1_sched_3").show();
    });

    // Scheduling - Program 1

    manage_day("samedi");
    manage_day("vendredi");
    manage_day("jeudi");
    manage_day("mercredi");
    manage_day("mardi");
    manage_day("lundi");
    manage_day("dimanche");

    function manage_day(day) {
        $(".vigipool_modal_filtration_prog_1_1_" + day).click(function () {

            if (set_filtration_sched_value_save === "") {
                var filtration_sched = get_value_from_position(eq_modal, "filt_sched");
            } else {
                var filtration_sched = set_filtration_sched_value_save;
            }

            var new_program_1_off_on_and_days = get_sched_value(filtration_sched, "program_1_off_on_and_days");
            console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

            new_program_1_off_on_and_days = converter("dec", "bin", new_program_1_off_on_and_days);
            console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

            var program_off_on = parseInt(new_program_1_off_on_and_days[0]);
            var program_samedi = parseInt(new_program_1_off_on_and_days[1]);
            var program_vendredi = parseInt(new_program_1_off_on_and_days[2]);
            var program_jeudi = parseInt(new_program_1_off_on_and_days[3]);
            var program_mercredi = parseInt(new_program_1_off_on_and_days[4]);
            var program_mardi = parseInt(new_program_1_off_on_and_days[5]);
            var program_lundi = parseInt(new_program_1_off_on_and_days[6]);
            var program_dimanche = parseInt(new_program_1_off_on_and_days[7]);

            if (day === "samedi")
                program_samedi = reverse_bool(program_samedi);
            if (day === "vendredi")
                program_vendredi = reverse_bool(program_vendredi);
            if (day === "jeudi")
                program_jeudi = reverse_bool(program_jeudi);
            if (day === "mercredi")
                program_mercredi = reverse_bool(program_mercredi);
            if (day === "mardi")
                program_mardi = reverse_bool(program_mardi);
            if (day === "lundi")
                program_lundi = reverse_bool(program_lundi);
            if (day === "dimanche")
                program_dimanche = reverse_bool(program_dimanche);

            new_program_1_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
            console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

            new_program_1_off_on_and_days = converter("bin", "dec", new_program_1_off_on_and_days);
            console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

            var new_filtration_sched = set_filtration_sched_value("prog_1_off_on_and_days", new_program_1_off_on_and_days);
            update_vigipool_modal_filtration_prog_1(new_filtration_sched);
        });
    }

    $(".vigipool_modal_filtration_prog_1_button_thermo_off").click(function () {
        if (set_filtration_sched_value_save === "") {
            var filtration_sched = get_value_from_position(eq_modal, "filt_sched");
        } else {
            var filtration_sched = set_filtration_sched_value_save;
        }
        var new_filtration_sched = set_filtration_sched_value("prog_1_bright", 0);
        update_vigipool_modal_filtration_prog_1(new_filtration_sched);
    });
    $(".vigipool_modal_filtration_prog_1_button_thermo_on").click(function () {
        if (set_filtration_sched_value_save === "") {
            var filtration_sched = get_value_from_position(eq_modal, "filt_sched");
        } else {
            var filtration_sched = set_filtration_sched_value_save;
        }
        var new_filtration_sched = set_filtration_sched_value("prog_1_bright", 1);
        update_vigipool_modal_filtration_prog_1(new_filtration_sched);
    });

</script>
