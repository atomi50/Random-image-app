const imageContainerElement = document.querySelector(".image__container");

const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", () => {
  addNewImages();
});

const addNewImages = () => {
  for (let i = 0; i < 5; i++) {
    const newImageElement = document.createElement("img");

    newImageElement.src = `https://picsum.photos/300?random${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerElement.appendChild(newImageElement);
  }
};
