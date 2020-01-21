import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default () => {
    const store = new Vuex.Store({
        state: {
            username: 'yx'
        },
        mutations: {
            set_username(state) {
                state.username = 'hcc';
            }
        },
        actions: {
            set_username({ commit }) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit('set_username');
                        resolve();
                    }, 1000);
                });
            }
        }
    });

    if (typeof window === 'object' && window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__);
    }
    return store;
}
