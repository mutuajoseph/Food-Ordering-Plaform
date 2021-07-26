<template>
  <div id="products" class="flex justify-center items-center">
    <div class="w-64" v-for="item in meals" :key="item.idMeal">
      <div
        class="
          shadow
          hover:shadow-lg
          transition
          duration-300
          ease-in-out
          xl:mb-0
          lg:mb-0
          md:mb-0
          mb-6
          cursor-pointer
          group
        "
      >
        <div class="overflow-hidden relative">
          <img
            @click="getProduct(item.idMeal)"
            class="
              w-60
              transition
              h-25
              duration-700
              ease-in-out
              group-hover:opacity-60
              rounded-lg
            "
            :src="item.strMealThumb"
            alt="image"
          />
        </div>
        <div class="px-4 py-3 bg-white">
          <a @click="getProduct(item.idMeal)" class=""
            ><h1
              class="
                text-gray-800
                font-semibold
                text-sm
                hover:text-red-500
                transition
                duration-300
                ease-in-out
              "
            >
              {{ item.strMeal }}
            </h1></a
          >
          <div class="flex py-2">
            <p class="mr-2 text-xs text-gray-600">${{ price }}</p>
            <p class="mr-2 text-xs text-red-600 line-through">
              ${{ discount }}
            </p>
          </div>
          <div class="flex">
            <div class="">
              <i class="fas fa-star text-yellow-400 text-xs"></i>
              <i class="fas fa-star text-yellow-400 text-xs"></i>
              <i class="fas fa-star text-yellow-400 text-xs"></i>
              <i class="fas fa-star text-yellow-400 text-xs"></i>
              <i class="far fa-star text-gray-400 text-xs"></i>
            </div>
            <div class="ml-2 mb-3 mt-1">
              <p class="text-gray-500 font-medium text-sm">({{ rating }})</p>
            </div>
          </div>
          <button class="bg-orange text-white py-2 rounded-xl">
            Add to Cart
          </button>
        </div>
      </div>
      <div v-if="toggleModal" class="fixed overflow-x-auto overflow-y-auto inset-0 flex justify-center items-center z-50">
        <div class="relative mx-aut0 w-auto max-w-2xl">
          <div class="bg-white w-full">
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolorem blanditiis animi magni praesentium doloribus laborum ut, culpa doloremque nobis!</span>
            <button class="roundedbg-green-500 text-white px-4 py-2">close</button>
          </div>
        </div>
      </div>
      <div 
      v-if="toggleModal"
      class="absolute z-40 inset-0 opacity-25 bg-black"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    toggleModal: false,
    price: 45.0,
    discount: 15.0,
    rating: "4.5",
  }),

  computed: {
    ...mapState({
      meals: (state) => state.productsModule.meals,
    }),
  },

  created() {
    this.FETCH_MEALS();
  },

  methods: {
    ...mapActions(["FETCH_MEALS", "FETCH_MEAL"]),
    getProduct(item) {
      this.FETCH_MEAL({
        id: item
      })
      this.toggleModal = true
    },
  },
};
</script>

<style scoped>
.bg-orange {
  background: #264653;
  width: 80%;
  margin: 0 auto;
}
</style>