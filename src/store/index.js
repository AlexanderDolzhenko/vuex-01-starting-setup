import { createStore } from "vuex";
import counterModule from './counter/index.js'
import rootMutations from './mutations.js';
import authActions from './actions.js';
import authGetters from './getters.js'
const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations:
        rootMutations
    ,
    actions:
        authActions
    ,
    getters:
        authGetters

});


export default store;