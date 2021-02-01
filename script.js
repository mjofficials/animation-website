function hamMenuToggle() {
    var menuCheckbox = document.getElementById('hamCheckBox');

    if (menuCheckbox.checked == true) {
        console.log('true');
        document.getElementById("myNav").style.transform = "translate(0%)";
        document.getElementById('navBarUl').style.top = '0';
    } else {
        console.log('false');
        document.getElementById("myNav").style.transform = "translate(100%)";
        document.getElementById('navBarUl').style.top = '';
    }

}


