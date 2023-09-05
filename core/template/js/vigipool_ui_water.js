// Text

$(".vigipool_ui_water").html(get_text("water"));


var length = $(".vigipool_ui_water_temp").length;
//console.log("length = " + length);

$('.vigipool_ui_water_temp').unbind();

for (var i = 0; i < length; i++) {
    $(".vigipool_ui_water_temp").eq(i).attr("equipement_position", i);
    $('.vigipool_ui_water_temp').eq(i).click(function () {
        console.log(this);
        var equipement_position = this.getAttribute("equipement_position");
        console.log("equipement_position = " + equipement_position);
        $("[data-template='vigipool_value_temp']").eq(equipement_position).click();
    });
}

function update_vigipool_ui_water() {
    assign_element_to_value("vigipool_ui_water_temp", "vigipool_value_temp_unit", "vigipool_value_temp_unit", eq);
}
