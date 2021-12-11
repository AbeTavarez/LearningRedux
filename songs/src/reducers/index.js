import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        {title: 'My song 1', duration: '3:28'},
        {title: 'My song 2', duration: '3:28'},
        {title: 'My song 3', duration: '3:28'},
        {title: 'My song 4', duration: '3:28'},
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})