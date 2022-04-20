import { galleryItems } from './gallery-items.js';
// Change code below this line
//import img
console.log(galleryItems);
const refs = {
  gallery: document.querySelector(".gallery"),
  image: document.createElement("img"),
  lightbox: document.querySelector(".lightbox"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector(".lightbox__content"),
  lightbox__image: document.querySelector(".lightbox__image"),
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
refs.image.classList.add("gallery__image");



refs.gallery.addEventListener("click", onGalleryClick);
refs.btn.addEventListener("click", onClickHandlerClose);
refs.modal.addEventListener("click", closeLightbox);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  if (e.target.nodeName === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightbox__image.src = e.target.getAttribute("data-source");
    refs.lightbox__image.alt = e.target.alt;
  }
  window.addEventListener("keyup", clickKey);
}

function onClickHandlerClose(e) {
  
  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
}

function closeLightbox(event) {
  if (event.target === event.currentTarget) {
    onClickHandlerClose();
  }
}

function clickKey(event) {
    if (event.code === "Escape") {
        onClickHandlerClose();
    }
}