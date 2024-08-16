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
        // $logger->setValue($ip_selected);
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

        // action_light_on
        $action_light_on = $this_or_eqlogic->getCmd(null, "action_light_on");
        if (!is_object($action_light_on)) {
            $action_light_on = new vigipoolCmd();
            $action_light_on->setName(__("action_light_on", __FILE__));
        }
        $action_light_on->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_on->setLogicalId("action_light_on");
        $action_light_on->setType("action");
        $action_light_on->setSubType("other");
        $action_light_on->setIsVisible(0);
        $action_light_on->save();
        
        // action_light_off
        $action_light_off = $this_or_eqlogic->getCmd(null, "action_light_off");
        if (!is_object($action_light_off)) {
            $action_light_off = new vigipoolCmd();
            $action_light_off->setName(__("action_light_off", __FILE__));
        }
        $action_light_off->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_off->setLogicalId("action_light_off");
        $action_light_off->setType("action");
        $action_light_off->setSubType("other");
        $action_light_off->setIsVisible(0);
        $action_light_off->save();

        // action_filtration_on
        $action_filtration_on = $this_or_eqlogic->getCmd(null, "action_filtration_on");
        if (!is_object($action_filtration_on)) {
            $action_filtration_on = new vigipoolCmd();
            $action_filtration_on->setName(__("action_filtration_on", __FILE__));
        }
        $action_filtration_on->setEqLogic_id($this_or_eqlogic->getId());
        $action_filtration_on->setLogicalId("action_filtration_on");
        $action_filtration_on->setType("action");
        $action_filtration_on->setSubType("other");
        $action_filtration_on->setIsVisible(0);
        $action_filtration_on->save();
        
        // action_filtration_off
        $action_filtration_off = $this_or_eqlogic->getCmd(null, "action_filtration_off");
        if (!is_object($action_filtration_off)) {
            $action_filtration_off = new vigipoolCmd();
            $action_filtration_off->setName(__("action_filtration_off", __FILE__));
        }
        $action_filtration_off->setEqLogic_id($this_or_eqlogic->getId());
        $action_filtration_off->setLogicalId("action_filtration_off");
        $action_filtration_off->setType("action");
        $action_filtration_off->setSubType("other");
        $action_filtration_off->setIsVisible(0);
        $action_filtration_off->save();
                
        // action_light_bright_0
        $action_light_bright_0 = $this_or_eqlogic->getCmd(null, "action_light_bright_0");
        if (!is_object($action_light_bright_0)) {
            $action_light_bright_0 = new vigipoolCmd();
            $action_light_bright_0->setName(__("action_light_bright_0", __FILE__));
        }
        $action_light_bright_0->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_bright_0->setLogicalId("action_light_bright_0");
        $action_light_bright_0->setType("action");
        $action_light_bright_0->setSubType("other");
        $action_light_bright_0->setIsVisible(0);
        $action_light_bright_0->save();
                        
        // action_light_bright_1
        $action_light_bright_1 = $this_or_eqlogic->getCmd(null, "action_light_bright_1");
        if (!is_object($action_light_bright_1)) {
            $action_light_bright_1 = new vigipoolCmd();
            $action_light_bright_1->setName(__("action_light_bright_1", __FILE__));
        }
        $action_light_bright_1->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_bright_1->setLogicalId("action_light_bright_1");
        $action_light_bright_1->setType("action");
        $action_light_bright_1->setSubType("other");
        $action_light_bright_1->setIsVisible(0);
        $action_light_bright_1->save();
                        
        // action_light_bright_2
        $action_light_bright_2 = $this_or_eqlogic->getCmd(null, "action_light_bright_2");
        if (!is_object($action_light_bright_2)) {
            $action_light_bright_2 = new vigipoolCmd();
            $action_light_bright_2->setName(__("action_light_bright_2", __FILE__));
        }
        $action_light_bright_2->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_bright_2->setLogicalId("action_light_bright_2");
        $action_light_bright_2->setType("action");
        $action_light_bright_2->setSubType("other");
        $action_light_bright_2->setIsVisible(0);
        $action_light_bright_2->save();
                        
        // action_light_bright_3
        $action_light_bright_3 = $this_or_eqlogic->getCmd(null, "action_light_bright_3");
        if (!is_object($action_light_bright_3)) {
            $action_light_bright_3 = new vigipoolCmd();
            $action_light_bright_3->setName(__("action_light_bright_3", __FILE__));
        }
        $action_light_bright_3->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_bright_3->setLogicalId("action_light_bright_3");
        $action_light_bright_3->setType("action");
        $action_light_bright_3->setSubType("other");
        $action_light_bright_3->setIsVisible(0);
        $action_light_bright_3->save();

        // action_light_warm

        $action_light_warm = $this_or_eqlogic->getCmd(null, "action_light_warm");
        if (!is_object($action_light_warm)) {
            $action_light_warm = new vigipoolCmd();
            $action_light_warm->setName(__("action_light_warm", __FILE__));
        }
        $action_light_warm->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_warm->setLogicalId("action_light_warm");
        $action_light_warm->setType("action");
        $action_light_warm->setSubType("other");
        $action_light_warm->setIsVisible(0);
        $action_light_warm->save();

        // action_light_cold

        $action_light_cold = $this_or_eqlogic->getCmd(null, "action_light_cold");
        if (!is_object($action_light_cold)) {
            $action_light_cold = new vigipoolCmd();
            $action_light_cold->setName(__("action_light_cold", __FILE__));
        }
        $action_light_cold->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_cold->setLogicalId("action_light_cold");
        $action_light_cold->setType("action");
        $action_light_cold->setSubType("other");
        $action_light_cold->setIsVisible(0);
        $action_light_cold->save();

        // action_light_blue

        $action_light_blue = $this_or_eqlogic->getCmd(null, "action_light_blue");
        if (!is_object($action_light_blue)) {
            $action_light_blue = new vigipoolCmd();
            $action_light_blue->setName(__("action_light_blue", __FILE__));
        }
        $action_light_blue->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_blue->setLogicalId("action_light_blue");
        $action_light_blue->setType("action");
        $action_light_blue->setSubType("other");
        $action_light_blue->setIsVisible(0);
        $action_light_blue->save();

        // action_light_lagoon

        $action_light_lagoon = $this_or_eqlogic->getCmd(null, "action_light_lagoon");
        if (!is_object($action_light_lagoon)) {
            $action_light_lagoon = new vigipoolCmd();
            $action_light_lagoon->setName(__("action_light_lagoon", __FILE__));
        }
        $action_light_lagoon->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_lagoon->setLogicalId("action_light_lagoon");
        $action_light_lagoon->setType("action");
        $action_light_lagoon->setSubType("other");
        $action_light_lagoon->setIsVisible(0);
        $action_light_lagoon->save();

        // action_light_cyan

        $action_light_cyan = $this_or_eqlogic->getCmd(null, "action_light_cyan");
        if (!is_object($action_light_cyan)) {
            $action_light_cyan = new vigipoolCmd();
            $action_light_cyan->setName(__("action_light_cyan", __FILE__));
        }
        $action_light_cyan->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_cyan->setLogicalId("action_light_cyan");
        $action_light_cyan->setType("action");
        $action_light_cyan->setSubType("other");
        $action_light_cyan->setIsVisible(0);
        $action_light_cyan->save();

        // action_light_green

        $action_light_green = $this_or_eqlogic->getCmd(null, "action_light_green");
        if (!is_object($action_light_green)) {
            $action_light_green = new vigipoolCmd();
            $action_light_green->setName(__("action_light_green", __FILE__));
        }
        $action_light_green->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_green->setLogicalId("action_light_green");
        $action_light_green->setType("action");
        $action_light_green->setSubType("other");
        $action_light_green->setIsVisible(0);
        $action_light_green->save();

        // action_light_purple

        $action_light_purple = $this_or_eqlogic->getCmd(null, "action_light_purple");
        if (!is_object($action_light_purple)) {
            $action_light_purple = new vigipoolCmd();
            $action_light_purple->setName(__("action_light_purple", __FILE__));
        }
        $action_light_purple->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_purple->setLogicalId("action_light_purple");
        $action_light_purple->setType("action");
        $action_light_purple->setSubType("other");
        $action_light_purple->setIsVisible(0);
        $action_light_purple->save();

        // action_light_magenta

        $action_light_magenta = $this_or_eqlogic->getCmd(null, "action_light_magenta");
        if (!is_object($action_light_magenta)) {
            $action_light_magenta = new vigipoolCmd();
            $action_light_magenta->setName(__("action_light_magenta", __FILE__));
        }
        $action_light_magenta->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_magenta->setLogicalId("action_light_magenta");
        $action_light_magenta->setType("action");
        $action_light_magenta->setSubType("other");
        $action_light_magenta->setIsVisible(0);
        $action_light_magenta->save();

        // action_light_pink

        $action_light_pink = $this_or_eqlogic->getCmd(null, "action_light_pink");
        if (!is_object($action_light_pink)) {
            $action_light_pink = new vigipoolCmd();
            $action_light_pink->setName(__("action_light_pink", __FILE__));
        }
        $action_light_pink->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_pink->setLogicalId("action_light_pink");
        $action_light_pink->setType("action");
        $action_light_pink->setSubType("other");
        $action_light_pink->setIsVisible(0);
        $action_light_pink->save();

        // action_light_red

        $action_light_red = $this_or_eqlogic->getCmd(null, "action_light_red");
        if (!is_object($action_light_red)) {
            $action_light_red = new vigipoolCmd();
            $action_light_red->setName(__("action_light_red", __FILE__));
        }
        $action_light_red->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_red->setLogicalId("action_light_red");
        $action_light_red->setType("action");
        $action_light_red->setSubType("other");
        $action_light_red->setIsVisible(0);
        $action_light_red->save();

        // action_light_orange

        $action_light_orange = $this_or_eqlogic->getCmd(null, "action_light_orange");
        if (!is_object($action_light_orange)) {
            $action_light_orange = new vigipoolCmd();
            $action_light_orange->setName(__("action_light_orange", __FILE__));
        }
        $action_light_orange->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_orange->setLogicalId("action_light_orange");
        $action_light_orange->setType("action");
        $action_light_orange->setSubType("other");
        $action_light_orange->setIsVisible(0);
        $action_light_orange->save();

        // action_light_favorite

        $action_light_favorite = $this_or_eqlogic->getCmd(null, "action_light_favorite");
        if (!is_object($action_light_favorite)) {
            $action_light_favorite = new vigipoolCmd();
            $action_light_favorite->setName(__("action_light_favorite", __FILE__));
        }
        $action_light_favorite->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_favorite->setLogicalId("action_light_favorite");
        $action_light_favorite->setType("action");
        $action_light_favorite->setSubType("other");
        $action_light_favorite->setIsVisible(0);
        $action_light_favorite->save();


        // action_light_gradiant

        $action_light_gradiant = $this_or_eqlogic->getCmd(null, "action_light_gradiant");
        if (!is_object($action_light_gradiant)) {
            $action_light_gradiant = new vigipoolCmd();
            $action_light_gradiant->setName(__("action_light_gradiant", __FILE__));
        }
        $action_light_gradiant->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_gradiant->setLogicalId("action_light_gradiant");
        $action_light_gradiant->setType("action");
        $action_light_gradiant->setSubType("other");
        $action_light_gradiant->setIsVisible(0);
        $action_light_gradiant->save();

        // action_light_rainbow

        $action_light_rainbow = $this_or_eqlogic->getCmd(null, "action_light_rainbow");
        if (!is_object($action_light_rainbow)) {
            $action_light_rainbow = new vigipoolCmd();
            $action_light_rainbow->setName(__("action_light_rainbow", __FILE__));
        }
        $action_light_rainbow->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_rainbow->setLogicalId("action_light_rainbow");
        $action_light_rainbow->setType("action");
        $action_light_rainbow->setSubType("other");
        $action_light_rainbow->setIsVisible(0);
        $action_light_rainbow->save();

        // action_light_parade

        $action_light_parade = $this_or_eqlogic->getCmd(null, "action_light_parade");
        if (!is_object($action_light_parade)) {
            $action_light_parade = new vigipoolCmd();
            $action_light_parade->setName(__("action_light_parade", __FILE__));
        }
        $action_light_parade->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_parade->setLogicalId("action_light_parade");
        $action_light_parade->setType("action");
        $action_light_parade->setSubType("other");
        $action_light_parade->setIsVisible(0);
        $action_light_parade->save();

        // action_light_techno

        $action_light_techno = $this_or_eqlogic->getCmd(null, "action_light_techno");
        if (!is_object($action_light_techno)) {
            $action_light_techno = new vigipoolCmd();
            $action_light_techno->setName(__("action_light_techno", __FILE__));
        }
        $action_light_techno->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_techno->setLogicalId("action_light_techno");
        $action_light_techno->setType("action");
        $action_light_techno->setSubType("other");
        $action_light_techno->setIsVisible(0);
        $action_light_techno->save();

        // action_light_horizon

        $action_light_horizon = $this_or_eqlogic->getCmd(null, "action_light_horizon");
        if (!is_object($action_light_horizon)) {
            $action_light_horizon = new vigipoolCmd();
            $action_light_horizon->setName(__("action_light_horizon", __FILE__));
        }
        $action_light_horizon->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_horizon->setLogicalId("action_light_horizon");
        $action_light_horizon->setType("action");
        $action_light_horizon->setSubType("other");
        $action_light_horizon->setIsVisible(0);
        $action_light_horizon->save();

        // action_light_random

        $action_light_random = $this_or_eqlogic->getCmd(null, "action_light_random");
        if (!is_object($action_light_random)) {
            $action_light_random = new vigipoolCmd();
            $action_light_random->setName(__("action_light_random", __FILE__));
        }
        $action_light_random->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_random->setLogicalId("action_light_random");
        $action_light_random->setType("action");
        $action_light_random->setSubType("other");
        $action_light_random->setIsVisible(0);
        $action_light_random->save();

        // action_light_magical

        $action_light_magical = $this_or_eqlogic->getCmd(null, "action_light_magical");
        if (!is_object($action_light_magical)) {
            $action_light_magical = new vigipoolCmd();
            $action_light_magical->setName(__("action_light_magical", __FILE__));
        }
        $action_light_magical->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_magical->setLogicalId("action_light_magical");
        $action_light_magical->setType("action");
        $action_light_magical->setSubType("other");
        $action_light_magical->setIsVisible(0);
        $action_light_magical->save();

        // action_light_speed_0
        $action_light_speed_0 = $this_or_eqlogic->getCmd(null, "action_light_speed_0");
        if (!is_object($action_light_speed_0)) {
            $action_light_speed_0 = new vigipoolCmd();
            $action_light_speed_0->setName(__("action_light_speed_0", __FILE__));
        }
        $action_light_speed_0->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_speed_0->setLogicalId("action_light_speed_0");
        $action_light_speed_0->setType("action");
        $action_light_speed_0->setSubType("other");
        $action_light_speed_0->setIsVisible(0);
        $action_light_speed_0->save();
                        
        // action_light_speed_1
        $action_light_speed_1 = $this_or_eqlogic->getCmd(null, "action_light_speed_1");
        if (!is_object($action_light_speed_1)) {
            $action_light_speed_1 = new vigipoolCmd();
            $action_light_speed_1->setName(__("action_light_speed_1", __FILE__));
        }
        $action_light_speed_1->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_speed_1->setLogicalId("action_light_speed_1");
        $action_light_speed_1->setType("action");
        $action_light_speed_1->setSubType("other");
        $action_light_speed_1->setIsVisible(0);
        $action_light_speed_1->save();
                        
        // action_light_speed_2
        $action_light_speed_2 = $this_or_eqlogic->getCmd(null, "action_light_speed_2");
        if (!is_object($action_light_speed_2)) {
            $action_light_speed_2 = new vigipoolCmd();
            $action_light_speed_2->setName(__("action_light_speed_2", __FILE__));
        }
        $action_light_speed_2->setEqLogic_id($this_or_eqlogic->getId());
        $action_light_speed_2->setLogicalId("action_light_speed_2");
        $action_light_speed_2->setType("action");
        $action_light_speed_2->setSubType("other");
        $action_light_speed_2->setIsVisible(0);
        $action_light_speed_2->save();
    }

}

class vigipoolCmd extends cmd {

    public function execute($_options = []) {
        $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
        $id_warm = 0;
        $id_cold = 1;
        $id_blue = 2;
        $id_lagoon = 3;
        $id_cyan = 4;
        $id_green = 10;
        $id_purple = 5;
        $id_magenta = 6;
        $id_pink = 7;
        $id_red = 8;
        $id_orange = 9;
        $id_gradiant = 16;
        $id_rainbow = 17;
        $id_parade = 18;
        $id_techno = 19;
        $id_horizon = 20;
        $id_random = 21;
        $id_magical = 22;
        $id_favorite = 11;

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

                break;

            case "action_light_on":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_light_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_light_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_light_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_light_state = true;
                    if ($is_device_using_light_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_state/info/desired' -h $ip -m '1'");
                }

                break;

            case "action_light_off":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_light_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_light_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_light_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_light_state = true;
                    if ($is_device_using_light_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_state/info/desired' -h $ip -m '0'");
                }
                
                break;

            case "action_filtration_on":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/filt_state/info/desired' -h $ip -m '1'");
                }

                break;

            case "action_filtration_off":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/filt_state/info/desired' -h $ip -m '0'");
                }
                
                break;

            case "action_light_bright_0":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_bright/info/desired' -h $ip -m '0'");
                }
                
                break;

            case "action_light_bright_1":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_bright/info/desired' -h $ip -m '1'");
                }
                
                break;

            case "action_light_bright_2":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_bright/info/desired' -h $ip -m '2'");
                }
                
                break;

            case "action_light_bright_3":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_bright/info/desired' -h $ip -m '3'");
                }
                
                break;

            case "action_light_warm":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_warm'");
                }
                
                break;
            
            case "action_light_cold":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_cold'");
                }
                
                break;
            
            case "action_light_blue":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_blue'");
                }
                
                break;
            
            case "action_light_lagoon":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_lagoon'");
                }
                
                break;
            
            case "action_light_cyan":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_cyan'");
                }
                
                break;
            
            case "action_light_green":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_green'");
                }
                
                break;
            
            case "action_light_purple":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_purple'");
                }
                
                break;
            
            case "action_light_magenta":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_magenta'");
                }
                
                break;
            
            case "action_light_pink":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_pink'");
                }
                
                break;
            
            case "action_light_red":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_red'");
                }
                
                break;
            
            case "action_light_orange":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_orange'");
                }
                
                break;
            
            case "action_light_favorite":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_favorite'");
                }
                
                break;
            
            case "action_light_gradiant":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_gradiant'");
                }
                
                break;
            
            case "action_light_rainbow":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_rainbow'");
                }
                
                break;
            
            case "action_light_parade":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_parade'");
                }
                
                break;
            
            case "action_light_techno":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_techno'");
                }
                
                break;
            
            case "action_light_horizon":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_horizon'");
                }
                
                break;
            
            case "action_light_random":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_random'");
                }
                
                break;
            
            case "action_light_magical":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_code/info/desired' -h $ip -m '$id_magical'");
                }
                
                break;

            case "action_light_speed_0":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_speed/info/desired' -h $ip -m '0'");
                }
                
                break;

            case "action_light_speed_1":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_speed/info/desired' -h $ip -m '1'");
                }
                
                break;

            case "action_light_speed_2":

                // we retrieve the device's IP
                $ip = $eqlogic->getConfiguration('param1');

                // we retrieve the mqtt data
                $data_all = $eqlogic->getAllData($ip);

                // we retrieve the device ids
                $results = array();
                foreach ($data_all as $data) {
                    $variable_name = "device_id";
                    if (preg_match("/$variable_name/i", $data)) {
                        $name_value = explode(" ", $data);
                        array_push($results, $name_value[1]);
                    }
                }
                $devices_id = $results;

                // we send the command to all devices concerned by the action                
                foreach ($devices_id as $device_id) {
                    $is_device_using_filtration_state = false;
                    if (strpos($device_id, "tild_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "timeo_") !== false) $is_device_using_filtration_state = true;
                    if (strpos($device_id, "anteam_") !== false) $is_device_using_filtration_state = true;
                    if ($is_device_using_filtration_state) shell_exec("mosquitto_pub -t '$device_id/u8_w/light_speed/info/desired' -h $ip -m '2'");
                }
                
                break;
        }
    }

}
