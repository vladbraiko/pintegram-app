import cardTemplate from "../tamplates/image-card.hbs";
import refs from "./refs";

function updateMurkup(imgData) {
  const imgMurkup = cardTemplate(imgData);
  refs.imagesContainer.insertAdjacentHTML("beforeend", imgMurkup);
}

export default updateMurkup;
