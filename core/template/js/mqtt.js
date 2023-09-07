var eq_modal = 0;

function parse_int_html(clas, eq_modal)
{
    var result_with_eq = parseInt($("." + clas).eq(eq_modal).html());
    if (!Number.isNaN(result_with_eq))
        return result_with_eq;

    var result_without_eq = parseInt($("." + clas).html());
    if (!Number.isNaN(result_without_eq))
        return result_without_eq;
}

function assign_element_to_value(element, value, unit, eq) {
    if (error_value_temp(eq)) {
        $(".vigipool_ui_water_temp").eq(eq).html("--");
    } else {
        $(".vigipool_ui_water_temp").eq(eq).html($(".vigipool_value_temp").eq(eq).html() + $(".vigipool_value_temp_unit").eq(eq).html());
    }
}



function get_value(element, eq) {
    $("." + element).eq(eq).html();
}

function quick_assign(button, type, variable, info, desired, value) {
    $(button).click(function () {
        var devices = get_master_and_slaves(eq_modal);
        // console.log("devices = " + devices);
        for (var i = 0, max = devices.length - 1; i < max; i++) {
            mosquitto_pub(devices[i], type, variable, info, desired, ip_selected, value);
        }
        actualize_data();
    });
}

function quick_assign_sched(button, type, variable, info, desired, value) {

    // console.log("LAG TEST 3");

    $(button).click(function () {

        // console.log("button = " + button);
        // console.log("type = " + type);
        // console.log("variable = " + variable);
        // console.log("info = " + info);
        // console.log("desired = " + desired);
        // console.log("value = " + value);

        var final_value = "";

        if (variable === "x3_state") {
            // x3_state
            // 02020A64010488FE5464010C90
            // 020E6464010488715464010C90
            var x3_sched = get_value_from_position(eq_modal, "x3_sched"); // 02020A64010488FE5464010C90
            // console.log("x3_sched = " + x3_sched);

            var off_on_day = converter("hex", "bin", x3_sched[2] + x3_sched[3]); // 00000010
            // console.log("off_on_day = " + off_on_day);

            off_on_day = off_on_day.replaceAt(0, value); // 10000010
            // console.log("off_on_day = " + off_on_day);

            off_on_day = converter("bin", "hex", off_on_day); // 82
            // console.log("off_on_day = " + off_on_day);

            x3_sched = x3_sched.replaceAt(2, off_on_day); // 10000010
            // console.log("x3_sched = " + x3_sched);

            final_value = x3_sched;
            // console.log("off_on_day = " + off_on_day);
        } else if (variable === "x3_state_samedi") {
            final_value = replace_in_hex(1, value);
        } else if (variable === "x3_state_vendredi") {
            final_value = replace_in_hex(2, value);
        } else if (variable === "x3_state_jeudi") {
            final_value = replace_in_hex(3, value);
        } else if (variable === "x3_state_mercredi") {
            final_value = replace_in_hex(4, value);
        } else if (variable === "x3_state_mardi") {
            final_value = replace_in_hex(5, value);
        } else if (variable === "x3_state_lundi") {
            final_value = replace_in_hex(6, value);
        } else if (variable === "x3_state_dimanche") {
            final_value = replace_in_hex(7, value);
        } else if (variable === "x3_state_begin_1") {
            final_value = replace_in_hex(7, value);
        } else if (variable === "x3_state_end_1") {
            final_value = replace_in_hex(7, value);
        } else {
            // console.log("ERROR variable = " + variable);
        }

        var devices = get_master_and_slaves(eq_modal);
        // console.log("devices = " + devices);

        for (var i = 0, max = devices.length - 1; i < max; i++) {
            mosquitto_pub(devices[i], "s44_w", "x3_sched", "info", "desired", ip_selected, final_value);
        }
        actualize_data();
    });
}

function replace_in_hex(position, value) {

    // console.log("position = " + position);
    // console.log("value = " + value);

    // x3_state
    // 02020A64010488FE5464010C90
    // 020E6464010488715464010C90
    var x3_sched = get_value_from_position(eq_modal, "x3_sched"); // 02020A64010488FE5464010C90
    // console.log("x3_sched = " + x3_sched + " (02020A64010488FE5464010C90)");

    var off_on_day = converter("hex", "bin", x3_sched[2] + x3_sched[3]); // 00000010
    // console.log("off_on_day = " + off_on_day + " (00000010)");

    var bit_0 = off_on_day[0];
    var bit_1 = off_on_day[1];
    var bit_2 = off_on_day[2];
    var bit_3 = off_on_day[3];
    var bit_4 = off_on_day[4];
    var bit_5 = off_on_day[5];
    var bit_6 = off_on_day[6];
    var bit_7 = off_on_day[7];

    if (position === 0)
        bit_0 = value;
    if (position === 1)
        bit_1 = value;
    if (position === 2)
        bit_2 = value;
    if (position === 3)
        bit_3 = value;
    if (position === 4)
        bit_4 = value;
    if (position === 5)
        bit_5 = value;
    if (position === 6)
        bit_6 = value;
    if (position === 7)
        bit_7 = value;

    var off_on_day = bit_0 + bit_1 + bit_2 + bit_3 + bit_4 + bit_5 + bit_6 + bit_7;
    // console.log("off_on_day = " + off_on_day + " (10000010)");

    off_on_day = converter("bin", "hex", off_on_day); // 82
    // console.log("off_on_day = " + off_on_day + " (82)");

    x3_sched = x3_sched.replaceAt(2, off_on_day); // 10000010
    // console.log("x3_sched = " + x3_sched + " (02820A64010488FE5464010C90)");

    final_value = x3_sched;
    // console.log("off_on_day = " + off_on_day + " (02820A64010488FE5464010C90)");

    return final_value;
}

function quick_send(type, variable, info, desired, value) {
    var devices = get_master_and_slaves(eq_modal);

    // console.log("devices = ");
    // console.log(devices);

    for (var i = 0, max = devices.length - 1; i < max; i++) {
        mosquitto_pub(devices[i], type, variable, info, desired, ip_selected, value);
    }

    actualize_data();
}

function insert_value_in_sched(position, value) {
    var x3_sched = get_value_from_position(eq_modal, "x3_sched"); // 02020A64010488FE5464010C90
    // console.log("x3_sched = " + x3_sched);

    var value = converter("dec", "hex", value); // 82
    // console.log("value = " + value);

    x3_sched = x3_sched.replaceAt(position, value); // 10000010
    // console.log("x3_sched = " + x3_sched);

    return final_value = x3_sched;
}

function actualize_data() {
    setTimeout(function () {
        $('[data-eqtype=\'vigipool\'] > center > span.cmd.refresh.pull-right.cursor > i').click();
    }, 2222);
    setTimeout(function () {
        $('[data-eqtype=\'vigipool\'] > center > span.cmd.refresh.pull-right.cursor > i').click();
    }, 4444);
    setTimeout(function () {
        $('[data-eqtype=\'vigipool\'] > center > span.cmd.refresh.pull-right.cursor > i').click();
    }, 6666);
    setTimeout(function () {
        $('[data-eqtype=\'vigipool\'] > center > span.cmd.refresh.pull-right.cursor > i').click();
    }, 8888);
}

function check_variable_device(device, type, variable) {

    // console.log("device = " + device);
    // console.log("type = " + type);
    // console.log("variable = " + variable);

    get_all_mqtt_data();

    var eq_mqtt_data = all_mqtt_data[eq_modal];
    // console.log("eq_mqtt_data = " + eq_mqtt_data);

    for (var i = 0, max = eq_mqtt_data.length; i < max; i++) {

        var eq_mqtt_line = eq_mqtt_data[i];
        // console.log("eq_mqtt_line = " + eq_mqtt_line);

        if (eq_mqtt_line.includes(device + "/")) {
            if (eq_mqtt_line.includes("/" + type + "/")) {
                if (eq_mqtt_line.includes("/" + variable + "/")) {
                    // console.log("check_variable_device return true");
                    return true;
                } else {
                    // console.log("wrong variable = " + variable);
                }
            } else {
                // console.log("wrong type = " + type);
            }
        }
    }

    // console.log("check_variable_device return false");
    return false;
}

function mosquitto_pub($device, $type, $variable, $info, $desired, $ip, $value) {
    var check = check_variable_device($device, $type, $variable);
    // console.log("check = " + check);

    if (check) {
        $.ajax({
            url: '/plugins/vigipool/core/ajax/mosquitto_pub.php',
            type: "post",
            data: {device: $device, type: $type, variable: $variable, info: $info, desired: $desired, ip: $ip, value: $value},
            success: function (data) {
                // console.log('mosquitto_pub = ' + data);
            }
        });
    }
}

var all_mqtt_data = Array();

function get_all_mqtt_data()
{
    if (arrayIsEmpty(all_mqtt_data)) {

        var vigipool_ipaddr_length = $(".vigipool_ipaddr").length;
        // console.log("vigipool_ipaddr_length = " + vigipool_ipaddr_length);

        for (var i = 0, max = vigipool_ipaddr_length; i < max; i++) {

            var vigipool_ipaddr_i = $(".vigipool_ipaddr").eq(i).html();
            // console.log("vigipool_ipaddr_i = " + vigipool_ipaddr_i);

            $.ajax({
                url: '/plugins/vigipool/core/ajax/mosquitto_sub_all.php',
                type: "post",
                async: false,
                cache: false,
                data: {ip: vigipool_ipaddr_i},
                success: function (data) {
                    // console.log("data = " + data);
                    all_mqtt_data.push(data);
                }
            });
        }

        for (var i = 0, max = vigipool_ipaddr_length; i < max; i++) {
            all_mqtt_data[i] = all_mqtt_data[i].split("\n");
        }

        // console.log("all_mqtt_data = ");
        // console.log(all_mqtt_data);
    }

    return all_mqtt_data;
}

var last_master_and_slaves = Array();

function get_master_and_slaves(eq_position) {

    var devices = Array();

    if (isNaN(eq_position)) {
        return last_master_and_slaves;
    } else {
        last_master_and_slaves = Array();
    }

    // console.log("eq_position = " + eq_position);

    get_all_mqtt_data();

    var eq_mqtt_data = all_mqtt_data[eq_position];
    // console.log("eq_mqtt_data = ");
    // console.log(eq_mqtt_data);

    for (var i = 0, max = eq_mqtt_data.length; i < max; i++) {

        var data = eq_mqtt_data[i];
        // console.log("data = " + data);

        var data_split = data.split("/");
        // console.log("data_split = " + data_split);

        var device = data_split[0];
        // console.log("device = " + device);

        if (devices.includes(device)) {

        } else {
            devices.push(device);
        }
    }

    // console.log("devices = " + devices);

    last_master_and_slaves = devices;

    return devices;
}

function arrayIsEmpty(array) {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
        return false;
    }
    //If it is an array, check its length property
    if (array.length === 0) {
        //Return TRUE if the array is empty
        return true;
    }
    //Otherwise, return FALSE.
    return false;
}

function is_variable_available(eq_position, variable) {

    // console.log("eq_position = " + eq_position);

    get_all_mqtt_data();

    var eq_mqtt_data = all_mqtt_data[eq_position];
    // console.log("eq_mqtt_data = ");
    // console.log(eq_mqtt_data);

    for (var i = 0, max = eq_mqtt_data.length; i < max; i++) {
        var eq_mqtt_line = eq_mqtt_data[i];
        if (eq_mqtt_line.includes("/" + variable + "/")) {
            return true;
        }
    }

    return false;
}

function error_value_temp(eq_position) {
    get_all_mqtt_data();

    var eq_mqtt_data = all_mqtt_data[eq_position];
    // console.log("eq_mqtt_data = ");
    // console.log(eq_mqtt_data);

    for (var i = 0, max = eq_mqtt_data.length; i < max; i++) {
        var eq_mqtt_line = eq_mqtt_data[i];
        if (eq_mqtt_line.includes("/value_temp/")) {
            if (eq_mqtt_line.includes("65535")) {
                return true;
            }
        }
    }

    return false;
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
