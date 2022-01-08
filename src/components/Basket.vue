<template>
  <div class="basket">
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
        <input
          type="number"
          @input="countProduct()"
          class="card__count"
          value="1"
          step="1"
          min="1"
          max="100"
        />
        <button @click="deleteProduct($event)" class="card__button">
          Удалить
        </button>
      </div>
    </div>
    <div v-if="products.length" class="info-total">
      <h2 class="info-total__title">Ваша корзина</h2>
      <hr />
      <p class="info-total__quantity">Количество товаров: {{ count }}</p>
      <p class="info-total__sum">Общая стоимость: {{ getSum }}</p>
      <hr />
      <button
        @click="getProduct($event)"
        class="card__button card__button-arrange"
      >
        В корзину
      </button>
    </div>
    <div v-if="!products.length" class="empty basket">
      <h2 class="empty basket__title">Ваша корзина пустая</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    deleteProduct(event) {
      this.$store.dispatch(
        "deleteProduct",
        event.target.parentElement.parentElement.dataset.columns
      );
      this.getSum;
      this.countProduct();
    },
    countProduct() {
      const inputs = document.querySelectorAll(".card__count");
      let num = 0;
      inputs.forEach((input) => {
        num += +input.value;
      });
      this.count = num;
    },
  },
  computed: {
    getSum() {
      return this.products.reduce((a, b) => a + b.id, 0);
    },
    products() {
      return this.$store.getters.getProductsBasket;
    },
  },
  mounted() {
    this.countProduct();
  },
};
</script>

<style scoped>
.basket {
  display: flex;
  justify-content: center;
  height: 100%;
}

.info-total {
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 22px 10px rgba(34, 60, 80, 0.26);
  -moz-box-shadow: 0px 0px 22px 10px rgba(34, 60, 80, 0.26);
  box-shadow: 0px 0px 22px 10px rgba(34, 60, 80, 0.26);
  max-width: 500px;
  width: 100%;
  padding: 15px;
  max-height: 300px;
}

.products {
  margin-right: 50px;
  overflow: auto;
  padding: 20px;
  height: 600px;
}
.card {
  -webkit-box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2);
  display: flex;
  padding: 15px;
  min-width: 600px;
  margin-bottom: 20px;
}

.card:hover {
  -webkit-box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 0px 4px 5px rgba(34, 60, 80, 0.2) inset;
}

.card__img {
  margin-right: 10px;
  width: 80px;
}

.card__info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
}

.card__title {
  font-size: 25px;
}
.card__count {
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
  margin-left: auto;
}
.card__price {
  font-size: 18px;
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
  padding: 5px;
  background: rgb(238, 97, 97);
  color: white;
  border: none;
  cursor: pointer;
}

.card__button:hover {
  background: red;
}

.card__button-arrange {
  padding: 5px;
  width: 100%;
  background: lawngreen;
  border: none;
  cursor: pointer;
}

.card__button-arrange:hover {
  background: green;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(91, 76, 97, 0.6) inset;
  -moz-box-shadow: 0px 0px 5px 5px rgba(91, 76, 97, 0.6) inset;
  box-shadow: 0px 0px 5px 5px rgba(91, 76, 97, 0.6) inset;
}

hr {
  margin-bottom: 10px;
}
</style>
