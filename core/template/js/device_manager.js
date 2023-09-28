function change_aux_conf(aux_conf, aux_type, bit, value) {

    var aux_conf = parseInt(aux_conf);
    var aux_type = parseInt(aux_type);

    // console.log("aux_conf = " + aux_conf);

    var aux_conf = converter("dec", "bin", aux_conf);

    // console.log("aux_conf = " + aux_conf);

    var en_marche = aux_conf[7];
    var asservi_filt = aux_conf[6];
    var prio_aux = aux_conf[5];
    var consigne_temp = aux_conf[4];
    var aux_min_temp = aux_conf[3];
    var consigne_orp = aux_conf[2];

    // console.log("aux_conf = " + aux_conf);
    // console.log("en_marche = " + en_marche);
    // console.log("asservi_filt = " + asservi_filt);
    // console.log("prio_aux = " + prio_aux);
    // console.log("consigne_temp = " + consigne_temp);
    // console.log("aux_min_temp = " + aux_min_temp);
    // console.log("consigne_orp = " + consigne_orp);

    // console.log("Before -> " + `00${consigne_orp}${aux_min_temp}${consigne_temp}${prio_aux}${asservi_filt}${en_marche}`);

    switch (aux_type) {
        case 0:
            switch (bit) {
                case 0:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 1:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 2:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 3:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 4:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 5:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                default:
                    console.log(`ERROR : bit not found : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
            }
            break;
        case 1:
            switch (bit) {
                case 0:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 1:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 2:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 3:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 4:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 5:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                default:
                    console.log(`ERROR : bit not found : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
            }
            break;
        case 2:
            switch (bit) {
                case 0:
                    en_marche = value;
                    break;
                case 1:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 2:
                    prio_aux = value;
                    break;
                case 3:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 4:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 5:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                default:
                    console.log(`ERROR : bit not found : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
            }
            break;
        case 3:
            switch (bit) {
                case 0:
                    en_marche = value;
                    break;
                case 1:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 2:
                    prio_aux = value;
                    break;
                case 3:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 4:
                    aux_min_temp = value;
                    break;
                case 5:
                    consigne_orp = value;
                    break;
                default:
                    console.log(`ERROR : bit not found : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
            }
            break;
        case 4:
            switch (bit) {
                case 0:
                    en_marche = value;
                    break;
                case 1:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 2:
                    prio_aux = value;
                    break;
                case 3:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 4:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 5:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                default:
                    console.log(`ERROR : bit not found : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
            }
            break;
        case 5:
            switch (bit) {
                case 0:
                    en_marche = value;
                    break;
                case 1:
                    asservi_filt = value;
                    break;
                case 2:
                    prio_aux = value;
                    break;
                case 3:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 4:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                case 5:
                    console.log(`ERROR : It is forbidden to change the variable in this case : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
                default:
                    console.log(`ERROR : bit not found : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
                    break;
            }
            break;
        default:
            console.log(`ERROR : aux_type not found : aux_conf = ${aux_conf} | aux_type = ${aux_type} | bit = ${bit} | value = ${value}`);
            break;
    }

//    console.log("After -> " + `00${consigne_orp}${aux_min_temp}${consigne_temp}${prio_aux}${asservi_filt}${en_marche}`);

    return converter("bin", "dec", `00${consigne_orp}${aux_min_temp}${consigne_temp}${prio_aux}${asservi_filt}${en_marche}`);
}



function create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value, special = "") {

    // console.log("id = " + id);
    // console.log("init_value = " + init_value);
    // console.log("division = " + division);
    // console.log("unit = " + unit);
    // console.log("disable = " + disable);
    // console.log("type = " + type);
    // console.log("variable = " + variable);
    // console.log("info = " + info);
    // console.log("desired = " + desired);
    // console.log("value = " + value);
    // console.log("special = " + special);

    var slider = document.getElementById("my" + id);
    slider.value = init_value;

    var output = document.getElementById(id);

    if (slider.value == 0 && disable)
        output.innerHTML = get_text("disabled");
    else if (special === "water_hardness")
        output.innerHTML = get_water_hardness(slider.value);
    else if (special === "time_4")
        output.innerHTML = converter("dec", "time_4", parseInt(slider.value));
    else
        output.innerHTML = (slider.value / division) + " " + unit; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        if (slider.value == 0 && disable)
            output.innerHTML = get_text("disabled");
        else if (special === "water_hardness")
            output.innerHTML = get_water_hardness(slider.value);
        else if (special === "time_4")
            output.innerHTML = converter("dec", "time_4", parseInt(slider.value));
        else
            output.innerHTML = (slider.value / division) + " " + unit; // Display the default slider value
    };


    slider.onclick = function () {
        switch (id) {
            case "light_timer":
                var value_mqtt = convert_time_4_to_timer(slider.value * value);
                break;
            default:
                var value_mqtt = slider.value * value;
                break;
        }
        quick_send(type, variable, info, desired, value_mqtt);
    };
    slider.ontouchend = function () {
        switch (id) {
            case "light_timer":
                var value_mqtt = convert_time_4_to_timer(slider.value * value);
                break;
            default:
                var value_mqtt = slider.value * value;
                break;
        }
        quick_send(type, variable, info, desired, value_mqtt);
    };

    //    slider.onabort = function () {
    //        console.log("onabort");
//    }
//    slider.onafterprint = function () {
//        console.log("onafterprint");
//    }
//    slider.onanimationend = function () {
//        console.log("onanimationend");
//    }
//    slider.onanimationiteration = function () {
//        console.log("onanimationiteration");
//    }
//    slider.onanimationstart = function () {
//        console.log("onanimationstart");
//    }
//    slider.onbeforeprint = function () {
//        console.log("onbeforeprint");
//    }
//    slider.onbeforeunload = function () {
//        console.log("onbeforeunload");
//    }
//    slider.onblur = function () {
//        console.log("onblur");
//    }
//    slider.oncanplay = function () {
//        console.log("oncanplay");
//    }
//    slider.oncanplaythrough = function () {
//        console.log("oncanplaythrough");
//    }
//    slider.onchange = function () {
//        console.log("onchange");
//    }
//    slider.onclick = function () {
//        console.log("onclick");
//    }
//    slider.oncontextmenu = function () {
//        console.log("oncontextmenu");
//    }
//    slider.oncopy = function () {
//        console.log("oncopy");
//    }
//    slider.oncut = function () {
//        console.log("oncut");
//    }
//    slider.ondblclick = function () {
//        console.log("ondblclick");
//    }
//    slider.ondrag = function () {
//        console.log("ondrag");
//    }
//    slider.ondragend = function () {
//        console.log("ondragend");
//    }
//    slider.ondragenter = function () {
//        console.log("ondragenter");
//    }
//    slider.ondragleave = function () {
//        console.log("ondragleave");
//    }
//    slider.ondragover = function () {
//        console.log("ondragover");
//    }
//    slider.ondragstart = function () {
//        console.log("ondragstart");
//    }
//    slider.ondrop = function () {
//        console.log("ondrop");
//    }
//    slider.ondurationchange = function () {
//        console.log("ondurationchange");
//    }
//    slider.onended = function () {
//        console.log("onended");
//    }
//    slider.onerror = function () {
//        console.log("onerror");
//    }
//    slider.onfocus = function () {
//        console.log("onfocus");
//    }
//    slider.onfocusin = function () {
//        console.log("onfocusin");
//    }
//    slider.onfocusout = function () {
//        console.log("onfocusout");
//    }
//    slider.onfullscreenchange = function () {
//        console.log("onfullscreenchange");
//    }
//    slider.onfullscreenerror = function () {
//        console.log("onfullscreenerror");
//    }
//    slider.onhashchange = function () {
//        console.log("onhashchange");
//    }
//    slider.oninput = function () {
//        console.log("oninput");
//    }
//    slider.oninvalid = function () {
//        console.log("oninvalid");
//    }
//    slider.onkeydown = function () {
//        console.log("onkeydown");
//    }
//    slider.onkeypress = function () {
//        console.log("onkeypress");
//    }
//    slider.onkeyup = function () {
//        console.log("onkeyup");
//    }
//    slider.onload = function () {
//        console.log("onload");
//    }
//    slider.onloadeddata = function () {
//        console.log("onloadeddata");
//    }
//    slider.onloadedmetadata = function () {
//        console.log("onloadedmetadata");
//    }
//    slider.onloadstart = function () {
//        console.log("onloadstart");
//    }
//    slider.onmessage = function () {
//        console.log("onmessage");
//    }
//    slider.onmousedown = function () {
//        console.log("onmousedown");
//    }
//    slider.onmouseenter = function () {
//        console.log("onmouseenter");
//    }
//    slider.onmouseleave = function () {
//        console.log("onmouseleave");
//    }
//    slider.onmousemove = function () {
//        console.log("onmousemove");
//    }
//    slider.onmouseover = function () {
//        console.log("onmouseover");
//    }
//    slider.onmouseout = function () {
//        console.log("onmouseout");
//    }
//    slider.onmouseup = function () {
//        console.log("onmouseup");
//    }
//    slider.onoffline = function () {
//        console.log("onoffline");
//    }
//    slider.ononline = function () {
//        console.log("ononline");
//    }
//    slider.onopen = function () {
//        console.log("onopen");
//    }
//    slider.onpagehide = function () {
//        console.log("onpagehide");
//    }
//    slider.onpageshow = function () {
//        console.log("onpageshow");
//    }
//    slider.onpaste = function () {
//        console.log("onpaste");
//    }
//    slider.onpause = function () {
//        console.log("onpause");
//    }
//    slider.onplay = function () {
//        console.log("onplay");
//    }
//    slider.onplaying = function () {
//        console.log("onplaying");
//    }
//    slider.onprogress = function () {
//        console.log("onprogress");
//    }
//    slider.onratechange = function () {
//        console.log("onratechange");
//    }
//    slider.onresize = function () {
//        console.log("onresize");
//    }
//    slider.onreset = function () {
//        console.log("onreset");
//    }
//    slider.onscroll = function () {
//        console.log("onscroll");
//    }
//    slider.onsearch = function () {
//        console.log("onsearch");
//    }
//    slider.onseeked = function () {
//        console.log("onseeked");
//    }
//    slider.onseeking = function () {
//        console.log("onseeking");
//    }
//    slider.onselect = function () {
//        console.log("onselect");
//    }
//    slider.onshow = function () {
//        console.log("onshow");
//    }
//    slider.onstalled = function () {
//        console.log("onstalled");
//    }
//    slider.onsubmit = function () {
//        console.log("onsubmit");
//    }
//    slider.onsuspend = function () {
//        console.log("onsuspend");
//    }
//    slider.ontimeupdate = function () {
//        console.log("ontimeupdate");
//    }
//    slider.ontoggle = function () {
//        console.log("ontoggle");
//    }
//    slider.ontouchcancel = function () {
//        console.log("ontouchcancel");
//    }
//    slider.ontouchend = function () {
//        console.log("ontouchend");
//    }
//    slider.ontouchmove = function () {
//        console.log("ontouchmove");
//    }
//    slider.ontouchstart = function () {
//        console.log("ontouchstart");
//    }
//    slider.ontransitionend = function () {
//        console.log("ontransitionend");
//    }
//    slider.onunload = function () {
//        console.log("onunload");
//    }
//    slider.onvolumechange = function () {
//        console.log("onvolumechange");
//    }
//    slider.onwaiting = function () {
//        console.log("onwaiting");
//    }
//    slider.onwheel = function () {
//        console.log("onwheel");
//    }
}

function create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, special = "") {

//    console.log("id = " + id);
//    console.log("init_value = " + init_value);
//    console.log("division = " + division);
//    console.log("unit = " + unit);
//    console.log("disable = " + disable);
//    console.log("type = " + type);
//    console.log("variable = " + variable);
//    console.log("info = " + info);
//    console.log("desired = " + desired);
//    console.log("value = " + value);
//    console.log("special = " + special);

    var slider = document.getElementById("my" + id);
    slider.value = init_value;

    var output = document.getElementById(id);

    if (slider.value == 0 && disable)
        output.innerHTML = get_text("disabled");
    else if (special === "water_hardness")
        output.innerHTML = get_water_hardness(slider.value);
    else if (special === "time_4")
        output.innerHTML = converter("dec", "time_4", parseInt(slider.value));
    else if (special === "time_2")
        output.innerHTML = converter("dec", "time_2", parseInt(slider.value));
    else
        output.innerHTML = (slider.value / division) + " " + unit; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        if (slider.value == 0 && disable)
            output.innerHTML = get_text("disabled");
        else if (special === "water_hardness")
            output.innerHTML = get_water_hardness(slider.value);
        else if (special === "time_4")
            output.innerHTML = converter("dec", "time_4", parseInt(slider.value));
        else if (special === "time_2")
            output.innerHTML = converter("dec", "time_2", parseInt(slider.value));
        else
            output.innerHTML = (slider.value / division) + " " + unit; // Display the default slider value
    };



    slider.onclick = function () {
        switch (variable) {
            case "vigipool_modal_auxiliary_prog_1_consigne_temp" :
                set_auxiliary_sched_value("prog_1_bright", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_1_sched_1_begin" :
                set_auxiliary_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_1_sched_1_end" :
                set_auxiliary_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_1_sched_2_begin" :
                set_auxiliary_sched_value("prog_1_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_1_sched_2_end" :
                set_auxiliary_sched_value("prog_1_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_1_sched_3_begin" :
                set_auxiliary_sched_value("prog_1_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_1_sched_3_end" :
                set_auxiliary_sched_value("prog_1_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_2_sched_1_begin" :
                set_auxiliary_sched_value("prog_2_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_2_sched_1_end" :
                set_auxiliary_sched_value("prog_2_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_2_sched_2_begin" :
                set_auxiliary_sched_value("prog_2_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_2_sched_2_end" :
                set_auxiliary_sched_value("prog_2_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_2_sched_3_begin" :
                set_auxiliary_sched_value("prog_2_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_prog_2_sched_3_end" :
                set_auxiliary_sched_value("prog_2_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_1_sched_1_begin" :
                set_filtration_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_1_sched_1_end" :
                set_filtration_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_1_sched_2_begin" :
                set_filtration_sched_value("prog_1_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_1_sched_2_end" :
                set_filtration_sched_value("prog_1_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_1_sched_3_begin" :
                set_filtration_sched_value("prog_1_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_1_sched_3_end" :
                set_filtration_sched_value("prog_1_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_2_sched_1_begin" :
                set_filtration_sched_value("prog_2_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_2_sched_1_end" :
                set_filtration_sched_value("prog_2_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_2_sched_2_begin" :
                set_filtration_sched_value("prog_2_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_2_sched_2_end" :
                set_filtration_sched_value("prog_2_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_2_sched_3_begin" :
                set_filtration_sched_value("prog_2_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_prog_2_sched_3_end" :
                set_filtration_sched_value("prog_2_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_1_begin" :
                set_light_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_1_end" :
                set_light_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_2_begin" :
                set_light_sched_value("prog_1_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_2_end" :
                set_light_sched_value("prog_1_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_3_begin" :
                set_light_sched_value("prog_1_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_3_end" :
                set_light_sched_value("prog_1_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_1_begin" :
                set_light_sched_value("prog_2_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_1_end" :
                set_light_sched_value("prog_2_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_2_begin" :
                set_light_sched_value("prog_2_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_2_end" :
                set_light_sched_value("prog_2_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_3_begin" :
                set_light_sched_value("prog_2_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_3_end" :
                set_light_sched_value("prog_2_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_bright" :
                set_sched_value("prog_1_bright", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_1_begin" :
                set_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_1_end" :
                set_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_2_begin" :
                set_sched_value("prog_1_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_2_end" :
                set_sched_value("prog_1_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_3_begin" :
                set_sched_value("prog_1_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_3_end" :
                set_sched_value("prog_1_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_bright" :
                set_sched_value("prog_2_bright", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_1_begin" :
                set_sched_value("prog_2_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_1_end" :
                set_sched_value("prog_2_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_2_begin" :
                set_sched_value("prog_2_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_2_end" :
                set_sched_value("prog_2_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_3_begin" :
                set_sched_value("prog_2_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_3_end" :
                set_sched_value("prog_2_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_light_m_prog_1_sched_1_begin" :
                set_light_m_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_light_m_prog_1_sched_1_end" :
                set_light_m_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_1_begin" :
                set_filtration_m_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_1_end" :
                set_filtration_m_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_2_begin" :
                set_filtration_m_sched_value("prog_1_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_2_end" :
                set_filtration_m_sched_value("prog_1_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_3_begin" :
                set_filtration_m_sched_value("prog_1_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_3_end" :
                set_filtration_m_sched_value("prog_1_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_1_prog_1_sched_1_begin" :
                set_auxiliary_1_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_auxiliary_1_prog_1_sched_1_end" :
                set_auxiliary_1_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            default:
                console.log("variable not found : " + variable);
                break;
        }
    };
    slider.ontouchend = function () {
        switch (variable) {
            case "vigipool_modal_light_prog_1_sched_1_begin" :
                set_light_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_1_end" :
                set_light_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_2_begin" :
                set_light_sched_value("prog_1_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_2_end" :
                set_light_sched_value("prog_1_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_3_begin" :
                set_light_sched_value("prog_1_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_1_sched_3_end" :
                set_light_sched_value("prog_1_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_1_begin" :
                set_light_sched_value("prog_2_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_1_end" :
                set_light_sched_value("prog_2_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_2_begin" :
                set_light_sched_value("prog_2_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_2_end" :
                set_light_sched_value("prog_2_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_3_begin" :
                set_light_sched_value("prog_2_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_light_prog_2_sched_3_end" :
                set_light_sched_value("prog_2_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_bright" :
                set_sched_value("prog_1_bright", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_1_begin" :
                set_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_1_end" :
                set_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_2_begin" :
                set_sched_value("prog_1_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_2_end" :
                set_sched_value("prog_1_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_3_begin" :
                set_sched_value("prog_1_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_1_sched_3_end" :
                set_sched_value("prog_1_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_bright" :
                set_sched_value("prog_2_bright", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_1_begin" :
                set_sched_value("prog_2_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_1_end" :
                set_sched_value("prog_2_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_2_begin" :
                set_sched_value("prog_2_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_2_end" :
                set_sched_value("prog_2_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_3_begin" :
                set_sched_value("prog_2_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_x3_state_prog_2_sched_3_end" :
                set_sched_value("prog_2_sched_3_end", slider.value * value);
                break;
            case "vigipool_modal_light_m_prog_1_sched_1_begin" :
                set_light_m_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_light_m_prog_1_sched_1_end" :
                set_light_m_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_1_begin" :
                set_filtration_m_sched_value("prog_1_sched_1_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_1_end" :
                set_filtration_m_sched_value("prog_1_sched_1_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_2_begin" :
                set_filtration_m_sched_value("prog_1_sched_2_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_2_end" :
                set_filtration_m_sched_value("prog_1_sched_2_end", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_3_begin" :
                set_filtration_m_sched_value("prog_1_sched_3_begin", slider.value * value);
                break;
            case "vigipool_modal_filtration_m_prog_1_sched_3_end" :
                set_filtration_m_sched_value("prog_1_sched_3_end", slider.value * value);
                break;
            default:
                console.log("variable not found : " + variable);
                break;
        }
    };

    // test_input(slider);
}

function get_water_hardness(water_hardness) {
    switch (parseInt(water_hardness)) {
        case 0:
            return get_text("very_soft");
        case 1:
            return get_text("soft");
        case 2:
            return get_text("slightly_soft");
        case 3:
            return get_text("slightly_hard");
        case 4:
            return get_text("hard");
        case 5:
            return get_text("very_hard");
    }

}

var last_is_zelix = false;

function is_zelix(eq_position) {

    if (isNaN(eq_position)) {
        return last_is_zelix;
    } else {
        last_is_zelix = false;
    }

    // console.log("eq_position = " + eq_position);

    var all_mqtt_data = get_all_mqtt_data();
    // console.log("all_mqtt_data = " + all_mqtt_data);

    var devices = all_mqtt_data[eq_position];
    // console.log("devices = " + devices);

    const pattern = /zelix_/;
    // console.log("pattern = " + pattern);

    for (var i = 0, max = devices.length; i < max; i++) {
        var device = devices[i];
        // console.log("device = " + device);

        if (pattern.test(devices[i])) {
            // console.log("return true");
            last_is_zelix = true;
            return true;
        }
    }

// console.log("return false");
    last_is_zelix = false;
    return false;
}

function is_device(device_id, device_search) {

    var pattern = /_/;

    switch (device_search) {
        case "tild":
            pattern = /tild_/;
            break;
        case "phileo":
            pattern = /phileox_/;
            break;
        case "ziphox":
            pattern = /ziphox_/;
            break;
        case "ofix":
            pattern = /ziphox_/;
            break;
        case "anteam":
            pattern = /anteam_/;
            break;
        case "zelix":
            pattern = /zelix_/;
            break;
        case "zelia":
            pattern = /zelix_/;
            break;
        case "daisyox":
            pattern = /daisyox_/;
            break;
        default:
            console.log("ERROR device_id = " + device_id);
            break;
    }

    return pattern.test(device_id);
}

function check_screen() {
    var data = $("[data-eqtype='vigipool']").length;
    // console.log("data = " + data);

    for (var i = 0, max = data; i < max; i++) {

        if ($(".ui-mobile").length > 0) {
            // console.log("mobile");
            var perfect_height = $(".scrolling-image").eq(i).height();
            // console.log("perfect_height = " + perfect_height);

            $("[data-eqtype='vigipool']").eq(i).height(perfect_height);


        } else {
            // console.log("fix");
            var width = $("[data-eqtype='vigipool']").eq(i).width();
            var height = $("[data-eqtype='vigipool']").eq(i).height();
            // console.log("width = " + width);
            // console.log("height = " + height);

            if (width < 200 || height < 300) {
                $(".top_box.top_overlay").eq(i).html("<h5>" + get_text("window_size_error") + "</h5>");
            }
        }
    }
}


function check_data() {
    var all_mqtt_data = get_all_mqtt_data();
    // console.log("all_mqtt_data = ");
    // console.log(all_mqtt_data);

    for (var i = 0, max = all_mqtt_data.length; i < max; i++) {
        if (all_mqtt_data[i].length < 2) {
            // console.log("no data found");
            $(".top_box.top_overlay").eq(i).html("<h5>" + get_text("no_mqtt_data") + "</h5>");
        } else {
            // console.log("data found");
        }
    }
}

function convert_time_4_to_timer(value) {
    value = parseInt(value);
    // console.log("Step 1 : value = " + value);

    value = value * (3600 / 4);
    // console.log("Step 2 : value = " + value);

    value = value + Date.now();
    // console.log("Step 3 : value = " + value);

    value = value / 1000;
    // console.log("Step 4 : value = " + value);

    value = parseInt(value);
    // console.log("Step 5 : value = " + value);
    // console.log("Step 6 : debug = 1691148210");

    return value;
}

function binary_to_off_on(binary) {
    switch (binary) {
        case 0:
            return get_text("off");
        case 1:
            return get_text("on");
        default:
            return "-";
    }
}

function binary_to_open_close(binary) {
    switch (binary) {
        case 0:
            return get_text("open");
        case 1:
            return get_text("close");
        default:
            return "-";
    }
}

function link_variable_to_buttons(ely_duration_theo, vigipool_modal_ely_daily_production_duration_, min, max) {

    for (var i = min; i < max; i++) {
        $("." + vigipool_modal_ely_daily_production_duration_ + i).removeClass("btn-primary");
    }

    $("." + vigipool_modal_ely_daily_production_duration_ + ely_duration_theo).addClass("btn-primary");
}


function set_title(ip_selected, id_selected, title_place) {
    // console.log("ip_selected = " + ip_selected);
    // console.log("id_selected = " + id_selected);
    // console.log("title_place = " + title_place);
    $("." + title_place).html(id_selected + " (" + ip_selected + ")");
}

function show_history(flow_on, eq_modal)
{
    eq_modal = parseInt(eq_modal);

    while (eq_modal > 0) {

        var html = $("[data-template='vigipool_" + flow_on + "']").eq(eq_modal).html();

        if (html !== undefined) {
            $("[data-template='vigipool_" + flow_on + "']").eq(eq_modal).click();
            return;
        }

        eq_modal = eq_modal - 1;
    }
}

$('.vigipool_ui_init_fail_button').eq(1).click(function () {
    console.log(`Launching the script (${1})`);
    $('.vigipool_scanner').eq(1).click();
    console.log(`updates ${1}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(2).click(function () {
    console.log(`Launching the script (${2})`);
    $('.vigipool_scanner').eq(2).click();
    console.log(`updates ${2}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(3).click(function () {
    console.log(`Launching the script (${3})`);
    $('.vigipool_scanner').eq(3).click();
    console.log(`updates ${3}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(4).click(function () {
    console.log(`Launching the script (${4})`);
    $('.vigipool_scanner').eq(4).click();
    console.log(`updates ${4}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(5).click(function () {
    console.log(`Launching the script (${5})`);
    $('.vigipool_scanner').eq(5).click();
    console.log(`updates ${5}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(6).click(function () {
    console.log(`Launching the script (${6})`);
    $('.vigipool_scanner').eq(6).click();
    console.log(`updates ${6}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(7).click(function () {
    console.log(`Launching the script (${7})`);
    $('.vigipool_scanner').eq(7).click();
    console.log(`updates ${7}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(8).click(function () {
    console.log(`Launching the script (${8})`);
    $('.vigipool_scanner').eq(8).click();
    console.log(`updates ${8}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(9).click(function () {
    console.log(`Launching the script (${9})`);
    $('.vigipool_scanner').eq(9).click();
    console.log(`updates ${9}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(10).click(function () {
    console.log(`Launching the script (${10})`);
    $('.vigipool_scanner').eq(10).click();
    console.log(`updates ${10}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(11).click(function () {
    console.log(`Launching the script (${11})`);
    $('.vigipool_scanner').eq(11).click();
    console.log(`updates ${11}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(12).click(function () {
    console.log(`Launching the script (${12})`);
    $('.vigipool_scanner').eq(12).click();
    console.log(`updates ${12}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(13).click(function () {
    console.log(`Launching the script (${13})`);
    $('.vigipool_scanner').eq(13).click();
    console.log(`updates ${13}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(14).click(function () {
    console.log(`Launching the script (${14})`);
    $('.vigipool_scanner').eq(14).click();
    console.log(`updates ${14}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(15).click(function () {
    console.log(`Launching the script (${15})`);
    $('.vigipool_scanner').eq(15).click();
    console.log(`updates ${15}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(16).click(function () {
    console.log(`Launching the script (${16})`);
    $('.vigipool_scanner').eq(16).click();
    console.log(`updates ${16}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(17).click(function () {
    console.log(`Launching the script (${17})`);
    $('.vigipool_scanner').eq(17).click();
    console.log(`updates ${17}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(18).click(function () {
    console.log(`Launching the script (${18})`);
    $('.vigipool_scanner').eq(18).click();
    console.log(`updates ${18}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(19).click(function () {
    console.log(`Launching the script (${19})`);
    $('.vigipool_scanner').eq(19).click();
    console.log(`updates ${19}`);
    actualize_data();
});
$('.vigipool_ui_init_fail_button').eq(20).click(function () {
    console.log(`Launching the script (${20})`);
    $('.vigipool_scanner').eq(20).click();
    console.log(`updates ${20}`);
    actualize_data();
});
// Hist

$('.vigipool_ui_value_ph_ui').unbind();
$('.vigipool_ui_value_ph_ui').eq(0).click(function () {
    $("[data-template='vigipool_value_ph']").eq(0).click();
});
$('.vigipool_ui_value_ph_ui').eq(1).click(function () {
    $("[data-template='vigipool_value_ph']").eq(1).click();
});
$('.vigipool_ui_value_ph_ui').eq(2).click(function () {
    $("[data-template='vigipool_value_ph']").eq(2).click();
});
$('.vigipool_ui_value_ph_ui').eq(3).click(function () {
    $("[data-template='vigipool_value_ph']").eq(3).click();
});
$('.vigipool_ui_value_ph_ui').eq(4).click(function () {
    $("[data-template='vigipool_value_ph']").eq(4).click();
});
$('.vigipool_ui_value_ph_ui').eq(5).click(function () {
    $("[data-template='vigipool_value_ph']").eq(5).click();
});
$('.vigipool_ui_value_ph_ui').eq(6).click(function () {
    $("[data-template='vigipool_value_ph']").eq(6).click();
});
$('.vigipool_ui_value_ph_ui').eq(7).click(function () {
    $("[data-template='vigipool_value_ph']").eq(7).click();
});
$('.vigipool_ui_value_ph_ui').eq(8).click(function () {
    $("[data-template='vigipool_value_ph']").eq(8).click();
});
$('.vigipool_ui_value_ph_ui').eq(9).click(function () {
    $("[data-template='vigipool_value_ph']").eq(9).click();
});
$('.vigipool_ui_value_ph_ui').eq(10).click(function () {
    $("[data-template='vigipool_value_ph']").eq(10).click();
});
$('.vigipool_ui_value_ph_ui').eq(11).click(function () {
    $("[data-template='vigipool_value_ph']").eq(11).click();
});
$('.vigipool_ui_value_ph_ui').eq(12).click(function () {
    $("[data-template='vigipool_value_ph']").eq(12).click();
});
$('.vigipool_ui_value_ph_ui').eq(13).click(function () {
    $("[data-template='vigipool_value_ph']").eq(13).click();
});
$('.vigipool_ui_value_ph_ui').eq(14).click(function () {
    $("[data-template='vigipool_value_ph']").eq(14).click();
});
$('.vigipool_ui_value_ph_ui').eq(15).click(function () {
    $("[data-template='vigipool_value_ph']").eq(15).click();
});
$('.vigipool_ui_value_ph_ui').eq(16).click(function () {
    $("[data-template='vigipool_value_ph']").eq(16).click();
});
$('.vigipool_ui_value_ph_ui').eq(17).click(function () {
    $("[data-template='vigipool_value_ph']").eq(17).click();
});
$('.vigipool_ui_value_ph_ui').eq(18).click(function () {
    $("[data-template='vigipool_value_ph']").eq(18).click();
});
$('.vigipool_ui_value_ph_ui').eq(19).click(function () {
    $("[data-template='vigipool_value_ph']").eq(19).click();
});
$('.vigipool_ui_value_ph_ui').eq(20).click(function () {
    $("[data-template='vigipool_value_ph']").eq(20).click();
});
$('.vigipool_ui_value_orp_ui').unbind();
$('.vigipool_ui_value_orp_ui').eq(0).click(function () {
    $("[data-template='vigipool_value_orp']").eq(0).click();
});
$('.vigipool_ui_value_orp_ui').eq(1).click(function () {
    $("[data-template='vigipool_value_orp']").eq(1).click();
});
$('.vigipool_ui_value_orp_ui').eq(2).click(function () {
    $("[data-template='vigipool_value_orp']").eq(2).click();
});
$('.vigipool_ui_value_orp_ui').eq(3).click(function () {
    $("[data-template='vigipool_value_orp']").eq(3).click();
});
$('.vigipool_ui_value_orp_ui').eq(4).click(function () {
    $("[data-template='vigipool_value_orp']").eq(4).click();
});
$('.vigipool_ui_value_orp_ui').eq(5).click(function () {
    $("[data-template='vigipool_value_orp']").eq(5).click();
});
$('.vigipool_ui_value_orp_ui').eq(6).click(function () {
    $("[data-template='vigipool_value_orp']").eq(6).click();
});
$('.vigipool_ui_value_orp_ui').eq(7).click(function () {
    $("[data-template='vigipool_value_orp']").eq(7).click();
});
$('.vigipool_ui_value_orp_ui').eq(8).click(function () {
    $("[data-template='vigipool_value_orp']").eq(8).click();
});
$('.vigipool_ui_value_orp_ui').eq(9).click(function () {
    $("[data-template='vigipool_value_orp']").eq(9).click();
});
$('.vigipool_ui_value_orp_ui').eq(10).click(function () {
    $("[data-template='vigipool_value_orp']").eq(10).click();
});
$('.vigipool_ui_value_orp_ui').eq(11).click(function () {
    $("[data-template='vigipool_value_orp']").eq(11).click();
});
$('.vigipool_ui_value_orp_ui').eq(12).click(function () {
    $("[data-template='vigipool_value_orp']").eq(12).click();
});
$('.vigipool_ui_value_orp_ui').eq(13).click(function () {
    $("[data-template='vigipool_value_orp']").eq(13).click();
});
$('.vigipool_ui_value_orp_ui').eq(14).click(function () {
    $("[data-template='vigipool_value_orp']").eq(14).click();
});
$('.vigipool_ui_value_orp_ui').eq(15).click(function () {
    $("[data-template='vigipool_value_orp']").eq(15).click();
});
$('.vigipool_ui_value_orp_ui').eq(16).click(function () {
    $("[data-template='vigipool_value_orp']").eq(16).click();
});
$('.vigipool_ui_value_orp_ui').eq(17).click(function () {
    $("[data-template='vigipool_value_orp']").eq(17).click();
});
$('.vigipool_ui_value_orp_ui').eq(18).click(function () {
    $("[data-template='vigipool_value_orp']").eq(18).click();
});
$('.vigipool_ui_value_orp_ui').eq(19).click(function () {
    $("[data-template='vigipool_value_orp']").eq(19).click();
});
$('.vigipool_ui_value_orp_ui').eq(20).click(function () {
    $("[data-template='vigipool_value_orp']").eq(20).click();
}
);