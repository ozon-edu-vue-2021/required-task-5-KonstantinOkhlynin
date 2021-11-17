<template>
  <div class="wrapper">
    <header class="header">
      <router-link :to="{ name: 'catalog' }" class="header-catalog">
        Каталог
      </router-link>
      <div class="favorites">
        <p class="header-catalog">Избранное</p>
        <div class="favorites-container">
          <Favorites />
        </div>
      </div>
      <router-link to="basket" class="header-basket">Корзина</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Favorites from "@/components/Favorites.vue";
export default {
  components: {
    Favorites,
  },
};
</script>

<style>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
}

.header-catalog {
  font-size: 26px;
}

.favorites {
  position: relative;
}

.favorites-container {
  display: none;
  position: absolute;
  background: wheat;
  z-index: 1;
  transform: translateX(-120px);
  top: 30px;
}

.favorites:hover .favorites-container {
  display: block;
}

.header-basket {
  font-size: 26px;
}

.wrapper {
  max-width: 1900px;
}
</style>
