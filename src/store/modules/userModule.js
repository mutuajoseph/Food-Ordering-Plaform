import { auth } from "../../utils/firebase";
import firebase from "firebase";

const getters = {
  userloggedIn(state) {
    return state.userToken !== null;
  },
};
const state = {
  userToken: localStorage.getItem("user_token") || null,
  user: localStorage.getItem("user") || null,
  loading: false,
};
const actions = {
  // create account
  CREATE_ACCOUNT(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit("SET_LOADING_STATUS", true);
      auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          context.commit("SET_LOADING_STATUS", false);
          console.log("res", res.user);
          localStorage.setItem("user_token", res.user.Aa);
          localStorage.setItem("user", res.user.email);
          context.commit("SET_TOKEN", res.user.Aa);
          resolve(res.user);
        })
        .catch((err) => {
          context.commit("SET_LOADING_STATUS", false);
          alert(err.message);
          reject(err);
        });
    });
  },

  // sign in to account
  LOGIN_TO_ACCOUNT(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit("SET_LOADING_STATUS", true);
      auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          context.commit("SET_LOADING_STATUS", false);
          console.log("res", res.user);
          localStorage.setItem("user_token", res.user.Aa);
          localStorage.setItem("user", res.user.email);
          context.commit("SET_TOKEN", res.user.Aa);
          resolve(res);
        })
        .catch((err) => {
          context.commit("SET_LOADING_STATUS", false);
          alert(err.message);
          reject(err);
        });
    });
  },

  // social auth
  GOOGLE_AUTH(context) {
    return new Promise((resolve, reject) => {
      context.commit("SET_LOADING_STATUS", true);
      let provider = new firebase.auth.GoogleAuthProvider();

      auth
        .signInWithPopup(provider)
        .then((res) => {
          context.commit("SET_LOADING_STATUS", false);
          console.log("res", res);
          localStorage.setItem("user_token", res.user.Aa);
          localStorage.setItem("user", res.user.email);
          context.commit("SET_TOKEN", res.user.Aa);
          resolve(res);
        })
        .catch((err) => {
          context.commit("SET_LOADING_STATUS", false);
          alert(err.message);
          reject(err);
        });
    });
  },

  // LOGOUT
  LOGOUT(context) {
    return new Promise((resolve, reject) => {
      if (context.getters.userloggedIn) {
        localStorage.removeItem("user_token");
        localStorage.removeItem("user");
        context.commit("CLEAR_USER_TOKEN");
        resolve();
      } else {
        reject();
      }
    });
  },
};

const mutations = {
  // set loading
  SET_LOADING_STATUS(state, payload) {
    state.loading = payload;
  },

  // set user token
  SET_TOKEN(state, user_token) {
    state.userToken = user_token;
  },

  // destroy token
  CLEAR_USER_TOKEN(state) {
    state.userToken = null;
  },
};

export default {
  getters,
  state,
  actions,
  mutations,
};
