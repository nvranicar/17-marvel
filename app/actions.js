export function seriesInfoLoadComplete(data) {
  return { type: 'SERIESINFO@GET_COMPLETE', data };
}

export function charactersLoadComplete(data) {
  return { type: 'CHARACTERDATA@GET_COMPLETE', data };
}

export function comicsLoadComplete(data) {
  return { type: 'COMICDATA@GET_COMPLETE', data };
}

export function charactersFindForId(id) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
      .then(r => r.json())
      .then((data) => {
        next(charactersLoadComplete(data));
      });
  };
}

export function comicsFindForId(id) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/comics`)
      .then(r => r.json())
      .then((data) => {
        next(comicsLoadComplete(data));
      });
  };
}

export function seriesInfoSearch(name) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
      .then(r => r.json())
      .then((info) => {
        next(seriesInfoLoadComplete(info.data.results[0]));
        next(charactersFindForId(info.data.results[0].id));
        next(comicsFindForId(info.data.results[0].id));
      });
  };
}
