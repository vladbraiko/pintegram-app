import refs from "./js/refs";
import imageService from "./js/image-service";
import updateMurkup from "./js/update-murkup";
import "./styles.scss";

refs.searchForm.addEventListener("submit", submitSearchQuery);

function submitSearchQuery(event) {
  event.preventDefault();

  const form = event.currentTarget;
  imageService.query = form.elements.search.value;

  imageService.resetPage();

  clearImagesContainer();
  imageService.makeFetch().then(updateMurkup);
  form.reset();
  show();
}

function clearImagesContainer() {
  refs.imagesContainer.innerHTML = "";
}

const loadMoreButton = document.querySelector(".js-load-more-button");

function show() {
  loadMoreButton.classList.remove("is-hidden");
}
