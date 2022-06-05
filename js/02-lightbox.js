import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original ,description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link"  href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    }).join('');
};
const galleryItem = onCreateGalleryItem(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItem);

gallery.addEventListener('click', onGalleryItemClick);




function onGalleryItemClick(event) {
    event.preventDefault();
        if(event.target.nodeName !== "IMG") {
            return;
        }
    if(event.target.nodeName === "IMG"){
        var lightbox = new SimpleLightbox('.gallery a', { event });
    }
}

console.log(galleryItems);
