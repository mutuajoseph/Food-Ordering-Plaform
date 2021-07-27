<template>
  <div id="cart">
    <Header />
    <div class="container mx-auto">
      <div
        v-if="cart.length === 0"
        class="h-80 flex flex-col justify-center items-center gap-4"
      >
        <div class="flex justify-center">
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
        <p class="text-center text-2xl font-bold">
          You don't have any items in your cart...
        </p>
        <div class="flex gap-6 mt-6">
          <button
            @click="$router.push({ path: `/` })"
            class="
              uppercase
              rounded-lg
              text-sm
              bg-green-600
              text-white
              font-light
              px-4
              py-2
            "
          >
            Back to home
          </button>
          <button
            @click="$router.push({ path: `/auth` })"
            class="
              uppercase
              rounded-lg
              text-sm
              bg-green-600
              text-white
              font-light
              px-4
              py-2
            "
          >
            Click to signin
          </button>
        </div>
      </div>

      <div v-if="cart.length > 0" class="cart-flex">
        <div class="cart-section mt-20">
          <ul>
            <li>
              <p class="text-center text-2xl font-bold my-4">Cart Items</p>
            </li>
            <li
              class="
                border-2
                w-auto
                mx-auto
                h-24
                flex
                justify-between
                items-center
              "
              v-for="meal in cart"
              :key="meal.idMeal"
            >
              <div class="flex justify-center items-center">
                <img
                  class="p-2 w-24 h-24"
                  :src="meal.meal.strMealThumb"
                  alt="meal Image"
                />
                <p class="mx-6 w-60 text-xl">{{ meal.meal.strMeal }}</p>
                <p class="text-xl w-60">ksh {{ meal.price }}</p>
                <p class="text-xl mx-8">{{ meal.quantity }}</p>
              </div>
              <button class="flex items-center gap-2" title="Add Food Toppings">
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Toppings</span>
              </button>
              <button
                @click="removeFromCart(meal.meal.idMeal)"
                class="bg-green-500 px-4 py-4 rounded-xl mx-6"
                title="Remove item from cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div class="cart-total mt-20 flex justify-center items-center">
          <p class="uppercase p-4 font-bold text-3xl mt-1">
            Total: KES {{ total }}.00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "../components/Header.vue";
export default {
  name: "Cart",
  components: {
    Header,
  },

  computed: {
    ...mapGetters({
      total: "cartTotalPrice",
    }),
    cart() {
      return this.$store.state.productsModule.cart;
    },
  },

  methods: {
    ...mapActions(["REMOVE_MEAL_FROM_CART"]),
    removeFromCart(item) {
      this.REMOVE_MEAL_FROM_CART({
        id: item,
      });
    },
  },
};
</script>

<style scoped>
.cart-flex {
  display: flex;
  gap: 1rem;
}

.cart-section {
  flex: 8;
}

.cart-total {
  flex: 4;
}
</style>
