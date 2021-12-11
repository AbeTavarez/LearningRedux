import React, {Component} from 'react';

// To connect to the store we use:
import { connect } from 'react-redux';

class SongList extends Component {
    render(){
        console.log(this.props);
    return <h1>SongList</h1>
    }
};

// by convention we call this function mapStateToProps;
//this function will get call with all of our state
const mapStateToProps = (state) => {
    // this state object will be available as props in our components
    return {
        songs: state.songs
    };
};

// connect return a function that we invoke right after calling connect;
export default connect(mapStateToProps)(SongList);