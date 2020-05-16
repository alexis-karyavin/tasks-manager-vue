import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push({id: state.tasks.length + 1, ...task});
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, task) {
      const id = state.tasks.findIndex(item => item.id === task.id);
      state.tasks.splice(id, 1);
    },
    updateTask(state, task) {
      // state.tasks[task.id] = {...task}
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    },
    deleteTask({commit}, task) {
      commit('deleteTask', task);
    },
    updateTask({commit}, task) {
      commit('updateTask', task);
    }
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  },
  modules: {
  }
})
