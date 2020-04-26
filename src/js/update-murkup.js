import cardTemplate from "../tamplates/image-card.hbs";
import loadMoreButton from "./components/load-more-button";
import PNotify from "./plugins/pnotify";
import refs from "./refs";

function updateMurkup(imgData) {
  if (imgData.length === 0) {
    PNotify.notice({
      title: "Sorry:( There are no images for your query.",
      delay: 1000,
      stack: { maxOpen: 1, maxStrategy: "close", dir1: "down" },
    });
    return;
  }
  loadMoreButton.disable();
  const imgMurkup = cardTemplate(imgData);
  refs.imagesContainer.insertAdjacentHTML("beforeend", imgMurkup);
  setTimeout(loadMoreButton.enable, 1000);
}

function clearImagesContainer() {
  refs.imagesContainer.innerHTML = "";
}

export { updateMurkup, clearImagesContainer };
