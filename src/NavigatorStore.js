export default {
  modules: {
    navigator: {
      strict: true,
      namespaced: true,
      state: {
        stack: []
      },
      mutations: {
        push(state, page) {
          state.stack = [
            ...state.stack,
            ...(page instanceof Array ? page : [page])
          ];
        },
        pop(state) {
          if (state.stack.length > 1) {
            state.stack.pop();
          }
        },
        replace(state, page) {
          state.stack.pop();
          state.stack.push(page);
        },
        reset(state, page) {
          state.stack = [page || state.stack[0]];
        }
      }
    }
  }
};
