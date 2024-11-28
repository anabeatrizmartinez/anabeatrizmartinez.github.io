import { createStore } from 'vuex'

import state from "./state/index.js";
import getters from './getters/index.js';
import mutations from "./mutations/index.js";
import actions from "./actions/index.js";

export default createStore({
    state,
    getters,
    mutations,
    actions,
});