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
    
    document.querySelector('.lng-attorney1').innerHTML = langArr['attorney1'][hash]
    document.querySelector('.lng-home2').innerHTML = langArr['home2'][hash]
    document.querySelector('.lng-about2').innerHTML = langArr['about2'][hash]
    document.querySelector('.lng-pages1').innerHTML = langArr['pages1'][hash]
    document.querySelector('.lng-contact4').innerHTML = langArr['contact4'][hash]
    document.querySelector('.lng-call2').innerHTML = langArr['call2'][hash]
    document.querySelector('.lng-mail3').innerHTML = langArr['mail3'][hash]
    document.querySelector('.lng-book2').innerHTML = langArr['book2'][hash]
    document.querySelector('.lng-about3').innerHTML = langArr['about3'][hash]
    document.querySelector('.lng-our6').innerHTML = langArr['our6'][hash]
}
changeLanguage();

