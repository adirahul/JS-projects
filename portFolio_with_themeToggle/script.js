let body = document.body;
let icon = document.getElementById('icon')
body.classList.add('dark-theme')

icon.addEventListener('click', () => {
    body.classList.toggle('dark-theme')
    if(body.classList.contains('dark-theme')){
        icon.src = 'assets/dark theme icon/sun.png'
    }
    else{
        icon.src = 'assets/dark theme icon/moon.png'
    }
})
function scrollToSection(section) {
    let sec = document.getElementById(section);
    console.log(sec)
    if(sec){
        section.scrollIntoView({})
    }
}