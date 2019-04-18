import React, { Component } from "react";
import Board from "../components/Board/Board";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 8,
      width: 8,
      mines: 10,
      expanded: false
    };
  }

  componentWillMount() {}

  render() {
    const { height, width, mines } = this.state;
    return (
      <div>
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}

export default Home;
