const createGlobalsSlice = (set, get) => ({
  globals: {
    urlStateKey: '',
    tokenData: null,
    actions: {
      setUrlStateKey: (newUrlStateKey) =>
        set((state) => ({
          globals: { ...state.globals, urlStateKey: newUrlStateKey },
        })),
      setTokenData: (newTokenData) => {
        set((state) => ({
          globals: { ...state.globals, tokenData: newTokenData },
        }));
      },
    },
  },
});

export default createGlobalsSlice;
