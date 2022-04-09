const fotom = document.getElementById("fotom");
const fotos = document.getElementById("fotosa");
const fotor = document.getElementById("fotor");
const fotop = document.getElementById("fotop");

function cambiaportada(id) {

    let src = id.src;
    const m = src.split("/")
    const s = parseInt(m.pop().substring(1, 2));
    let k = 0;
    if (s == 3) {
        k = 0;
    } else {
        k = s + 1;
    }
    src = src.replace(`${ s.toString() }.jpg`, `${ k.toString() }.jpg`);
    id.src = src;


}
fotom.addEventListener('click', () => {
    cambiaportada(fotom)
})
fotos.addEventListener('click', () => {
    cambiaportada(fotos)
})

fotor.addEventListener('click', () => {
    cambiaportada(fotor)
})

fotop.addEventListener('click', () => {
    cambiaportada(fotop)
})