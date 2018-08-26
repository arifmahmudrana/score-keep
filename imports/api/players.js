import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';

export default new Mongo.Collection('players');

export const calculatePlayerPosition = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if (index && players[index - 1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    };
  });
}