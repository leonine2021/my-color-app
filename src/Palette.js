import React, { Component } from "react";
import ColorBox from "./ColorBox";

export default class PALETTE extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => {
      return (
        <ColorBox background={color.color} name={color.name} key={color.name} />
      );
    });
    return (
      <div className="Palette">
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
