// inject current year in footer
const time = new Date();
console.log(time.getFullYear())
document.querySelector('#year').textContent = time.getFullYear();


/* empieza  hamburger buton   - ojo se cambio a header se elimino navwrapper */
function hamburgerMenu() {
    document.getElementById("mainNav").classList.toggle("abrir")
    document.getElementById("menuBtn").classList.toggle("abrir")

    /*  se agrega otro getelementbyid porque se va a cerrar el menu */
}
const x = document.getElementById("menuBtn");

x.onclick = hamburgerMenu;

/*  ojo cuando revisamos inpection en elements y buscamos nav, nav no tiene class, cuando damos click aparece y desaparece, la clase es abrir */


