import React from "react";
import { SvgXml } from "react-native-svg";
import fireworks from "./fireworkssvg";

/* 
interface Props {
    color: string;
}
*/

export class Fireworks extends React.Component {
  render() {
    return (
      <SvgXml
        xml={fireworks}
        width="100%"
        height="100%"
        fill={this.props.color}
      />
    );
  }
}
