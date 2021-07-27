import axios from "axios";

const getters = {
  // get total price
  cartTotalPrice(state) {
    let total = 0;

    state.cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  },
};

const state = {
  loading: false,
  meals: [],
  meal: {},
  cart: JSON.parse(localStorage.getItem("meals")) || [],
};

const actions = {
  // fetch a list of meals
  FETCH_MEALS(context) {
    return new Promise((resolve, reject) => {
      context.commit("SET_LOADING_STATUS", true);
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        .then((res) => {
          context.commit("SET_LOADING_STATUS", false);
          context.commit("SET_MEALS", res.data.meals);
          resolve(res.data.meals);
        })
        .catch((err) => {
          context.commit("SET_LOADING_STATUS", false);
          console.log(err);
          reject(err);
        });
    });
  },

  // fetch a single meal
  FETCH_MEAL(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit("SET_LOADING_STATUS", true);
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${payload.id}`
        )
        .then((res) => {
          context.commit("SET_LOADING_STATUS", false);
          context.commit("SET_MEAL", res.data.meals[0]);
          console.log(res.data.meals[0]);
          resolve(res.data.meals[0]);
        })
        .catch((err) => {
          context.commit("SET_LOADING_STATUS", false);
          console.log(err);
          reject(err);
        });
    });
  },

  // add meal to cart
  ADD_MEAL_TO_CART(context, payload) {
    return new Promise(() => {
      context.commit("SET_LOADING_STATUS", true);
      context.commit("SET_MEAL_TO_CART", payload);
    });
  },

  // remove meal from cart
  REMOVE_MEAL_FROM_CART(context, payload) {
    return new Promise(() => {
      context.commit("SET_LOADING_STATUS", true);
      context.commit("REMOVE_MEAL_CART", payload);
    });
  },
};

const mutations = {
  // set loading status
  SET_LOADING_STATUS(state, payload) {
    state.loading = payload;
  },

  // set meals
  SET_MEALS(state, payload) {
    state.meals = payload;
  },

  SET_MEAL(state, payload) {
    state.meal = payload;
  },

  // add meal to cart
  SET_MEAL_TO_CART(state, payload) {
    let mealInCart = state.cart.find((item) => {
      return item.meal.idMeal == payload.meal.idMeal;
    });

    if (mealInCart) {
      mealInCart.quantity += payload.quantity;
      return;
    }

    state.cart.push(payload);
  },

  // remove meal from cart
  REMOVE_MEAL_CART(state, payload) {
    state.cart = state.cart.filter((item) => {
      return item.meal.idMeal !== payload.id;
    });
  },

  // set cart
  SET_CART_ITEMS(state, payload) {
    state.cart = payload;
  },
};

export default {
  getters,
  state,
  actions,
  mutations,
};
