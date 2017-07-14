export default function comicData(state = [], action) {
  switch (action.type) {
    case 'COMICDATA@GET_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
