import axios from 'axios';

const API_BASE = 'http://localhost:8000/v1';


export default {
  getPosts: ({ commit }) => {
    axios.get(`${API_BASE}/posts/`).then(
      (response) => {
        commit('getPosts', response.data);
      },
    );
  },
  setYearHeader: ({ commit }, payload) => {
    commit('setYearHeader', payload);
  },
};
