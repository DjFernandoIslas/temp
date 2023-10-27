// DOM de la API

const apiUrl = "https://dog.ceo/api/breeds/image/random";
const fotoactual = document.getElementById("fotoactual");

// DOM DE LOS BOTONES

const likeButton = document.querySelector(".like");
const skipButton = document.querySelector(".skip");
const dislikeButton = document.querySelector(".dislike");

const dislikeContainer = document.querySelector(".dislike-container");
const likeContainer = document.querySelector(".like-container");
m// FUNCIONES ----------------------------------------------------------------------

//FUNCION PARA CARGAR IMAGEN ------------------
function cargarImagen() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.message;
      fotoactual.src = imageUrl; // Usar fotoactual en lugar de fotoActualElement
    })
    .finally(() => {
      spinner.classList.add("escondido");
      fotoactual.classList.remove("escondido"); // Usar fotoactual en lugar de fotoActualElement
    });
}

cargarImagen();

// FUNCION PARA LOS BOTONES

// likeButton.addEventListener("click", () =>{
//     //guarda la imagenm actual en la seccion "like"
//     const nuevaImagen = fotoactual.cloneNode(true);
//     nuevaImagen.src = fotoactual.src;
//     likeContainer.appendChild(nuevaImagen);


//     cargarImagen();
// });

// dislikeButton.addEventListener("click", () =>{
//     // lo mismo pero en la seccion "dislike"
//     const nuevaImagen = fotoactual.cloneNode(true);
//     nuevaImagen.src = fotoactual.src;
//     dislikeContainer.appendChild(nuevaImagen);

//     cargarImagen();
// });

// skipButton.addEventListener("click", () =>{

//     cargarImagen();
// });