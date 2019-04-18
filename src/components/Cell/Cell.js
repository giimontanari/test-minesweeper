import React from "react";

const styles = {
  cellHidden: {
    background: "#81c784",
    border: "1px solid #fff",
    float: "left",
    lineHeight: "45px",
    height: "45px",
    textAlign: "center",
    width: "45px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "600"
  },
  cellRevealed: {
    background: "#bdbdbd",
    border: "1px solid #fff",
    float: "left",
    lineHeight: "45px",
    height: "45px",
    textAlign: "center",
    width: "45px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "600"
  },
  cellMine: {
    background: "#e53935",
    border: "1px solid #fff",
    float: "left",
    lineHeight: "45px",
    height: "45px",
    textAlign: "center",
    width: "45px",
    cursor: "pointer",
    color: "#fff",
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
        style={value.isRevealed ? styles.cellRevealed : styles.cellHidden}
        onContextMenu={cMenu}
      >
        {this.getValue()}
      </div>
    );
  }
}
