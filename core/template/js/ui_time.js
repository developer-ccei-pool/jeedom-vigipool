function refresh_dashboard_time() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    $(".vigipool_ui_time").html(n);
}
