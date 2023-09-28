function common_modals_finish_load() {
    $(document).ready(function () {
        check_all("5");
    });
}

function access_modal(id, modal, id_position, modal_position = id_position) {

//    console.log("id = " + id);
//    console.log("modal = " + modal);
//    console.log("id_position = " + id_position);

    $(id).eq(id_position).click(function () {

        devices = Array();
//        console.log("devices = " + devices);

//        console.log("modal = " + modal);

        var title = modal_to_title(modal);

//        console.log("title = " + title);

        $('#md_modal')
                .dialog({title: title})
                .load('index.php?v=d&plugin=vigipool&eq_modal=' + modal_position + '&modal=' + modal + '&id=' + $('.eqLogicAttr[data-l1key=id]').value())
                .dialog('open');
    });
}

access_modal(".vigipool_ui_logo", "vigipool_modal_all", eq);

access_modal(".vigipool_ui_light_circle", "vigipool_modal_light", eq);
access_modal(".vigipool_ui_tild_flow_on_1", "vigipool_modal_filtration", eq);
access_modal(".vigipool_ui_tild_flow_on_2", "vigipool_modal_filtration", eq);
access_modal(".vigipool_ui_tild_flow_on_3", "vigipool_modal_filtration", eq);
access_modal(".vigipool_ui_tild_flow_on_4", "vigipool_modal_filtration", eq);
access_modal(".vigipool_ui_aux_state", "vigipool_modal_auxiliary", eq);

access_modal(".vigipool_ui_source_ph_state > p", "vigipool_modal_ph", eq);
access_modal(".vigipool_ui_source_orp_state > p", "vigipool_modal_orp", eq);

access_modal(".vigipool_ui_light_m_circle", "vigipool_modal_light_m", eq);
access_modal(".vigipool_ui_tild_flow_on_m_1", "vigipool_modal_filtration_m", eq);
access_modal(".vigipool_ui_tild_flow_on_m_2", "vigipool_modal_filtration_m", eq);
access_modal(".vigipool_ui_tild_flow_on_m_3", "vigipool_modal_filtration_m", eq);
access_modal(".vigipool_ui_tild_flow_on_m_4", "vigipool_modal_filtration_m", eq);
access_modal(".vigipool_ui_aux1_state", "vigipool_modal_auxiliary_1", eq);
access_modal(".vigipool_ui_aux2_state", "vigipool_modal_auxiliary_2", eq);

access_modal(".vigipool_ui_x3_state_label", "vigipool_modal_x3_state", eq);
access_modal(".vigipool_ui_x3_state_state", "vigipool_modal_x3_state", eq);

access_modal(".vigipool_ui_prod_on_label", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_prod_on_state", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_mode_ely_label", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_mode_ely_state", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_prod_chlore_label", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_prod_chlore_state", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_cell_flow_label", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_cell_flow_state", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_couv_on_label", "vigipool_modal_ely", eq);
access_modal(".vigipool_ui_couv_on_state", "vigipool_modal_ely", eq);


function modal_to_title(modal) {
    if (modal === "vigipool_modal_all")
        return get_text("vigipool_modal_all");
    else if (modal === "vigipool_modal_light")
        return get_text("vigipool_modal_light");
    else if (modal === "vigipool_modal_filtration")
        return get_text("vigipool_modal_filtration");
    else if (modal === "vigipool_modal_filtration")
        return get_text("vigipool_modal_filtration");
    else if (modal === "vigipool_modal_filtration")
        return get_text("vigipool_modal_filtration");
    else if (modal === "vigipool_modal_filtration")
        return get_text("vigipool_modal_filtration");
    else if (modal === "vigipool_modal_auxiliary")
        return get_text("vigipool_modal_auxiliary");
    else if (modal === "vigipool_modal_ph")
        return get_text("vigipool_modal_ph");
    else if (modal === "vigipool_modal_orp")
        return get_text("vigipool_modal_orp");
    else if (modal === "vigipool_modal_light_m")
        return get_text("vigipool_modal_light_m");
    else if (modal === "tild_modal_filt_m")
        return get_text("tild_modal_filt_m");
    else if (modal === "vigipool_modal_auxiliary_1")
        return get_text("vigipool_modal_auxiliary_1");
    else if (modal === "vigipool_modal_auxiliary_2")
        return get_text("vigipool_modal_auxiliary_2");
    else if (modal === "vigipool_modal_ely")
        return get_text("vigipool_modal_ely");
    else if (modal === "vigipool_modal_x3_state")
        return get_text("vigipool_modal_x3_state");
    else if (modal === "vigipool_modal_x3_state_prog_1")
        return get_text("vigipool_modal_x3_state_prog_1");
    else if (modal === "vigipool_modal_x3_state_prog_2")
        return get_text("vigipool_modal_x3_state_prog_2");
    else {
        console.log("ERROR : modal_to_title = " + modal);
    }

}