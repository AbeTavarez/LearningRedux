import React from "react";
// 1-Import connect
import { connect } from "react-redux";

const SongDetail = ({props}) => {
    console.log(props)
  return <div>Song Detail</div>;
};

// 2- create mapStateToProps and return the data we need in this component
const mapStateToProps = (state) => {
    // here we need the selectedSong and we assigned it to the song key 
  return { song: state.selectedSong };
};

// 3- call connect with mapStateToProps and the component
export default connect(mapStateToProps)(SongDetail);
