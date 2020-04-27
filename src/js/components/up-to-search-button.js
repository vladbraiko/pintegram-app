import refs from "../refs";

export default {
  disable() {
    refs.upToSearchButton.classList.remove("is-hidden");
    refs.upToSearchButton.disabled = true;
  },

  enable() {
    refs.upToSearchButton.disabled = false;
    refs.upToSearchButton.classList.remove("is-hidden");
  },

  hide() {
    refs.upToSearchButton.classList.add("is-hidden");
  },
  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
