const imgs = document.querySelectorAll('img.imgItem');

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('mouseover', function () {

        const newImage = document.createElement('img');
        newImage.setAttribute('src', this.getAttribute('src'));
        newImage.classList.add('copyImg');

        document.body.appendChild(newImage);

        const rectData = this.getBoundingClientRect();
        newImage.style.top = rectData.top + 'px';
        newImage.style.left = rectData.right + '10px';
        newImage.style.width = this.offsetWidth * 1.2 + 'px';
        newImage.style.height = this.offsetHeight * 1.2 + 'px';
    });

    imgs[i].addEventListener('mouseout', function () {
        const copiedImg = document.querySelector('img.copyImg');
        if (copiedImg) {
            copiedImg.remove();
        }
    });
}

const selectFilter = document.querySelector('select[name="filter"]');
const filterBtn = document.querySelector('input[value="Filtrar"]');

function applyFilter() {
    const chosenGenre = selectFilter.value;
    console.log(chosenGenre)
    const tableRows = document.querySelectorAll('#art tbody tr');
    tableRows.forEach(row => {
        if (row.classList.contains(chosenGenre) || chosenGenre === '0') {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

filterBtn.addEventListener('click', applyFilter);

document.addEventListener('DOMContentLoaded', applyFilter);

var editBtns = document.querySelectorAll("table button");

// Añadimos un event listener a cada botón "Editar"
editBtns.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtenemos la fila correspondiente al botón "Editar"
    var currentRow = this.parentNode.parentNode;
    
    // Obtenemos los valores de cada celda de la fila
    var imgSrc = currentRow.querySelector("img").getAttribute("src");
    var titulo = currentRow.querySelector("td:nth-of-type(3)").textContent;
    var autor = currentRow.querySelector("td:nth-of-type(4)").textContent;
    var anio = currentRow.querySelector("td:nth-of-type(5)").textContent;
    var genero = currentRow.querySelector("td:nth-of-type(6)").textContent;
    
    // Creamos la ventana modal y agregamos los datos correspondientes
    var modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    var modalContenido = document.createElement("div");
    modalContenido.classList.add("modal-content");

    var encabezado = document.createElement("div");
    encabezado.classList.add("Head");

    var cuerpoElementos = document.createElement("div");
    cuerpoElementos.classList.add("body-element")

    var tituloElemento = document.createElement("h2");
    tituloElemento.textContent = "Editar";
    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", imgSrc);
    var tituloInput = document.createElement("input");
    tituloInput.setAttribute("type", "text");
    tituloInput.setAttribute("placeholder", "Título");
    tituloInput.setAttribute("value", titulo);
    var autorInput = document.createElement("input");
    autorInput.setAttribute("type", "text");
    autorInput.setAttribute("placeholder", "Artista");
    autorInput.setAttribute("value", autor);
    var anioInput = document.createElement("input");
    anioInput.setAttribute("type", "text");
    anioInput.setAttribute("placeholder", "Año");
    anioInput.setAttribute("value", anio);
    var generoInput = document.createElement("input");
    generoInput.setAttribute("type", "text");
    generoInput.setAttribute("placeholder", "Género");
    generoInput.setAttribute("value", genero);
    var cerrarBtn = document.createElement("button");
    cerrarBtn.textContent = "X";
    cerrarBtn.classList.add("close-button");

    encabezado.appendChild(tituloElemento);
    encabezado.appendChild(cerrarBtn);

    cuerpoElementos.appendChild(tituloInput);
    cuerpoElementos.appendChild(autorInput);
    cuerpoElementos.appendChild(anioInput);
    cuerpoElementos.appendChild(generoInput);

    modalContenido.appendChild(encabezado);
    modalContenido.appendChild(imgElement);
    modalContenido.appendChild(cuerpoElementos);

    modalDiv.appendChild(modalContenido);
    document.body.appendChild(modalDiv);

    // Mostramos la ventana modal
    modalDiv.style.display = "block";

    // Añadimos un event listener al botón "X"
    cerrarBtn.addEventListener("click", function() {
    // Actualizamos los valores de la fila correspondiente
    currentRow.querySelector("img").setAttribute("src", imgElement.getAttribute("src"));
    currentRow.querySelector("td:nth-of-type(3)").textContent = tituloInput.value;
    currentRow.querySelector("td:nth-of-type(4)").textContent = autorInput.value;
    currentRow.querySelector("td:nth-of-type(5)").textContent = anioInput.value;
    currentRow.querySelector("td:nth-of-type(6)").textContent = generoInput.value;

    // Cerramos la ventana modal
    modalDiv.style.display = "none";
    });
});
});

var imagenes = document.querySelectorAll(".imagen");

for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", function() {
        var ampliada = this.getAttribute("data-ampliada");
        var tooltip = document.createElement("div");
        var imagen = new Image();

        tooltip.classList.add("tooltip");
        tooltip.appendChild(imagen);
        document.body.appendChild(tooltip);

        imagen.src = ampliada;
        tooltip.style.display = "block";

        this.addEventListener("mousemove", function(e) {
            tooltip.style.top = e.pageY + "px";
            tooltip.style.left = e.pageX + "px";
        });
    });

    imagenes[i].addEventListener("mouseout", function() {
        var tooltip = document.querySelector(".tooltip");
        document.body.removeChild(tooltip);
    });
}

function ampliarImagen(event) {
    var imagen = event.target;
    var imagenAmpliada = document.getElementById("imagen-ampliada");
    imagenAmpliada.style.backgroundImage = "url('" + imagen.src + "')";
    imagenAmpliada.style.display = "block";
  }
  
  function ocultarImagen() {
    var imagenAmpliada = document.getElementById("imagen-ampliada");
    imagenAmpliada.style.display = "none";
  }
  
  document.onmousemove = function(event) {
    var imagenAmpliada = document.getElementById("imagen-ampliada");
    imagenAmpliada.style.left = (event.pageX + 10) + "px";
    imagenAmpliada.style.top = (event.pageY + 10) + "px";
  }
  
