import React from "react";
// 1-Import connect
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  // console.log(props)

  if (!song) {
    return <div>Select a song!</div>;
  }
  return (
    <div className="">
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  );
};

// 2- create mapStateToProps and return the data we need in this component
const mapStateToProps = (state) => {
  // here we need the selectedSong and we assigned it to the song key
  return { song: state.selectedSong };
};

// 3- call connect with mapStateToProps and the component
export default connect(mapStateToProps)(SongDetail);
