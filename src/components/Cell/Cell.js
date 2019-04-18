import React from "react";

const styles = {
  cell: {
    background: "#81c784",
    border: "1px solid #fff",
    float: "left",
    lineHeight: "45px",
    height: "45px",
    textAlign: "center",
    width: "45px",
    cursor: "pointer",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "600"
  },
  cellHidden: {
    background: "#bdbdbd",
    border: "1px solid #fff",
    float: "left",
    lineHeight: "45px",
    height: "45px",
    textAlign: "center",
    width: "45px",
    cursor: "pointer",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "600"
  },
  cellMine: {
    background: "#cfd8dc",
    border: "1px solid #fff",
    float: "left",
    lineHeight: "45px",
    height: "45px",
    textAlign: "center",
    width: "45px",
    cursor: "pointer",
    borderRadius: "5px",
    color: "#fc543c",
    fontWeight: "600"
  }
};

export default class Cell extends React.Component {
  getValue() {
    const { value } = this.props;

    if (!value.isRevealed) {
      return value.isFlagged ? "🚩" : null;
    }
    if (value.isMine) {
      return "💣";
    }
    if (value.neighbour === 0) {
      return null;
    }
    return value.neighbour;
  }

  render() {
    const { value, onClick, cMenu } = this.props;

    return (
      <div
        onClick={onClick}
        style={value.isRevealed ? styles.cellHidden : styles.cell}
        onContextMenu={cMenu}
      >
        {this.getValue()}
      </div>
    );
  }
}
/*
let className =
  "cell" +
  (value.isRevealed ? "" : " hidden") +
  (value.isMine ? " is-mine" : "") +
  (value.isFlagged ? " is-flag" : "");


*/
