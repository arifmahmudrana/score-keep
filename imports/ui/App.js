import React from "react";
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import Players from './Players';
import AddPlayer from './AddPlayer';

const App = ({title, players}) => (
  <div>
    <TitleBar title={title} subTitle="Created by Rana" />
    <div className="wrapper">
      <div>
        <Players players={players} />
      </div>
      <AddPlayer />
    </div>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })
  ).isRequired
};

export default App;