import React, { useEffect } from "react";
import { connect } from "react-redux";
// Actions
import { getRanking } from "../../../actions/authActions";
import isEmpty from "../../../utils/isEmpty";
import "./Ranking.css";

const Ranking = ({ auth, getRanking }) => {
  const { ranking } = auth;
  let names, scores;

  useEffect(() => {
    if (isEmpty(ranking)) getRanking(10);
  }, [ranking, getRanking]);

  if (!isEmpty(ranking)) {
    names = ranking.map(user => <li key={user.id}>{user.name}</li>);
    scores = ranking.map(score => <li key={score.id}>{score.entries}</li>);
  }
  return (
    <>
      <div className="Ranking">
        <h1> TOP 10</h1>
        <div className="Ranking-field">
          <h2>Name</h2>
          <h2>Score</h2>
        </div>
        <div className="row">
          <div className="col-8">
            <ul>{names}</ul>
          </div>
          <div className="col-4">
            <ul id="score">{scores}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getRanking }
)(Ranking);
