<template>
  <div id="auth">
    <Header />
    <div class="container mx-auto mt-8">
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
                for="username"
              >
                Username
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
                  focus:outline-none
                  focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Username"
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
                  focus:outline-none
                  focus:shadow-outline
                "
                id="password"
                type="password"
                placeholder="******************"
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
                  focus:outline-none
                  focus:shadow-outline
                "
                type="button"
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
                for="username"
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
                  focus:outline-none
                  focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
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
                  focus:outline-none
                  focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
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
                  focus:outline-none
                  focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Username"
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
                  focus:outline-none
                  focus:shadow-outline
                "
                id="password"
                type="password"
                placeholder="******************"
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
                  focus:outline-none
                  focus:shadow-outline
                "
                type="button"
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
      </div>
      <div class="flex justify-center my-4">
        <template>
          <button
            v-google-signin-button="clientId"
            class="google-signin-button"
          >
            Continue with Google
          </button>
        </template>

        <template>
          <button v-facebook-login-button="appId" class="facebook-login-button">
            Continue with Facebook
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
    clientId:
      "430662087974-qrmkevsh9jhp16vsbif0c1tstt5vctf2.apps.googleusercontent.com",
    appId: "592351685084311",
  }),
  methods: {
    OnGoogleAuthSuccess(idToken) {
      // Receive the idToken and make your magic with the backend
      console.log(idToken);
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
    OnFacebookAuthSuccess(idToken) {
      // Receive the idToken and make your magic with the backend
      console.log(idToken)
    },
    OnFacebookAuthFail(error) {
      console.log(error);
    },
  },
};
</script>

<style scoped>
.card {
  width: 500px;
}

.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
}

.facebook-login-button {
    color: white;
    background-color: #3b5998;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px 20px 25px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>