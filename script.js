const themSwitcher = document . querySelector('#themeSwitcher');

themSwitcher.addEventListener('change' , (e) => {

    setTheme(e.target.value);
});



function setTheme(theme){

    document.documentElement.className = theme;
}