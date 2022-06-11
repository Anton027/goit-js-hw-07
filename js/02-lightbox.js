import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link"  href="${original}">
                <img class="gallery__image" src="${preview}" title="${description}" />
            </a>
        </li>`
    }).join('');
};

const galleryItem = onCreateGalleryItem(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItem);

gallery.addEventListener('click', onGalleryItemClick);


new SimpleLightbox('.gallery a', { captions: true,
    captionData:'title', captionDelay:250
});

function onGalleryItemClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
}

console.log(galleryItems);
