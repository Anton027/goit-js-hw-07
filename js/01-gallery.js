import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
                />
            </a>
        </div>
        `
    }).join('');
};
const galleryItem = onCreateGalleryItem(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItem);
gallery.addEventListener('click', onGalleryItemClick);

let instence = {};
function onGalleryItemClick(event) {
    
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    if (event.target.nodeName === "IMG") {
        instence = basicLightbox.create(
            `<img src="${event.target.dataset.source}" width="800" height="600" />`,
            {
                onShow: () => window.addEventListener('keydown', onCloseModal),
                onClose: () => window.removeEventListener('keydown', onCloseModal)
            }
        )
        instence.show();
    };
}

function onCloseModal(event) {
    if (event.code === 'Escape') {
        instence.close();
    }
}


console.log(galleryItems);

	// const instance = basicLightbox.create(html, {
	// 	onShow: (instance) => console.log('onShow', instance),
	// 	onClose: (instance) => console.log('onClose', instance)
	// })

	// instance.show((instance) => console.log('finished show()', instance))

	// setTimeout(() => {
	// 	instance.close((instance) => console.log('finished close()', instance))
	// }, 3000)