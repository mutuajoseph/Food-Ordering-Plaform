<template>
  <div id="header">
    <div
      class="
        flex
        justify-between
        items-center
        px-8
        border-b-2
        h-14
      "
    >
      <h1 @click="$router.push({path: `/`})" class="text-2xl font-bold cursor-pointer">
        Kune <span class="text-green-600">Assess</span>
      </h1>
      <div class="flex items-center">
        <router-link class="mr-1 font-extralight" to="/auth"
          >Sign Up</router-link
        >
        <router-link class="mr-6 font-extralight" to="/auth"
          >Sign In</router-link
        >
        <router-link to="/cart" class="font-extralight flex items-center gap-1 bg-green-600 px-2 py-1 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span class="text-xl text-white font-semibold">0</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>