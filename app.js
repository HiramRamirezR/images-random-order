const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const imagesArr = ['./img/boat.jpg', './img/car.jpg', './img/doll.jpg', './img/kite.jpg', './img/train.jpg'];

btn.addEventListener('click', () => {
  // Función para permutar un arreglo usando el algoritmo de Fisher-Yates
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(imagesArr); // Permutar el arreglo de imágenes

  // Limpiar el contenedor antes de agregar las imágenes permutadas
  container.innerHTML = '';

  for (let i = 0; i < imagesArr.length; i++) {
    const img = document.createElement('img');
    img.src = imagesArr[i];
    container.appendChild(img);
  }
});
