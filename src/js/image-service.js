export default {
  searchQuery: "",
  page: 1,

  makeFetch() {
    const apiKey = "16192319-9ae9d95026dacaeb88e2fcf6c";
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then((response) => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
