export default function characterData(state = [], action) {
  switch (action.type) {
    case 'CHARACTERDATA@GET_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
