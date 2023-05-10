import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const listItem = galleryItems
    .map(
        ({ preview, original, description }) => `
 <li class="gallery__item">
 <a class="gallery__link" href="${original}" >
      <img class="gallery__image" src="${preview}"  alt="${description}" />
  </a>
</li>
`
    )
    .join("");

document.querySelector(".gallery").insertAdjacentHTML("beforeend", listItem);

const ligthbox = new SimpleLightbox(".gallery__link ", {
    captionsData: "alt",
    captionDelay: 250,
});