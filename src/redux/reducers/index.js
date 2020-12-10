const INIATIAL_STATE = [];

function reducer(state = INIATIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_FORM':
      return [...state, {texto: action.value} ]
    default:
      return state;
  }
}

export default reducer;