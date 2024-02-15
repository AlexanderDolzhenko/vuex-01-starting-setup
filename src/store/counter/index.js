

export default {
    namespaced: true,
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
        increment(state) {
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        },
        
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
          },
          normalizedCounter(state, getters) {
             const finalCounter = getters.finalCounter;
             if (finalCounter < 0) {
              return 0
             }
             if (finalCounter > 100) {
              return 100
             }
             return finalCounter;
          },
          userIsAuth(state) {
              return state.isLoggedIn;
          }
    }

}
