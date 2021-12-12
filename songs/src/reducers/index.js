import {combineReducers} from 'redux';
//* ===== Reducers

const songReducer = () => {
    return [
        {title: 'Numb', duration: '3:28'},
        {title: 'In The End', duration: '2:45'},
        {title: 'Faint', duration: '4:20'},
        {title: 'One Step Closer', duration: '3:54'},
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };
    return selectedSong;
};


// The Keys on this object are going to be the Keys on our state object;
export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})