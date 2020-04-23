import refs from "./js/refs";
import imageService from "./js/image-service";
import updateMurkup from "./js/update-murkup";
import loadMoreButton from "./js/components/load-more-button";
import "./styles.scss";

refs.searchForm.addEventListener("submit", submitSearchQuery);

function submitSearchQuery(event) {
  event.preventDefault();

  const form = event.currentTarget;
  imageService.query = form.elements.search.value;

  loadMoreButton.hide();
  imageService.resetPage();
  clearImagesContainer();
  showResult();
  form.reset();
}

function clearImagesContainer() {
  refs.imagesContainer.innerHTML = "";
}

function showResult() {
  // loadMoreButton.disable();

  imageService.makeFetch().then(updateMurkup);
  // setTimeout(loadMoreButton.enable, 1000);
}

//сделать если приходит пустой массив
