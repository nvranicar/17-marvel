import { combineReducers } from 'redux';
import comicData from './reducer/comic-data';
import characterData from './reducer/character-data';
import seriesInfo from './reducer/series-info';
import modal from './reducer/modal';

export default combineReducers({
  comicData,
  characterData,
  seriesInfo,
  modal
});
