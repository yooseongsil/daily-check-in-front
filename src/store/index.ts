import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState, state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
};

export default new Vuex.Store(store);
