<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}
// Déclaration des variables obligatoires
$plugin = plugin::byId('vigipool');
sendVarToJS('eqType', $plugin->getId());
$eqLogics = eqLogic::byType($plugin->getId());
foreach ($eqLogics as $eqLogic) {
    $eqLogic->checkAndUpdateCmd("ipaddr", $eqLogic->getConfiguration("param1"));
}
?>

<div class="row row-overflow">
    <!-- Page d'accueil du plugin -->
    <div class="col-xs-12 eqLogicThumbnailDisplay">
        <legend><i class="fas fa-cog"></i>  {{Gestion}}</legend>
        <!-- Boutons de gestion du plugin -->
        <div class="eqLogicThumbnailContainer">
            <div class="cursor eqLogicAction logoPrimary" data-action="add">
                <i class="fas fa-plus-circle"></i>
                <br>
                <span>{{Ajouter}}</span>
            </div>
            <div class="cursor eqLogicAction logoSecondary" data-action="gotoPluginConf">
                <i class="fas fa-wrench"></i>
                <br>
                <span>{{Configuration}}</span>
            </div>
        </div>
        <legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>
        <?php
        if (count($eqLogics) == 0) {
            echo '<br><div class="text-center" style="font-size:1.2em;font-weight:bold;">{{Aucun équipement Template trouvé, cliquer sur "Ajouter" pour commencer}}</div>';
        } else {
            // Champ de recherche
            echo '<div class="input-group" style="margin:5px;">';
            echo '<input class="form-control roundedLeft" placeholder="{{Rechercher}}" id="in_searchEqlogic">';
            echo '<div class="input-group-btn">';
            echo '<a id="bt_resetSearch" class="btn" style="width:30px"><i class="fas fa-times"></i></a>';
            echo '<a class="btn roundedRight hidden" id="bt_pluginDisplayAsTable" data-coreSupport="1" data-state="0"><i class="fas fa-grip-lines"></i></a>';
            echo '</div>';
            echo '</div>';
            // Liste des équipements du plugin
            echo '<div class="eqLogicThumbnailContainer">';
            foreach ($eqLogics as $eqLogic) {
                $opacity = ($eqLogic->getIsEnable()) ? '' : 'disableCard';
                echo '<div class="eqLogicDisplayCard cursor ' . $opacity . '" data-eqLogic_id="' . $eqLogic->getId() . '">';
                echo '<img src="' . $eqLogic->getImage() . '"/>';
                echo '<br>';
                echo '<span class="name">' . $eqLogic->getHumanName(true, true) . '</span>';
                echo '<span class="hiddenAsCard displayTableRight hidden">';
                echo ($eqLogic->getIsVisible() == 1) ? '<i class="fas fa-eye" title="{{Equipement visible}}"></i>' : '<i class="fas fa-eye-slash" title="{{Equipement non visible}}"></i>';
                echo '</span>';
                echo '</div>';
            }
            echo '</div>';
        }
        ?>
    </div> <!-- /.eqLogicThumbnailDisplay -->

    <!-- Page de présentation de l'équipement -->
    <div class="col-xs-12 eqLogic" style="display: none;">
        <!-- barre de gestion de l'équipement -->
        <div class="input-group pull-right" style="display:inline-flex;">
            <span class="input-group-btn">
                <!-- Les balises <a></a> sont volontairement fermées à la ligne suivante pour éviter les espaces entre les boutons. Ne pas modifier -->
                <a class="btn btn-sm btn-default eqLogicAction roundedLeft" data-action="configure"><i class="fas fa-cogs"></i><span class="hidden-xs"> {{Configuration avancée}}</span>
                </a><a class="btn btn-sm btn-default eqLogicAction" data-action="copy"><i class="fas fa-copy"></i><span class="hidden-xs">  {{Dupliquer}}</span>
                </a><a class="btn btn-sm btn-success eqLogicAction" data-action="save"><i class="fas fa-check-circle"></i> {{Sauvegarder}}
                </a><a class="btn btn-sm btn-danger eqLogicAction roundedRight" data-action="remove"><i class="fas fa-minus-circle"></i> {{Supprimer}}
                </a>
            </span>
        </div>
        <!-- Onglets -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation"><a href="#" class="eqLogicAction" aria-controls="home" role="tab" data-toggle="tab" data-action="returnToThumbnailDisplay"><i class="fas fa-arrow-circle-left"></i></a></li>
            <li role="presentation" class="active"><a href="#eqlogictab" aria-controls="home" role="tab" data-toggle="tab"><i class="fas fa-tachometer-alt"></i> {{Equipement}}</a></li>
            <li role="presentation"><a href="#commandtab" aria-controls="home" role="tab" data-toggle="tab"><i class="fas fa-list"></i> {{Commandes}}</a></li>
        </ul>
        <div class="tab-content">
            <!-- Onglet de configuration de l'équipement -->
            <div role="tabpanel" class="tab-pane active" id="eqlogictab">
                <!-- Partie gauche de l'onglet "Equipements" -->
                <!-- Paramètres généraux et spécifiques de l'équipement -->
                <form class="form-horizontal">
                    <fieldset>
                        <div class="col-lg-6">
                            <legend><i class="fas fa-wrench"></i> {{Paramètres généraux}}</legend>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Nom de l'équipement}}</label>
                                <div class="col-sm-6">
                                    <input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;">
                                    <input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement}}">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label" >{{Objet parent}}</label>
                                <div class="col-sm-6">
                                    <select id="sel_object" class="eqLogicAttr form-control" data-l1key="object_id">
                                        <option value="">{{Aucun}}</option>
                                        <?php
                                        $options = '';
                                        foreach ((jeeObject::buildTree(null, false)) as $object) {
                                            $options .= '<option value="' . $object->getId() . '">' . str_repeat('&nbsp;&nbsp;', $object->getConfiguration('parentNumber')) . $object->getName() . '</option>';
                                        }
                                        echo $options;
                                        ?>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Catégorie}}</label>
                                <div class="col-sm-6">
                                    <?php
                                    foreach (jeedom::getConfiguration('eqLogic:category') as $key => $value) {
                                        echo '<label class="checkbox-inline">';
                                        echo '<input type="checkbox" class="eqLogicAttr" data-l1key="category" data-l2key="' . $key . '" >' . $value['name'];
                                        echo '</label>';
                                    }
                                    ?>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Options}}</label>
                                <div class="col-sm-6">
                                    <label class="checkbox-inline"><input type="checkbox" class="eqLogicAttr" data-l1key="isEnable" checked>{{Activer}}</label>
                                    <label class="checkbox-inline"><input type="checkbox" class="eqLogicAttr" data-l1key="isVisible" checked>{{Visible}}</label>
                                </div>
                            </div>




















                            <legend><i class="fas fa-cogs"></i> {{Paramètres spécifiques}}</legend>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Adresse IP de cet équipement}}
                                    <sup><i class="fas fa-question-circle tooltips" title="{{Example : 192.168.41.159}}"></i></sup>
                                </label>
                                <div class="col-sm-6">
                                    <input type="text" class="eqLogicAttr form-control ip_selected" data-l1key="configuration" data-l2key="param1" placeholder="{{192.168.41.38}}">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{ID de cet équipement}}
                                    <sup><i class="fas fa-question-circle tooltips" title="{{Example : tild_70B8F646F378}}"></i></sup>
                                </label>
                                <div class="col-sm-6">
                                    <input type="text" class="eqLogicAttr form-control id_selected" data-l1key="configuration" data-l2key="param2" placeholder="{{tild_70B8F646F378}}">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Rechercher les produits Vigipool (rapide)}}
                                    <sup><i class="fas fa-question-circle tooltips" title="{{TODO}}"></i></sup>
                                </label>
                                <div class="col-sm-6">
                                    <button type="button" class="btn btn-primary button_detect_async_fast">Lancer le scan</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Rechercher les produits Vigipool (lent)}}
                                    <sup><i class="fas fa-question-circle tooltips" title="{{TODO}}"></i></sup>
                                </label>
                                <div class="col-sm-6">
                                    <button type="button" class="btn btn-primary button_detect_async_slow">Lancer le scan</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Récupérer l\'ID à partir de l\'IP}}
                                    <sup><i class="fas fa-question-circle tooltips" title="{{TODO}}"></i></sup>
                                </label>
                                <div class="col-sm-6">
                                    <button type="button" class="btn btn-primary">Lancer le scan</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Debug}}
                                    <sup><i class="fas fa-question-circle tooltips" title="{{TODO}}"></i></sup>
                                </label>
                                <div class="col-sm-6">
                                    <button type="button" class="btn btn-primary button_debug">Lancer le scan</button>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-lg-4 control-label">Périphériques Vigipool détectés : </label>
                                <div class="col-lg-4">
                                    <ul class="vigipool_menu">

                                    </ul>
                                </div>
                            </div>















                        </div>

                        <!-- Partie droite de l'onglet "Équipement" -->
                        <!-- Affiche un champ de commentaire par défaut mais vous pouvez y mettre ce que vous voulez -->
                        <div class="col-lg-6">
                            <legend><i class="fas fa-info"></i> {{Informations}}</legend>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">{{Description}}</label>
                                <div class="col-sm-6">
                                    <textarea class="form-control eqLogicAttr autogrow" data-l1key="comment"></textarea>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div><!-- /.tabpanel #eqlogictab-->

            <!-- Onglet des commandes de l'équipement -->
            <div role="tabpanel" class="tab-pane" id="commandtab">
                <a class="btn btn-default btn-sm pull-right cmdAction" data-action="add" style="margin-top:5px;"><i class="fas fa-plus-circle"></i> {{Ajouter une commande}}</a>
                <br><br>
                <div class="table-responsive">
                    <table class="table table-bordered table-condensed table_cmd">
                        <thead>
                            <tr>
                                <th class="hidden-xs" style="min-width:50px;width:70px;">ID</th>
                                <th style="min-width:200px;width:350px;">{{Nom}}</th>
                                <th>{{Type}}</th>
                                <th style="min-width:260px;">{{Options}}</th>
                                <th>{{Etat}}</th>
                                <th style="min-width:80px;width:200px;">{{Actions}}</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div><!-- /.tabpanel #commandtab-->

        </div><!-- /.tab-content -->
    </div><!-- /.eqLogic -->
</div><!-- /.row row-overflow -->

<!-- Inclusion du fichier javascript du plugin (dossier, nom_du_fichier, extension_du_fichier, id_du_plugin) -->
<?php include_file('desktop', 'vigipool', 'js', 'vigipool'); ?>
<!-- Inclusion du fichier javascript du core - NE PAS MODIFIER NI SUPPRIMER -->
<?php include_file('core', 'plugin.template', 'js'); ?>


<script>



    $(".button_debug").click(function () {
        $.ajax({
            url: '/plugins/vigipool/core/ajax/mosquitto_sub_all.php',
            type: "post",
            data: {ip: $("[data-l2key='param1']").value()},
            success: function (data) {
                console.log("data = " + data);
            }
        });
    });

    $(".button_detect_async_fast").click(function () {
        detect_async("fast");
    });

    $(".button_detect_async_slow").click(function () {
        detect_async("slow");
    });

    $(".button_get_name").click(function () {

        var ip_selected = $(".ip_selected").value();
        // console.log("ip_selected = " + ip_selected);

        $.ajax({
            url: '/plugins/vigipool/core/ajax/test_device.php',
            type: "post",
            async: true,
            data: {ip: ip_selected},
            success: function (data) {
                if (data !== "") {
                    var datasplit = data.split("/");
                    // console.log("datasplit = " + datasplit);

                    var name = datasplit[0];
                    // console.log("name = " + name);

                    $(".id_selected").value = name;
                }
            }
        });
    });


    function detect_async(speed) {
        $(".vigipool_menu").html('');
        $.ajax({
            url: '/plugins/vigipool/core/ajax/mosquitto-clients.php',
            type: "post",
            async: false,
            cache: false,
            success: function (data) {
                console.log("data = " + data);
            }
        });

        $.ajax({
            url: '/plugins/vigipool/core/ajax/sipcalc.php',
            type: "post",
            async: false,
            cache: false,
            success: function (data) {
                console.log("data = " + data);
            }
        });

        var data_ip;

        $.ajax({
            url: '/plugins/vigipool/core/ajax/ips.php',
            type: "post",
            async: false,
            cache: false,
            success: function (data) {
                // console.log("data = " + data);
                data_ip = data;
            }
        });

        data_ip = data_ip.split("/");
        console.log(data_ip);

        var ip = data_ip[0];
        ip = ip.replace("inet", "").replace("     ", "");
        console.log("ip = " + ip);

        var mask = data_ip[1][0] + data_ip[1][1];
        console.log("mask = " + mask);

        var iprange;
        $.ajax({
            url: '/plugins/vigipool/core/ajax/iprange.php',
            type: "post",
            data: {ip: ip, mask: mask},
            async: false,
            cache: false,
            success: function (data) {
                // console.log("data = " + data);
                iprange = data;
            }
        });

        console.log("iprange = " + iprange);

        var ip_min = iprange.split("-")[1].replace(" ", "");
        var ip_max = iprange.split("-")[2].replace(" ", "");
        console.log("ip_min = " + ip_min);
        console.log("ip_max = " + ip_max);

        var ip_min_1 = ip_min.split(".")[0];
        var ip_min_2 = ip_min.split(".")[1];
        var ip_min_3 = ip_min.split(".")[2];
        var ip_min_4 = ip_min.split(".")[3];
        var ip_max_1 = ip_max.split(".")[0];
        var ip_max_2 = ip_max.split(".")[1];
        var ip_max_3 = ip_max.split(".")[2];
        var ip_max_4 = ip_max.split(".")[3];
        console.log("ip_min_1 = " + ip_min_1);
        console.log("ip_min_2 = " + ip_min_2);
        console.log("ip_min_3 = " + ip_min_3);
        console.log("ip_min_4 = " + ip_min_4);
        console.log("ip_max_1 = " + ip_max_1);
        console.log("ip_max_2 = " + ip_max_2);
        console.log("ip_max_3 = " + ip_max_3);
        console.log("ip_max_4 = " + ip_max_4);

        var ips = new Array();
        var names = new Array();

        for (ip_check_1 = ip_min_1; ip_check_1 <= ip_max_1; ip_check_1++) {
            for (ip_check_2 = ip_min_2; ip_check_2 <= ip_max_2; ip_check_2++) {
                for (ip_check_3 = ip_min_3; ip_check_3 <= ip_max_3; ip_check_3++) {
                    for (ip_check_4 = ip_min_4; ip_check_4 <= ip_max_4; ip_check_4++) {

                        var ip = ip_check_1 + "." + ip_check_2 + "." + ip_check_3 + "." + ip_check_4;
                        // console.log("ip = " + ip);

                        $.ajax({
                            url: '/plugins/vigipool/core/ajax/test_device.php',
                            type: "post",
                            data: {ip: ip, speed: speed},
                            success: function (data) {
                                if (data !== "") {
                                    // console.log("data = " + data);

                                    var datasplit = data.split("/");
                                    var ip = datasplit[0];
                                    var name = datasplit[1];

                                    if (name.includes("_")) {
                                        ips.push(ip);
                                        names.push();
                                        $(".vigipool_menu").append('<li class="ip_click">' + ip + ' (' + name + ') </li>');
                                        add_interactivity();
                                    }
                                    localStorage.setItem("vigipool_menu", $(".vigipool_menu").html());
                                    console.log(`localStorage.setItem("vigipool_menu", ${$(".vigipool_menu").html()});`);

                                }
                            }
                        });
                    }
                }
            }
        }
    }

    function add_interactivity() {
        $(".ip_click").click(function () {
            var text_this = $(this).text();
            // console.log("text_this = " + text_this);

            var text_cut = text_this.split("(");
            // console.log("text_cut = " + text_cut);

            var ip = text_cut[0].replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "");
            // console.log("ip = " + ip);

            var id = text_cut[1].replace("(", "").replace(")", "");
            // console.log("id = " + id);

            $(".ip_selected").value(ip);
            $(".ip_selected").css("text-decoration", "overline underline");
            $(".ip_selected").css("text-decoration-color", "#337ab7");
            $(".id_selected").value(id);
            $(".id_selected").css("text-decoration", "overline underline");
            $(".id_selected").css("text-decoration-color", "#337ab7");
            const myTimeout = setTimeout(function () {
                $(".ip_selected").css("text-decoration", "");
                $(".ip_selected").css("text-decoration-color", "");
                $(".id_selected").css("text-decoration", "");
                $(".id_selected").css("text-decoration-color", "");
            }, 500);
        });
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }


    var vigipool_menu = localStorage.getItem("vigipool_menu");

    $(".vigipool_menu").html(vigipool_menu);

    add_interactivity();


</script>

