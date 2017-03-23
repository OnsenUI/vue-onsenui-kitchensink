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
    },

    splitter: {
      strict: true,
      namespaced: true,
      state: {
        open: false
      },
      mutations: {
        toggle(state, shouldOpen) {
          if (shouldOpen instanceof Boolean) {
            state.open = shouldOpen;
          } else {
            state.open = !state.open;
          }
        }
      }
    },

    tabbar: {
      strict: true,
      namespaced: true,
      state: {
        index: 0
      },
      mutations: {
        set(state, index) {
          state.index = index;
        }
      }
    }
  }
};
