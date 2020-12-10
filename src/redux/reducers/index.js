const INIATIAL_STATE = {
  text:"",
  email:'',
  idade:0,
}

function reducer(state = INIATIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_TEXT':
      return { ...state, text: action.value }
    case 'ADD_CHECK':
      return { ...state, email: action.value }
    case 'ADD_AGE':
      return { ...state, idade: action.value }
    default:
      return state;
  }
}

export default reducer;