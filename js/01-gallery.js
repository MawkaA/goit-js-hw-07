import { galleryItems } from './gallery-items.js';
// Change code below this line
//import img
console.log(galleryItems);
const refs = {
  gallery: document.querySelector(".gallery"),
};

const createGalleryItem = ({ preview, original, description }) =>
  `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);
refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
refs.gallery.addEventListener('click', getImg);
function getImg(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)

instance.show()
  
  }
}

