import React from "react";
import Cell from "../Cell/Cell";
import Util, {
  SUCCESS,
  ERROR,
  COMPLEX,
  handleSubmitFail
} from "../../common/Util";
import ic_success from "../../common/assets/ic_success.png";
import ic_error from "../../common/assets/ic_error.png";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  game: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px"
  },
  gameHeader: {
    marginBottom: "20px",
    maxWidth: "360px",
    background: "#212121",
    padding: "7px",
    textAlign: "center",
    color: "#fff",
    minHeight: "100px",
    borderRadius: "7px"
  },
  header: {
    display: "block",
    marginTop: "15px"
  }
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: this.initBoardData(
        this.props.height,
        this.props.width,
        this.props.mines
      ),
      gameStatus: "Juguemos",
      mineCount: this.props.mines
    };
  }

  getMines(data) {
    let mineArray = [];

    data.map(datarow => {
      datarow.map(dataitem => {
        if (dataitem.isMine) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  }

  getFlags(data) {
    let mineArray = [];

    data.map(datarow => {
      datarow.map(dataitem => {
        if (dataitem.isFlagged) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  }

  getHidden(data) {
    let mineArray = [];

    data.map(datarow => {
      datarow.map(dataitem => {
        if (!dataitem.isRevealed) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  }

  getRandomNumber(dimension) {
    return Math.floor(Math.random() * 1000 + 1) % dimension;
  }

  initBoardData(height, width, mines) {
    let data = this.createEmptyArray(height, width);
    data = this.plantMines(data, height, width, mines);
    data = this.getNeighbours(data, height, width);
    return data;
  }

  createEmptyArray(height, width) {
    let data = [];

    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false,
          styles: styles.cell
        };
      }
    }
    return data;
  }

  plantMines(data, height, width, mines) {
    let randomx,
      randomy,
      minesPlanted = 0;

    while (minesPlanted < mines) {
      randomx = this.getRandomNumber(width);
      randomy = this.getRandomNumber(height);
      if (!data[randomx][randomy].isMine) {
        data[randomx][randomy].isMine = true;
        minesPlanted++;
      }
    }

    return data;
  }

  getNeighbours(data, height, width) {
    let updatedData = data,
      index = 0;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (data[i][j].isMine !== true) {
          let mine = 0;
          const area = this.traverseBoard(data[i][j].x, data[i][j].y, data);
          area.map(value => {
            if (value.isMine) {
              mine++;
            }
          });
          if (mine === 0) {
            updatedData[i][j].isEmpty = true;
          }
          updatedData[i][j].neighbour = mine;
        }
      }
    }

    return updatedData;
  }

  traverseBoard(x, y, data) {
    const el = [];

    if (x > 0) {
      el.push(data[x - 1][y]);
    }

    if (x < this.props.height - 1) {
      el.push(data[x + 1][y]);
    }

    if (y > 0) {
      el.push(data[x][y - 1]);
    }

    if (y < this.props.width - 1) {
      el.push(data[x][y + 1]);
    }

    if (x > 0 && y > 0) {
      el.push(data[x - 1][y - 1]);
    }

    if (x > 0 && y < this.props.width - 1) {
      el.push(data[x - 1][y + 1]);
    }

    if (x < this.props.height - 1 && y < this.props.width - 1) {
      el.push(data[x + 1][y + 1]);
    }

    if (x < this.props.height - 1 && y > 0) {
      el.push(data[x + 1][y - 1]);
    }

    return el;
  }

  revealBoard() {
    let updatedData = this.state.boardData;
    updatedData.map(datarow => {
      datarow.map(dataitem => {
        dataitem.isRevealed = true;
        dataitem.styles = styles.cell;
      });
    });
    this.setState({
      boardData: updatedData
    });
  }

  revealEmpty(x, y, data) {
    let area = this.traverseBoard(x, y, data);
    area.map(value => {
      if (
        !value.isFlagged &&
        !value.isRevealed &&
        (value.isEmpty || !value.isMine)
      ) {
        data[value.x][value.y].isRevealed = true;
        if (value.isEmpty) {
          this.revealEmpty(value.x, value.y, data);
        }
      }
    });
    return data;
  }

  handleCellClick(x, y) {
    if (
      this.state.boardData[x][y].isRevealed ||
      this.state.boardData[x][y].isFlagged
    )
      return null;

    if (this.state.boardData[x][y].isMine) {
      this.setState({ gameStatus: "Ups perdiste!" });
      this.revealBoard();
      Util.showNoty(ERROR, "Perdiste, ¡intentalo de nuevo!");
    }

    let updatedData = this.state.boardData;
    updatedData[x][y].isFlagged = false;
    updatedData[x][y].isRevealed = true;
    updatedData[x][y].styles = styles.cellHidden;

    if (updatedData[x][y].isEmpty) {
      updatedData = this.revealEmpty(x, y, updatedData);
    }

    if (this.getHidden(updatedData).length === this.props.mines) {
      this.setState({ mineCount: 0, gameStatus: "Ganaste!" });
      this.revealBoard();
      Util.showNoty(SUCCESS, "Ganaste. ¡Felicitaciones!");
    }

    this.setState({
      boardData: updatedData,
      mineCount: this.props.mines - this.getFlags(updatedData).length
    });
  }

  handleContextMenu(e, x, y) {
    e.preventDefault();
    let updatedData = this.state.boardData;
    let mines = this.state.mineCount;

    if (updatedData[x][y].isRevealed) return;

    if (updatedData[x][y].isFlagged) {
      updatedData[x][y].isFlagged = false;
      mines++;
    } else {
      updatedData[x][y].isFlagged = true;
      mines--;
    }

    if (mines === 0) {
      const mineArray = this.getMines(updatedData);
      const FlagArray = this.getFlags(updatedData);
      if (JSON.stringify(mineArray) === JSON.stringify(FlagArray)) {
        this.setState({ mineCount: 0, gameStatus: "You Win." });
        this.revealBoard();
        alert("You Win");
      }
    }

    this.setState({
      boardData: updatedData,
      mineCount: mines
    });
  }

  resetBoard = () => {
    const { height, width, mines } = this.props;
    let array = this.initBoardData(height, width, mines);
    this.setState({
      boardData: array,
      gameStatus: "Juguemos",
      mineCount: mines
    });
  };

  renderBoard(data) {
    return data.map(datarow => {
      return datarow.map(dataitem => {
        return (
          <div key={dataitem.x * datarow.length + dataitem.y}>
            <Cell
              onClick={() => this.handleCellClick(dataitem.x, dataitem.y)}
              cMenu={e => this.handleContextMenu(e, dataitem.x, dataitem.y)}
              value={dataitem}
            />
            {datarow[datarow.length - 1] === dataitem ? (
              <div className="clear" />
            ) : (
              ""
            )}
          </div>
        );
      });
    });
  }

  render() {
    return (
      <div style={styles.game}>
        <div style={styles.gameHeader}>
          <h1 style={styles.header}>{this.state.gameStatus}</h1>
        </div>

        {this.renderBoard(this.state.boardData)}
        <RaisedButton
          label="Reiniciar Tablero"
          primary
          style={{ marginLeft: "110px", marginTop: "20px" }}
          onClick={this.resetBoard}
        />
      </div>
    );
  }
}
export default Board;
