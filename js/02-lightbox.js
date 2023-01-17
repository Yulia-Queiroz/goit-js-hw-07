import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryMarkup(images) {
    const markup = images.map(({ preview, original, description }) => {
        return `
       <a class="gallery__item" 
       href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`
    }).join('');
    return markup;
}

galleryContainer.addEventListener('click', onImageCLick);

function onImageCLick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    let lightbox = new SimpleLightbox('.gallery a', { 
        captionDelay: 250,
        captionsData: "alt",
    });
    
    return lightbox.on('show.simplelightbox')
}