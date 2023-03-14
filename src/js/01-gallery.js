import { galleryItems } from './gallery-items.js';

import simpleLightbox from 'simplelightbox';
console.log(simpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const createItems = createNewItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', createItems);

function createNewItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
<img class="gallery__image" src=${preview} alt=${description} />
</a>`;
    })
    .join('');
}

let galleryOpen = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  scrollZoom: false,
});
