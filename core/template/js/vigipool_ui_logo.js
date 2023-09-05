function update_vigipool_ui_logo() {

    var max_devices = $(".vigipool_ipaddr").length;
    // console.log("max_devices = " + max_devices);

    for (var i = 0, max = max_devices; i < max; i++) {

        var sw_vers = get_value_from_position(i, "sw_vers");
        // console.log("sw_vers = " + sw_vers);

        if (!is_variable_available(i, "sw_vers")) {
            $(".vigipool_ui_device").eq(i).html("v");
        } else if (sw_vers !== undefined) {
            sw_vers = sw_vers.toString(16);
            sw_vers = sw_vers / 100;
            $(".vigipool_ui_device").eq(i).html("v" + sw_vers);
        }
    }
}