import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const styles = {
  title: {
    cursor: "pointer"
  },
  span: {
    fontSize: 12,
    position: "relative",
    top: 8
  }
};

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="container nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            0<span style={styles.span}>2</span>
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
