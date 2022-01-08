<template>
  <div class="cards">
    <div
      v-for="(product, idx) in products"
      :key="idx"
      :data-columns="idx"
      class="card"
    >
      <img
        src="@/assets/images/6123150777.webp"
        alt="Фотография товара"
        class="card__img"
      />
      <div class="card__info">
        <h2 class="card__title">{{ product.dish }}</h2>
        <p class="card__price">{{ product.id }} рублей</p>
        <button @click="getProduct($event)" class="card__button">
          В корзину
        </button>
        <button @click="addFavorites($event)" class="card__button">
          В избранное
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrayImg: [
        "6123150777",
        "6126039472",
        "6126040354",
        "6128597660",
        "6134992334",
        "6136170572",
        "6136172483",
        "6140906765",
        "6142673815",
        "6142681673",
        "6142683276",
        "6148226736",
      ],
    };
  },
  methods: {
    getProduct(event) {
      this.$store.dispatch(
        "addProduct",
        this.$store.getters.getProducts[
          event.target.parentElement.parentElement.dataset.columns
        ]
      );
    },
    addFavorites(event) {
      this.$store.dispatch(
        "addFavorites",
        this.$store.getters.getProducts[
          event.target.parentElement.parentElement.dataset.columns
        ]
      );
    },
  },
  computed: {
    randomImage() {
      return this.arrayImg[Math.floor(Math.random() * this.arrayImg.length)];
    },
    products() {
      return this.$store.getters.getProducts;
    },
  },
  created() {
    this.$store.dispatch("loadProducts");
    const img = [...document.querySelectorAll(".card__img")];
    img.forEach((item) => {
      item.setAttribute("src", `@/assets/images/${this.randomImage}.webp`);
    });
  },
  mounted() {},
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.card {
  margin: auto;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 12px 2px rgba(34, 60, 80, 0.16);
  -moz-box-shadow: 0px 0px 12px 2px rgba(34, 60, 80, 0.16);
  box-shadow: 0px 0px 12px 2px rgba(34, 60, 80, 0.16);
}

.card__title {
  margin-bottom: 10px;
}

.card__price {
  font-size: 18px;
  margin-bottom: 10px;
}

.card__img {
  background-size: cover;
  margin-bottom: 10px;
}

.card__button {
  padding: 5px;
  width: 100%;
  background: lawngreen;
  border: none;
  cursor: pointer;
}

.card__button:not(:last-child) {
  margin-bottom: 20px;
}

.card__button:hover {
  -webkit-box-shadow: 0px 0px 5px 5px rgba(91, 76, 97, 0.6) inset;
  -moz-box-shadow: 0px 0px 5px 5px rgba(91, 76, 97, 0.6) inset;
  box-shadow: 0px 0px 5px 5px rgba(91, 76, 97, 0.6) inset;
}
</style>
