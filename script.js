document.getElementById("btn_liga1max").addEventListener("click", function() {
    cargarContenido("liga1max.html");
});

document.getElementById("btn_americatvgo").addEventListener("click", function() {
    cargarContenido("americatvgo.html", "#ver_contenido");
});

document.getElementById("btn_transformers5").addEventListener("click", function() {
    cargarContenido("transformers5.html", "#ver_contenido");
});

function cargarContenido(url, contenedor) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(contenedor).innerHTML = data;
        })
        .catch(error => console.log("Error al cargar el contenido: " + error));
}


