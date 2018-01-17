import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import FlatButton from "material-ui/FlatButton";

const styles = {
  title: {
    cursor: "pointer"
  }
};

const Header = () => (
  <AppBar
    title={
      <span style={styles.title}>
        0<span style={{ fontSize: 14, position: "relative", top: 5 }}>2</span>{" "}
        Email
      </span>
    }
    iconElementRight={<FlatButton label="Login With Google" />}
  />
);

export default Header;
