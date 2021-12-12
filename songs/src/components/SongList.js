import React, { Component } from "react";
// To connect to the store we use:
import { connect } from "react-redux";
// We import our action and pass it to mapStateToProps so we can access the actions in thr props
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// by convention we call this function mapStateToProps;
//this function will get call with all of our state
const mapStateToProps = (state) => {
    // console.log(state)
  // this state object will be available as props in our components
  return {
    songs: state.songs,
  };
};

// The first argument to connect is the mapStateToProps
// The second argument of connect is an object with all of the actions to be pass to dispatch();
// The extra pair of parenthesis of connect we pass the component (SongList) which will be call right after connect();
export default connect(mapStateToProps, {
  selectSong,
})(SongList);
