
var createStore = Framework7.createStore;
const store = createStore({
  state: {
    products: [
    ]
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})

