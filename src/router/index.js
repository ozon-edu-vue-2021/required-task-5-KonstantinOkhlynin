import VueRouter from "vue-router";
import Basket from "@/components/Basket.vue";
import Card from "@/components/Card.vue";
import MainPage from "@/pages/MainPage.vue";
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
      children: [
        {
          path: "",
          name: "catalog",
          component: Card,
        },
        {
          path: "basket",
          name: "basket",
          component: Basket,
        },
      ],
    },
  ],
});
