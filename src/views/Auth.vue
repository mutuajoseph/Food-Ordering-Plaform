<template>
  <div id="auth">
    <Header />
    <div class="container mx-auto mt-20">
      <div class="flex justify-center gap-12">
        <div class="card p-6 bg-white shadow-md rounded">
          <h3 class="text-center uppercase text-1xl font-semibold">
            Sign in into Kune Assess
          </h3>
          <p class="text-center text-sm mt-2 font-extralight">
            Fill in your account details to proceed with Signing in, otherwise
            if you do not have an account, you can create an account.
          </p>

          <form class="px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Email"
                v-model="email"
                required
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  mb-3
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="password"
                type="password"
                placeholder="******************"
                v-model="password"
                required
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  focus:outline-none focus:shadow-outline
                "
                type="button"
                @click="login"
              >
                Sign In
              </button>
              <a
                class="
                  inline-block
                  align-baseline
                  font-bold
                  text-sm text-blue-500
                  hover:text-blue-800
                "
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>

        <div class="card p-6 bg-white shadow-md rounded">
          <h3 class="text-center uppercase text-1xl font-semibold">
            Create your Kune Assess Account
          </h3>
          <p class="text-center text-sm mt-2 font-extralight">
            Create your Kune Assess Account in just a few clicks! You can also
            register using your google email address.
          </p>

          <form class="px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="firstname"
              >
                First Name
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="First Name"
                v-model="firstName"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="lastname"
              >
                Last Name
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Last Name"
                v-model="lastName"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Email"
                v-model="registerEmail"
                required
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border border-red-500
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  mb-3
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="password"
                type="password"
                placeholder="******************"
                v-model="registerPassword"
                required
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  focus:outline-none focus:shadow-outline
                "
                type="button"
                @click="register"
              >
                Create Account
              </button>
              <a
                class="
                  inline-block
                  align-baseline
                  font-bold
                  text-sm text-blue-500
                  hover:text-blue-800
                "
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>

      <p class="text-center font-light my-4">or</p>

      <div class="flex justify-center my-4 gap-4">
        <template>
          <button
            @click="googleSignIn"
            class="google-signin-button flex justify-center items-center gap-3"
          >
            <img class="w-6 h-6" src="../assets/google.svg" alt="google icon" />
            <span>Continue with Google</span>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import GoogleSignInButton from "vue-google-signin-button-directive";
import FacebookLoginButton from "vue-facebook-login-button-directive";
import { mapActions } from "vuex";

export default {
  name: "Auth",
  components: {
    Header,
  },
  directives: {
    GoogleSignInButton,
    FacebookLoginButton,
  },
  data: () => ({
    email: "",
    password: "",
    registerEmail: "",
    registerPassword: "",
    firstName: "",
    lastName: "",
  }),
  methods: {
    ...mapActions(["CREATE_ACCOUNT", "LOGIN_TO_ACCOUNT", "GOOGLE_AUTH"]),

    googleSignIn() {
      this.GOOGLE_AUTH().then(() => {
        this.$router.push({ path: `/` });
      });
    },

    register(e) {
      e.preventDefault();

      if (
        !this.firstName &&
        !this.lastName &&
        !this.registerEmail &&
        !this.registerPassword
      ) {
        alert("Please fill out all the fields before submitting");
      } else {
        this.CREATE_ACCOUNT({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.registerEmail,
          password: this.registerPassword,
        }).then(() => {
          this.firstName = "";
          this.lastName = "";
          this.registerEmail = "";
          this.registerPassword = "";

          this.$router.push({ path: `/` });
        });
      }
    },

    login(e) {
      e.preventDefault();

      if (!this.email && !this.password) {
        alert("Please fill out all fields before submitting");
      } else {
        this.LOGIN_TO_ACCOUNT({
          email: this.email,
          password: this.password,
        }).then(() => {
          this.email = "";
          this.password = "";

          this.$router.push({ path: `/` });
        });
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 500px;
}

.google-signin-button {
  color: #111;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
  border: 1px solid rgb(5, 100, 32);
  width: 300px;
}
</style>
