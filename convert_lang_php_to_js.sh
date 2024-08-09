cp ./vigipool/desktop/modal/language_english.php ./vigipool/core/template/js/language_english.js
echo -n "."
sed -i 's/<?php//g' ./vigipool/core/template/js/language_english.js
echo -n "."
sed -i 's/$language_/language_/g' ./vigipool/core/template/js/language_english.js
echo -n "."
sed -i 's/array();/{};/g' ./vigipool/core/template/js/language_english.js
echo -n "."
sed -i 's/language_en = {};/var language_en = {};/' ./vigipool/core/template/js/language_english.js
echo -n "."

cp ./vigipool/desktop/modal/language_french.php ./vigipool/core/template/js/language_french.js
echo -n "."
sed -i 's/<?php//g' ./vigipool/core/template/js/language_french.js
echo -n "."
sed -i 's/$language_/language_/g' ./vigipool/core/template/js/language_french.js
echo -n "."
sed -i 's/array();/{};/g' ./vigipool/core/template/js/language_french.js
echo -n "."
sed -i 's/language_fr = {};/var language_fr = {};/' ./vigipool/core/template/js/language_french.js
echo -n "."

cp ./vigipool/desktop/modal/language_german.php ./vigipool/core/template/js/language_german.js
echo -n "."
sed -i 's/<?php//g' ./vigipool/core/template/js/language_german.js
echo -n "."
sed -i 's/$language_/language_/g' ./vigipool/core/template/js/language_german.js
echo -n "."
sed -i 's/array();/{};/g' ./vigipool/core/template/js/language_german.js
echo -n "."
sed -i 's/language_ge = {};/var language_ge = {};/' ./vigipool/core/template/js/language_german.js
echo -n "."

cp ./vigipool/desktop/modal/language_italian.php ./vigipool/core/template/js/language_italian.js
echo -n "."
sed -i 's/<?php//g' ./vigipool/core/template/js/language_italian.js
echo -n "."
sed -i 's/$language_/language_/g' ./vigipool/core/template/js/language_italian.js
echo -n "."
sed -i 's/array();/{};/g' ./vigipool/core/template/js/language_italian.js
echo -n "."
sed -i 's/language_it = {};/var language_it = {};/' ./vigipool/core/template/js/language_italian.js
echo -n "."

cp ./vigipool/desktop/modal/language_spanish.php ./vigipool/core/template/js/language_spanish.js
echo -n "."
sed -i 's/<?php//g' ./vigipool/core/template/js/language_spanish.js
echo -n "."
sed -i 's/$language_/language_/g' ./vigipool/core/template/js/language_spanish.js
echo -n "."
sed -i 's/array();/{};/g' ./vigipool/core/template/js/language_spanish.js
echo -n "."
sed -i 's/language_sp = {};/var language_sp = {};/' ./vigipool/core/template/js/language_spanish.js
echo -n "."
echo "done"