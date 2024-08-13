import React, { Component } from "react";

class Prompt extends Component {
  render() {
    const { item, handleAnswer, index } = this.props;
    return (
      <div>
        <p>Have you everrrrr seeeen the rainnnnn</p>
        <div className="d-flex justify-content-around align-items-center">
          <button onClick={(e) => handleAnswer(e, index, false)}>Yes</button>
          <button onClick={(e) => handleAnswer(e, index, false)}>No</button>
        </div>
      </div>
    );
  }
}


export default Prompt;