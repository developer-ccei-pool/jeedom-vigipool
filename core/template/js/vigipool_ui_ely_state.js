$(".vigipool_ui_prod_on_label > p").html(get_text("electrolyse"));
$(".vigipool_ui_prod_chlore_label > p").html(get_text("chlorine_prod"));

function update_vigipool_ui_ely_state() {

    var max_devices = $(".vigipool_ipaddr").length;

    $(".vigipool_ui_couv_on_label > p").html(get_text("cover"));
    $(".vigipool_ui_cell_flow_label > p").html(get_text("cell_flow"));

    for (var i = 0, max = max_devices; i < max; i++) {

        // On Off
        var flow_on = parseInt(get_value_from_eq(i, "flow_on", "zelix"));
        // console.log("flow_on = " + flow_on);
        switch (flow_on) {
            case 0:
                $(".vigipool_ui_prod_on_state > p").eq(i).html("Off");
                break;
            case 1:
                $(".vigipool_ui_prod_on_state > p").eq(i).html("On");
                break;
        }

        // Mod
        var mode_ely = get_value_from_position(i, "mode_ely");
        switch (mode_ely) {
            case 0:
                $(".vigipool_ui_mode_ely_state > p").eq(i).html("OFF");
                break;
            case 1:
                $(".vigipool_ui_mode_ely_state > p").eq(i).html("PROG");
                break;
            case 2:
                $(".vigipool_ui_mode_ely_state > p").eq(i).html("AUTO");
                break;
            case 3:
                $(".vigipool_ui_mode_ely_state > p").eq(i).html("REGU");
                break;
        }

        // Prod Chlore
        var prod_chlore = get_value_from_position(i, "prod_chlore");
        $(".vigipool_ui_prod_chlore_state > p").eq(i).html(prod_chlore + " g/h");

        // Flux Celulle
        var flow_on = get_value_from_position(i, "flow_on");
        switch (flow_on) {
            case 0:
                $(".vigipool_ui_cell_flow_state > p").eq(i).html("⬤ " + binary_to_off_on(flow_on));
                break;
            case 1:
                $(".vigipool_ui_cell_flow_state > p").eq(i).html("<p style=\"color:#085a7d\">" + "⬤ " + binary_to_off_on(flow_on) + "</p>");
                break;
            default:
                break;
        }

        // Couverture
        var couv_on = get_value_from_position(i, "couv_on");
        switch (couv_on) {
            case 0:
                $(".vigipool_ui_couv_on_state > p").eq(i).html("⬤ " + binary_to_open_close(couv_on));
                break;
            case 1:
                $(".vigipool_ui_couv_on_state > p").eq(i).html("<p style=\"color:#085a7d\">" + "⬤ " + binary_to_open_close(couv_on) + "</p>");
                break;
            default:
                break;
        }

        // Display
        var device_id = get_value_from_position(i, "device_id");
        var ipaddr = get_value_from_position(i, "ipaddr");
        // console.log("device_id = " + device_id);
        // console.log("ipaddr = " + ipaddr);

        if (flow_on === undefined || !is_zelix(i)) {
            $(".vigipool_ui_prod_on_label").eq(i).hide();
            $(".vigipool_ui_prod_on_state").eq(i).hide();
        } else {
            $(".vigipool_ui_prod_on_label").eq(i).show();
            $(".vigipool_ui_prod_on_state").eq(i).show();
        }
        if (mode_ely === undefined || !is_zelix(i)) {
            $(".vigipool_ui_mode_ely_label").eq(i).hide();
            $(".vigipool_ui_mode_ely_state").eq(i).hide();
        } else {
            $(".vigipool_ui_mode_ely_label").eq(i).show();
            $(".vigipool_ui_mode_ely_state").eq(i).show();
        }
        if (prod_chlore === undefined || !is_zelix(i)) {
            $(".vigipool_ui_prod_chlore_label").eq(i).hide();
            $(".vigipool_ui_prod_chlore_state").eq(i).hide();
        } else {
            $(".vigipool_ui_prod_chlore_label").eq(i).show();
            $(".vigipool_ui_prod_chlore_state").eq(i).show();
        }
        if (prod_chlore === undefined || !is_zelix(i)) {
            $(".vigipool_ui_prod_chlore_label").eq(i).hide();
            $(".vigipool_ui_prod_chlore_state").eq(i).hide();
            $(".vigipool_ui_cell_flow_label").eq(i).hide();
            $(".vigipool_ui_cell_flow_state").eq(i).hide();
        } else {
            $(".vigipool_ui_prod_chlore_label").eq(i).show();
            $(".vigipool_ui_prod_chlore_state").eq(i).show();
            $(".vigipool_ui_cell_flow_label").eq(i).show();
            $(".vigipool_ui_cell_flow_state").eq(i).show();
        }
        if (couv_on === undefined || !is_zelix(i)) {
            $(".vigipool_ui_couv_on_label").eq(i).hide();
            $(".vigipool_ui_couv_on_state").eq(i).hide();
        } else {
            $(".vigipool_ui_couv_on_label").eq(i).show();
            $(".vigipool_ui_couv_on_state").eq(i).show();
        }

    }
}