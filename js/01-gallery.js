import { galleryItems } from './gallery-items.js';
// Change code below this line
   
  const imagePalette = document.querySelector(".gallery");
  const makeImage = ({preview, original, description}) => {  
      return `
        <div class="gallery__item">
          <a class="gallery__link"  href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `
    }

const makeImagas = galleryItems
    .map(makeImage)
    .join('');
    
imagePalette.insertAdjacentHTML('beforeend', makeImagas);
imagePalette.addEventListener('click', onClick); 

function onClick(evt) {
  evt.preventDefault();
 if (evt.target.nodeName !== "IMG") {   
   return;
 };
 const instance = basicLightbox.create(`
    <img  src='${evt.target.dataset.source}'>
  	`); 
    instance.show();
}





