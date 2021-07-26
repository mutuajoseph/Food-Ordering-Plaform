<template>
  <div id="cart">
    <Header />
    <div class="container mx-auto">
      <div class="h-80 flex flex-col justify-center items-center gap-4">
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
        <p class="text-center text-2xl font-bold">You don't have any items in your cart...</p>
        <div class="flex gap-6 mt-6">
          <button @click="$router.push({path: `/`})" class="uppercase rounded-lg text-sm bg-green-600 text-white font-light px-4 py-2">Back to home</button>
          <button @click="$router.push({path: `/auth`})" class="uppercase rounded-lg text-sm bg-green-600 text-white font-light px-4 py-2">Click to signin</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Cart",
  components: {
    Header,
  },
};
</script>

<style>
</style>
