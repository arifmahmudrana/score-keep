import React from "react";
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';

const Players = ({players}) => (
  <FlipMove maintainContainerHeight={true}>
    {players.length 
    ? players.map((i, k) => <Player key={i._id} player={i} />) 
    : (
      <div className="item">
        <p className="item__message">Add your first player to get started!</p>
      </div>
    )}
  </FlipMove>
);

Players.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Players;