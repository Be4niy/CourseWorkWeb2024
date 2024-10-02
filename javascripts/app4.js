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
    
    document.querySelector('.lng-attorney3').innerHTML = langArr['attorney3'][hash]
    document.querySelector('.lng-home4').innerHTML = langArr['home4'][hash]
    document.querySelector('.lng-about5').innerHTML = langArr['about5'][hash]
    document.querySelector('.lng-pages3').innerHTML = langArr['pages3'][hash]
    document.querySelector('.lng-contact7').innerHTML = langArr['contact7'][hash]
    document.querySelector('.lng-call4').innerHTML = langArr['call4'][hash]
    document.querySelector('.lng-mail5').innerHTML = langArr['mail5'][hash]
    document.querySelector('.lng-book4').innerHTML = langArr['book4'][hash]
    document.querySelector('.lng-corporate5').innerHTML = langArr['corporate5'][hash]
    document.querySelector('.lng-capitalize2').innerHTML = langArr['capitalize2'][hash]
    document.querySelector('.lng-view13').innerHTML = langArr['view13'][hash]
    document.querySelector('.lng-legal4').innerHTML = langArr['legal4'][hash]
    document.querySelector('.lng-strategies2').innerHTML = langArr['strategies2'][hash]
    document.querySelector('.lng-view14').innerHTML = langArr['view14'][hash]
    document.querySelector('.lng-social4').innerHTML = langArr['social4'][hash]
    document.querySelector('.lng-collaborative2').innerHTML = langArr['collaborative2'][hash]
    document.querySelector('.lng-view15').innerHTML = langArr['view15'][hash]
}
changeLanguage();

