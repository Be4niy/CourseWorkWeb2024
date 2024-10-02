const select = document.querySelector('select');
const allLang = ['ru', 'en'];
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#'+lang;
    location.reload();

}
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location, pathname + '#en';
        location.reload();
    }
    select.value = hash;
    
    document.querySelector('.lng-attorney2').innerHTML = langArr['attorney2'][hash]
    document.querySelector('.lng-home3').innerHTML = langArr['home3'][hash]
    document.querySelector('.lng-about4').innerHTML = langArr['about4'][hash]
    document.querySelector('.lng-pages2').innerHTML = langArr['pages2'][hash]
    document.querySelector('.lng-contact5').innerHTML = langArr['contact5'][hash]
    document.querySelector('.lng-call3').innerHTML = langArr['call3'][hash]
    document.querySelector('.lng-mail4').innerHTML = langArr['mail4'][hash]
    document.querySelector('.lng-book3').innerHTML = langArr['book3'][hash]
    document.querySelector('.lng-contact6').innerHTML = langArr['contact6'][hash]
    document.querySelector('.lng-say').innerHTML = langArr['say'][hash]
    document.querySelector('.lng-if').innerHTML = langArr['if'][hash]
    document.querySelector('.lng-las').innerHTML = langArr['las'][hash]
    document.querySelector('.lng-street').innerHTML = langArr['street'][hash]
    document.querySelector('.lng-new').innerHTML = langArr['new'][hash]
    document.querySelector('.lng-say').innerHTML = langArr['say'][hash]
    document.querySelector('.lng-main').innerHTML = langArr['main'][hash]
}
changeLanguage();

