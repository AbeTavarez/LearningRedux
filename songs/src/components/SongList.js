import React, { Component } from "react";
// To connect to the store we use:
import { connect } from "react-redux";

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// by convention we call this function mapStateToProps;
//this function will get call with all of our state
const mapStateToProps = (state) => {
  // this state object will be available as props in our components
  return {
    songs: state.songs,
  };
};

// connect return a function that we invoke right after calling connect;
export default connect(mapStateToProps)(SongList);
