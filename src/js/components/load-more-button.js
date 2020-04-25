import refs from "../refs";

export default {
  disable() {
    refs.loadMoreButton.classList.remove("is-hidden");
    refs.loadMoreButton.disabled = true;
    refs.loadMoreButton.textContent = "Loading...";
  },

  enable() {
    refs.loadMoreButton.disabled = false;
    refs.loadMoreButton.textContent = "Load more";
    refs.loadMoreButton.classList.remove("is-hidden");
  },

  hide() {
    refs.loadMoreButton.classList.add("is-hidden");
  },
  scrollDown() {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  },
};
