const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
