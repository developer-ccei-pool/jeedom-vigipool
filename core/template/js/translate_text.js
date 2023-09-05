function get_text(id) {

    var language = $(".vigipool_language").html();

    switch (language) {
        case "fr_FR":
            if (language_fr[id] === undefined)
                return "ERR : " + id;
            if (language_fr[id] !== undefined)
                return language_fr[id];
        case "en_US":
            if (language_en[id] === undefined)
                return "ERR : " + id;
            if (language_en[id] !== undefined)
                return language_en[id];
        case "es_ES":
            if (language_sp[id] === undefined)
                return "ERR : " + id;
            if (language_sp[id] !== undefined)
                return language_sp[id];
        case "de_DE":
            if (language_ge[id] === undefined)
                return "ERR : " + id;
            if (language_ge[id] !== undefined)
                return language_ge[id];
        case "it_IT":
            if (language_it[id] === undefined)
                return "ERR : " + id;
            if (language_it[id] !== undefined)
                return language_it[id];
        default:
            if (language_en[id] === undefined)
                return "ERR : " + id;
            if (language_en[id] !== undefined)
                return language_en[id];
    }
}

