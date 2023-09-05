//$('.value_orpileox_modal_button_history').click(function () {
//    $("[data-template='vigipool_value_orp']").click();
//});

var orp_limit_1 = 350;
var orp_limit_2 = 450;
var orp_limit_3 = 550;
var orp_limit_4 = 650;
var orp_limit_5 = 750;
var orp_limit_6 = 850;
var orp_limit_7 = 950;

function update_vigipool_ui_value_orp() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {
        var value_orp = get_value_from_position(i, "value_orp");
        var consigne_orp = get_value_from_eq(i, "consigne_orp", "zelix");

        // console.log("value_orp = " + value_orp);
        // console.log("consigne_orp = " + consigne_orp);

        if (value_orp === undefined || value_orp === 0) {
            $(".vigipool_ui_value_orp_ui").eq(i).hide();
        } else {
            $(".vigipool_ui_value_orp_ui").eq(i).show();
        }

        // value_orp

        var value_orp_position = orp_to_position(value_orp);
        $(".vigipool_ui_value_orp").eq(i).css("margin-left", value_orp_position);



        if (value_orp <= orp_limit_2 || orp_limit_6 <= value_orp)
        {
            $(".vigipool_ui_value_orp").eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/ph_orp_red.png\")");
            $(".vigipool_ui_value_orp").eq(i).html("<i class=\"fas fa-times-circle\" ></i> " + value_orp);
        } else if (orp_limit_2 <= value_orp && value_orp <= orp_limit_3 || orp_limit_5 <= value_orp && value_orp <= orp_limit_6)
        {
            $(".vigipool_ui_value_orp").eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/ph_orp_orange.png\")");
            $(".vigipool_ui_value_orp").eq(i).html("<i class=\"fas fa-exclamation-circle\" ></i> " + value_orp);
        } else if (orp_limit_3 <= value_orp && value_orp <= orp_limit_5)
        {
            $(".vigipool_ui_value_orp").eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/ph_orp_green.png\")");
            $(".vigipool_ui_value_orp").eq(i).html("<i class=\"fas fa-check-circle\" ></i> " + value_orp);
        } else {
            // console.log("error !");
            // console.log("value_orp = " + value_orp);
            // console.log("orp_limit_2 = " + orp_limit_2);
            // console.log("orp_limit_6 = " + orp_limit_6);
        }

        // consigne_orp

        if (consigne_orp === undefined || consigne_orp === 0) {
            $(".vigipool_ui_value_orp_setpoint").eq(i).hide();
        } else {
            $(".vigipool_ui_value_orp_setpoint").eq(i).show();
        }

        var vigipool_orp_setpoint_position = orp_to_position(consigne_orp);
        $(".vigipool_ui_value_orp_setpoint").eq(i).css("margin-left", vigipool_orp_setpoint_position);

        $(".vigipool_ui_value_orp_setpoint").eq(i).html(get_text("setpoint") + " " + consigne_orp);

    }
}

function orp_to_position(orp) {
    if (orp <= 350)
        return "-98.9999999999996%";
    if (orp === 351)
        return "-98.6699999999996%";
    if (orp === 352)
        return "-98.3399999999996%";
    if (orp === 353)
        return "-98.0099999999996%";
    if (orp === 354)
        return "-97.6799999999996%";
    if (orp === 355)
        return "-97.3499999999996%";
    if (orp === 356)
        return "-97.0199999999996%";
    if (orp === 357)
        return "-96.6899999999996%";
    if (orp === 358)
        return "-96.3599999999996%";
    if (orp === 359)
        return "-96.0299999999996%";
    if (orp === 360)
        return "-95.6999999999996%";
    if (orp === 361)
        return "-95.3699999999996%";
    if (orp === 362)
        return "-95.0399999999996%";
    if (orp === 363)
        return "-94.7099999999996%";
    if (orp === 364)
        return "-94.3799999999996%";
    if (orp === 365)
        return "-94.0499999999996%";
    if (orp === 366)
        return "-93.7199999999996%";
    if (orp === 367)
        return "-93.3899999999996%";
    if (orp === 368)
        return "-93.0599999999996%";
    if (orp === 369)
        return "-92.7299999999996%";
    if (orp === 370)
        return "-92.3999999999996%";
    if (orp === 371)
        return "-92.0699999999996%";
    if (orp === 372)
        return "-91.7399999999996%";
    if (orp === 373)
        return "-91.4099999999996%";
    if (orp === 374)
        return "-91.0799999999996%";
    if (orp === 375)
        return "-90.7499999999996%";
    if (orp === 376)
        return "-90.4199999999996%";
    if (orp === 377)
        return "-90.0899999999996%";
    if (orp === 378)
        return "-89.7599999999996%";
    if (orp === 379)
        return "-89.4299999999996%";
    if (orp === 380)
        return "-89.0999999999996%";
    if (orp === 381)
        return "-88.7699999999996%";
    if (orp === 382)
        return "-88.4399999999996%";
    if (orp === 383)
        return "-88.1099999999996%";
    if (orp === 384)
        return "-87.7799999999996%";
    if (orp === 385)
        return "-87.4499999999996%";
    if (orp === 386)
        return "-87.1199999999996%";
    if (orp === 387)
        return "-86.7899999999996%";
    if (orp === 388)
        return "-86.4599999999996%";
    if (orp === 389)
        return "-86.1299999999996%";
    if (orp === 390)
        return "-85.7999999999996%";
    if (orp === 391)
        return "-85.4699999999996%";
    if (orp === 392)
        return "-85.1399999999997%";
    if (orp === 393)
        return "-84.8099999999997%";
    if (orp === 394)
        return "-84.4799999999997%";
    if (orp === 395)
        return "-84.1499999999997%";
    if (orp === 396)
        return "-83.8199999999997%";
    if (orp === 397)
        return "-83.4899999999997%";
    if (orp === 398)
        return "-83.1599999999997%";
    if (orp === 399)
        return "-82.8299999999997%";
    if (orp === 400)
        return "-82.4999999999997%";
    if (orp === 401)
        return "-82.1699999999997%";
    if (orp === 402)
        return "-81.8399999999997%";
    if (orp === 403)
        return "-81.5099999999997%";
    if (orp === 404)
        return "-81.1799999999997%";
    if (orp === 405)
        return "-80.8499999999997%";
    if (orp === 406)
        return "-80.5199999999997%";
    if (orp === 407)
        return "-80.1899999999997%";
    if (orp === 408)
        return "-79.8599999999997%";
    if (orp === 409)
        return "-79.5299999999997%";
    if (orp === 410)
        return "-79.1999999999997%";
    if (orp === 411)
        return "-78.8699999999997%";
    if (orp === 412)
        return "-78.5399999999997%";
    if (orp === 413)
        return "-78.2099999999997%";
    if (orp === 414)
        return "-77.8799999999997%";
    if (orp === 415)
        return "-77.5499999999997%";
    if (orp === 416)
        return "-77.2199999999997%";
    if (orp === 417)
        return "-76.8899999999997%";
    if (orp === 418)
        return "-76.5599999999997%";
    if (orp === 419)
        return "-76.2299999999997%";
    if (orp === 420)
        return "-75.8999999999997%";
    if (orp === 421)
        return "-75.5699999999997%";
    if (orp === 422)
        return "-75.2399999999997%";
    if (orp === 423)
        return "-74.9099999999997%";
    if (orp === 424)
        return "-74.5799999999997%";
    if (orp === 425)
        return "-74.2499999999997%";
    if (orp === 426)
        return "-73.9199999999997%";
    if (orp === 427)
        return "-73.5899999999997%";
    if (orp === 428)
        return "-73.2599999999997%";
    if (orp === 429)
        return "-72.9299999999997%";
    if (orp === 430)
        return "-72.5999999999997%";
    if (orp === 431)
        return "-72.2699999999997%";
    if (orp === 432)
        return "-71.9399999999997%";
    if (orp === 433)
        return "-71.6099999999997%";
    if (orp === 434)
        return "-71.2799999999997%";
    if (orp === 435)
        return "-70.9499999999997%";
    if (orp === 436)
        return "-70.6199999999997%";
    if (orp === 437)
        return "-70.2899999999997%";
    if (orp === 438)
        return "-69.9599999999997%";
    if (orp === 439)
        return "-69.6299999999997%";
    if (orp === 440)
        return "-69.2999999999997%";
    if (orp === 441)
        return "-68.9699999999997%";
    if (orp === 442)
        return "-68.6399999999997%";
    if (orp === 443)
        return "-68.3099999999997%";
    if (orp === 444)
        return "-67.9799999999997%";
    if (orp === 445)
        return "-67.6499999999997%";
    if (orp === 446)
        return "-67.3199999999997%";
    if (orp === 447)
        return "-66.9899999999997%";
    if (orp === 448)
        return "-66.6599999999997%";
    if (orp === 449)
        return "-66.3299999999997%";
    if (orp === 450)
        return "-65.9999999999997%";
    if (orp === 451)
        return "-65.6699999999998%";
    if (orp === 452)
        return "-65.3399999999998%";
    if (orp === 453)
        return "-65.0099999999998%";
    if (orp === 454)
        return "-64.6799999999998%";
    if (orp === 455)
        return "-64.3499999999998%";
    if (orp === 456)
        return "-64.0199999999998%";
    if (orp === 457)
        return "-63.6899999999998%";
    if (orp === 458)
        return "-63.3599999999998%";
    if (orp === 459)
        return "-63.0299999999998%";
    if (orp === 460)
        return "-62.6999999999998%";
    if (orp === 461)
        return "-62.3699999999998%";
    if (orp === 462)
        return "-62.0399999999998%";
    if (orp === 463)
        return "-61.7099999999998%";
    if (orp === 464)
        return "-61.3799999999998%";
    if (orp === 465)
        return "-61.0499999999998%";
    if (orp === 466)
        return "-60.7199999999998%";
    if (orp === 467)
        return "-60.3899999999998%";
    if (orp === 468)
        return "-60.0599999999998%";
    if (orp === 469)
        return "-59.7299999999998%";
    if (orp === 470)
        return "-59.3999999999998%";
    if (orp === 471)
        return "-59.0699999999998%";
    if (orp === 472)
        return "-58.7399999999998%";
    if (orp === 473)
        return "-58.4099999999998%";
    if (orp === 474)
        return "-58.0799999999998%";
    if (orp === 475)
        return "-57.7499999999998%";
    if (orp === 476)
        return "-57.4199999999998%";
    if (orp === 477)
        return "-57.0899999999998%";
    if (orp === 478)
        return "-56.7599999999998%";
    if (orp === 479)
        return "-56.4299999999998%";
    if (orp === 480)
        return "-56.0999999999998%";
    if (orp === 481)
        return "-55.7699999999998%";
    if (orp === 482)
        return "-55.4399999999998%";
    if (orp === 483)
        return "-55.1099999999998%";
    if (orp === 484)
        return "-54.7799999999998%";
    if (orp === 485)
        return "-54.4499999999998%";
    if (orp === 486)
        return "-54.1199999999998%";
    if (orp === 487)
        return "-53.7899999999998%";
    if (orp === 488)
        return "-53.4599999999998%";
    if (orp === 489)
        return "-53.1299999999998%";
    if (orp === 490)
        return "-52.7999999999998%";
    if (orp === 491)
        return "-52.4699999999998%";
    if (orp === 492)
        return "-52.1399999999998%";
    if (orp === 493)
        return "-51.8099999999998%";
    if (orp === 494)
        return "-51.4799999999998%";
    if (orp === 495)
        return "-51.1499999999998%";
    if (orp === 496)
        return "-50.8199999999998%";
    if (orp === 497)
        return "-50.4899999999998%";
    if (orp === 498)
        return "-50.1599999999998%";
    if (orp === 499)
        return "-49.8299999999998%";
    if (orp === 500)
        return "-49.4999999999998%";
    if (orp === 501)
        return "-49.1699999999998%";
    if (orp === 502)
        return "-48.8399999999998%";
    if (orp === 503)
        return "-48.5099999999998%";
    if (orp === 504)
        return "-48.1799999999998%";
    if (orp === 505)
        return "-47.8499999999998%";
    if (orp === 506)
        return "-47.5199999999998%";
    if (orp === 507)
        return "-47.1899999999998%";
    if (orp === 508)
        return "-46.8599999999998%";
    if (orp === 509)
        return "-46.5299999999998%";
    if (orp === 510)
        return "-46.1999999999999%";
    if (orp === 511)
        return "-45.8699999999999%";
    if (orp === 512)
        return "-45.5399999999999%";
    if (orp === 513)
        return "-45.2099999999999%";
    if (orp === 514)
        return "-44.8799999999999%";
    if (orp === 515)
        return "-44.5499999999999%";
    if (orp === 516)
        return "-44.2199999999999%";
    if (orp === 517)
        return "-43.8899999999999%";
    if (orp === 518)
        return "-43.5599999999999%";
    if (orp === 519)
        return "-43.2299999999999%";
    if (orp === 520)
        return "-42.8999999999999%";
    if (orp === 521)
        return "-42.5699999999999%";
    if (orp === 522)
        return "-42.2399999999999%";
    if (orp === 523)
        return "-41.9099999999999%";
    if (orp === 524)
        return "-41.5799999999999%";
    if (orp === 525)
        return "-41.2499999999999%";
    if (orp === 526)
        return "-40.9199999999999%";
    if (orp === 527)
        return "-40.5899999999999%";
    if (orp === 528)
        return "-40.2599999999999%";
    if (orp === 529)
        return "-39.9299999999999%";
    if (orp === 530)
        return "-39.5999999999999%";
    if (orp === 531)
        return "-39.2699999999999%";
    if (orp === 532)
        return "-38.9399999999999%";
    if (orp === 533)
        return "-38.6099999999999%";
    if (orp === 534)
        return "-38.2799999999999%";
    if (orp === 535)
        return "-37.9499999999999%";
    if (orp === 536)
        return "-37.6199999999999%";
    if (orp === 537)
        return "-37.2899999999999%";
    if (orp === 538)
        return "-36.9599999999999%";
    if (orp === 539)
        return "-36.6299999999999%";
    if (orp === 540)
        return "-36.2999999999999%";
    if (orp === 541)
        return "-35.9699999999999%";
    if (orp === 542)
        return "-35.6399999999999%";
    if (orp === 543)
        return "-35.3099999999999%";
    if (orp === 544)
        return "-34.9799999999999%";
    if (orp === 545)
        return "-34.6499999999999%";
    if (orp === 546)
        return "-34.3199999999999%";
    if (orp === 547)
        return "-33.9899999999999%";
    if (orp === 548)
        return "-33.6599999999999%";
    if (orp === 549)
        return "-33.3299999999999%";
    if (orp === 550)
        return "-32.9999999999999%";
    if (orp === 551)
        return "-32.6699999999999%";
    if (orp === 552)
        return "-32.3399999999999%";
    if (orp === 553)
        return "-32.0099999999999%";
    if (orp === 554)
        return "-31.6799999999999%";
    if (orp === 555)
        return "-31.3499999999999%";
    if (orp === 556)
        return "-31.0199999999999%";
    if (orp === 557)
        return "-30.6899999999999%";
    if (orp === 558)
        return "-30.3599999999999%";
    if (orp === 559)
        return "-30.0299999999999%";
    if (orp === 560)
        return "-29.6999999999999%";
    if (orp === 561)
        return "-29.3699999999999%";
    if (orp === 562)
        return "-29.0399999999999%";
    if (orp === 563)
        return "-28.7099999999999%";
    if (orp === 564)
        return "-28.3799999999999%";
    if (orp === 565)
        return "-28.0499999999999%";
    if (orp === 566)
        return "-27.7199999999999%";
    if (orp === 567)
        return "-27.3899999999999%";
    if (orp === 568)
        return "-27.0599999999999%";
    if (orp === 569)
        return "-26.7299999999999%";
    if (orp === 570)
        return "-26.4%";
    if (orp === 571)
        return "-26.07%";
    if (orp === 572)
        return "-25.74%";
    if (orp === 573)
        return "-25.41%";
    if (orp === 574)
        return "-25.08%";
    if (orp === 575)
        return "-24.75%";
    if (orp === 576)
        return "-24.42%";
    if (orp === 577)
        return "-24.09%";
    if (orp === 578)
        return "-23.76%";
    if (orp === 579)
        return "-23.43%";
    if (orp === 580)
        return "-23.1%";
    if (orp === 581)
        return "-22.77%";
    if (orp === 582)
        return "-22.44%";
    if (orp === 583)
        return "-22.11%";
    if (orp === 584)
        return "-21.78%";
    if (orp === 585)
        return "-21.45%";
    if (orp === 586)
        return "-21.12%";
    if (orp === 587)
        return "-20.79%";
    if (orp === 588)
        return "-20.46%";
    if (orp === 589)
        return "-20.13%";
    if (orp === 590)
        return "-19.8%";
    if (orp === 591)
        return "-19.47%";
    if (orp === 592)
        return "-19.14%";
    if (orp === 593)
        return "-18.81%";
    if (orp === 594)
        return "-18.48%";
    if (orp === 595)
        return "-18.15%";
    if (orp === 596)
        return "-17.82%";
    if (orp === 597)
        return "-17.49%";
    if (orp === 598)
        return "-17.16%";
    if (orp === 599)
        return "-16.83%";
    if (orp === 600)
        return "-16.5%";
    if (orp === 601)
        return "-16.17%";
    if (orp === 602)
        return "-15.84%";
    if (orp === 603)
        return "-15.51%";
    if (orp === 604)
        return "-15.18%";
    if (orp === 605)
        return "-14.85%";
    if (orp === 606)
        return "-14.52%";
    if (orp === 607)
        return "-14.19%";
    if (orp === 608)
        return "-13.86%";
    if (orp === 609)
        return "-13.53%";
    if (orp === 610)
        return "-13.2%";
    if (orp === 611)
        return "-12.87%";
    if (orp === 612)
        return "-12.54%";
    if (orp === 613)
        return "-12.21%";
    if (orp === 614)
        return "-11.88%";
    if (orp === 615)
        return "-11.55%";
    if (orp === 616)
        return "-11.22%";
    if (orp === 617)
        return "-10.89%";
    if (orp === 618)
        return "-10.56%";
    if (orp === 619)
        return "-10.23%";
    if (orp === 620)
        return "-9.9%";
    if (orp === 621)
        return "-9.57%";
    if (orp === 622)
        return "-9.24%";
    if (orp === 623)
        return "-8.91%";
    if (orp === 624)
        return "-8.58%";
    if (orp === 625)
        return "-8.25%";
    if (orp === 626)
        return "-7.92%";
    if (orp === 627)
        return "-7.59%";
    if (orp === 628)
        return "-7.26%";
    if (orp === 629)
        return "-6.93%";
    if (orp === 630)
        return "-6.6%";
    if (orp === 631)
        return "-6.27%";
    if (orp === 632)
        return "-5.94%";
    if (orp === 633)
        return "-5.61%";
    if (orp === 634)
        return "-5.28%";
    if (orp === 635)
        return "-4.95%";
    if (orp === 636)
        return "-4.62%";
    if (orp === 637)
        return "-4.29%";
    if (orp === 638)
        return "-3.96%";
    if (orp === 639)
        return "-3.63%";
    if (orp === 640)
        return "-3.3%";
    if (orp === 641)
        return "-2.97%";
    if (orp === 642)
        return "-2.64%";
    if (orp === 643)
        return "-2.31%";
    if (orp === 644)
        return "-1.98%";
    if (orp === 645)
        return "-1.65%";
    if (orp === 646)
        return "-1.32%";
    if (orp === 647)
        return "-0.99%";
    if (orp === 648)
        return "-0.66%";
    if (orp === 649)
        return "-0.33%";
    if (orp === 650)
        return "0%";
    if (orp === 651)
        return "0.33%";
    if (orp === 652)
        return "0.66%";
    if (orp === 653)
        return "0.99%";
    if (orp === 654)
        return "1.32%";
    if (orp === 655)
        return "1.65%";
    if (orp === 656)
        return "1.98%";
    if (orp === 657)
        return "2.31%";
    if (orp === 658)
        return "2.64%";
    if (orp === 659)
        return "2.97%";
    if (orp === 660)
        return "3.3%";
    if (orp === 661)
        return "3.63%";
    if (orp === 662)
        return "3.96%";
    if (orp === 663)
        return "4.29%";
    if (orp === 664)
        return "4.62%";
    if (orp === 665)
        return "4.95%";
    if (orp === 666)
        return "5.28%";
    if (orp === 667)
        return "5.61%";
    if (orp === 668)
        return "5.94%";
    if (orp === 669)
        return "6.27%";
    if (orp === 670)
        return "6.6%";
    if (orp === 671)
        return "6.93%";
    if (orp === 672)
        return "7.26%";
    if (orp === 673)
        return "7.59%";
    if (orp === 674)
        return "7.92%";
    if (orp === 675)
        return "8.25%";
    if (orp === 676)
        return "8.58%";
    if (orp === 677)
        return "8.91%";
    if (orp === 678)
        return "9.24%";
    if (orp === 679)
        return "9.57%";
    if (orp === 680)
        return "9.9%";
    if (orp === 681)
        return "10.23%";
    if (orp === 682)
        return "10.56%";
    if (orp === 683)
        return "10.89%";
    if (orp === 684)
        return "11.22%";
    if (orp === 685)
        return "11.55%";
    if (orp === 686)
        return "11.88%";
    if (orp === 687)
        return "12.21%";
    if (orp === 688)
        return "12.54%";
    if (orp === 689)
        return "12.87%";
    if (orp === 690)
        return "13.2%";
    if (orp === 691)
        return "13.53%";
    if (orp === 692)
        return "13.86%";
    if (orp === 693)
        return "14.19%";
    if (orp === 694)
        return "14.52%";
    if (orp === 695)
        return "14.85%";
    if (orp === 696)
        return "15.18%";
    if (orp === 697)
        return "15.51%";
    if (orp === 698)
        return "15.84%";
    if (orp === 699)
        return "16.17%";
    if (orp === 700)
        return "16.5%";
    if (orp === 701)
        return "16.83%";
    if (orp === 702)
        return "17.16%";
    if (orp === 703)
        return "17.49%";
    if (orp === 704)
        return "17.82%";
    if (orp === 705)
        return "18.15%";
    if (orp === 706)
        return "18.48%";
    if (orp === 707)
        return "18.81%";
    if (orp === 708)
        return "19.14%";
    if (orp === 709)
        return "19.47%";
    if (orp === 710)
        return "19.8%";
    if (orp === 711)
        return "20.13%";
    if (orp === 712)
        return "20.46%";
    if (orp === 713)
        return "20.79%";
    if (orp === 714)
        return "21.12%";
    if (orp === 715)
        return "21.45%";
    if (orp === 716)
        return "21.78%";
    if (orp === 717)
        return "22.11%";
    if (orp === 718)
        return "22.44%";
    if (orp === 719)
        return "22.77%";
    if (orp === 720)
        return "23.1%";
    if (orp === 721)
        return "23.43%";
    if (orp === 722)
        return "23.76%";
    if (orp === 723)
        return "24.09%";
    if (orp === 724)
        return "24.42%";
    if (orp === 725)
        return "24.75%";
    if (orp === 726)
        return "25.08%";
    if (orp === 727)
        return "25.41%";
    if (orp === 728)
        return "25.74%";
    if (orp === 729)
        return "26.07%";
    if (orp === 730)
        return "26.4%";
    if (orp === 731)
        return "26.7299999999999%";
    if (orp === 732)
        return "27.0599999999999%";
    if (orp === 733)
        return "27.3899999999999%";
    if (orp === 734)
        return "27.7199999999999%";
    if (orp === 735)
        return "28.0499999999999%";
    if (orp === 736)
        return "28.3799999999999%";
    if (orp === 737)
        return "28.7099999999999%";
    if (orp === 738)
        return "29.0399999999999%";
    if (orp === 739)
        return "29.3699999999999%";
    if (orp === 740)
        return "29.6999999999999%";
    if (orp === 741)
        return "30.0299999999999%";
    if (orp === 742)
        return "30.3599999999999%";
    if (orp === 743)
        return "30.6899999999999%";
    if (orp === 744)
        return "31.0199999999999%";
    if (orp === 745)
        return "31.3499999999999%";
    if (orp === 746)
        return "31.6799999999999%";
    if (orp === 747)
        return "32.0099999999999%";
    if (orp === 748)
        return "32.3399999999999%";
    if (orp === 749)
        return "32.6699999999999%";
    if (orp === 750)
        return "32.9999999999999%";
    if (orp === 751)
        return "33.3299999999999%";
    if (orp === 752)
        return "33.6599999999999%";
    if (orp === 753)
        return "33.9899999999999%";
    if (orp === 754)
        return "34.3199999999999%";
    if (orp === 755)
        return "34.6499999999999%";
    if (orp === 756)
        return "34.9799999999999%";
    if (orp === 757)
        return "35.3099999999999%";
    if (orp === 758)
        return "35.6399999999999%";
    if (orp === 759)
        return "35.9699999999999%";
    if (orp === 760)
        return "36.2999999999999%";
    if (orp === 761)
        return "36.6299999999999%";
    if (orp === 762)
        return "36.9599999999999%";
    if (orp === 763)
        return "37.2899999999999%";
    if (orp === 764)
        return "37.6199999999999%";
    if (orp === 765)
        return "37.9499999999999%";
    if (orp === 766)
        return "38.2799999999999%";
    if (orp === 767)
        return "38.6099999999999%";
    if (orp === 768)
        return "38.9399999999999%";
    if (orp === 769)
        return "39.2699999999999%";
    if (orp === 770)
        return "39.5999999999999%";
    if (orp === 771)
        return "39.9299999999999%";
    if (orp === 772)
        return "40.2599999999999%";
    if (orp === 773)
        return "40.5899999999999%";
    if (orp === 774)
        return "40.9199999999999%";
    if (orp === 775)
        return "41.2499999999999%";
    if (orp === 776)
        return "41.5799999999999%";
    if (orp === 777)
        return "41.9099999999999%";
    if (orp === 778)
        return "42.2399999999999%";
    if (orp === 779)
        return "42.5699999999999%";
    if (orp === 780)
        return "42.8999999999999%";
    if (orp === 781)
        return "43.2299999999999%";
    if (orp === 782)
        return "43.5599999999999%";
    if (orp === 783)
        return "43.8899999999999%";
    if (orp === 784)
        return "44.2199999999999%";
    if (orp === 785)
        return "44.5499999999999%";
    if (orp === 786)
        return "44.8799999999999%";
    if (orp === 787)
        return "45.2099999999999%";
    if (orp === 788)
        return "45.5399999999999%";
    if (orp === 789)
        return "45.8699999999999%";
    if (orp === 790)
        return "46.1999999999999%";
    if (orp === 791)
        return "46.5299999999998%";
    if (orp === 792)
        return "46.8599999999998%";
    if (orp === 793)
        return "47.1899999999998%";
    if (orp === 794)
        return "47.5199999999998%";
    if (orp === 795)
        return "47.8499999999998%";
    if (orp === 796)
        return "48.1799999999998%";
    if (orp === 797)
        return "48.5099999999998%";
    if (orp === 798)
        return "48.8399999999998%";
    if (orp === 799)
        return "49.1699999999998%";
    if (orp === 800)
        return "49.4999999999998%";
    if (orp === 801)
        return "49.8299999999998%";
    if (orp === 802)
        return "50.1599999999998%";
    if (orp === 803)
        return "50.4899999999998%";
    if (orp === 804)
        return "50.8199999999998%";
    if (orp === 805)
        return "51.1499999999998%";
    if (orp === 806)
        return "51.4799999999998%";
    if (orp === 807)
        return "51.8099999999998%";
    if (orp === 808)
        return "52.1399999999998%";
    if (orp === 809)
        return "52.4699999999998%";
    if (orp === 810)
        return "52.7999999999998%";
    if (orp === 811)
        return "53.1299999999998%";
    if (orp === 812)
        return "53.4599999999998%";
    if (orp === 813)
        return "53.7899999999998%";
    if (orp === 814)
        return "54.1199999999998%";
    if (orp === 815)
        return "54.4499999999998%";
    if (orp === 816)
        return "54.7799999999998%";
    if (orp === 817)
        return "55.1099999999998%";
    if (orp === 818)
        return "55.4399999999998%";
    if (orp === 819)
        return "55.7699999999998%";
    if (orp === 820)
        return "56.0999999999998%";
    if (orp === 821)
        return "56.4299999999998%";
    if (orp === 822)
        return "56.7599999999998%";
    if (orp === 823)
        return "57.0899999999998%";
    if (orp === 824)
        return "57.4199999999998%";
    if (orp === 825)
        return "57.7499999999998%";
    if (orp === 826)
        return "58.0799999999998%";
    if (orp === 827)
        return "58.4099999999998%";
    if (orp === 828)
        return "58.7399999999998%";
    if (orp === 829)
        return "59.0699999999998%";
    if (orp === 830)
        return "59.3999999999998%";
    if (orp === 831)
        return "59.7299999999998%";
    if (orp === 832)
        return "60.0599999999998%";
    if (orp === 833)
        return "60.3899999999998%";
    if (orp === 834)
        return "60.7199999999998%";
    if (orp === 835)
        return "61.0499999999998%";
    if (orp === 836)
        return "61.3799999999998%";
    if (orp === 837)
        return "61.7099999999998%";
    if (orp === 838)
        return "62.0399999999998%";
    if (orp === 839)
        return "62.3699999999998%";
    if (orp === 840)
        return "62.6999999999998%";
    if (orp === 841)
        return "63.0299999999998%";
    if (orp === 842)
        return "63.3599999999998%";
    if (orp === 843)
        return "63.6899999999998%";
    if (orp === 844)
        return "64.0199999999998%";
    if (orp === 845)
        return "64.3499999999998%";
    if (orp === 846)
        return "64.6799999999998%";
    if (orp === 847)
        return "65.0099999999998%";
    if (orp === 848)
        return "65.3399999999998%";
    if (orp === 849)
        return "65.6699999999998%";
    if (orp === 850)
        return "65.9999999999997%";
    if (orp === 851)
        return "66.3299999999997%";
    if (orp === 852)
        return "66.6599999999997%";
    if (orp === 853)
        return "66.9899999999997%";
    if (orp === 854)
        return "67.3199999999997%";
    if (orp === 855)
        return "67.6499999999997%";
    if (orp === 856)
        return "67.9799999999997%";
    if (orp === 857)
        return "68.3099999999997%";
    if (orp === 858)
        return "68.6399999999997%";
    if (orp === 859)
        return "68.9699999999997%";
    if (orp === 860)
        return "69.2999999999997%";
    if (orp === 861)
        return "69.6299999999997%";
    if (orp === 862)
        return "69.9599999999997%";
    if (orp === 863)
        return "70.2899999999997%";
    if (orp === 864)
        return "70.6199999999997%";
    if (orp === 865)
        return "70.9499999999997%";
    if (orp === 866)
        return "71.2799999999997%";
    if (orp === 867)
        return "71.6099999999997%";
    if (orp === 868)
        return "71.9399999999997%";
    if (orp === 869)
        return "72.2699999999997%";
    if (orp === 870)
        return "72.5999999999997%";
    if (orp === 871)
        return "72.9299999999997%";
    if (orp === 872)
        return "73.2599999999997%";
    if (orp === 873)
        return "73.5899999999997%";
    if (orp === 874)
        return "73.9199999999997%";
    if (orp === 875)
        return "74.2499999999997%";
    if (orp === 876)
        return "74.5799999999997%";
    if (orp === 877)
        return "74.9099999999997%";
    if (orp === 878)
        return "75.2399999999997%";
    if (orp === 879)
        return "75.5699999999997%";
    if (orp === 880)
        return "75.8999999999997%";
    if (orp === 881)
        return "76.2299999999997%";
    if (orp === 882)
        return "76.5599999999997%";
    if (orp === 883)
        return "76.8899999999997%";
    if (orp === 884)
        return "77.2199999999997%";
    if (orp === 885)
        return "77.5499999999997%";
    if (orp === 886)
        return "77.8799999999997%";
    if (orp === 887)
        return "78.2099999999997%";
    if (orp === 888)
        return "78.5399999999997%";
    if (orp === 889)
        return "78.8699999999997%";
    if (orp === 890)
        return "79.1999999999997%";
    if (orp === 891)
        return "79.5299999999997%";
    if (orp === 892)
        return "79.8599999999997%";
    if (orp === 893)
        return "80.1899999999997%";
    if (orp === 894)
        return "80.5199999999997%";
    if (orp === 895)
        return "80.8499999999997%";
    if (orp === 896)
        return "81.1799999999997%";
    if (orp === 897)
        return "81.5099999999997%";
    if (orp === 898)
        return "81.8399999999997%";
    if (orp === 899)
        return "82.1699999999997%";
    if (orp === 900)
        return "82.4999999999997%";
    if (orp === 901)
        return "82.8299999999997%";
    if (orp === 902)
        return "83.1599999999997%";
    if (orp === 903)
        return "83.4899999999997%";
    if (orp === 904)
        return "83.8199999999997%";
    if (orp === 905)
        return "84.1499999999997%";
    if (orp === 906)
        return "84.4799999999997%";
    if (orp === 907)
        return "84.8099999999997%";
    if (orp === 908)
        return "85.1399999999997%";
    if (orp === 909)
        return "85.4699999999996%";
    if (orp === 910)
        return "85.7999999999996%";
    if (orp === 911)
        return "86.1299999999996%";
    if (orp === 912)
        return "86.4599999999996%";
    if (orp === 913)
        return "86.7899999999996%";
    if (orp === 914)
        return "87.1199999999996%";
    if (orp === 915)
        return "87.4499999999996%";
    if (orp === 916)
        return "87.7799999999996%";
    if (orp === 917)
        return "88.1099999999996%";
    if (orp === 918)
        return "88.4399999999996%";
    if (orp === 919)
        return "88.7699999999996%";
    if (orp === 920)
        return "89.0999999999996%";
    if (orp === 921)
        return "89.4299999999996%";
    if (orp === 922)
        return "89.7599999999996%";
    if (orp === 923)
        return "90.0899999999996%";
    if (orp === 924)
        return "90.4199999999996%";
    if (orp === 925)
        return "90.7499999999996%";
    if (orp === 926)
        return "91.0799999999996%";
    if (orp === 927)
        return "91.4099999999996%";
    if (orp === 928)
        return "91.7399999999996%";
    if (orp === 929)
        return "92.0699999999996%";
    if (orp === 930)
        return "92.3999999999996%";
    if (orp === 931)
        return "92.7299999999996%";
    if (orp === 932)
        return "93.0599999999996%";
    if (orp === 933)
        return "93.3899999999996%";
    if (orp === 934)
        return "93.7199999999996%";
    if (orp === 935)
        return "94.0499999999996%";
    if (orp === 936)
        return "94.3799999999996%";
    if (orp === 937)
        return "94.7099999999996%";
    if (orp === 938)
        return "95.0399999999996%";
    if (orp === 939)
        return "95.3699999999996%";
    if (orp === 940)
        return "95.6999999999996%";
    if (orp === 941)
        return "96.0299999999996%";
    if (orp === 942)
        return "96.3599999999996%";
    if (orp === 943)
        return "96.6899999999996%";
    if (orp === 944)
        return "97.0199999999996%";
    if (orp === 945)
        return "97.3499999999996%";
    if (orp === 946)
        return "97.6799999999996%";
    if (orp === 947)
        return "98.0099999999996%";
    if (orp === 948)
        return "98.3399999999996%";
    if (orp === 949)
        return "98.6699999999996%";
    if (orp >= 950)
        return "98.9999999999996%";

}