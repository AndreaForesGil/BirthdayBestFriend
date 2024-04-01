document.addEventListener("DOMContentLoaded", function() {
    const fotos = document.querySelectorAll(".foto");
    let index = 0;

    function mostrarFoto(index) {
        fotos.forEach((foto, i) => {
            if (i === index) {
                foto.classList.add("active");
            } else {
                foto.classList.remove("active");
            }
        });
    }

    mostrarFoto(index);

    document.querySelector(".anterior").addEventListener("click", function() {
        index = (index === 0) ? fotos.length - 1 : index - 1;
        mostrarFoto(index);
    });

    document.querySelector(".siguiente").addEventListener("click", function() {
        index = (index === fotos.length - 1) ? 0 : index + 1;
        mostrarFoto(index);
    });
});


const container = document.querySelector('.confeti-container');

function createConfeti() {
    const confeti = document.createElement('div');
    confeti.classList.add('confeti');
    confeti.style.left = Math.random() * 100 + 'vw';
    container.appendChild(confeti);

    setTimeout(() => {
        confeti.remove();
    }, 5000);
}

setInterval(createConfeti, 200);


const tarjeta = document.getElementById('tarjeta');

tarjeta.addEventListener('click', function() {
  this.classList.toggle('abierta');
});
