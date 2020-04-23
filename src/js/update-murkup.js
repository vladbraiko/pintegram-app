import cardTemplate from "../tamplates/image-card.hbs";
import loadMoreButton from "./components/load-more-button";
import refs from "./refs";

function updateMurkup(imgData) {
  if (imgData.length === 0) {
    console.log("таких картинок нет");
    return;
  }
  loadMoreButton.disable();
  const imgMurkup = cardTemplate(imgData);
  refs.imagesContainer.insertAdjacentHTML("beforeend", imgMurkup);
  setTimeout(loadMoreButton.enable, 1000);
}

export default updateMurkup;
