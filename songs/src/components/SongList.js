import React from 'react';

// To connect to the store we use:
import { connect } from 'react-redux';

const SongList = () => {
    return <h1>SongList</h1>
};

// by convention we call this function mapStateToProps;
//this function will get call with all of our state
const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs
    };
}

// connect return a function that we invoke right after
export default connect(mapStateToProps)(SongList);