import React from "react";
import reactstrap from 'reactstrap'

export default class VenmooTitle extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <div className="navbar">
        <h1 className="title">
          Venmoo
        </h1>
    </div>
    );
  }
}
