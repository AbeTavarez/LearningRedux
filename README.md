# Learning Redux

## Redux Cycle:

### Action Creator -> Action -> dispatch -> Reducers -> State;

### Action Creator -> Action
1- A function creates a Action,this actions contains the type of action we want to take and the data or payload for the change.

Action Creator: is a function that is going to create or return a JS object that we'll call action.
Action: an action has a type property and a payload property.
    |-> the type property: describes a change we want to perform on our data.
    |-> the payload property: contains the actual data

### Dispatch -> Reducers -> State;
*the dispatch function is build-in redux. dispatch send the action to reducer

2- The dispatch function will take an actions as argument, make a copy and pass it to different places on our app the Reducers; The reducer will make the changes to out data and then return it with the updated data.



## Installation - Redux and React-Redux
`npm i redux react-redux`

## Setup:
- In the index.js
  1. // Redux
      import { Provider } from 'react-redux';
      import { createStore } from "redux";
      import reducers from "./reducers/index";

  3. Wrap the <App /> component in the render method:
      ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')
);

- In store.js




## React-Redux

- Connect the Redux store with a component
`
import React, {Component} from 'react';
import { connect } from 'react-redux';

class SongList extends Component{
    render(){
        console.log(this.props);
    return <h1>SongList</h1>
    }
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps)(SongList)
`