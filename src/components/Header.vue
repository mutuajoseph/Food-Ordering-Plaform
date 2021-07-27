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
        fixed
        z-10
        top-0
        w-full
        bg-white
      "
    >
      <h1
        @click="$router.push({ path: `/` })"
        class="text-2xl font-bold cursor-pointer"
      >
        Kune <span class="text-green-600">Assess</span>
      </h1>
      <div class="flex items-center">
        <div v-if="!loggedIn">
          <router-link
            class="mr-1 font-extralight hover:text-green-600"
            to="/auth"
            >Sign Up</router-link
          >
          <router-link
            class="mr-6 font-extralight hover:text-green-600"
            to="/auth"
            >Sign In</router-link
          >
        </div>
        <div v-if="loggedIn" class="mx-4 flex items-center gap-2">
          <div @click="open == true" class="relative" x-data="{ open: false }">
            <button
              @click="open = !open"
              class="
                flex flex-row
                items-center
                w-full
                px-4
                py-2
                mt-2
                text-sm
                font-semibold
                text-left
                bg-transparent
                rounded-lg
                dark-mode:bg-transparent
                dark-mode:focus:text-white
                dark-mode:hover:text-white
                dark-mode:focus:bg-gray-600
                dark-mode:hover:bg-gray-600
                md:w-auto md:inline md:mt-0 md:ml-4
                hover:text-gray-900
                focus:text-gray-900
                hover:bg-gray-200
                focus:bg-gray-200 focus:outline-none focus:shadow-outline
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ user }}</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                :class="{ 'rotate-180': open, 'rotate-0': !open }"
                class="
                  inline
                  w-4
                  h-4
                  mt-1
                  ml-1
                  transition-transform
                  duration-200
                  transform
                  md:-mt-1
                "
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              v-if="open"
              x-transition:enter="transition ease-out duration-100"
              x-transition:enter-start="transform opacity-0 scale-95"
              x-transition:enter-end="transform opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="transform opacity-100 scale-100"
              x-transition:leave-end="transform opacity-0 scale-95"
              class="
                absolute
                right-0
                w-full
                mt-2
                origin-top-right
                rounded-md
                shadow-lg
                md:w-48
              "
            >
              <div
                class="
                  px-2
                  py-2
                  bg-white
                  rounded-md
                  shadow
                  dark-mode:bg-gray-800
                "
              >
                <a
                  class="
                    cursor-pointer
                    block
                    px-4
                    py-2
                    mt-2
                    text-sm
                    font-semibold
                    bg-transparent
                    rounded-lg
                    dark-mode:bg-transparent
                    dark-mode:hover:bg-gray-600
                    dark-mode:focus:bg-gray-600
                    dark-mode:focus:text-white
                    dark-mode:hover:text-white
                    dark-mode:text-gray-200
                    md:mt-0
                    hover:text-gray-900
                    focus:text-gray-900
                    hover:bg-gray-200
                    focus:bg-gray-200 focus:outline-none focus:shadow-outline
                  "
                  @click="logout"
                  >Log Out</a
                >
              </div>
            </div>
          </div>
        </div>
        <router-link
          to="/cart"
          class="
            font-extralight
            flex
            items-center
            gap-1
            bg-green-600
            px-2
            py-1
            rounded-lg
          "
        >
          <span class="text-white font-bold">Cart</span>
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
          <span class="text-xl text-white font-semibold">{{ cart }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Header",
  data: () => ({
    open: false,
  }),
  computed: {
    ...mapGetters({
      loggedIn: "userloggedIn",
    }),
    ...mapState({
      user: (state) => state.userModule.user,
    }),
    cart() {
      return this.$store.state.productsModule.cart.length;
    },
  },

  methods: {
    ...mapActions(["LOGOUT"]),
    logout() {
      this.LOGOUT();
    },
  },
};
</script>

<style scoped></style>
