import React, { Component } from 'react';

import Chessboard from "./Chessboard";

class Test extends Component {


    state = {
        fen: "start"
    }

    p1 = () => {
        this.setState({fen: "rnbqkbnr/ppp1pppp/8/3p4/3PP3/8/PPP2PPP/RNBQKBNR b KQkq e3 0 2"})
    }

    p2 = () => {
        this.setState({fen: "rnbqkbnr/ppp2ppp/8/3pp3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq e6 0 3"})
    }

    p3 = () => {
        this.setState({fen: "start"})
    }



    render() {

      return (
      <div>
          <Chessboard position={this.state.fen} transitionDuration={0}/>
          <button onClick={this.p1}>p1</button>
          <button onClick={this.p2}>p2</button>
          <button onClick={this.p3}>p3</button>
      </div>
    );
  }
}

export default Test;
