const select = document.querySelector('.change-lang');
const allLang = ['pl', 'ua']

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#pl';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['title-name'][hash];
    document.querySelector('.lng-intro-title').innerHTML = langArr['intro-title'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}
changeLanguage();