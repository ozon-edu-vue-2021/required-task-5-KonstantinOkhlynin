import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    products: null,
    basketProducts: [],
    favorites: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getFavorites(state) {
      return state.favorites;
    },
    getProductsBasket(state) {
      return state.basketProducts;
    },
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      if (state.products === null) {
        state.products = payload;
      }
    },
    PUSH_PRODUCT(state, payload) {
      state.basketProducts.push(payload);
    },

    DELETE_PRODUCT(state, payload) {
      state.basketProducts.splice(payload, 1);
    },
    DELETE_FAVORITES(state, payload) {
      state.favorites.splice(payload, 1);
    },

    ADD_FAVORITES(state, payload) {
      state.favorites.push(payload);
    },
  },
  actions: {
    async loadProducts({ commit }) {
      try {
        const response = await axios.get(
          "https://random-data-api.com/api/food/random_food?size=30"
        );
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.error(error);
      }
    },

    addProduct({ commit }, payload) {
      commit("PUSH_PRODUCT", payload);
    },

    deleteProduct({ commit }, payload) {
      commit("DELETE_PRODUCT", payload);
    },

    deleteFavorites({ commit }, payload) {
      commit("DELETE_FAVORITES", payload);
    },

    addFavorites({ commit }, payload) {
      commit("ADD_FAVORITES", payload);
    },
  },
});
