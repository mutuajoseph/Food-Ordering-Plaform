import axios from "axios";


const getters = {

}

const state = {
    loading: false,
    meals: [],
    meal: {}
}

const actions = {

    // fetch a list of meals
    FETCH_MEALS(context) {
        return new Promise((resolve, reject) => {
            context.commit("SET_LOADING_STATUS", true)
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(res => {
                context.commit("SET_LOADING_STATUS", false)
                context.commit("SET_MEALS", res.data.meals)
                resolve(res.data.meals)
            })
            .catch(err =>{
                context.commit("SET_LOADING_STATUS", false)
                console.log(err)
                reject(err)
            })
        })
    },

    // fetch a single meal
    FETCH_MEAL(context, payload) {
        return new Promise((resolve, reject) => {
            context.commit("SET_LOADING_STATUS", true)
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${payload.id}`)
            .then(res => {
                context.commit("SET_LOADING_STATUS", false)
                context.commit("SET_MEAL", res.data.meals[0])
                resolve(res.data.meals[0])
            })
            .catch(err => {
                context.commit("SET_LOADING_STATUS", false)
                console.log(err)
                reject(err)
            })
        })
    }
}

const mutations = {

    // set loading status
    SET_LOADING_STATUS(state, payload) {
        state.loading = payload
    },

    // set meals
    SET_MEALS(state, payload) {
        state.meals = payload
    },

    SET_MEAL(state, payload) {
        state.meal = payload
    }
}

export default {
    getters,
    state,
    actions,
    mutations
}
