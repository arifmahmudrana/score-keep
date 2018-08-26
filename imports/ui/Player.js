import React, {Component} from "react";
import PropTypes from 'prop-types';
import Players from '../api/players';

class Player extends Component {
  render() {
    const player = this.props.player;
    const className = `item item--position-${player.rank}`;
    
    return (
      <div className={className} key={player._id}>
        <div className="player">
          <div>
            <h3>{player.name}</h3>
            <p>{player.position} - {player.score} point(s).</p>
          </div>
          <div className="player__actions">
            <button className="button button--round" 
              onClick={() => Players.update(player._id, {$inc: {score: -1}})}>
              -1
            </button>
            <button className="button button--round" 
              onClick={() => Players.update(player._id, {$inc: {score: 1}})}>
              +1
            </button>
            <button className="button button--round" 
              onClick={() => Players.remove(player._id)}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const Player = ({player}) => (
//   <div className="item" key={player._id}>
//     <div className="player">
//       <div>
//         <h3>{player.name}</h3>
//         <p>{player.score} point(s).</p>
//       </div>
//       <div className="player__actions">
//         <button className="button button--round" 
//           onClick={() => Players.update(player._id, {$inc: {score: -1}})}>
//           -1
//         </button>
//         <button className="button button--round" 
//           onClick={() => Players.update(player._id, {$inc: {score: 1}})}>
//           +1
//         </button>
//         <button className="button button--round" 
//           onClick={() => Players.remove(player._id)}>
//           X
//         </button>
//       </div>
//     </div>
//   </div>
// );

Player.propTypes = {
  player: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  }).isRequired
};

// Player.defaultProps = {
//   title: `Score Keep`,
// };

export default Player;