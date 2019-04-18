import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Notifications from "material-ui/svg-icons/social/notifications";
import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Favorite from "material-ui/svg-icons/action/favorite";
import logo from "../../common/assets/vault_logo.png";

class Header extends Component {
  render() {
    const styles = {
      title: {
        marginLeft: this.props.hideDrawer ? 250 : 0
      },
      appBar: {
        position: "fixed",
        //top: 0,
        backgroundColor: "white",
        alignItems: "baseline"
      }
    };

    return (
      <AppBar
        style={styles.appBar}
        onLeftIconButtonTouchTap={this.props.leftIconClick}
        iconStyleLeft={{
          color: "#1bb6b1",
          display: !this.props.login ? "block" : "none",
          marginLeft: 5,
          marginRight: 0,
          marginTop: 0
        }}
        iconElementRight={
          <div style={{ alignItems: "bottom" }}>
            <Badge
              badgeContent={4}
              primary={true}
              badgeStyle={{
                top: 5,
                right: 5,
                width: 18,
                height: 18,
                zIndex: 1
              }}
              style={{ padding: 0 }}
            >
              <IconButton tooltip="Notificaciones">
                <Notifications />
              </IconButton>
            </Badge>
            <IconButton tooltip="Favoritos">
              <Favorite />
            </IconButton>
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              targetOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
            >
              <MenuItem primaryText="Configuración" />
              <MenuItem primaryText="Preguntas Frecuentes" />
              <MenuItem primaryText="Salir" />
            </IconMenu>
          </div>
        }
        titleStyle={styles.title}
        title={<img src={logo} className="App-logo" alt="logo" />}
      />
    );
  }
}

export default Header;
