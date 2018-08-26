import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import Players, {calculatePlayerPosition} from '../imports/api/players';
import App from '../imports/ui/App';

import './main.html';

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(
      <App title="Score Keep" players={
        calculatePlayerPosition(Players.find({}, {sort: {score: -1, name: 1}}).fetch())
      } />, 
      document.getElementById('app')
    );
  });
});