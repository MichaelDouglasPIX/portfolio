(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');
    
    var menu = new Menu({
        container: '.header_nav',
        toggleBtn: '.header_btnMenu',
        gamesBtn: '.btnGames',
        sobreBtn: '.btnSobre',
        widthEnabled: 800
    })

    let date = new Date,
    currentYar = date.getFullYear();
    document.getElementById("currentYear").textContent = currentYar;
})();