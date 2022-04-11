import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";

export default class PALETTE extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map((color) => {
      return (
        <ColorBox background={color.hex} name={color.name} key={color.name} />
      );
    });
    return (
      <div className="Palette">
        {/* navbar goes here */}
        <div className="slider">
          <Slider
            number={500}
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>

        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
