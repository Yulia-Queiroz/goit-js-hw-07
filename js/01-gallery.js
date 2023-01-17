import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery");

const imagesMarkup = createGalleryMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryMarkup(images) {
    const markup = images.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
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
    })
    .join('');
    return markup;
}

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {

    // console.log(evt.target);

  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

  const imgLink = evt.target.getAttribute("data-source");
        
  const imgModal = basicLightbox.create(`<img  src="${imgLink}">`,
  {
    onShow: imgModal => { window.addEventListener('keydown', onEscPress) },
    onClose: imgModal => { window.removeEventListener('keydown', onEscPress)}
    });

  imgModal.show();

  function onEscPress(event) {
    console.log(event);
    if (event.code === 'Escape') {
    imgModal.close();
    window.removeEventListener('keydown', onEscPress);
    }
  }
};





