import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagePalette = document.querySelector(".gallery");
  const makeImage = ({preview, original, description}) => {  
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>        
      `
    }

const makeImagas = galleryItems
    .map(makeImage)
    .join('');
    
imagePalette.insertAdjacentHTML('beforeend', makeImagas);
imagePalette.addEventListener('click', onGalleryClick);
function onGalleryClick(evt) {
      evt.preventDefault();
  }

  const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

