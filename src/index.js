import refs from "./js/refs";
import imageService from "./js/image-service";
import loadMoreButton from "./js/components/load-more-button";
import upToSearchButton from "./js/components/up-to-search-button";
import { updateMurkup, clearImagesContainer } from "./js/update-murkup";

import * as basicLightbox from "basiclightbox";
import "../node_modules/basiclightbox/src/styles/main.scss";

import "./sass/styles.scss";

refs.searchForm.addEventListener("submit", submitSearchQuery);
refs.loadMoreButton.addEventListener("click", showImages);
refs.imagesContainer.addEventListener("click", openImageInModal);
refs.upToSearchButton.addEventListener("click", upToSearchForm);

function submitSearchQuery(event) {
  event.preventDefault();

  const form = event.currentTarget;
  imageService.query = form.elements.search.value;

  loadMoreButton.hide();
  imageService.resetPage();
  clearImagesContainer();
  showImages();
  form.reset();
  upToSearchButton.hide();
}

function showImages() {
  upToSearchButton.disable();
  imageService.makeFetch().then(updateMurkup);

  if (event.type === "click") {
    setTimeout(loadMoreButton.scrollDown, 500);
    upToSearchButton.enable();
  }
}

function openImageInModal(event) {
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`<img src="${event.target.src}">`);
    instance.show();
  }
  return;
}

function upToSearchForm() {
  upToSearchButton.scrollUp();
}
