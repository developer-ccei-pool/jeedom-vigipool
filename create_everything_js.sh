cd "./core/template/js/"

########################

# Common

cat retrieve_and_store_data.js > everything.js
cat debug.js >> everything.js
cat mqtt.js >> everything.js

cat language_english.js >> everything.js
cat language_french.js >> everything.js
cat language_german.js >> everything.js
cat language_italian.js >> everything.js
cat language_spanish.js >> everything.js
cat translate_text.js >> everything.js

cat device_manager.js >> everything.js
cat access_modals.js >> everything.js
cat converter.js >> everything.js

cat vigipool_ui_logo.js >> everything.js
cat vigipool_ui_mqtt.js >> everything.js
cat vigipool_ui_water.js >> everything.js

cat vigipool_modal_all.js >> everything.js

# x312

cat vigipool_ui_x3_state.js >> everything.js
cat vigipool_modal_x3_state.js >> everything.js
cat vigipool_modal_x3_state_prog_1.js >> everything.js
cat vigipool_modal_x3_state_prog_2.js >> everything.js

# Tild

## UI

cat vigipool_ui_light_state.js >> everything.js
cat vigipool_ui_filt_state.js >> everything.js
cat vigipool_ui_aux_state.js >> everything.js

## Modal

cat vigipool_modal_light.js >> everything.js
cat vigipool_modal_light_prog_1.js >> everything.js
cat vigipool_modal_light_prog_2.js >> everything.js

cat vigipool_modal_filtration.js >> everything.js
cat vigipool_modal_filtration_prog_1.js >> everything.js
cat vigipool_modal_filtration_prog_2.js >> everything.js

cat vigipool_modal_auxiliary.js >> everything.js
cat vigipool_modal_auxiliary_prog_1.js >> everything.js
cat vigipool_modal_auxiliary_prog_2.js >> everything.js

cat vigipool_modal_light_advanced_options.js >> everything.js
cat vigipool_modal_filtration_advanced_options.js >> everything.js
cat vigipool_modal_auxiliary_advanced_options.js >> everything.js

# Anteam

## UI

cat vigipool_ui_light_m_state.js >> everything.js
cat vigipool_ui_filt_m_state.js >> everything.js
cat vigipool_ui_aux1_state.js >> everything.js
cat vigipool_ui_aux2_state.js >> everything.js

## Modal

cat vigipool_modal_light_m.js >> everything.js
cat vigipool_modal_light_m_prog_1.js >> everything.js
cat vigipool_modal_filtration_m.js >> everything.js
cat vigipool_modal_filtration_m_prog_1.js >> everything.js
cat vigipool_modal_auxiliary_1.js >> everything.js
cat vigipool_modal_auxiliary_1_prog_1.js >> everything.js
cat vigipool_modal_auxiliary_2.js >> everything.js

# PhileoX / Phileo VP

## UI

cat vigipool_ui_source_ph.js >> everything.js
cat vigipool_ui_source_orp.js >> everything.js
cat vigipool_ui_value_ph.js >> everything.js
cat vigipool_ui_value_orp.js >> everything.js

## Modal

cat vigipool_modal_ph.js >> everything.js
cat vigipool_modal_orp.js >> everything.js

# Zelix / Zelia

## UI

cat vigipool_ui_ely_state.js >> everything.js

## Modal

cat vigipool_modal_ely.js >> everything.js

# End

cat listen_system.js >> everything.js

########################

# cd ..
# cd ..
# cd ..

# zip -r vigipool.zip *
