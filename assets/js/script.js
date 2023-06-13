const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');
const githubBtn = document.querySelector('.github-btn');

btns.forEach(function(btn){

    githubBtn.addEventListener("click", function() {
        theme.style.setProperty("--theme-color", "#000000");
    });

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty("--theme-color", "#3498db");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "#ff1756");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "#1cb65d");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "#8e44ad");
        }
        else if(color.contains("btn5")){
            theme.style.setProperty("--theme-color", "#f4b932");
        }
        else if(color.contains("btn6"))
            theme.style.setProperty("--theme-color", "#000000");
        
    });
});



function instagram() {
    location.assign("https://www.instagram.com/ef_krbg/");
}

function mail() {
    location.assign("mailto:enekarab@leo-statz-berufskolleg.de");
}

function git() {
    location.assign("https://github.com/enekarab");
}