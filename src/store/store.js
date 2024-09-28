// // store.js
// import { createStore } from 'vuex';

// const store = createStore({
//   state: {
//     sessionId: localStorage.getItem('session_id') || null,
//   },
//   mutations: {
//     setSessionId(state, sessionId) {
//       state.sessionId = sessionId;
//       localStorage.setItem('session_id', sessionId);
//     },
//   },
//   actions: {
//     login({ commit }, session_id) {
//       commit('setSessionId', session_id);
//     },
//     logout({ commit }) {
//       commit('setSessionId', null);
//       localStorage.removeItem('session_id');
//     },
//   },
// });

// export default store;