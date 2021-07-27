<template>
  <div id="single-Product">
    <Header />
    <button
      @click="$router.push({ path: `/` })"
      class="mt-20 px-8 flex items-center gap-2 text-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span>Back to Home</span>
    </button>
    <div class="container p-4 mx-auto meal-flex border-2 w-1/2">
      <img class="h-96 w-1/2" :src="meal.strMealThumb" alt="meal image" />
      <div class="flex flex-col justify-between">  
        <p class="text-2xl font-bold">{{ meal.strMeal }}</p>
        <div>
          <p class="text-xl font-bold my-4">Tags: {{ meal.strTags }}</p>
          <p class="my-4 text-xl font-bold">Area: {{ meal.strArea }}</p>
          <p class="text-xl font-bold">Category: {{ meal.strCategory }}</p>
        </div>
        <button
          @click="addToCart(meal)"
          class="
            bg-green-600
            text-white
            w-36
            rounded
            py-2
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
    <div class="container mx-auto w-1/2 mt-6">
      <p class="text-2xl font-bold">Ingredients</p>
      <p class="my-2 font-light">
        <span>{{ meal.strIngredient1 }}</span
        >, <span>{{ meal.strIngredient2 }}</span
        >, <span>{{ meal.strIngredient3 }}</span
        >, <span>{{ meal.strIngredient4 }}</span
        >, <span>{{ meal.strIngredient5 }}</span
        >, <span>{{ meal.strIngredient6 }}</span
        >, <span>{{ meal.strIngredient7 }}</span
        >, <span>{{ meal.strIngredient8 }}</span
        >,
        <span>{{ meal.strIngredient9 }}</span>
      </p>
      <p class="text-2xl mt-4 font-bold">Instructions</p>
      <p class="font-light mt-2">{{ meal.strInstructions }}</p>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Meal",
  components: {
    Header,
  },
  data: () => ({
    price: 450.0,
  }),

  computed: {
    ...mapState({
      meal: (state) => state.productsModule.meal,
    }),
  },
  created() {
    this.initialize();
  },
  methods: {
    ...mapActions(["FETCH_MEAL", "ADD_MEAL_TO_CART"]),
    initialize() {
      this.FETCH_MEAL({
        id: this.$router.history.current.params.id,
      });
    },

    addToCart(item) {
      this.ADD_MEAL_TO_CART({
        meal: item,
        price: this.price,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.meal-flex {
  display: flex;
  gap: 1rem;
}
</style>
