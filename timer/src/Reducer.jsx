const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        start: true,
        time: state.time++,
      }
    case 'STOP':
      return { ...state, start: false }
    case 'RESET':
      return { ...state, time: 0, start: false }
    default:
      console.log('salam')
      break
  }
}
export default reducer
