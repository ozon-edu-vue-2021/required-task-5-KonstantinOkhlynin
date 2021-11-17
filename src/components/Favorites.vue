<template>
  <div>
    <div v-if="products.length" class="products">
      <div
        class="card"
        v-for="(product, idx) in products"
        :key="idx"
        :data-columns="idx"
      >
        <img
          src="@/assets/images/6123150777.webp"
          alt="Фотография товара"
          class="card__img"
        />
        <div class="card__info">
          <h2 class="card__title">{{ product.dish }}</h2>
          <p class="card__price">{{ product.id }} рублей</p>
        </div>
        <button @click="deleteProduct($event)" class="card__button">
          Удалить
        </button>
      </div>
    </div>
    <div v-if="!products.length" class="products products-empty">
      <h2 class="basket__title">Ваши избранные товары будут тут</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteProduct(event) {
      this.$store.dispatch(
        "deleteFavorites",
        event.target.parentElement.parentElement.dataset.columns
      );
      this.getSum;
    },
  },
  computed: {
    products() {
      return this.$store.getters.getFavorites;
    },
  },
};
</script>

<style scoped>
.products {
  overflow: auto;
  padding: 20px;
  height: 600px;
  width: 400px;
}

.products-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  text-align: center;
}
.card {
  -webkit-box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2);
  display: flex;
  padding: 15px;
  min-width: 350px;
  margin-bottom: 20px;
}

.card:hover {
  -webkit-box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2) inset;
}

.card__img {
  margin-right: 10px;
  width: 40px;
}

.card__info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
}

.card__title {
  font-size: 20px;
}
.card__count {
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
  margin-left: auto;
}
.card__price {
  font-size: 14px;
}

.info-total__title {
  margin-bottom: 6px;
}

.info-total__quantity {
  margin-bottom: 6px;
  font-size: 18px;
}

.info-total__sum {
  font-size: 18px;
}

.card__button {
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  padding: 5px;
  background: rgb(238, 97, 97);
  color: white;
  border: none;
  cursor: pointer;
}

.card__button:hover {
  background: red;
}

hr {
  margin-bottom: 10px;
}
</style>
