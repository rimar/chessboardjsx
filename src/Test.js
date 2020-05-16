import React, { Component } from 'react';

import Chessboard from "./Chessboard";

class Test extends Component {


    state = {
        fen: "start"
    }

    p1 = () => {
        this.setState({fen: "3rkb1r/p2nqppp/5n2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR3R w k - 3 13"})
    }

    p2 = () => {
        this.setState({fen: "3rkb1r/p2Rqppp/5n2/1B2p1B1/4P3/1Q6/PPP2PPP/2K4R b k - 0 13"})
    }

    p3 = () => {
        this.setState({fen: "4kb1r/p2rqppp/5n2/1B2p1B1/4P3/1Q6/PPP2PPP/2K4R w k - 0 14"})
    }



    render() {

      return (
      <div>
          <Chessboard position={this.state.fen}/>
          <button onClick={this.p1}>p1</button>
          <button onClick={this.p2}>p2</button>
          <button onClick={this.p3}>p3</button>
      </div>
    );
  }
}

export default Test;
