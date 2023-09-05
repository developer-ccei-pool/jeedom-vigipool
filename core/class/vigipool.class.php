<?php

/* This file is part of Jeedom.
 *
 * Jeedom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Jeedom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

/* * ***************************Includes********************************* */
require_once __DIR__ . "/../../../../core/php/core.inc.php";

class vigipool extends eqLogic {
    /*     * *************************Attributs****************************** */

    /*
     * Permet de définir les possibilités de personnalisation du widget (en cas d'utilisation de la fonction 'toHtml' par exemple)
     * Tableau multidimensionnel - exemple: array('custom' => true, 'custom::layout' => false)
      public static $_widgetPossibility = array();
     */

    /*
     * Permet de crypter/décrypter automatiquement des champs de configuration du plugin
     * Exemple : "param1" & "param2" seront cryptés mais pas "param3"
      public static $_encryptConfigKey = array('param1', 'param2');
     */

    /*     * ***********************Methode static*************************** */

    /*
     * Fonction exécutée automatiquement toutes les minutes par Jeedom
     */

    public static function cron() {

        foreach (self::byType('vigipool', true) as $vigipool) {
            $cmd = $vigipool->getCmd(null, 'refresh');
            if (!is_object($cmd)) {
                continue;
            }
            $cmd->execCmd();
        }
    }

    /*
     * Fonction exécutée automatiquement toutes les 5 minutes par Jeedom
      public static function cron5() {}
     */

    /*
     * Fonction exécutée automatiquement toutes les 10 minutes par Jeedom
      public static function cron10() {}
     */

    /*
     * Fonction exécutée automatiquement toutes les 15 minutes par Jeedom
      public static function cron15() {}
     */

    /*
     * Fonction exécutée automatiquement toutes les 30 minutes par Jeedom
      public static function cron30() {}
     */

    /*
     * Fonction exécutée automatiquement toutes les heures par Jeedom
      public static function cronHourly() {}
     */

    /*
     * Fonction exécutée automatiquement tous les jours par Jeedom
      public static function cronDaily() {}
     */

    /*     * *********************Méthodes d'instance************************* */

    // Fonction exécutée automatiquement avant la création de l'équipement
    public function preInsert() {
        
    }

    // Fonction exécutée automatiquement après la création de l'équipement
    public function postInsert() {
        
    }

    // Fonction exécutée automatiquement avant la mise à jour de l'équipement
    public function preUpdate() {
        
    }

    // Fonction exécutée automatiquement après la mise à jour de l'équipement
    public function postUpdate() {
        $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l’équipement
        if (is_object($cmd)) { //elle existe et on lance la commande
            $cmd->execCmd();
        }
    }

    // Fonction exécutée automatiquement avant la sauvegarde (création ou mise à jour) de l'équipement
    public function preSave() {
        
    }

    // Fonction exécutée automatiquement après la sauvegarde (création ou mise à jour) de l'équipement
    public function postSave() {
        $this->AutoAddCmd($this);
    }

    // Fonction exécutée automatiquement avant la suppression de l'équipement
    public function preRemove() {
        
    }

    // Fonction exécutée automatiquement après la suppression de l'équipement
    public function postRemove() {
        
    }

    /* CUSTOM */

    public function installMQTT() {
        $output = shell_exec('sudo apt install -y mosquitto-clients');
        return $output;
    }

    public function getAllData($ip) {
        $data_all = shell_exec("timeout 0.2 mosquitto_sub --quiet -v -t \"#\" -h $ip");
        $data_all = explode("\n", $data_all);
        return $data_all;
    }

    public function getAllDataNames($data) {
        $names = array();

        foreach ($data as $line) {
            $line_explode = explode("/", $line);
            array_push($names, $line_explode[2]);
        }

        return $names;
    }

    function get_mqtt_value($data_all, $variable_name) {
        // Possible results
        $results = array();

        // Get possible results
        foreach ($data_all as $data) {
            if (preg_match("/$variable_name/i", $data)) {
                $name_value = explode(" ", $data);
                array_push($results, $name_value[1]);
            }
        }

        // Get best results
        foreach ($results as $result) {
            if ($result != 0 && $result != 65534 && $result != 65535 && $result != "0" && $result != "65534" && $result != "65535") {
                return $result;
            }
        }

        // Get second best results
        foreach ($results as $result) {
            if ($result != 65534 && $result != 65535 && $result != "65534" && $result != "65535") {
                return $result;
            }
        }

        // Get third best results
        foreach ($results as $result) {
            return $result;
        }

        // Error
        return 123456789;
    }

    public function AutoAddCmd($this_or_eqlogic) {

        $types_and_variables = array();
        array_push($types_and_variables, array("u32_r", "state"));
        array_push($types_and_variables, array("u32_r", "error"));
        array_push($types_and_variables, array("s44_w", "name"));
        array_push($types_and_variables, array("s44_w", "source_ph"));
        array_push($types_and_variables, array("u8_w", "action"));
        array_push($types_and_variables, array("u8_w", "winter_mode"));
        array_push($types_and_variables, array("u8_w", "ap_bcast_duration"));
        array_push($types_and_variables, array("s128_w", "update_ota"));
        array_push($types_and_variables, array("u8_r", "server_on"));
        array_push($types_and_variables, array("u8_r", "flow_on"));
        array_push($types_and_variables, array("u8_r", "inject_on"));
        array_push($types_and_variables, array("u8_r", "mode_ph"));
        array_push($types_and_variables, array("u8_r", "mqtt_connected"));
        array_push($types_and_variables, array("u8_r", "model_id"));
        array_push($types_and_variables, array("u8_r", "hw_vers"));
        array_push($types_and_variables, array("u32_w", "date_mes"));
        array_push($types_and_variables, array("u32_w", "date_mes_ph"));
        array_push($types_and_variables, array("u16_r", "vol_24h_inject"));
        array_push($types_and_variables, array("u16_r", "vol_tot_inject"));
        array_push($types_and_variables, array("u16_r", "value_ph"));
        array_push($types_and_variables, array("u16_r", "sw_vers"));
        array_push($types_and_variables, array("u16_w", "vol_bac"));
        array_push($types_and_variables, array("u16_w", "vol_max_24h"));
        array_push($types_and_variables, array("u16_w", "ph_calibration_target"));
        array_push($types_and_variables, array("u16_w", "consigne_ph"));
        array_push($types_and_variables, array("u16_w", "jeedom_interval"));
        array_push($types_and_variables, array("i8_w", "ph_adjust"));
        array_push($types_and_variables, array("s33_r", "serial_num"));
        array_push($types_and_variables, array("s44_r", "device_id"));
        array_push($types_and_variables, array("i8_r", "rssi"));
        array_push($types_and_variables, array("u32_w", "date_mes_orp"));
        array_push($types_and_variables, array("u16_r", "value_orp"));
        array_push($types_and_variables, array("u16_r", "value_temp"));
        array_push($types_and_variables, array("i8_w", "temp_adjust"));
        array_push($types_and_variables, array("i16_w", "orp_adjust"));
        array_push($types_and_variables, array("u16_w", "orp_calibration_target"));
        array_push($types_and_variables, array("u32_r", "sunset"));
        array_push($types_and_variables, array("s44_w", "tz"));
        array_push($types_and_variables, array("s44_w", "lat"));
        array_push($types_and_variables, array("s44_w", "long"));
        array_push($types_and_variables, array("s44_w", "source_temp"));
        array_push($types_and_variables, array("s44_w", "source_orp"));
        array_push($types_and_variables, array("s44_w", "light_sched"));
        array_push($types_and_variables, array("s44_w", "aux_sched"));
        array_push($types_and_variables, array("s44_w", "filt_sched"));
        array_push($types_and_variables, array("u8_w", "light_type"));
        array_push($types_and_variables, array("u8_w", "light_state"));
        array_push($types_and_variables, array("u8_w", "light_code"));
        array_push($types_and_variables, array("u8_w", "light_bright"));
        array_push($types_and_variables, array("u8_w", "light_speed"));
        array_push($types_and_variables, array("u8_w", "aux_type"));
        array_push($types_and_variables, array("u8_w", "aux_temp_hyst"));
        array_push($types_and_variables, array("u8_w", "filt_light_force"));
        array_push($types_and_variables, array("u8_w", "filt_state"));
        array_push($types_and_variables, array("u8_w", "backwash"));
        array_push($types_and_variables, array("u8_w", "frost_free"));
        array_push($types_and_variables, array("u8_r", "couv_on"));
        array_push($types_and_variables, array("u8_r", "aux_state"));
        array_push($types_and_variables, array("u32_w", "epoch"));
        array_push($types_and_variables, array("u32_w", "light_timer"));
        array_push($types_and_variables, array("u32_w", "jeedom_dbg"));
        array_push($types_and_variables, array("u16_w", "consigne_temp"));
        array_push($types_and_variables, array("u16_w", "consigne_orp"));
        array_push($types_and_variables, array("u16_w", "aux_conf"));
        array_push($types_and_variables, array("u16_w", "aux_min_temp"));
        array_push($types_and_variables, array("u16_w", "filt_serv_inter"));
        array_push($types_and_variables, array("i8_w", "temp_accuracy"));
        array_push($types_and_variables, array("u8_w", "priority"));
        array_push($types_and_variables, array("s44_w", "light_sched_m"));
        array_push($types_and_variables, array("s44_w", "filt_sched_m"));
        array_push($types_and_variables, array("s44_w", "aux1_sched"));
        array_push($types_and_variables, array("s44_w", "aux2_sched"));
        array_push($types_and_variables, array("u8_w", "light_mode"));
        array_push($types_and_variables, array("u8_w", "light_type_m"));
        array_push($types_and_variables, array("u8_w", "filt_mode"));
        array_push($types_and_variables, array("u8_w", "aux1_type"));
        array_push($types_and_variables, array("u8_w", "aux1_mode"));
        array_push($types_and_variables, array("u8_w", "aux2_mode"));
        array_push($types_and_variables, array("u8_r", "light_state_m"));
        array_push($types_and_variables, array("u8_r", "filt_state_m"));
        array_push($types_and_variables, array("u8_r", "filt_cur_nom"));
        array_push($types_and_variables, array("u8_r", "filt_cur"));
        array_push($types_and_variables, array("u8_r", "filt_state"));
        array_push($types_and_variables, array("u8_r", "aux1_state"));
        array_push($types_and_variables, array("u8_r", "aux2_state"));
        array_push($types_and_variables, array("u8_r", "aux_conf_m"));
        array_push($types_and_variables, array("u8_r", "lvl_reg"));
        array_push($types_and_variables, array("u8_r", "valve_on"));
        array_push($types_and_variables, array("u8_r", "meteor_version"));
        array_push($types_and_variables, array("u8_r", "bus_err"));
        array_push($types_and_variables, array("u16_r", "meteor_errors"));
        array_push($types_and_variables, array("u8_w", "mode_ely"));
        array_push($types_and_variables, array("u8_w", "mode_choc"));
        array_push($types_and_variables, array("u8_w", "power_ely"));
        array_push($types_and_variables, array("u8_w", "water_hardness"));
        array_push($types_and_variables, array("u8_w", "ely_duration_theo"));
        array_push($types_and_variables, array("u8_w", "choc_duration"));
        array_push($types_and_variables, array("u8_w", "temp_accuracy"));
        array_push($types_and_variables, array("u8_r", "prod_on"));
        array_push($types_and_variables, array("u8_r", "prod_chlore"));
        array_push($types_and_variables, array("u16_r", "value_temp_int"));
        array_push($types_and_variables, array("u16_r", "value_cond"));
        array_push($types_and_variables, array("u16_r", "voltage_ely"));
        array_push($types_and_variables, array("u16_r", "current_ely"));
        array_push($types_and_variables, array("u16_r", "ely_duration_compensated"));
        array_push($types_and_variables, array("u16_r", "ely_duration_in_minut"));
        array_push($types_and_variables, array("u16_w", "temp_min_off_ely"));
        array_push($types_and_variables, array("u8_w", "sunrise"));
        array_push($types_and_variables, array("s44_w", "x3_sched"));
        array_push($types_and_variables, array("s44_w", "dmx_ch"));
        array_push($types_and_variables, array("u8_w", "x3_state"));
        array_push($types_and_variables, array("u8_w", "x3_bright"));
        array_push($types_and_variables, array("u8_w", "x3_speed"));
        array_push($types_and_variables, array("s128_w", "rgbw"));
        array_push($types_and_variables, array("s128_w", "x3_color"));
        array_push($types_and_variables, array("s128_w", "p1_color"));
        array_push($types_and_variables, array("s128_w", "p2_color"));

        $max = sizeof($types_and_variables);

        for ($x = 0; $x <= $max - 1; $x++) {
            $name = $types_and_variables[$x][1];
            $type = $types_and_variables[$x][0];

            // Creation de la CMD
            $command = $this_or_eqlogic->getCmd(null, "$name");
            if (!is_object($command)) {
                $command = new vigipoolCmd();
                $command->setName(__("$name", __FILE__));
            }
            $command->setLogicalId("$name");
            $command->setEqLogic_id($this_or_eqlogic->getId());
            $command->setType("info");

            // setSubType
            if (strpos($name, "_state") !== false || strpos($name, "flow_on") !== false || strpos($name, "winter_mode") !== false) {
                $command->setSubType("binary");
            } else if ($type == "u32_r" || $type == "u8_w" || $type == "u8_r" || $type == "u32_w" || $type == "u16_r" || $type == "u16_w") {
                $command->setSubType("numeric");
            } else if ($type == "s44_w" || $type == "s128_w" || $type == "s33_r" || $type == "s44_r") {
                $command->setSubType("string");
            } else {
                $command->setSubType("string");
            }

            // setIsVisible
            $command->setIsVisible(1);

            // Specific Set

            $display_option = 0;

            switch ($name) {
                case "temp_min_off_ely":
                    $command->setConfiguration('calculValueOffset', '#value#/10');
                    $command->setUnite("°C");
                    $command->setDisplay('icon', '<i class="icon jeedom-thermometre"></i>');
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', "vigipool::vigipool_$name");
                    $command->setTemplate('mobile', "vigipool::vigipool_$name");
                    break;
                case "value_temp":
                    $command->setConfiguration('minValue', '0');
                    $command->setConfiguration('maxValue', '500');
                    $command->setConfiguration('calculValueOffset', '#value#/10');
                    $command->setUnite("°C");
                    $command->setDisplay('icon', '<i class="icon jeedom-thermometre"></i>');
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', 'vigipool::vigipool_value_temp');
                    $command->setTemplate('mobile', 'vigipool::vigipool_value_temp');
                    break;
                case "value_ph":
                    $command->setConfiguration('minValue', '0');
                    $command->setConfiguration('maxValue', '14');
                    $command->setConfiguration('calculValueOffset', '#value#/100');
                    $command->setConfiguration('historizeRound', 1);
                    $command->setUnite("pH");
                    $command->setDisplay('icon', '<i class="fas fa-bars"></i>');
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', 'vigipool::vigipool_value_ph');
                    $command->setTemplate('mobile', 'vigipool::vigipool_value_ph');
                    break;
                case "value_orp":
                    $command->setConfiguration('minValue', '0');
                    $command->setConfiguration('maxValue', '1000');
                    $command->setUnite("mV");
                    $command->setDisplay('icon', '<i class="fas fa-ruler-vertical"></i>');
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', 'vigipool::vigipool_value_orp');
                    $command->setTemplate('mobile', 'vigipool::vigipool_value_orp');
                    break;
                case "flow_on":
                    $command->setConfiguration('minValue', '0');
                    $command->setConfiguration('maxValue', '1');
                    $command->setDisplay('icon', '<i class="fas fa-ruler-vertical"></i>');
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', 'vigipool::vigipool_flow_on');
                    $command->setTemplate('mobile', 'vigipool::vigipool_flow_on');
                    break;
                case "consigne_temp":
                    $command->setConfiguration('calculValueOffset', '#value#/10');
                    $command->setDisplay('icon', '<i class="fas fa-wifi"></i>');
                    $command->setUnite("°C");
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', "vigipool::vigipool_$name");
                    $command->setTemplate('mobile', "vigipool::vigipool_$name");
                    break;
                case "consigne_ph":
                    $command->setConfiguration('calculValueOffset', '#value#/100');
                    $command->setConfiguration('historizeRound', 1);
                    $command->setDisplay('icon', '<i class="fas fa-wifi"></i>');
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', "vigipool::vigipool_$name");
                    $command->setTemplate('mobile', "vigipool::vigipool_$name");
                case "vol_max_24h":
                    $command->setConfiguration('calculValueOffset', '#value#/100');
                    $command->setConfiguration('historizeRound', 1);
                    $command->setDisplay('icon', '<i class="fas fa-wifi"></i>');
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', "vigipool::vigipool_$name");
                    $command->setTemplate('mobile', "vigipool::vigipool_$name");
                    break;
                default:
                    $command->setDisplay('icon', '<i class="fas fa-done"></i>');
                    $command->setDisplay('showNameOndashboard', $display_option);
                    $command->setDisplay('showNameOnmobile', $display_option);
                    $command->setDisplay('showIconAndNamedashboard', $display_option);
                    $command->setDisplay('showIconAndNamemobile', $display_option);
                    $command->setDisplay('forceReturnLineBefore', $display_option);
                    $command->setDisplay('forceReturnLineAfter', $display_option);
                    $command->setTemplate('dashboard', "vigipool::vigipool_$name");
                    $command->setTemplate('mobile', "vigipool::vigipool_$name");
                    break;
            }

            $command->setIsHistorized(1);
            $command->save();
        }

        // CUSTOM
        // vigipool_ui
        $vigipool_ui = $this_or_eqlogic->getCmd(null, "vigipool_ui");
        if (!is_object($vigipool_ui)) {
            $vigipool_ui = new vigipoolCmd();
            $vigipool_ui->setName(__("vigipool_ui", __FILE__));
        }
        $vigipool_ui->setLogicalId("vigipool_ui");
        $vigipool_ui->setEqLogic_id($this_or_eqlogic->getId());
        $vigipool_ui->setType("info");
        $vigipool_ui->setSubType("numeric");
        $vigipool_ui->setIsHistorized(0);
        $vigipool_ui->setIsVisible(1);
        $vigipool_ui->setTemplate('dashboard', 'vigipool::vigipool_ui');
        $vigipool_ui->setTemplate('mobile', 'vigipool::vigipool_ui');
        $vigipool_ui->save();

        // logger
        $logger = $this_or_eqlogic->getCmd(null, "logger");
        if (!is_object($logger)) {
            $logger = new vigipoolCmd();
            $logger->setName(__("logger", __FILE__));
        }
        $logger->setLogicalId("logger");
        $logger->setEqLogic_id($this_or_eqlogic->getId());
        $logger->setType("info");
        $logger->setSubType("string");
        $logger->setIsHistorized(1);
        $logger->setIsVisible(0);
        $logger->setValue($ip_selected);
        $logger->save();

        // language
        $language = $this_or_eqlogic->getCmd(null, "language");
        if (!is_object($language)) {
            $language = new vigipoolCmd();
            $language->setName(__("language", __FILE__));
        }
        $language->setLogicalId("language");
        $language->setEqLogic_id($this_or_eqlogic->getId());
        $language->setType("info");
        $language->setSubType("string");
        $language->setIsHistorized(1);
        $language->setIsVisible(1);
        $language->setTemplate('dashboard', "vigipool::vigipool_language");
        $language->setTemplate('mobile', "vigipool::vigipool_language");
        $language->save();

        // ipaddr
        $ipaddr = $this_or_eqlogic->getCmd(null, "ipaddr");
        if (!is_object($ipaddr)) {
            $ipaddr = new vigipoolCmd();
            $ipaddr->setName(__("ipaddr", __FILE__));
        }
        $ipaddr->setLogicalId("ipaddr");
        $ipaddr->setEqLogic_id($this_or_eqlogic->getId());
        $ipaddr->setType("info");
        $ipaddr->setSubType("string");
        $ipaddr->setIsHistorized(1);
        $ipaddr->setIsVisible(1);
        $ipaddr->setTemplate('dashboard', "vigipool::vigipool_ipaddr");
        $ipaddr->setTemplate('mobile', "vigipool::vigipool_ipaddr");
        $ipaddr->save();

        // scanner
        $scanner = $this_or_eqlogic->getCmd(null, "scanner");
        if (!is_object($scanner)) {
            $scanner = new vigipoolCmd();
            $scanner->setName(__("scanner", __FILE__));
        }
        $scanner->setEqLogic_id($this_or_eqlogic->getId());
        $scanner->setLogicalId("scanner");
        $scanner->setType("action");
        $scanner->setSubType("other");
        $scanner->setTemplate('dashboard', "vigipool::vigipool_scanner");
        $scanner->setTemplate('mobile', "vigipool::vigipool_scanner");
        $scanner->save();

        // Refresh
        $refresh = $this_or_eqlogic->getCmd(null, "refresh");
        if (!is_object($refresh)) {
            $refresh = new vigipoolCmd();
            $refresh->setName(__("Rafraichir", __FILE__));
        }
        $refresh->setEqLogic_id($this_or_eqlogic->getId());
        $refresh->setLogicalId("refresh");
        $refresh->setType("action");
        $refresh->setSubType("other");
        $refresh->save();
    }

}

class vigipoolCmd extends cmd {

    public function execute($_options = []) {
        $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this

        switch ($this->getLogicalId()) {

            case "refresh":

                $eqlogic->installMQTT();

                $ip = $eqlogic->getConfiguration('param1');

                $data = $eqlogic->getAllData($ip);

                $names = $eqlogic->getAllDataNames($data);

                foreach ($names as $name) {
                    $value = $eqlogic->get_mqtt_value($data, $name);
                    $eqlogic->checkAndUpdateCmd($name, $value);
                }

                $eqlogic->checkAndUpdateCmd("language", config::byKey('language', 'core'));
                $eqlogic->checkAndUpdateCmd("ipaddr", $eqlogic->getConfiguration("param1"));

                break;

            case "scanner":

                foreach ($eqlogic->getCmd() as $cmd) {
                    $cmd->remove();
                }
                $eqlogic->AutoAddCmd($eqlogic);
        }
    }

}
