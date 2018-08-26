import React from "react";
import Players from '../api/players';

const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.target.playerName.value.trim();

  if (name) {
    e.target.playerName.value = '';
    Players.insert({
      name,
      score: 0
    });
  }
};

export default () => (
  <div className="item">
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input" name="playerName" placeholder="Player name" />
      <button type="submit" className="button">Add Player</button>
    </form>
  </div>
);