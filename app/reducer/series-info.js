export default function seriesInfo(state = {}, action) {
  switch (action.type) {
    case 'SERIESINFO@GET_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
